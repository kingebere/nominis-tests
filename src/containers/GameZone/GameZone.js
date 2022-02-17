/* eslint-disable react/prop-types */
import React, {useState, useEffect} from "react";
import "./GameZone.css";
import StaticText from "../../components/StaticText/StaticText";
import ResetButton from "../../components/ResetButton/ResetButton";
import Text from "../../components/Text/Text";
import TestResult from "../../components/TestResult/TestResult";
import Alert from "../../components/Alert/Alert";

export default function GameZone() {
  const [names] = useState(["teeth.", "brush", "my", "I"]);
  const [result] = useState(["I", "brush", "my", "teeth."]);
  const [input, setInput] = useState([]);
  const [values, setValues] = useState([]);
  const [target, setTarget] = useState(false);
  const [fail, setFail] = useState(false);
  const [transition, setTransition] = useState(false);

  useEffect(() => {
    if (input.length === result.length) {
      if (result.every((v, i) => v === input[i])) {
        setTarget(true);
      } else {
        setFail(true);
      }
    }
  }, [input, result]);

  const showResult = () => {
    setTarget(false);
    setFail(false);
  };

  const showTransition = () => {
    setTransition(false);
  };
  /**Onclick Function**/
  /**@param {Number} result id */
  /**@returns {array} input values */
  const click = (result, id) => {
    setInput(prev => {
      return [...prev, result];
    });

    setValues(prev => {
      return [...prev, id];
    });
  };

  /**Onclick Function**/
  /**@returns {array} input values */
  const reset = () => {
    setInput([]);
    setValues([]);
    setTransition(true);
  };
  return (
    <div className="hero-section">
      <div className="hero__container">
        <div className="hero-row">
          <StaticText />
          <div className="hero-column  hero-column-30 mr-130">
            <div className="hero-box2">
              <ResetButton
                reset={reset}
                transition={transition}
                showTransition={showTransition}
              />
              <TestResult input={input} />

              <Alert target={target} fail={fail} showResult={showResult} />
              <Text names={names} click={click} values={values} />
            </div>{" "}
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
