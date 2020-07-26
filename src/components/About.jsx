import React from "react";
import AboutImage from "../assets/images/illustration-stay-productive.png";
import IconArrow from "../assets/images/icon-arrow.svg";
import { Button } from "antd";
function About() {
  return (
    <div className="about-section">
      <div className="about-wrapper">
        <div id="about-illustration-wrapper">
          <img src={AboutImage} alt="stay productive" id="about-illustration" />
        </div>

        <div id="about-text-wrapper">
          <h2>Stay productive, wherever you are</h2>
          <p>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <Button type="link">
            See how Fylo works &nbsp;
            <img src={IconArrow} alt="arrow" />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default About;
