import React from "react";
import Logo from "../assets/images/logo.svg";
function Navbar() {
  return (
    <div className="navbar">
      <img src={Logo} alt="Fylo" id="logo" />
      <ul className="nav-wrapper">
        <li className="nav-link">Features</li>
        <li className="nav-link">Team</li>
        <li className="nav-link">Sign In</li>
      </ul>
    </div>
  );
}

export default Navbar;
