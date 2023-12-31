import React, { useState } from "react";
import GitImage from "../../images/spinner.gif";
import "../../styles/sections.css";
// import Section1 from '../../images/section1.webp'
import TripAdvisor from "../../images/TripAdvisor.png";
import Booking from "../../images/Booking.jpg";
import Kayak from "../../images/Kayak.png";
import { API } from "../../utils/api";

function TravelingPlannerAI() {
  // State for user input
  const [userInput, setUserInput] = useState("");

  // State for loading spinner visibility
  const [loading, setLoading] = useState(false);

  // State for generated description
  const [description, setDescription] = useState("");

  // State for displaying gradual text
  const [displayedDescription, setDisplayedDescription] = useState("");

  // State for button disabled status
  const [buttonDisabled, setButtonDisabled] = useState(false);

  // Function to handle button click event
  const generateDescription = () => {
    // Disable the button
    setButtonDisabled(true);

    // Show loading spinner
    setLoading(true);

    API(userInput, "generate-Travel-Plan")
      .then((res) => {
        // Hide loading spinner
        setLoading(false);

        // Set the generated description
        setDescription(res.description);

        // Display description gradually
        displayGradually(res.description);
      })
      .catch((error) => {
        // Hide loading spinner
        setLoading(false);

        // Display error message
        setDescription("Error: " + error);
      });
  };

  // Function to display description gradually
  const displayGradually = (text) => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedDescription(text.slice(0, index));
      index++;

      if (index > text.length) {
        clearInterval(interval);
        // Enable the button after the text is displayed
        setButtonDisabled(false);
      }
    }, 30);
  };

  return (
    <div className="overflow-hidden">
      <div className="center-align">
        <div className="col-sm-12 text-center">
          <h3 className="">Traveling AI Planner</h3>
        </div>
        <div className="input-wrapper">
          <div className="d-flex w-100 text_box">
            <input
              type="text"
              id="book-input"
              placeholder="Enter your travel keywords"
              value={userInput}
              onChange={(event) => setUserInput(event.target.value)}
            />
            <button
              id="generate-btn"
              className=""
              onClick={generateDescription}
              disabled={buttonDisabled}
            >
              {loading ? "Loading..." : "Generate"}
            </button>
          </div>
        </div>
        {loading && (
          <div id="loading-spinner">
            <img src={GitImage} alt="Loading" width="50" height="50" />
            <p>Loading...</p>
          </div>
        )}

        <div id="result">
          <p>{displayedDescription}</p>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          <div className="col-sm-12 text-center">
            <div className="">
              <h3 className="">Relevant Websites</h3>
            </div>
          </div>
        </div>
        <div className="row row_tow mt-4">
          <div className="col-sm-4">
            <div className="card card_book">
              <div className="overlay"> </div>
              <div className="text d-flex">
                <div className="text-center">
                  <h3 className="text-white">
                    <a
                      href="http://www.tripadvisor.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links"
                    >
                      TripAdvisor
                    </a>
                  </h3>
                </div>
              </div>
              <div className="image_section">
                <img
                  src={TripAdvisor}
                  className="card-img-top"
                  alt="TripAdvisor logo"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card card_book">
              <div className="overlay"> </div>
              <div className="text d-flex">
                <div className="text-center">
                  <h3 className="text-white">
                    <a
                      href="http://www.booking.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links"
                    >
                      Booking
                    </a>
                  </h3>
                </div>
              </div>
              <div className="image_section">
                <img
                  src={Booking}
                  className="card-img-top"
                  alt="Booking site logo"
                />
              </div>
            </div>
          </div>
          <div className="col-sm-4">
            <div className="card card_book">
              <div className="overlay"> </div>
              <div className="text d-flex">
                <div className="text-center">
                  <h3 className="text-white">
                    <a
                      href="http://www.kayak.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links"
                    >
                      Kayak
                    </a>
                  </h3>
                </div>
              </div>
              <div className="image_section">
                <img src={Kayak} className="card-img-top" alt="Kayak" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TravelingPlannerAI;
