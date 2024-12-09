import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="count-app">
      <h1 className="count-disp">Current Count: {count}</h1>
      <div className="count-body">
        <button
          className="count-btn"
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>
        <button
          className="count-btn"
          onClick={() => setCount(count - 1)}
        >
          Decrement
        </button>
        <button
          className="count-btn"
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default App;

