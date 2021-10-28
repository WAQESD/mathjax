import React from "react";
import Base from "./Base";

const BaseButton = ({ fontSize, display, depth }) => {
  return (
    <button
      style={{ fontSize: `${fontSize / 2}pt`, display }}
      className="add-button"
      onClick={(e) => {
        console.log(e);
        let base = React.createElement("Base", {
          fontSize: fontSize / 2,
          depth: depth + 1,
        });
        e.target = base;
      }}
    >
      +
    </button>
  );
};

export default BaseButton;
