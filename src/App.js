import "./App.css";
import Example from "./Component/Example";
import Base from "./Component/Base";
import React, { useState } from "react";

function App() {
  const [text, setText] = useState("");
  return (
    <div className="App">
      <div className="container">
        <Base fontSize={80} depth={0} setText={setText}></Base>
        <Example text={text}></Example>
      </div>
    </div>
  );
}

export default App;
