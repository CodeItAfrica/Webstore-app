// src/components/WhyBuySection.tsx
import React, { useEffect, useState } from "react";
import "../styles/why-buy.css";

const WhyBuySection: React.FC = () => {
  const [scale, setScale] = useState(1);
  const [isLaptop, setIsLaptop] = useState<boolean>(
    typeof window !== "undefined" ? window.innerWidth >= 1024 : true
  );

  // Keep desktop scroll/scale behavior and detect resize
  useEffect(() => {
    const onResize = () => setIsLaptop(window.innerWidth >= 1024);
    window.addEventListener("resize", onResize);

    if (!isLaptop) {
      setScale(1);
      return () => window.removeEventListener("resize", onResize);
    }

    const start = 75;
    const end = 84;
    const minScale = 1;
    const maxScale = 2.199;
    const range = end - start;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) {
        setScale(maxScale);
        return;
      }

      const scrollPercent = (scrollY / maxScroll) * 100;
      if (scrollPercent < start) {
        setScale(maxScale);
        return;
      }
      if (scrollPercent >= end) {
        setScale(minScale);
        return;
      }

      const progress = (scrollPercent - start) / range;
      const newScale = maxScale - progress * (maxScale - minScale);
      setScale(Math.max(minScale, Math.min(maxScale, newScale)));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [isLaptop]);

  const cards = [
    { id: "warranty", title: "1 YEAR WARRANTY, ONLY REPLACE NO REPAIR", img: "/1year.png" },
    { id: "points", title: "BUY TO GET ORAIMO EXPLORER POINTS", img: "/coins.png" },
    { id: "customer", title: "ACCESSIBLE CUSTOMER SERVICE", img: "/icon-cs-women-d-7.webp" },
    { id: "auth", title: "ORAIMO AUTHENTICITY & BEST PRICE GUARANTEED", img: "/Authenticity.png" },
    { id: "oclub", title: "ESHOP EXCLUSIVE COMMUNITY EVENTS — SCAN TO JOIN O-CLUB NG", img: "/icon-oclub.png" },
    { id: "shipping", title: "FREE SHIPPING OVER ₦30000 in Lagos — DOOR TO DOOR DELIVERY", img: "/icon-free.png" },
    { id: "outlets", title: "NATIONWIDE OFFLINE AFTER-SALES OUTLETS", img: "/icoon-calcare.png" },
  ];

  // --- MOBILE-ONLY RETURN: uses only mobile-* classNames (no laptop classes) ---
  if (!isLaptop) {
    return (
      <section className="mobile-why-buy">
        <div className="mobile-container">
          <h2 className="mobile-title">WHY BUY FROM ORAIMO</h2>

          <div className="mobile-list">
            {cards.map((c) => (
              <article key={c.id} className="mobile-card">
                <div className="mobile-card-media">
                  <img src={c.img} alt={c.title} className="mobile-card-img" />
                </div>

                <div className="mobile-card-body">
                  <h3 className="mobile-card-title">{c.title}</h3>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }

  // --- DESKTOP RETURN: original classes + scale logic retained ---
  const showOtherCards = scale <= 1;

  return (
    <section className="why-buy">
      <div className="why-buy-container">
        <h2 className="why-buy-title">WHY BUY FROM ORAIMO</h2>

        <div className="grid-container">
          <div
            className="why-buy-grid"
            style={
              !showOtherCards
                ? { display: "flex", flexDirection: "column", paddingTop: "0px" }
                : {}
            }
          >
            <div className={`why-buy-card ${showOtherCards ? "" : "hidden"}`}>
              <h3 className="card-title">1 YEAR WARRANTY, ONLY REPLACE NO REPAIR</h3>
              <div><img src="/1year.png" alt="" /></div>
            </div>

            <div
              className="why-buy-card centered-card"
              style={{
                transform: showOtherCards
                  ? "translateY(0) scale(1)"
                  : `translateY(100%) scaleY(${scale + 0.3}) scaleX(${scale})`,
                position: showOtherCards ? "static" : "sticky",
                height: "43vh",
              }}
            ></div>

            <div className={`why-buy-card ${showOtherCards ? "" : "hidden"}`}>
              <h3 className="card-title">BUY TO GET ORAIMO EXPLORER POINTS</h3>
              <div><img src="/coins.png" alt="" /></div>
            </div>

            <div className={`why-buy-card span-two-rows ${showOtherCards ? "" : "hidden"}`}>
              <h3 className="card-title">ACCESSIBLE CUSTOMER SERVICE</h3>
              <div><img src="/icon-cs-women-d-7.webp" alt="" /></div>
            </div>

            <div className={`benefit-card ${showOtherCards ? "" : "hidden"}`} data-id="1">
              <h3>ORAIMO AUTHENTICITY <br />& BEST PRICE GUARANTEED</h3>
              <div><img src="/Authenticity.png" alt="" /></div>
            </div>

            <div className={`benefit-card span-two-columns ${showOtherCards ? "" : "hidden"}`} data-id="2">
              <h3>ESHOP EXCLUSIVE COMMUNITY EVENTS, SCAN TO JOIN O-CLUB NG NOW!</h3>
              <div><img src="/icon-oclub.png" alt="" /></div>
            </div>

            <div className={`benefit-card span-two-columns ${showOtherCards ? "" : "hidden"}`} data-id="3">
              <h3>FREE SHIPPING OVER ₦30000 in Lagos <br /> DOOR TO DOOR DELIVERY</h3>
              <div><img src="icon-free.png" alt="" /></div>
            </div>

            <div className={`benefit-card ${showOtherCards ? "" : "hidden"}`} data-id="4">
              <h3>NATIONWIDE OFFLINE AFTER-SALES OUTLETS</h3>
              <div><img src="icoon-calcare.png" alt="" /></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuySection;
