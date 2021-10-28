import React, { useState, useEffect } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

const Base = ({ fontSize, depth }) => {
  const [size, setSize] = useState(1);
  const [display, setDisplay] = useState("none");

  return (
    <>
      {depth < 2 ? (
        <div className="base-container">
          <div className="button-wrapper">
            <BaseButton fontSize={fontSize} display={display} depth={depth} />
            <BaseButton fontSize={fontSize} display={display} depth={depth} />
          </div>
          <BaseInput
            fontSize={fontSize}
            size={size}
            setSize={(v) => setSize(v)}
            setDisplay={(v) => setDisplay(v)}
          />
          <div className="button-wrapper">
            <BaseButton fontSize={fontSize} display={display} depth={depth} />
            <BaseButton fontSize={fontSize} display={display} depth={depth} />
          </div>
        </div>
      ) : (
        <div className="base-container">
          <BaseInput
            fontSize={fontSize}
            size={size}
            setSize={(v) => setSize(v)}
            setDisplay={(v) => setDisplay(v)}
          />
        </div>
      )}
    </>
  );
};

export default Base;
