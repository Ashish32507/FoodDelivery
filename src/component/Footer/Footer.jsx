import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Cupiditate, soluta eaque magnam fugit dicta eius provident
            doloremque ratione ipsum deserunt quasi itaque, commodi nam mollitia
            et voluptates hic ea, pariatur sapiente dignissimos! Sequi aperiam
          </p>
          <div className="footer-social-icon">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-right">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-mid">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91-20003-5040</li>
            <li>contact@yourshop.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 @ Yourshop.com - All Right Reserved
      </p>
    </div>
  );
}

export default Footer;
