import { AuthProvider, useAuth } from './auth/AuthProvider';
import AuthStack from './stacks/AuthStack';
import UnAuthStack from './stacks/UnAuthStack';
import './App.css';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const RouterSwitch: React.FC = () => {
    const { user, loading } = useAuth();
  
    if (loading) return <div>Checking auth...</div>;
  
    return <>{user ? <AuthStack /> : <UnAuthStack />}</>;
  };

  const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
  
  return (
    <div className="app">
        <AuthProvider>
          <ScrollToTop />
          <RouterSwitch />
        </AuthProvider>
    </div>
  );
}

export default App;
