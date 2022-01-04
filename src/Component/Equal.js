import React from "react";
import Base from "./Base";

const Equal = ({ fontSize, depth }) => {
  const baseProps = { fontSize, depth };
  return (
    <div className="equal-wrapper">
      <Base {...baseProps}></Base>
      <div
        className="equal"
        style={{
          fontSize: `${fontSize}pt`,
          margin: `0px ${fontSize / 10}px`,
        }}
      >
        =
      </div>
      <Base {...baseProps}></Base>
    </div>
  );
};

export default Equal;
