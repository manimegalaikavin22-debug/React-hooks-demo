import "./App.css";
import { useState, useEffect, useMemo, useCallback } from "react";

import {
  FaUserEdit,
  FaBolt,
  FaCalculator,
  FaCodeBranch,
} from "react-icons/fa";

function App() {
  // ================= useState =================
  const [name, setName] = useState("");
  const [submit, setSubmit] = useState(false);

  // ================= useEffect (Page Load) =================
  useEffect(() => {
    alert(
      "👋 Welcome to the React Hooks Dashboard!\n\nExplore useState, useEffect, useMemo and useCallback."
    );

    console.log("====================================");
    console.log("React Hooks Dashboard Loaded");
    console.log("useEffect executed on component mount.");
    console.log("====================================");
  }, []);

  // ================= useEffect (Submit) =================
  useEffect(() => {
    if (submit && name !== "") {
      alert(`🎉 Hello ${name}!\nHappy Coding with React Hooks 🚀`);

      console.log("====================================");
      console.log("User Submitted :", name);
      console.log("useEffect executed after state update.");
      console.log("====================================");

      setSubmit(false);
    }
  }, [submit, name]);

  // ================= useMemo =================
  const [number, setNumber] = useState(0);

  const result = useMemo(() => {
    console.log("useMemo recalculated");
    return number * 5;
  }, [number]);

  // ================= useCallback =================
  const showWelcome = useCallback(() => {
    alert("😄 Welcome Buddy!");
    console.log("Welcome Button Clicked");
  }, []);

  const showMessage = useCallback(() => {
    alert("🚀 Keep Learning React!");
    console.log("Message Button Clicked");
  }, []);

  return (
    <div className="App">

      <h1 className="title">React Hooks Dashboard</h1>

      <p className="subtitle">
        Interactive Demonstration of React Hooks
      </p>

      <div className="container">

        {/* useState */}

        <div className="card">

          <div className="icon green">
            <FaUserEdit />
          </div>

          <h2>useState</h2>

          <p className="description">
            Manages and updates component state.
          </p>

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
            <h4>Current State</h4>
            <p>{name || "Student"}</p>
          </div>

        </div>

        {/* useEffect */}

        <div className="card">

          <div className="icon yellow">
            <FaBolt />
          </div>

          <h2>useEffect</h2>

          <p className="description">
            Executes side effects after rendering.
          </p>

          <div className="effectBox">

            ✔ Automatically runs when the page loads.

            <br /><br />

            ✔ Displays an alert after submitting.

            <br /><br />

            ✔ Logs messages to the console.

          </div>

          <div className="status">
            Effect Ready ✔
          </div>

        </div>

        {/* useMemo */}

        <div className="card">

          <div className="icon blue">
            <FaCalculator />
          </div>

          <h2>useMemo</h2>

          <p className="description">
            Caches calculated values for better performance.
          </p>

          <div className="number">
            {number}
          </div>

          <button
            onClick={() => setNumber(number + 1)}
          >
            Increment
          </button>

          <div className="result">
            <h4>Computed Value</h4>
            <p>{result}</p>
          </div>

        </div>

        {/* useCallback */}

        <div className="card">

          <div className="icon purple">
            <FaCodeBranch />
          </div>

          <h2>useCallback</h2>

          <p className="description">
            Memoizes callback functions to improve rendering performance.
          </p>

          <button onClick={showWelcome}>
            Welcome Button
          </button>

          <button onClick={showMessage}>
            Motivation Button
          </button>
<div className="callbackText">
  Click any button to execute the callback function.
</div>

        </div>

      </div>

      <footer className="footer">
        Built with React.js | React Hooks Demonstration
      </footer>

    </div>
  );
}

export default App;