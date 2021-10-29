import React from "react";

const BaseInput = ({ fontSize, size, setSize, setDisplay }) => {
  return (
    <input
      className="base-input"
      style={{ width: `${size}ch`, fontSize: `${fontSize}pt` }}
      onChange={(e) =>
        setSize(e.target.value.length <= 1 ? 1 : e.target.value.length)
      }
    />
  );
};

export default BaseInput;
