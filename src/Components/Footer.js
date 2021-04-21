import React, { Component } from "react";
import "./Footer.css";
import { FaTwitter, FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="row-1">
          <ul>
            <li>
              <a href="/#">Home</a>
            </li>
            <li>
              <a href="/#">About</a>
            </li>
            <li>
              <a href="/#">Service</a>
            </li>
            <li>
              <a href="/#">Blog</a>
            </li>
            <li>
              <a href="/#">Contact</a>
            </li>
          </ul>
        </div>
        <p>
          Designed by <span className="name">Tugay TÜRK</span>
        </p>
        <div className="row-3">
       <a href="https://www.facebook.com/"> <FaFacebook className="footer-icons" /> </a>  
         <a href="https://twitter.com/"> <FaTwitter className="footer-icons" /> </a>
         <a href="https://instagram.com/">   <FaInstagram className="footer-icons" /> </a>
         <a href="https://linkedin.com/">  <FaLinkedin className="footer-icons" /> </a>
        </div>
      </div>
    );
  }
}
