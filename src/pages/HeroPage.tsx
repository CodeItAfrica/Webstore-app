import HeroSection from '../components/HeroSection';
import FeatureBar from '../components/FeatureBar';
import FlashSale from '../components/FlashSale';
import BrandGallery from '../components/BrandGallery';
import BestSellers from '../components/BestSellers';
import NewArrivals from '../components/NewArrivals';
import WhyBuySection from '../components/WhyBuySection';
import FollowUs from '../components/FollowUs';

export default function HeroPage() {
  return (
    <div>      
    <HeroSection />
    <FeatureBar />
    <FlashSale />
    <BrandGallery />
    <BestSellers />
    <NewArrivals />
    <WhyBuySection />
    <FollowUs />
</div>
  )
}
