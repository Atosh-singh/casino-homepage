import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="overlay">
        <h1>Welcome to Our Casino</h1>
        <p>Experience the best online games with incredible rewards!</p>
        <button className="cta-button">Join Now</button>
      </div>
    </header>
  );
};

export default Header;
