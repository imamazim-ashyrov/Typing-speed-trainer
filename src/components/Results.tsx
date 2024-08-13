import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const Results: React.FC = () => {
  const { userInput, errors, startTime, endTime } = useSelector((state: RootState) => state.typing);

  if (!startTime || !endTime) {
    return null; // Скрывает результат если пользователь еще не ввёл все символы
  }

  const timeTaken = (endTime - startTime) / 1000 / 60; // в минутах
  const wordsTyped = userInput.split(" ").length;
  const wpm = Math.round(wordsTyped / timeTaken);

  const correctChars = userInput.length - errors;
  const accuracy = Math.round((correctChars / userInput.length) * 100);

  return (
    <div>
      <Result>
        Your speed: <Span>{wpm} wpm</Span>
      </Result>
      <Result>
        Errors: <Span>{errors}</Span>
      </Result>
      <Result>
        Accuracy: <Span>{accuracy > 0 ? accuracy : 0}%</Span>
      </Result>
    </div>
  );
};

export default Results;

const Result = styled.p`
  color: var(--white-color);
  font-size: 20px;
  display: flex;
  align-items: center;

  @media (max-width: 500px) {
    font-size: 16px;
  }
`;
const Span = styled.span`
  color: var(--main-color);
  font-size: 24px;
  margin-left: .5em;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;
