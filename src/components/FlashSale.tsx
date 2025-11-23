import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import "../styles/flash-sale.css";

type TLeft = { days: number; hours: number; minutes: number; seconds: number };

export default function FlashSale() {
  const [timeLeft, setTimeLeft] = useState<TLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // compute endTime once (on mount) -> 24 hours from now
    const endTime = new Date(Date.now() + 24 * 60 * 60 * 1000);

    const update = () => {
      const now = new Date();
      const diff = endTime.getTime() - now.getTime();

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return true; // indicate finished
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
      return false;
    };

    // initial update so UI does not wait 1s
    if (update()) {
      // already finished
      return;
    }

    const timerId = window.setInterval(() => {
      const finished = update();
      if (finished) {
        clearInterval(timerId);
      }
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  const pad = (n: number, size = 2) => String(n).padStart(size, "0");

  const daysStr = pad(timeLeft.days);
  const hoursStr = pad(timeLeft.hours);
  const minutesStr = pad(timeLeft.minutes);
  const secondsStr = pad(timeLeft.seconds);

  const flashSaleProducts = [
    {
      id: 1,
      name: 'Watch Muse 1.32" AMOLED IP67',
      price: 53900,
      originalPrice: 69900,
      rating: 4.9,
      reviews: 120,
      image: '/oraimo-watch-muse-gold.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 2,
      name: 'Watch Nova V 2.01" HD Video',
      price: 35900,
      originalPrice: 71900,
      rating: 4.8,
      reviews: 4368,
      image: '/oraimo-watch-nova-black.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 3,
      name: 'Smart Shaver 2 Magnet 3D Dry',
      price: 9900,
      originalPrice: 26300,
      rating: 4.8,
      reviews: 3778,
      image: '/oraimo-smart-shaver.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 4,
      name: 'Watch Nova N 2.04" AMOLED',
      price: 33900,
      originalPrice: 69900,
      rating: 4.6,
      reviews: 156,
      image: '/oraimo-watch-nova-green.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 5,
      name: 'Watch Muse 1.32" AMOLED IP67',
      price: 53900,
      originalPrice: 69900,
      rating: 4.9,
      reviews: 120,
      image: '/oraimo-watch-muse-gold.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 6,
      name: 'Watch Nova V 2.01" HD Video',
      price: 35900,
      originalPrice: 71900,
      rating: 4.8,
      reviews: 4368,
      image: '/oraimo-watch-nova-black.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 7,
      name: 'Smart Shaver 2 Magnet 3D Dry',
      price: 9900,
      originalPrice: 26300,
      rating: 4.8,
      reviews: 3778,
      image: '/oraimo-smart-shaver.jpg',
      badge: 'Flash Sale'
    },
    {
      id: 8,
      name: 'Watch Nova N 2.04" AMOLED',
      price: 33900,
      originalPrice: 69900,
      rating: 4.6,
      reviews: 156,
      image: '/oraimo-watch-nova-green.jpg',
      badge: 'Flash Sale'
    }
  ];


  return (
    <section className="flash-sale">
      <div className="flash-sale-container">
        <div className="flash-sale-header">
          <h2>Flash Sale</h2>
          <div className="countdown">
            <span className="end-label">End In</span>
            <div className="timer" role="timer" aria-live="polite">
              <div className="time-box days">{daysStr}</div>
              <span className="unit">D</span>

              <div className="time-box">{hoursStr[0]}</div>
              <div className="time-box">{hoursStr[1]}</div>
              <span className="sep">:</span>

              <div className="time-box">{minutesStr[0]}</div>
              <div className="time-box">{minutesStr[1]}</div>
              <span className="sep">:</span>

              <div className="time-box">{secondsStr[0]}</div>
              <div className="time-box">{secondsStr[1]}</div>
            </div>
          </div>
        </div>

        <div className="products-grid">
          {flashSaleProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}
