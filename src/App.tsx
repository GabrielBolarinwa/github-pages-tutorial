import { useState } from "react";
import "./App.css";
import Buttons from "./components/buttons";
import Number from "./components/number";

function App() {
  const [count, setCount] = useState(0);
  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }
  function resetCount() {
    setCount(0);
  }
  return (
    <div className="app">
      <Number count={count} />
      <Buttons
        increment={incrementCount}
        decrement={decrementCount}
        reset={resetCount}
      />
    </div>
  );
}

export default App;
