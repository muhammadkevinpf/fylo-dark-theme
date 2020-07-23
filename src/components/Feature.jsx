import React from "react";
import { Row, Col } from "antd";
import IconAnywhere from "../assets/images/icon-access-anywhere.svg";
import IconSecurity from "../assets/images/icon-security.svg";
import IconCollaboration from "../assets/images/icon-collaboration.svg";
import IconFile from "../assets/images/icon-any-file.svg";

const featureData = [
  {
    images: IconAnywhere,
    heading: "Access your files, anywhere",
    body:
      "The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.",
  },
  {
    images: IconSecurity,
    heading: "Security you can trust",
    body:
      "2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.",
  },
  {
    images: IconCollaboration,
    heading: "Real-time collaboration",
    body:
      "Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.",
  },
  {
    images: IconFile,
    heading: "Store any type of file",
    body:
      "Wheter you're sharing holidays photos of work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

function Feature() {
  return (
    <div className="feature-section">
      <Row gutter={24} justify="center">
        {featureData.map((item, index) => (
          <Col xs={24} sm={10} md={10} xl={10}>
            <img src={item.images} alt="feature" />
            <h3>{item.heading}</h3>
            <p>{item.body}</p>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Feature;
