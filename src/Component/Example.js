import React, { useState, useEffect } from "react";
import { MathComponent } from "mathjax-react";

const Example = () => {
  const [text, setText] = useState("");
  const makeComponentArray = (textarea) => {
    return textarea
      .split("\n")
      .map((text, idx) => <MathComponent tex={text} key={idx}></MathComponent>);
  };

  return (
    <div className="container">
      <textarea
        className="input"
        onChange={(e) => {
          setText(e.target.value);
        }}
      ></textarea>
      <div>{makeComponentArray(text)}</div>
    </div>
  );
};

export default Example;
