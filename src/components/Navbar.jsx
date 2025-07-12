import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  // <nav className="navbar">
  //   <div className="logo">🛍️ ShoeStore</div>
  //   <div className="nav-links">
  //     <a href="#">Home</a>
  //     <a href="#">Products</a>
  //     <a href="#">Categories</a>
  //     <a href="#">Contact</a>
  //   </div>
  // </nav>
  const [menuOpen, setMenuOpen] = useState(false);
  // const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div className="navbar">
      <div className="logo">🛍️ ShoeStore</div>
      <div className={`nav-links ${menuOpen ? "active" : ""}`}></div>

      <div
        className="menu-toggle"
        onClick={() => {
          document.querySelector(".nav-links").classList.toggle("active");
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className="nav-links">
        <a href="#">Home</a>
        <a href="#">Menu</a>
        <a href="#">Cart</a>
        <a href="#">Contact</a>
      </div>
    </div>
  );
};

export default Navbar;
