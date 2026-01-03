import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);
  // let counter = 5;
  const addValue = () => {
    console.log("Hey", Math.random());
    setCounter(counter + 1);
  };

  const removeValue = () => {
    setCounter(counter - 1);
  };
  return (
    <>
      <h1>HEllo</h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>Remove value</button>
    </>
  );
}

export default App;
