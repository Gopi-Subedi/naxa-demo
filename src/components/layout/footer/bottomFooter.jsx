import React from "react";
import "./bottomFooter.scss";
import Logo from "../../../resource/images/logo.png";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export default function BottomFooter() {
  return (
    <div className="btmFooter-container container">
      <div className="row btm-content">
        <div className="col-md-5 colOne">
          <div className="btm-logo">
            <img src={Logo} alt="" className="actual-btm" />
          </div>
          <div className="btm-company">Naxa Pvt Ltd.</div>
          <div className="btm-address">
            Do Cha Marg, Maharajgunj-3, Kathmandu, Nepal
          </div>
          <div className="btm-phn">14416543</div>
          <div className="btm-email">info@naxa.com.np</div>
        </div>
        <div className="col-md-2 offset-md-1 colTwo">
          <div className="service">Services</div>
          <div className="service">Portfolio</div>
        </div>
        <div className="col-md-2 offset-md-1 colThree">
          <div className="company-title">Company</div>
          <div className="company">About us</div>
          <div className="company">Work with us</div>
          <div className="company-title">Contact</div>
        </div>
      </div>
      <div className="last-row ">
        <div className="btm-icons">
          <FaFacebookF size={15} className="btm-icon" />
          <FaLinkedinIn size={15} className="btm-icon" />
          <FaTwitter size={15} className="btm-icon" />
          <FaInstagram size={15} className="btm-icon" />
        </div>
        <div className="copyRight">© Naxa 2020. All Rights Reserved.</div>
      </div>
    </div>
  );
}
