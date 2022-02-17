import React from "react";
import "./Text.css";
export default function Test({names, values, click}) {
  return (
    <div className="product__box">
      {" "}
      {names &&
        names.map((result, id) => {
          return (
            <button
              onClick={() => click(result, id)}
              disabled={values && values.includes(id)}
              className={`product__button ${
                values && values.includes(id)
                  ? "product__text--white"
                  : "product__text--black"
              }`}
              key={id}
            >
              {result}
            </button>
          );
        })}{" "}
    </div>
  );
}
