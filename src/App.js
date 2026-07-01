import "./App.css";
import { useState, useEffect, useMemo, useCallback } from "react";

function App() {
  // useState
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  // useEffect
 useEffect(() => {
  if (submit && name !== "") {

    alert("Welcome " + name);

    console.log("Welcome " + name);

    setSubmit(false);
  }
}, [submit, name]);

  // useMemo
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    return number * 5;
  }, [number]);

  // useCallback
  const showWelcome = useCallback(() => {
    alert("Welcome Dude!");
  }, []);

  const showMessage = useCallback(() => {
    alert("Magic activated! Welcome to the app!");
  }, []);

  return (
    <div className="App">

      <h1 className="title">⚛ React Hooks Dashboard</h1>
      <p className="subtitle">
        useState, useEffect, useMemo and useCallback
      </p>

      <div className="container">

        {/* useState */}
        <div className="card">
          <div className="icon">🟢</div>

          <h2>useState</h2>

          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <button onClick={() => setSubmit(true)}>
            Submit
          </button>

          <div className="result">
            Welcome <strong>{name || "Student"}</strong>
          </div>
        </div>

        {/* useEffect */}
        <div className="card">
          <div className="icon">🟡</div>

          <h2>useEffect</h2>

          <div className="effectBox">
            useEffect displays the <strong>Welcome Alert</strong> using
            the value stored in <strong>useState</strong>.
          </div>

          <div className="status">
            ✔ Alert : Welcome {name || "Student"}
          </div>
        </div>

        {/* useMemo */}
        <div className="card">
          <div className="icon">🔵</div>

          <h2>useMemo</h2>

          <div className="number">{number}</div>

          <button onClick={() => setNumber(number + 1)}>
            Increment
          </button>

          <div className="result">
            Multiply by 5 : <strong>{result}</strong>
          </div>
        </div>

        {/* useCallback */}
        <div className="card">
          <div className="icon">🟣</div>

          <h2>useCallback</h2>

          <button onClick={showWelcome}>
            Welcome Button
          </button>

          <button onClick={showMessage}>
            Message Button
          </button>

          <div className="callbackText">
            Click any button to execute the memoized callback function.
          </div>
        </div>

      </div>

    </div>
  );
}

export default App;