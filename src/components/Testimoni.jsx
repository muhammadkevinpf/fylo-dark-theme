import React from "react";
import { Row, Col } from "antd";
import Card from "./Card";
import SatishAvatar from "../assets/images/profile-1.jpg";
import BruceAvatar from "../assets/images/profile-2.jpg";
import IvaAvatar from "../assets/images/profile-3.jpg";
import IconQuote from "../assets/images/bg-quotes.png";
function Testimoni() {
  const cardData = [
    {
      avatar: SatishAvatar,
      body:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      personName: "Satish Patel",
      personTitle: "Founder & CEO, Huddle",
    },
    {
      avatar: BruceAvatar,
      body:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      personName: "Bruce McKenzie",
      personTitle: "Founder & CEO, Huddle",
    },
    {
      avatar: IvaAvatar,
      body:
        "Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.",
      personName: "Iva Boyd",
      personTitle: "Founder & CEO, Huddle",
    },
  ];

  return (
    <div className="testimoni-section">
      <img src={IconQuote} alt="quote" id="quote-icon" />
      <Row gutter={24} className="about-wrapper">
        {cardData.map((item, index) => (
          <Col xs={24} sm={24} md={8} xl={8} key={index}>
            <Card
              image={item.avatar}
              body={item.body}
              personName={item.personName}
              personTitle={item.personTitle}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default Testimoni;
