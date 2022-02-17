import React from "react";
import "./Navbar.css";
import Heart from "../../components/Heart/Heart";
import Speaker from "../../components/Speaker/Speaker";
import Logo from "../../components/Logo/Logo";

export default function Navbar() {
  return (
    <div className="navbar">
      <Logo />
      <Heart />
      <Speaker />
    </div>
  );
}
