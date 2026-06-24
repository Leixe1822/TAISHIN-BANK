import { Megaphone } from "lucide-react";
import { useState } from "react";
import "./ProductTabs.css";

const products = [
  {
    id: "normal",
    title: "一般信貸",
    tag: "#新舊戶皆可貸",
    amount: "NT$15萬~500萬",
    button: "立即申請",
    stats: [
      { number: "3", unit: "分鐘", text: "線上申請" },
      { number: "500", unit: "萬", text: "最高可貸金額" },
      { number: "24", unit: "小時", text: "線上服務" },
    ],
    steps: ["試算額度", "線上申請", "審核", "資金入袋"],
  },
  {
    id: "tloan",
    title: "手t貸",
    tag: "#優選限定",
    amount: "NT$15萬~300萬",
    button: "瞭解更多",
    stats: [
      { number: "1", unit: "分鐘", text: "身分驗證" },
      { number: "2", unit: "分鐘", text: "快速申請" },
      { number: "3", unit: "分鐘", text: "資金入帳" },
    ],
    steps: ["身分驗證", "線上申請", "資金帶著走"],
  },
  {
    id: "salary",
    title: "薪轉專案",
    tag: "#手續費超優惠",
    amount: "NT$15萬~300萬",
    button: "瞭解更多",
    stats: [
      { number: "1", unit: "小時", text: "申請到審核結果" },
      { number: "30", unit: "分鐘", text: "立即完成撥款" },
      { number: "24", unit: "小時", text: "線上服務" },
    ],
    steps: ["身分驗證", "線上申請", "資金到手"],
  },
  {
    id: "point",
    title: "點點貸",
    tag: "#小額貸款免綁約",
    amount: "NT$1萬~15萬",
    button: "瞭解更多",
    stats: [
      { number: "1", unit: "秒鐘", text: "速算月付金" },
      { number: "2", unit: "分鐘", text: "線上申貸" },
      { number: "30", unit: "分鐘", text: "立即完成撥款" },
    ],
    steps: ["身分驗證", "線上申請", "備用金隨手可得"],
  },
];

export default function ProductTabs() {
  const [activeId, setActiveId] = useState("normal");

  const activeProduct = products.find((item) => item.id === activeId);

  return (
    <section className="loan-section">
      <div className="loan-bg-text">Service</div>

      <div className="loan-title">
        <h2>信貸產品</h2>
        <p>快來看看你適合哪種方案</p>
      </div>

      <div className="loan-tabs">
        {products.map((product) => (
          <button
            key={product.id}
            className={`loan-tab ${activeId === product.id ? "active" : ""}`}
            onClick={() => setActiveId(product.id)}
          >
            <strong>{product.title}</strong>
            <span>{product.tag}</span>
          </button>
        ))}
      </div>

      <div className="loan-panel">
        <div className="loan-info">
          <h3>{activeProduct.title}</h3>
          <p>額度</p>
          <p>{activeProduct.amount}</p>
          <button className="loan-cta">{activeProduct.button}</button>
        </div>

        <div className="loan-stats">
          {activeProduct.stats.map((stat) => (
            <div className="loan-stat" key={`${stat.number}-${stat.text}`}>
              <b>{stat.number}</b>
              <span>{stat.unit}</span>
              <p>{stat.text}</p>
            </div>
          ))}
        </div>

        <div className="loan-steps">
          {activeProduct.steps.map((step, index) => (
            <div className="loan-step" key={step}>
              <b>{index + 1}</b>
              <strong>{step}</strong>
            </div>
          ))}
        </div>
      </div>
      <button className="floating-news">
        <Megaphone />
        最新活動
      </button>
    </section>
  );
}