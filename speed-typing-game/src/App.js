import "./App.css";
import React from "react";

function App() {
  const [content, setContent] = React.useState({ textarea: "" });
  const [count, setCount] = React.useState(0);
  const [timeRemaining, setTimeRemaining] = React.useState(5);
  const [timer, setTimer] = React.useState(false);
  const [startBtn, setStartBtn] = React.useState(false);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent({ [name]: value });
  };

  const startTimer = () => {
    setTimer(true);
    setTimeRemaining(5);
    setCount(0);
    content.textarea = "";
  };

  const countWords = () => {
    // *** GETTING THE VALUE OF THE OBJECT AS A ARRAY
    const wordsArray = Object.values(content.textarea);
    // *** JOINING THE ARRAY TO STRING SO THAT WE CAN SPLIT IT TO GET A ARRAY IN WORDS & FILTERING THE EMPTY SPACES AFTER TYPING
    const words = wordsArray
      .join("")
      .split(" ")
      .filter((item) => item !== "");
    let counter = 0;
    // *** USING THE MAP TO COUNT THE WORDS
    words.map(() => counter++);
    setCount(counter);
  };

  React.useEffect(() => {
    if (timeRemaining > 0 && timer === true) {
      setTimeout(() => {
        setTimeRemaining((time) => time - 1);
      }, 1000);
      setStartBtn(true);
    } else {
      countWords();
      setTimer(false);
      setStartBtn(false);
    }
  }, [timeRemaining, timer]);

  return (
    <div className="App">
      <h1>How fast do you type?</h1>
      <textarea
        rows="10"
        cols="54"
        value={content.textarea}
        name="textarea"
        onChange={handleChange}
      />
      <h4>Time remaining: {timeRemaining}</h4>
      <button onClick={startTimer} disabled={startBtn}>
        Start
      </button>
      <h1>Word Count: {count}</h1>
    </div>
  );
}

export default App;
