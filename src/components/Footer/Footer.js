import React from "react";
import "./Footer.css";
import { infoEnglish, socialUrls } from "../Info";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h2>{infoEnglish.fullName}</h2>
        <p>Based in Your City</p>
      </div>
      <div className="footer-contact">
        <h3>Contact me</h3>
        <p>And let's get down to work</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By {infoEnglish.fullName}</div>
        <div className="sns-links">
          <a href={socialUrls.linkedin} target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href={socialUrls.twitter} target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href={socialUrls.github} target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;