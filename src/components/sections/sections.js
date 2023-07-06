import React from "react";
import Books from "../../images/Books.jpg";
import Traveling from "../../images/Traveling.jpg";
import Gaming from "../../images/Gaming.jpg";
import Header from "../header/header";
import ImageSvg from "../../images/right-arrow-svgrepo-com.svg";
import { Link } from "react-router-dom";
import "../../styles/sections.css";
function Sections() {
  return (
    <div>
      <Header />
      <div className="container mt_countainer">
        <div className="row pt-40">
          <div className="col-sm-12">
            <div className="card">
              <div className="overlay"> </div>
              <div className="text d-flex">
                <div className="text-center">
                  <h3 className="text-white">
                    AI <br />
                    Reading Suggestor
                  </h3>
                  <div className="link_section">
                    <Link to="/BookRecommendationAI" className="link">
                      Learn More
                      <img src={ImageSvg} alt="reading" className="svg_image" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image_section">
                <img src={Books} className="card-img-top" alt="books" />
              </div>
            </div>
          </div>
        </div>
        <div className="row row_tow">
          <div className="col-sm-6">
            <div className="card">
              <div className="overlay"> </div>
              <div className="text d-flex">
                <div className="text-center">
                  <h3 className="text-white">
                    AI <br />
                    Travel Planning
                  </h3>
                  <div className="link_section">
                    <Link to="/TravelingPlannerAI" className="link">
                      Learn More
                      <img src={ImageSvg} alt="planner" className="svg_image" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image_section">
                <img src={Traveling} className="card-img-top" alt="traveling" />
              </div>
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card">
              <div className="overlay"> </div>
              <div className="text d-flex">
                <div className="text-center">
                  <h3 className="text-white">
                    AI
                    <br />
                    Gaming Suggestor
                  </h3>
                  <div className="link_section">
                    <Link to="/GamingSuggestorAI" className="link">
                      Learn More
                      <img
                        src={ImageSvg}
                        alt="gaming indicator"
                        className="svg_image"
                      />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="image_section">
                <img src={Gaming} className="card-img-top" alt="gaming" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sections;
