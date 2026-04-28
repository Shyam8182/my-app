import React from "react";

const content = {
  Home: { title: "Welcome Home", text: "This is the home page of my application." },
  About: { title: "About Us", text: "This is the about page." },
  Contact: { title: "Contact Us", text: "This is the contact page." },
  Blog: { title: "Our Blog", text: "This is the blog page." },
};

export default function Body({ activeTab }) {
  const { title, text } = content[activeTab] || {};
  return (
    <main
      className="flex-grow-1 d-flex align-items-center justify-content-center"
      style={{ background: "linear-gradient(160deg, #f0f4ff, #e8f5e9)" }}
    >
      <div className="text-center p-5">
        <h2 className="fw-bold mb-3" style={{ color: "#1a1a2e" }}>{title}</h2>
        <p className="fs-5" style={{ color: "#4a5568" }}>{text}</p>
      </div>
    </main>
  );
}
