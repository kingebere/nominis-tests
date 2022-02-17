import React from "react";
import "./App.css";

/*-------------------- Components-----------------------------------*/
import Navbar from "./containers/Navbar/Navbar";
import GameZone from "./containers/GameZone/GameZone";

function App() {
  return (
    <div className="hero">
      <div className="hero__background">
        <div className="hero__container">
          <Navbar />
          <GameZone />{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}

export default App;
