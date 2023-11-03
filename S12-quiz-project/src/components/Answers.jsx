import { useRef } from "react";

export default function answers({
  answers,
  selectedAnswer,
  answerState,
  onSelect,
}) {
  const shuffledanswers = useRef();

  if (!shuffledanswers.current) {
    shuffledanswers.current = [...answers];
    shuffledanswers.current.sort(() => {
      const shuffled = Math.random() - 0.5;
      return shuffled;
    });
  }

  return (
    <ul id="answers">
      {shuffledanswers.current.map((answer) => {
        const isSelected = selectedAnswer === answer;
        let cssClassess = "";
        if (answerState === "answered" && isSelected) {
          cssClassess = "selected";
        }

        if (
          (answerState === "correct" || answerState === "wrong") &&
          isSelected
        ) {
          cssClassess = answerState;
        }
        return (
          <li key={answer} className="answer">
            <button
              onClick={() => onSelect(answer)}
              className={cssClassess}
              disabled={answerState !== ""}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
