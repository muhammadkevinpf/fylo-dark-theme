import React from "react";
import { Avatar } from "antd";
function Card({ body, image, personName, personTitle }) {
  return (
    <div className="card">
      <div className="card-body">
        <p>{body}</p>
      </div>
      <div className="card-footer">
        <div className="card-footer-avatar">
          <Avatar src={image} />
        </div>
        <div className="card-footer-text">
          <p>{personName}</p>
          <small>{personTitle}</small>
        </div>
      </div>
    </div>
  );
}

export default Card;
