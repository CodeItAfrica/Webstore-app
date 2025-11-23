import Header from '../components/Header';
import PromoBar from '../components/PromoBar';
import HeroSection from '../components/HeroSection';
import FeatureBar from '../components/FeatureBar';
import FlashSale from '../components/FlashSale';
import BrandGallery from '../components/BrandGallery';
import BestSellers from '../components/BestSellers';
import NewArrivals from '../components/NewArrivals';
import WhyBuySection from '../components/WhyBuySection';
import Footer from '../components/Footer';

export default function HeroPage() {
  return (
    <div>      
    <PromoBar />
    <Header />
    <HeroSection />
    <FeatureBar />
    <FlashSale />
    <BrandGallery />
    <BestSellers />
    <NewArrivals />
    <WhyBuySection />
    <Footer />
</div>
  )
}
