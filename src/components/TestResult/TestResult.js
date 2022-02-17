import React from "react";
import "./TestResult.css";
export default function TestResult({input}) {
  return (
    <>
      <div className="hero-input-box">
        <div className="hero-input-content">
          {" "}
          {input &&
            input.map((text, idx) => {
              return (
                <div className="hero-input" title="text" key={idx}>
                  {" "}
                  {text}{" "}
                </div>
              );
            })}{" "}
        </div>{" "}
      </div>
    </>
  );
}
