import React, { useEffect, useState } from "react";
import "../styles/why-buy.css";

const WhyBuySection: React.FC = () => {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const start = 75; // begin scaling at 85%
    const end = 84;   // finish scaling at 93%
    const minScale = 1;
    const maxScale = 2.2;
    const range = end - start;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;


      if (maxScroll <= 0) {
        setScale(maxScale);
        return;
      }

      const scrollPercent = (scrollY / maxScroll) * 100;
      console.log(scrollPercent);
      

      if (scrollPercent < start) {
        setScale(maxScale);
        return;
      }

      if (scrollPercent >= end) {
        setScale(minScale);
        return;
      }

      // between start and end
      const progress = (scrollPercent - start) / range; // 0 -> 1
      const newScale = maxScale - progress * (maxScale - minScale);
      const clamped = Math.max(minScale, Math.min(maxScale, newScale));
      setScale(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // set initial state if page loads scrolled down
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showOtherCards = scale <= 1;

  return (
    <section className="why-buy">
      <div className="why-buy-container">
        <h2 className="why-buy-title">WHY BUY FROM oraimo</h2>
<div className="grid-container">
        <div className="why-buy-grid" style={!showOtherCards ? { display: "flex", flexDirection: "column", paddingTop:"0px", } : {}}>

          <div className={`why-buy-card ${showOtherCards ? "" : "hidden"}`}>
            <h3 className="card-title">1 YEAR WARRANTY, ONLY REPLACE NO REPAIR</h3>
            <div><img src="/1year.png" alt="" /></div>
          </div>

          <div className="why-buy-card centered-card"
  style={{
    transform: showOtherCards
      ? "translateY(0) scale(1)"
      : `translateY(100%)  scaleY(${scale+0.3}) scaleX(${scale})`,
    position: showOtherCards ? "static" : "sticky",
height: showOtherCards ? "43vh" : "43vh"

  }}
>
</div>
          <div className={`why-buy-card ${showOtherCards ? "" : "hidden"}`}>
            <h3 className="card-title">BUY TO GET ORAIMO EXPLORER POINTS</h3>
            <div><img src="/coins.png" alt="" /></div>
          </div>

          <div className={`why-buy-card span-two-rows ${showOtherCards ? "" : "hidden"}`}>
            <h3 className="card-title">ACCESSIBLE CUSTOMER SERVICE</h3><div><img src="/icon-cs-women-d-7.webp" alt="" /></div>
          </div>

          <div className={`benefit-card ${showOtherCards ? "" : "hidden"}`}  data-id="1" ><h3>ORAIMO AUTHENTICITY <br />& BEST PRICE GUARANTEED</h3> <div><img src="/Authenticity.png" alt="" /></div></div>
          <div className={`benefit-card span-two-columns ${showOtherCards ? "" : "hidden"}`} data-id="2" ><h3>ESHOP EXCLUSIVE COMMUNITY EVENTS, SCAN TO JOIN O-CLUB NG NOW!</h3> <div><img src="/icon-oclub.png" alt="" /></div></div>
          <div className={`benefit-card  span-two-columns  ${showOtherCards ? "" : "hidden"}`} data-id="3" ><h3>FREE SHIPPING OVER ₦30000 in Lagos <br /> DOOR TO DOOR DELIVERY</h3> <div><img src="icon-free.png" alt="" /></div></div>
          <div className={`benefit-card ${showOtherCards ? "" : "hidden"}`}  data-id="4" ><h3>NATIONWIDE OFFLINE AFTER-SALES OUTLETS</h3><div><img src="icoon-calcare.png" alt="" /></div></div>
        </div>
        </div>
      </div>
    </section>
  );
};

export default WhyBuySection;