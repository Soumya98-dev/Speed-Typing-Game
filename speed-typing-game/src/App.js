import "./App.css";
import React from "react";
import useTimer from "./useTimer";

function App() {
  const [
    content,
    count,
    timeRemaining,
    timer,
    startTimer,
    handleChange,
    setRef,
    noOfSec,
    handleNoOfSec,
  ] = useTimer();

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        rows="10"
        cols="54"
        value={content.textarea}
        name="textarea"
        onChange={handleChange}
        disabled={!timer}
        ref={setRef}
      />
      <br />
      <label htmlFor="noOfSec">Enter Time to Write: </label>
      <input
        id="noOfSec"
        type="number"
        placeholder="Enter number of seconds"
        value={noOfSec}
        name="noOfSec"
        onChange={handleNoOfSec}
      />
      <h4>Time remaining: {noOfSec}</h4>
      <button onClick={startTimer} disabled={timer}>
        Start
      </button>
      <h1>Word Count: {count}</h1>
    </div>
  );
}

export default App;
