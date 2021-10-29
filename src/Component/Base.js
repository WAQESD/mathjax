import React, { useState, useEffect } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

const Base = ({ fontSize, depth }) => {
  const [size, setSize] = useState(1);
  const [display, setDisplay] = useState("white");
  const [, forceUpdate] = useState();

  const buttonProps = { fontSize, display, depth };
  const inputProps = { fontSize, size, setSize, setDisplay };

  return (
    <>
      {depth < 2 ? (
        <div
          className="base-container"
          onFocus={(e) => setDisplay("black")}
          onBlur={(e) => setDisplay("white")}
        >
          <div className="button-wrapper">
            <BaseButton {...buttonProps} />
            <BaseButton {...buttonProps} />
          </div>
          <BaseInput {...inputProps} />
          <div className="button-wrapper">
            <BaseButton {...buttonProps} />
            <BaseButton {...buttonProps} />
          </div>
        </div>
      ) : (
        <div className="base-container">
          <BaseInput {...inputProps} />
        </div>
      )}
    </>
  );
};

export default Base;
