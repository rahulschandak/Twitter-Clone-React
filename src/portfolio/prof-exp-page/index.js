import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

const ProfExpScreen = () => {
  return (
    <div className="container">
      <h1 className="prof-heading wd-typewriter-label">
        Professional Experience
      </h1>
      <div className="image-info-container wd-margin-0">
        <div className="image-info-pair wd-background5 wd-margin-1">
          <div className="wd-padding-right">
            <img
              className="wd-width-image"
              src="/images/TCS.png"
              alt="TCS"
            />
          </div>
          <div className="info-container">
            <h3>Tata Consultancy Services Pvt. Ltd.</h3>
            Assistant System Engineer - Full Stack Developer <br />
            September 2020 - July 2022
          </div>
        </div>
        <div className="image-info-pair wd-background5 wd-margin-2">
          <div className="info-container wd-padding-right">
            <h3>CampK12 Academy</h3>
            Technical Assistant Intern<br />
            July 2018 - September 2018
          </div>
          <div>
            <img
              className="wd-width-image"
              src="/images/CK12.png"
              alt="CK12"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfExpScreen;
