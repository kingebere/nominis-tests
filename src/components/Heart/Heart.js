import React from "react";
import "./Heart.css";
import filled from "../../assets/images/heart-filled.png";
import empty from "../../assets/images/heart-empty.png";

export default function Heart() {
  return (
    <div className="navbar__middle">
      <div>
        <img src={empty} alt="empty heart" className="heart-icons" />
        <img src={filled} alt="filled heart" className="heart-icons" />
        <img src={filled} alt="filled heart" className="heart-icons" />
        <img src={filled} alt="filled heart" className="heart-icons" />
        <img src={filled} alt="filled heart" className="heart-icons" />
      </div>{" "}
      <div>
        <div className="navbar--avatar"> </div>{" "}
      </div>{" "}
    </div>
  );
}
