import React, {useEffect} from "react";
import "./ResetButton.css";
import refresh from "../../assets/images/refresh.png";

export default function ResetButton({reset, transition, showTransition}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showTransition();
    }, 1000);
    return () => clearTimeout(timeout);
  }, [showTransition]);

  return (
    <div
      className="reset-box"
      onKeyDown={() => reset()}
      onClick={() => reset()}
      aria-hidden="true"
    >
      <img
        src={refresh}
        alt="refresh button"
        className={`refresh ${transition && "refresh-active"}`}
        title="refresh"
      />
    </div>
  );
}
