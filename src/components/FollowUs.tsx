import React, { useState } from 'react'
import '../styles/follow-us.css'

interface Post {
  id: number
  title: string
  emoji: string
  description: string
}

const FollowUs: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const posts: Post[] = [
    { id: 1, title: '360-Degree Sound', emoji: '🎧', description: 'SpaceBuds Pro' },
    { id: 2, title: '24 Days of Use', emoji: '⌚', description: 'Watch Nova AM' },
    { id: 3, title: 'Catch Every Heated Action', emoji: '🍗', description: 'Watch your loved cook in real time' },
    { id: 4, title: 'Meet The Whole Day\'s Water Drinking Needs', emoji: '💧', description: 'SmartBottle Byte' }
  ]


  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % posts.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + posts.length) % posts.length)
  }

  

  return (
    <section className="community-section">
      <div className="community-container">
        <div className="community-header">
          <h2 className="community-title">@oraimoclub</h2>
          <button className="follow-btn">Follow us</button>
        </div>

        <div className="community-description">
          <p>Are you an <strong>explorer</strong> at heart, always seeking new experiences? Join us at <strong>oraimo</strong> as we embark on exciting journeys together. Share your incredible moments with oraimo by posting your photos on Instagram using the hashtag <strong>#oraimoclub</strong> and tagging <strong>@oraimoclub</strong>. By doing so, you stand a chance to receive a special gift from us. Let's <strong>Keep Exploring</strong> and creating memories with <strong>oraimo</strong>! #oraimo #ExploreWithoraimo</p>
        </div>

        <div className="community-carousel">
          <button className="carousel-control prev" onClick={prevSlide}>‹</button>

          <div className="posts-container">
            {posts.map((post, index) => (
              <div
                key={post.id}
                className={`post-item ${index === currentSlide ? 'active' : ''}`}
              >
                <div className="post-content">
                  <span className="post-emoji">{post.emoji}</span>
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-description">{post.description}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="carousel-control next" onClick={nextSlide}>›</button>
        </div>

        <div className="carousel-dots">
          {posts.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>

        <div className="social-links">
          <h3 className="social-title">FOLLOW US</h3>
          <div className="social-icons">
            <a href="#" className="social-icon">📷</a>
            <a href="#" className="social-icon">👥</a>
            <a href="#" className="social-icon">▶️</a>
            <a href="#" className="social-icon">𝕏</a>
            <a href="#" className="social-icon">♫</a>
          </div>
        </div>

      </div>
    </section>
  )
}

export default FollowUs
