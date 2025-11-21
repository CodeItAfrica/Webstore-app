import React, { useState } from "react";
import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";
import '../styles/brand-gallery.css';

const MAX_VISIBILITY = 3;

const BrandCard = ({ title, videoLink }: { title: string; videoLink: string }) => (
  <div className="bg-card">
    <div className="video-window">
      <iframe 
        className="carousel-3d-iframe" 
        width="100%" 
        height="432" 
        src={videoLink} 
        title={title}
        frameBorder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerPolicy="strict-origin-when-cross-origin" 
        allowFullScreen
      />    
    </div>
    <div className="title">
      <h2>{title}</h2>
    </div>
  </div>
);

const BrandGallery = () => {
  const cards = [
    { title: "Product Showcase", videoLink: "https://www.youtube.com/embed/DdHuucBmGcU" },
    { title: "Launch Highlights", videoLink: "https://www.youtube.com/embed/jNQXAC9IVRw" },
    { title: "Feature Breakdown", videoLink: "https://www.youtube.com/embed/DdHuucBmGcU" },
    { title: "Behind the Design", videoLink: "https://www.youtube.com/embed/oUFJJNQGwhk" },
    { title: "Performance Demo", videoLink: "https://www.youtube.com/embed/aqz-KE-bpKQ" }
  ];

  const [active, setActive] = useState(2);

  const handlePrev = () => {
    setActive((i) => (i - 1 + cards.length) % cards.length);
  };

  const handleNext = () => {
    setActive((i) => (i + 1) % cards.length);
  };

  return (<>
      <section className="brand-gallery">
      <div className="brand-gallery-container">
    <div className="brand-gallery-header">
<h2>
  Brand Gallery
  </h2>  
  </div>

    <div className="carousel">
      <button className="nav left" style={active == 0 ? {color:"black", transition:"0.5s ease-in"}:{color:"white"}} onClick={handlePrev}>
        <TiChevronLeftOutline />
      </button>

      {cards.map((card, i) => (
        <div
          key={i}
          className="card-container"
          style={
            {
              "--active": i === active ? 1 : 0,
              "--offset": (active - i) / 3,
              "--direction": Math.sign(active - i),
              "--abs-offset": Math.abs(active - i) / 3,
              pointerEvents: active === i ? "auto" : "none",
              opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
              display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block"
            } as React.CSSProperties
          }
        >
          <BrandCard title={card.title} videoLink={card.videoLink} />
        </div>
      ))}

      <button className="nav right" style={active == cards.length-1 ? {color:"black", transition:"0.5s ease-in"}:{color:"white"}} onClick={handleNext}>
        <TiChevronRightOutline />
      </button>
    </div>
      </div>
      <div className="wrap-container">
    <div style={{ backgroundImage: 'url("/fleximg1.webp")' }}>
     <h2>Audio</h2>
     </div>
     <div style={{ backgroundImage: 'url("/fleximg2.webp")' }}>
     <h2>Power</h2>
     </div>
     <div style={{ backgroundImage: 'url("/fleximg3.webp")' }}>
     <h2>Smart & Office</h2>
     </div>
     <div style={{ backgroundImage: 'url("/fleximg4.webp")' }}>
     <h2>Personal Care</h2>
     </div>
     <div style={{ backgroundImage: 'url("/fleximg5.webp")' }}>
     <h2>Home Appliances</h2>
     </div>

    </div>
      </section>
    </>
  );
};

export default BrandGallery;