import Header from './components/Header';
import PromoBar from './components/PromoBar';
import HeroSection from './components/HeroSection';
import FeatureBar from './components/FeatureBar';
import FlashSale from './components/FlashSale';
import BrandGallery from './components/BrandGallery';
import WhyBuySection from './components/WhyBuySection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <PromoBar />
      <Header />
      <HeroSection />
      <FeatureBar />
      <FlashSale />
      <BrandGallery />
      <WhyBuySection />
      <Footer />
    </div>
  );
}

export default App;
