import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Nav from '../Header';
import PromoBar from '../PromoBar';
import Footer from "../Footer";

const DefaultLayout: React.FC = () => {
  const location = useLocation();

  const showPromoBar = location.pathname === '/';

  return (
    <div className="app-layout">
      {showPromoBar && <PromoBar />}
      <Nav />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default DefaultLayout;
