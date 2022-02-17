import React, {useEffect} from "react";

export default function Alert({target, showResult, fail}) {
  useEffect(() => {
    const timeout = setTimeout(() => {
      showResult();
    }, 3000);
    return () => clearTimeout(timeout);
  }, [showResult]);

  return (
    <>
      {target && (
        <div className="product__button product__text--black">Correct</div>
      )}
      {fail && (
        <div className="product__button product__text--black">Failed</div>
      )}
    </>
  );
}
