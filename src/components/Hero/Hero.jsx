import { FileText, Search, ShieldCheck } from 'lucide-react'
import heroLogo from '../images/kv-logo.png'
import heroVisual from '../images/kv-logo-2.png'


function Hero() {
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

          <img className="hero__visual" src={heroVisual} alt="信貸服務插圖" />
        </section>
    )
}

export default Hero;