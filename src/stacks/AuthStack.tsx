import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from '../auth/ProtectedRoute';
import DefaultLayout from '../components/Layout/DefaultLayout';

const DashboardLayout = lazy(() => import('../components/Layout/DashboardLayout'));
const AccountPage = lazy(() => import('../pages/AccountPage'));
const OrdersPage = lazy(() => import('../pages/OrdersPage'));
const ChangePasswordPage = lazy(() => import('../pages/ChangePasswordPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const CartPage = lazy(() => import('../pages/CartPage'));

const AuthStack: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route element={<DefaultLayout />}>
            <Route path="/dashboard" element={<DashboardLayout />}>
              <Route index element={<Navigate to="account" replace />} />
              <Route path="account" element={<AccountPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="change-password" element={<ChangePasswordPage />} />
              <Route path="*" element={<div>Page under construction</div>} />
            </Route>
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Route>
        </Route>
        {/* if someone tries an unknown route while authenticated */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />
      </Routes>
    </Suspense>
  );
};

export default AuthStack;
