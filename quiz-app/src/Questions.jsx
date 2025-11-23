// Questions.jsx
export default function Questions({ question, selectedOption, dispatch }) {
  return (
    <div>
      <p>{question.question}</p>

      <div className="flex flex-col">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => dispatch({ type: "select", payload: i })}
            className={`border p-2 rounded ${
              selectedOption === i ? "bg-blue-200" : ""
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
