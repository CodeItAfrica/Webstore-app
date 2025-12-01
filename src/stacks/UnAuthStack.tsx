import React, { Suspense, lazy } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import DefaultLayout from '../components/Layout/DefaultLayout';

const SignUpPage = lazy(() => import('../pages/SignUpPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const TermsPage = lazy(() => import('../pages/TermsPage'));
const PrivacyPage = lazy(() => import('../pages/PrivacyPage'));
const CartPage = lazy(() => import('../pages/CartPage'));
const HeroPage = lazy(() => import('../pages/HeroPage'));


const UnAuthStack: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index element={<HeroPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Suspense>
  );
};

export default UnAuthStack;
