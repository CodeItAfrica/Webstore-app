// src/api/axiosInstance.ts
import axios, { type AxiosError, type InternalAxiosRequestConfig } from 'axios';

let accessToken: string | null = null;
export const setAccessToken = (token: string | null) => {
  accessToken = token;
};

const api = axios.create({
  baseURL: '/api',
  withCredentials: true,
});

// helper: do not try to refresh for auth endpoints
const isAuthEndpoint = (url?: string) =>
  !!url && (url.includes('/auth/refresh') || url.includes('/auth/login') || url.includes('/auth/logout'));

// REQUEST interceptor — use InternalAxiosRequestConfig
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // ensure headers exists and has the internal headers type
  config.headers = config.headers ?? ({} as InternalAxiosRequestConfig['headers']);

  if (accessToken && !isAuthEndpoint(config.url)) {
    // mutate header safely; axios header typings are strict, so cast to any for mutation
    (config.headers as any).Authorization = `Bearer ${accessToken}`;
  }

  return config;
}, (err) => Promise.reject(err));

// Response interceptor: 401 -> single refresh flow with queue
let isRefreshing = false;
type QueueItem = {
  resolve: (value?: any) => void;
  reject: (error: any) => void;
  config: InternalAxiosRequestConfig;
};
let failedQueue: QueueItem[] = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach(({ resolve, reject, config }) => {
    if (error) {
      reject(error);
    } else {
      // attach new token then retry
      config.headers = config.headers ?? ({} as InternalAxiosRequestConfig['headers']);
      if (token) (config.headers as any).Authorization = `Bearer ${token}`;
      resolve(api(config));
    }
  });
  failedQueue = [];
};

api.interceptors.response.use(
  (res) => res,
  async (error: AxiosError) => {
    const originalRequest = error.config as InternalAxiosRequestConfig & { _retry?: boolean };

    // if no response or it's not 401, just reject
    if (!error.response || error.response.status !== 401) {
      return Promise.reject(error);
    }

    // if the original request is an auth endpoint, do not attempt refresh
    if (isAuthEndpoint(originalRequest.url)) {
      return Promise.reject(error);
    }

    // already retried? avoid infinite loop
    if (originalRequest._retry) {
      return Promise.reject(error);
    }

    if (isRefreshing) {
      // queue the request and return a Promise that resolves when refresh finishes
      return new Promise((resolve, reject) => {
        failedQueue.push({ resolve, reject, config: originalRequest });
      });
    }

    originalRequest._retry = true;
    isRefreshing = true;

    try {
      // call refresh endpoint (server reads httpOnly cookie)
      const refreshResp = await api.post('/auth/refresh');
      const newAccessToken = (refreshResp.data as any)?.accessToken ?? null;
      setAccessToken(newAccessToken);

      processQueue(null, newAccessToken);

      // retry the original request with updated header
      originalRequest.headers = originalRequest.headers ?? ({} as InternalAxiosRequestConfig['headers']);
      if (newAccessToken) (originalRequest.headers as any).Authorization = `Bearer ${newAccessToken}`;

      return api(originalRequest);
    } catch (err) {
      processQueue(err, null);
      return Promise.reject(err);
    } finally {
      isRefreshing = false;
    }
  }
);

export default api;
