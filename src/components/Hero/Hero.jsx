import { useEffect, useState } from 'react';
import { FileText, Search, ShieldCheck } from 'lucide-react'
import heroLogo from '../../images/kv-logo.png'
import heroVisual from '../../images/kv-logo-2.png'
import './Hero.css'

function Hero() {

  const heroSlider = [
    {
      id: 1,
      image: heroVisual,
      alt: '信貸服務插圖',
    },
    {
      id: 2,
      image: heroVisual,
      alt: '信貸服務插圖',
    },
    {
      id: 3,
      image: heroVisual,
      alt: '信貸服務插圖',
    }
  ];
  const [carouselIndex, setCarouselIndex] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prevIndex) =>
        prevIndex === heroSlider.length - 1 ? 0 : prevIndex + 1
      )
    }, 3000)

    return () => clearInterval(timer)
  }, [heroSlider.length])

  return (
    <section className="hero">
      <img className="hero__logo" src={heroLogo} alt="台新信貸" />

      <div className="hero__card">
        <p>為你的夢想前進</p>

        <button className="hero__button-primary">立即申請</button>
        <button className="hero__button-secondary">一分鐘試算</button>

        <div className="hero__quick-actions">
          <a href="/">
            <FileText className="quick-action-icon" size={15} />
            我要補件
          </a>
          <a href="/">
            <Search className="quick-action-icon" size={15} />
            我要查詢
          </a>
          <a href="/">
            <ShieldCheck className="quick-action-icon" size={15} />
            我要對保
          </a>
        </div>
      </div>

      <div className="hero__visual">
        <div
          className="hero__slider-track"
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
        >
          {heroSlider.map((slide) => (
            <div className="hero__slide" key={slide.id}>
              <img
                className="hero__slide-img"
                src={slide.image}
                alt={slide.alt}
              />
            </div>
          ))}
        </div>
      </div>

      <div className="hero__dots">
        {heroSlider.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={
              index === carouselIndex
                ? 'hero__dot hero__dot--active'
                : 'hero__dot'
            }
            onClick={() => setCarouselIndex(index)}
            aria-label={`切換到第 ${index + 1} 張`}
          />
        ))}
      </div>
    </section>
  )
}

export default Hero;