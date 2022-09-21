import React, { useEffect, useState } from "react";
import "./portfolio.scss";
import { HiOutlineArrowCircleUp } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { getProjectList } from "../../redux/action";

export default function Portfolio() {
  const dispatch = useDispatch();
  const result = useSelector((state) => (state ? state : []));
  console.log(result);
  const [showButton, setShowButton] = useState(false);
  const [loading, setLoading] = useState(true);

  const categories = [
    "Key Highlights",
    "Web GIS And Data Visualization",
    "Training & Capacity Building",
    "Surveying And GIS Mapping",
    "Disaster Risk Resilience",
    "Software & Application Development",
    "Innovation In Land Reform And Management",
    "Open Data Initiatives",
    "E-Governance",
    "Frontier Technologies",
  ];

  useEffect(() => {
    window.addEventListener("scroll", (e) => {
      if (window.pageYOffset > 300) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    });
  }, []);

  useEffect(() => {
    dispatch(getProjectList());
  }, []);

  useEffect(() => {
    if (Object.keys(result).length) {
      console.log(result);
      setLoading(false);
    }
  }, [Object.keys(result).length]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="portfolio-container ">
      <div className="portfolio-inner container">
        <div className="page-title">PORTFOLIO</div>
        <div className="page-quote text-center ">
          Diverse, Impactful, and Reliable.
        </div>
        <div className="portfolio-links row justify-content-center">
          {categories.map((category) => (
            <div
              key={Math.random()}
              className="col-md-2 col-sm-5 me-sm-1 me-md-4 mb-2 portLink "
            >
              {category}
            </div>
          ))}
        </div>
        {loading ? (
          <div className="spiner-container">
            <div class="d-flex justify-content-center spiner">
              <div class="spinner-grow text-warning me-3" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning me-3" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
              <div class="spinner-grow text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="projects row">
            {result.length &&
              result.map((item) => (
                <div className=" project-card" key={item.id}>
                  <div className="card-details">
                    <div className="card-title">{item.title}</div>
                    <div className="card-subTitle">{item.subtitle}</div>
                    <div className="row">
                      <div className="col client-detail">
                        <div className="card-subheader">Client</div>
                        <div className="client-subData">{item.clients}</div>
                      </div>
                      <div className="col time-detail">
                        <div className="card-subheader">Time Duration</div>
                        <div className="client-subData">
                          <div className="subData-start">
                            {item.start_date} -{" "}
                          </div>
                          <div className="subData-end">{item.end_date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="sample-img">
                    <img src={item.photo} className="actual-sample" />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
      {showButton && (
        <HiOutlineArrowCircleUp
          size={38}
          onClick={scrollToTop}
          className="back-to-top"
        />
      )}
    </div>
  );
}
