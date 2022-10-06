import React from "react";

function useTimer() {
  const [content, setContent] = React.useState({ textarea: "" });
  const [count, setCount] = React.useState(0);
  const [timeRemaining, setTimeRemaining] = React.useState(5);
  const [timer, setTimer] = React.useState(false);
  const [noOfSec, setNoOfSec] = React.useState("5");
  const setRef = React.useRef(null);

  const handleNoOfSec = (event) => {
    const { value } = event.target;
    setNoOfSec(value);
  };

  const startTimer = () => {
    setTimer(true);
    setTimeRemaining(5);
    setCount(0);
    content.textarea = "";
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setContent({ [name]: value });
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
    if (noOfSec > 0 && timer === true) {
      setTimeout(() => {
        setNoOfSec((time) => time - 1);
      }, 1000);
      setRef.current.focus();
    } else {
      countWords();
      setTimer(false);
    }
  }, [noOfSec, timer]);

  return [
    content,
    count,
    timeRemaining,
    timer,
    startTimer,
    handleChange,
    setRef,
    noOfSec,
    handleNoOfSec,
  ];
}

export default useTimer;
