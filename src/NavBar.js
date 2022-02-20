import React from "react";
import { Link } from "react-router-dom";
import logo from "./logo.svg";

const NavBar = (props) => {
  return (
    <nav className="navbar">
      <img src={logo} alt="Logo" />
      <a href="/">Title Text</a>
      <div className="nav-links">
        <a href="/">Home</a>
        <a href="/signup">Sign Up</a>
        <a href="/login">Login</a>
      </div>
    </nav>
  );
};

export default NavBar;
