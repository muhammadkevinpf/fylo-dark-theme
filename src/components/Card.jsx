import React from "react";
import { Avatar } from "antd";
function Card({ header, body, image, personName, personTitle, inputText }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
      <div className="card-footer">
        {inputText !== undefined && (
          <React.Fragment>
            <input type="text" placeholder="email@example.com" />
            <button>Get Started For Free</button>
          </React.Fragment>
        )}
        <div
          className="card-footer-avatar"
          style={{ display: image === undefined && "none" }}
        >
          <Avatar src={image} />
        </div>
        <div
          className="card-footer-text"
          style={{ display: personName === undefined && "none" }}
        >
          <p>{personName}</p>
          <small>{personTitle}</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
