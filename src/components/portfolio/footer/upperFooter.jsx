import React from "react";
import "./upperFooter.scss";
import { useNavigate } from "react-router-dom";

export default function UpperFooter() {
  const navigate = useNavigate();

  return (
    <div className="upfooter-container  container">
      <div className="up-inner ">
        <div className="up-title  text-center">Seeking Collaboration?</div>
        <div className="up-desc text-center">
          We constantly look forward to exploring ideas, collaborations, and
          technical innovations. If you want to partner with us, we are just an
          email away.
        </div>
        <div className="btn-ltalk">
          <div
            onClick={() => navigate("/contact")}
            className="talk-btn  justify-content-center"
          >
            Let's Talk
          </div>
        </div>
      </div>
    </div>
  );
}
