import React from "react";
import "./Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="logo">🛍️ ShoeStore</div>
    <div className="nav-links">
      <a href="#">Home</a>
      <a href="#">Products</a>
      <a href="#">Categories</a>
      <a href="#">Contact</a>
    </div>
  </nav>
);

export default Navbar;
