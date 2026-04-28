import React, { useState } from "react";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState("Home");

  return (
    <div className="d-flex flex-column min-vh-100">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <Body activeTab={activeTab} />
      <Footer />
    </div>
  );
}
