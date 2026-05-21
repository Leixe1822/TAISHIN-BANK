import { Phone, FileText, Search, ShieldCheck } from 'lucide-react'
import logo from './images/logo.png'
import heroLogo from './images/kv-logo.png'
import heroVisual from './images/kv-logo-2.png'

import './App.css'

function App() {
  return (
    <div className="tsBank_Wrapper">
      {/* Header */}
      <header className="header__inner">
        <div className="header__navbar">
          <a href="/" className="header__logo">
            <h1>
              <img src={logo} className="header__logo-img" alt="台新銀行" />
              <span>線上申貸平台</span>
            </h1>
          </a>
          <nav className="header__nav">
            <ul className="header__nav-list">
              <li className="header__nav-item">
                <button className="header__nav-btn">線上服務</button>
              </li>
              <li className="header__nav-item">
                <button className="header__nav-btn">信貸產品</button>
              </li>
              <li className="header__nav-item">
                <button className="header__nav-btn">其他服務</button>
              </li>
              <li className="header__nav-item">
                <button className="header__nav-btn contact-btn">
                  <Phone className="contact-icon" size={15} />
                  與我聯繫
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      {/* Main */}
      <main>
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
      </main>
      {/* Footer */}
      <footer></footer>
    </div>
  )
}

export default App
