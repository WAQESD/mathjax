import "./App.css";
import Example from "./Component/Example";
import Base from "./Component/Base";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Base fontSize={80} depth={0}></Base>
      </div>
    </div>
  );
}

export default App;
