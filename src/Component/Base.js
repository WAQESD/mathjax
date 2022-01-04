import React, { useState, useEffect, useRef } from "react";
import BaseInput from "./BaseInput";
import BaseButton from "./BaseButton";

const Base = ({ fontSize, depth, setText, setClick }) => {
  const [size, setSize] = useState(1);
  const [activeArr, setActiveArr] = useState([0, 0, 0, 0]);
  const [buttonStyle, setButtonStyle] = useState({
    left: { display: "", opacity: "0%" },
    right: { display: "", opacity: "0%" },
  });
  const baseInput = useRef();

  const focusInput = () => {
    baseInput.current.focus();
  };

  const onMouseEnter = () => {
    setButtonStyle({
      left: { display: "", opacity: "" },
      right: { display: "", opacity: "" },
    });
  };

  const setButtonDisplay = () => {
    let newButtonStyle = {
      left: { display: "", opacity: "0%" },
      right: { display: "", opacity: "0%" },
    };
    newButtonStyle.left.display = activeArr[0] || activeArr[1] ? "" : "none";
    newButtonStyle.right.display = activeArr[2] || activeArr[3] ? "" : "none";
    setButtonStyle(newButtonStyle);
  };

  useEffect(() => {
    setButtonDisplay();
  }, [activeArr]);

  const buttonProps = {
    fontSize,
    depth,
    setText,
    focusInput,
    activeArr,
    setActiveArr,
  };

  const inputProps = {
    fontSize,
    size,
    depth,
    setSize,
    buttonProps,
    setClick,
    activeArr,
    baseInput,
    onMouseEnter,
  };

  return (
    <>
      {depth < 2 ? (
        <div className="base-container" onMouseLeave={() => setButtonDisplay()}>
          <div className="button-wrapper-left">
            <BaseButton
              {...buttonProps}
              pos={0}
              buttonStyle={buttonStyle.left}
            />
            <BaseButton
              {...buttonProps}
              pos={1}
              buttonStyle={buttonStyle.left}
            />
          </div>
          <BaseInput {...inputProps} />
          <div className="button-wrapper-right">
            <BaseButton
              {...buttonProps}
              pos={2}
              buttonStyle={buttonStyle.right}
            />
            <BaseButton
              {...buttonProps}
              pos={3}
              buttonStyle={buttonStyle.right}
            />
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
