import React from "react";
import "../App.css";

const tabs = ["Home", "About", "Contact", "Blog"];

export default function Header({ activeTab, setActiveTab }) {
  return (
    <header style={{ background: "linear-gradient(135deg, #1a1a2e, #16213e)" }} className="py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <span className="text-white fw-bold fs-4">MyApp</span>
        <nav className="d-flex gap-3">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`nav-btn ${activeTab === tab ? "nav-btn-active" : ""}`}
            >
              {tab === "About" ? "About Us" : tab === "Contact" ? "Contact Us" : tab}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
}
