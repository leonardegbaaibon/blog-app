import React from "react";
import "./App.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-div">
      <div className="main-nav">
        <div className="navbar">The Leonard Blog</div>
        <div className="link-div">
          <a href="/" className="home-link">Home</a>
          <a href="/create" className="blog-link">My blog</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
