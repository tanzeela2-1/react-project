import { useEffect, useReducer } from "react";
import Questions from "./Questions";

const initialState = {
  index: 0,
  selectedOption: null,
  score: 0,
  timer: 10
};

const questions = [
  {
    question: "What is the capital of France?",
    options: ["London", "Paris", "Berlin", "Rome"],
    correctOption: 1
  },
  {
    question: "Who invented JavaScript?",
    options: ["Brendan Eich", "Elon Musk", "Bill Gates", "James Gosling"],
    correctOption: 0
  },
  {
    question: "What is the largest planet in our solar system?",
    options: ["Mars", "Jupiter", "Saturn", "Venus"],
    correctOption: 1
  },
  {
    question: "What is the smallest country in the world?",
    options: ["Monaco", "Maldives", "Vatican City", "San Marino"],
    correctOption: 2
  }
];

export default function Quiz() {
  function reducer(state, action) {
    switch (action.type) {
      case "select":
        return { ...state, selectedOption: action.payload };

      case "next": {
        const question = questions[state.index];
        const isCorrect = state.selectedOption === question.correctOption;

        return {
          ...state,
          index: state.index + 1,
          selectedOption: null,
          score: isCorrect ? state.score + 1 : state.score
        };
      }

      case "restart":
        return initialState;

      case "timer":
        return { ...state, timer: Math.max(state.timer - 1, 0) };

      default:
        return state;
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState);
  const { score, index, selectedOption, timer } = state;

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "timer" });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  const question = questions[index];

  return (
    <div className="flex justify-center items-center flex-col">
      <h1>Score : {score}</h1>
      <p>Question {index + 1} of {questions.length}</p>

      <p>{timer}</p>

      <Questions
        question={question}
        selectedOption={selectedOption}
        dispatch={dispatch}
      />

      {index === questions.length - 1 ? (
        <button
          className="border p-2 rounded cursor-pointer"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart
        </button>
      ) : (
        <button
          className="border p-2 rounded cursor-pointer"
          onClick={() => dispatch({ type: "next" })}
        >
          Next
        </button>
      )}
    </div>
  );
}
