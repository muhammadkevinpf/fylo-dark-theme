import React from "react";
import Card from "./Card";
function Contact() {
  return (
    <div className="contact-section">
      <div className="contact-wrapper">
        <Card
          header="Get early access today"
          body="It only takes a minute to sign and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you."
          inputText
        />
      </div>
    </div>
  );
}

export default Contact;
