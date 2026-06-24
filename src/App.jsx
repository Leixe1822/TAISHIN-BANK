import { Phone } from 'lucide-react'
import logo from './images/logo.png'

import './App.css'
import Hero from './components/Hero/Hero'
import ProductTabs from './components/ProductTabs/ProductTabs'

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
        <Hero />
        <ProductTabs />
      </main>
      {/* Footer */}
      <footer></footer>
    </div>
  )
}

export default App
