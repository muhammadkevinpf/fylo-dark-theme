import React from "react";
import IntroImage from "../assets/images/illustration-intro.png";
import { Button } from "antd";
function Welcome() {
  return (
    <div className="welcome-section">
      <div className="welcome-wrapper">
        <img src={IntroImage} alt="intro" />
        <div className="intro-text">
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p>
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
        </div>
        <Button shape="round" type="primary" size="large">
          Get Started
        </Button>
      </div>
    </div>
  );
}

export default Welcome;
