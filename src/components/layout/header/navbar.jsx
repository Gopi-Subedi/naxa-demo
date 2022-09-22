import React, { useEffect, useState } from "react";
import "./navbar.scss";
import Logo from "../../../resource/images/logo.png";
import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";

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
          <div className="col-md-2 col-sm-2 col-2 logo-container">
            <img src={Logo} alt="" className="actual-logo" />
          </div>
          <div
            className={
              viewWidth > 992
                ? "offset-md-1 col-md-6 navLinks d-flex"
                : "col-md-5 offse-md-1 col-sm-5 offset-sm-1  offset-1 col-4 text-center "
            }
          >
            {viewWidth > 992 ? (
              <>
                <div className="link deactive">Services</div>
                <NavLink activeClassName="active" to="/" className="link ">
                  Portfolio
                </NavLink>
                <div className="link deactive">Company</div>
                <div className="link deactive">Events & Media</div>
                <div className="link deactive">Blogs</div>
              </>
            ) : (
              <AiOutlineMenu size={22} className="nav-menuIcon" />
            )}
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
