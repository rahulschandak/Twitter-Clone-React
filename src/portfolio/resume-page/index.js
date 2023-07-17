import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import samplePDF from "./Resume_Rahul_Chandak.pdf";

const ResumeScreen = () => {
  const openPDFInNewTab = () => {
    window.open(samplePDF, "_blank");
  };

  return (
    <div className="container">
      <div>
        <h1 className="resume-heading">Resume</h1>
      </div>
      <button className="wd-button-properties" onClick={openPDFInNewTab}>DOWNLOAD &nbsp; RESUME</button>
      {/* <div className="resume-container">
        <embed
          src="/documents/Resume_Rahul_Chandak.pdf"
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div> */}
    </div>
  );
};

export default ResumeScreen;
