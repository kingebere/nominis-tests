import React from "react";
import "./Speaker.css";
import speaker from "../../assets/images/Speaker.png";
import mute from "../../assets/images/speaker-mute.png";
export default function Speaker() {
  return (
    <div className="navbar__right">
      <div className="speaker">
        <img
          src={speaker}
          alt="speaker-icon2"
          className="speaker-icon speaker-icon--1"
        />
        <img
          src={mute}
          alt="speaker-icon2"
          className="speaker-icon speaker-icon--2"
        />
      </div>{" "}
    </div>
  );
}
