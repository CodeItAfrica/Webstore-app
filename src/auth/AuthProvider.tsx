// auth/AuthProvider.tsx
import React, { createContext, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { User } from '../types/user';
import { AuthContextType } from '../types/auth';
import { useAppDispatch } from '../store/hooks';
import { setUser as setReduxUser, clearUser as clearReduxUser } from '../store/slices/authSlice';

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const dispatch = useAppDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  // Sync with Redux store on mount
  useEffect(() => {
    const mounted = true;
    const timer = setTimeout(() => {
      if (!mounted) return;
      
        //@ts-ignore


      // Set to null to simulate logged-out state
      const loggedInUser = null; 
      
      setUser(loggedInUser);
      setToken(loggedInUser ? 'fake-access-token' : null);
      setLoading(false);
      
      // Sync with Redux
      if (loggedInUser) {
        //@ts-ignore
        dispatch(setReduxUser({ user: loggedInUser, token: 'fake-access-token' }));
      } else {
        dispatch(clearReduxUser());
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [dispatch]);

//@ts-ignore
  const login = async (email: string, password: string) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        const names = ['David Agochukwu', 'Sarah Smith', 'Michael Johnson'];
        const randomName = names[Math.floor(Math.random() * names.length)] || 'David Agochukwu';
        
        const user = { id: '1', name: randomName, email };
        setUser(user);
        setToken('fake-access-token');
        dispatch(setReduxUser({ user, token: 'fake-access-token' }));
        resolve();
      }, 500);
    });
  };

  const logout = async () => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setUser(null);
        setToken(null);
        dispatch(clearReduxUser());
        resolve();
      }, 200);
    });
  };

  const getAccessToken = () => token;

  const value = useMemo(
    () => ({ user, loading, login, logout, getAccessToken }),
    [user, loading, token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};
