//@ts-nocheck
import { useState, useEffect, useRef } from "react";
import "../styles/hero-section.css";

export default function HeroSection() {
  const slides = [
    {
      id: 1,
      title: "Green Friday Flash Sale",
      subtitle: "3rd - 28th Nov",
      cta: "SAVE NOW",
      image: "/O-CLUB-1920-820.webp",
      featured: true,
    },
    {
      id: 2,
      title: "Latest Tech Arrivals",
      subtitle: "Discover what's new",
      cta: "Shop Now",
      image: "/oraimo-nigeria-2025-green-friday-3-1.webp",
    },
    {
      id: 3,
      title: "Premium Wearables",
      subtitle: "Stay connected always",
      cta: "Explore",
      image: "/oraimo-spacebox-pro-obs-682-banner-3.webp",
    },
  ];

  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const autoSlideTimer = useRef(null);

  const getSlideIndex = (position) => {
    return ((position % slides.length) + slides.length) % slides.length;
  };

  const resetAutoSlide = () => {
    if (autoSlideTimer.current) {
      clearInterval(autoSlideTimer.current);
    }
    autoSlideTimer.current = setInterval(() => {
      setOffset((prev) => prev + 1);
    }, 3000);
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
    const direction = Math.abs(diff) <= slides.length / 2 ? diff : diff - Math.sign(diff) * slides.length;
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

  // Render 3 slides: prev, current, next
  const visibleSlides = [-1, 0, 1].map((relativePos) => {
    const slideIndex = getSlideIndex(offset + relativePos);
    return {
      ...slides[slideIndex],
      position: relativePos,
      key: `${slideIndex}-${offset + relativePos}`,
    };
  });

  return (
    <section className="hero-section" data-aos="fade-in">
      <div className="hero-carousel" ref={containerRef}>
        {visibleSlides.map((slide) => (
          <div
            key={slide.key}
            className="carousel-slide"
            style={{
              transform: `translateX(${slide.position * 100}%)`,
            }}
          >
            <img src={slide.image} alt={slide.title} className="slide-image" draggable={false} />
          </div>
        ))}
        <div className="gradient-overlay" />
      </div>

      <button className="carousel-nav prev" onClick={prev}>
      <img src={"/left-arrow.png"} />
      </button>
      <button className="carousel-nav next" onClick={next}>
      <img src={"/right-arrow.png"} />
      </button>

      <div className="carousel-indicators">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`indicator ${i === getSlideIndex(offset) ? "active" : ""}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}
