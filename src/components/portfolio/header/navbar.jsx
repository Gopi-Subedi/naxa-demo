import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Logo from "../../../resource/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const [viewWidth, setViewWidth] = useState(window.innerWidth);

  useEffect(() => {
    console.log(viewWidth);
    window.addEventListener("resize", (e) => {
      setViewWidth(window.innerWidth);
    });
  }, [viewWidth]);

  return (
    <div className="navbar-container">
      <div className="top-container">
        <div className="top-text">
          We Have Been Working On Several Voluntary Initiatives During The
          COVID-19 Pandemic. Check Them Out
        </div>
      </div>
      <div className="nav-container container pt-2">
        <div className="row">
          <div className="col-md-2 logo-container">
            <img src={Logo} alt="" className="actual-logo" />
          </div>
          <div className="offset-md-1 col-md-6 navLinks d-flex">
            <div className="link deactive">Services</div>
            <NavLink activeClassName="active" to="/" className="link ">
              Portfolio
            </NavLink>
            <div className="link deactive">Company</div>
            <div className="link deactive">Events & Media</div>
            <div className="link deactive">Blogs</div>
          </div>

          <div
            onClick={() => navigate("/contact")}
            className="offset-md-1 col-md-2 lTalk"
          >
            Let's Talk
          </div>
        </div>
      </div>
    </div>
  );
}
