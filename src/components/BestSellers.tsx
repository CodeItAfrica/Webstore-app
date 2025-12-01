//@ts-nocheck
import { useState, useEffect, useRef } from "react";
import ProductCard from './ProductCard';
import '../styles/best-sellers.css';

export default function BestSellers() {
  const products = [
    { id: 1, name: "FreePods 4 Pro", price: 28500, originalPrice: 45000, rating: 4.8, reviews: 342, image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop", badge: "HOT" },
    { id: 2, name: "SmartWatch Elite X", price: 35000, originalPrice: 52000, rating: 4.7, reviews: 289, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop" },
    { id: 3, name: "PowerBank 27000mAh", price: 18500, originalPrice: 28000, rating: 4.9, reviews: 567, image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400&h=400&fit=crop", badge: "NEW" },
    { id: 4, name: "USB-C Cable 3-Pack", price: 4500, originalPrice: 8000, rating: 4.6, reviews: 891, image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=400&fit=crop" },
    { id: 5, name: "Wireless Charger Pro", price: 12000, originalPrice: 19000, rating: 4.8, reviews: 423, image: "https://images.unsplash.com/photo-1591290619762-c588f0f1a135?w=400&h=400&fit=crop" },
    { id: 6, name: "Bluetooth Speaker Max", price: 25000, originalPrice: 38000, rating: 4.7, reviews: 312, image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop", badge: "SALE" },
    { id: 7, name: "Gaming Earbuds RGB", price: 22000, originalPrice: 35000, rating: 4.9, reviews: 198, image: "https://images.unsplash.com/photo-1606400082777-ef05f3c5cde2?w=400&h=400&fit=crop" },
    { id: 8, name: "Smart Fitness Band", price: 15500, originalPrice: 24000, rating: 4.5, reviews: 678, image: "https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=400&h=400&fit=crop" },
    { id: 9, name: "HD Webcam 1080p", price: 28000, originalPrice: 42000, rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop" },
    { id: 10, name: "LED Desk Lamp Smart", price: 19500, originalPrice: 30000, rating: 4.6, reviews: 445, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", badge: "NEW" },
    { id: 11, name: "HD Webcam 1080p", price: 28000, originalPrice: 42000, rating: 4.8, reviews: 234, image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=400&fit=crop" },
    { id: 12, name: "LED Desk Lamp Smart", price: 19500, originalPrice: 30000, rating: 4.6, reviews: 445, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop", badge: "NEW" },
  ];

  const [offset, setOffset] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);
  const autoSlideTimer = useRef(null);

  // Handle responsive cards per view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setCardsPerView(1);
      } else if (window.innerWidth < 768) {
        setCardsPerView(2);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(3);
      } else {
        setCardsPerView(4);
      } 
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalSlides = Math.ceil(products.length / cardsPerView);

  const getSlideIndex = (position) => {
    return ((position % totalSlides) + totalSlides) % totalSlides;
  };

  const resetAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
    autoSlideTimer.current = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 4000);
  };

  const next = () => {
    setOffset((prev) => prev + 1);
    resetAutoSlide();
  };

  const prev = () => {
    setOffset((prev) => prev - 1);
    resetAutoSlide();
  };

  const goToSlide = (index) => {
    const currentIndex = getSlideIndex(offset);
    if (index === currentIndex) return;
    
    const diff = index - currentIndex;
    const direction = Math.abs(diff) <= totalSlides / 2 ? diff : diff - Math.sign(diff) * totalSlides;
    setOffset((prev) => prev + direction);
    resetAutoSlide();
  };

  useEffect(() => {
    resetAutoSlide();
    return () => {
      if (autoSlideTimer.current) {
        clearInterval(autoSlideTimer.current);
      }
    };
  }, []);

  // Render 3 groups: prev, current, next
  const visibleGroups = [-1, 0, 1].map((relativePos) => {
    const slideIndex = getSlideIndex(offset + relativePos);
    const startIdx = slideIndex * cardsPerView;
    const groupProducts = products.slice(startIdx, startIdx + cardsPerView);
    
    return {
      products: groupProducts,
      position: relativePos,
      key: `${slideIndex}-${offset + relativePos}`,
    };
  });

  return (
<section className="best-sellers-section">
  <div className="best-container">
    <div className="best-section-header" data-aos="fade-right">
      <h2 className="best-section-title">Best Seller</h2>
    </div>

    <div className="best-carousel-wrapper" data-aos="fade-up">
      <div className="best-products-carousel">
        {visibleGroups.map((group) => (
          <div
            key={group.key}
            className="best-carousel-group"
            style={{ transform: `translateX(${group.position * 100}%)` }}
          >
            <div className="best-products-grid">
              {group.products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ))}
      </div>

      <button className="best-carousel-nav-btn best-prev" onClick={prev}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <button className="best-carousel-nav-btn best-next" onClick={next}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className="best-carousel-indicators">
        {Array.from({ length: totalSlides }).map((_, i) => (
          <button
            key={i}
            className={`best-indicator ${i === getSlideIndex(offset) ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </div>
  </div>
  <div className="oraimo-awards" style={{ backgroundImage: 'url("/new-arrival-l.webp")' }} >
    </div>
</section>  );
}
