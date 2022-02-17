import React from "react";
import "./Logo.css";

import logo from "../../assets/images/Nominis-Logo.png";

export default function Logo() {
  return (
    <div className="navbar__left">
      <div className="navbar__text">
        <div className="navbar__text--h1"> Story time </div>{" "}
        <div className="navbar__text--h2"> Episode 1 </div>{" "}
      </div>{" "}
      <div className="navbar-logo">
        <img src={logo} alt="logo" className="Nominis-logo" />
      </div>
    </div>
  );
}
