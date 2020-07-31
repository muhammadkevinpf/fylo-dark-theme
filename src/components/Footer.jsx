import React from "react";
import Logo from "../assets/images/logo.svg";
import MobileFooter from "./Footer/MobileFooter";
import DesktopFooter from "./Footer/DesktopFooter";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <footer>
      <img src={Logo} alt="fylo footer logo" id="logo-footer" />
      <div className="footer-link-wrapper">
        <MobileFooter />
        <DesktopFooter />
        <div className="nav-link-wrapper">
          <ul>
            <li>About Us</li>
            <li>Jobs</li>
            <li>Press</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="nav-link-wrapper">
          <ul>
            <li>Contact Us</li>
            <li>Terms</li>
            <li>Privacy</li>
          </ul>
        </div>
        <div className="nav-link-button-wrapper">
          <button>
            <FaFacebookF />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaInstagram />
          </button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
