import React, { useState } from "react";
import GitImage from "../../images/spinner.gif";
import "../../styles/sections.css";
// import Section1 from '../../images/section1.webp'
import steam from "../../images/steam.jpg";
import ign from "../../images/IGN.webp";
import humblebundle from "../../images/HumbleBundle.jpg";
import { API } from "../../utils/api";

function GamingSuggestorAI() {
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

    API(userInput, "generate-game")
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
          <h3 className="">Gaming AI Suggestions</h3>
        </div>
        <div className="input-wrapper">
          <div className="d-flex w-100 text_box">
            <input
              type="text"
              id="book-input"
              placeholder="Enter your gaming-desired keywords"
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
                      href="https://store.steampowered.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links"
                    >
                      Steam
                    </a>
                  </h3>
                </div>
              </div>
              <div className="image_section">
                <img
                  src={steam}
                  className="card-img-top"
                  alt="steam store logo"
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
                      href="https://www.ign.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links"
                    >
                      IGN
                    </a>
                  </h3>
                </div>
              </div>
              <div className="image_section">
                <img src={ign} className="card-img-top" alt="IGN logo" />
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
                      href="https://www.humblebundle.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="links"
                    >
                      Humble Bundle
                    </a>
                  </h3>
                </div>
              </div>
              <div className="image_section">
                <img
                  src={humblebundle}
                  className="card-img-top"
                  alt="Humble Bundle logo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamingSuggestorAI;
