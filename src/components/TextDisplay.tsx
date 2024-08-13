import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import styled from "styled-components";

const TextDisplay: React.FC = () => {
  const { text, userInput } = useSelector((state: RootState) => state.typing);

  const renderText = () => {
    return text.split("").map((char, index) => {
      const isCurrent = index === userInput.length ? "true" : "false";
      const color =
        index < userInput.length
          ? char === userInput[index]
            ? "green"
            : ""
          : "var(--untyped-letter-color)";
      return (
        <Letter
          style={{ color, backgroundColor: !color ? "#d08383" : "" }}
          key={index}
          current={isCurrent}
        >
          {char}
        </Letter>
      );
    });
  };

  return <TextWrapper>{renderText()}</TextWrapper>;
};

export default TextDisplay;

const TextWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  font-size: 24px;
  padding: 2em;
  white-space: pre-wrap;

  @media (max-width: 500px) {
    font-size: 18px;
  }
`;

interface LetterProps {
  current: string;
}

const Letter = styled.span<LetterProps>`
  transition: background-color 0.2s ease, color 0.2s ease;
  position: relative;
  user-select: none;
  -webkit-user-select: none;

  ${({ current }) =>
    current === "true" &&
    `
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 2px;
      background-color: var(--main-color);
      animation: blink 1s step-start infinite;
    }
  `}

  @keyframes blink {
    0% {
      background-color: transparent;
    }
    50% {
      background-color: var(--main-color);
    }
    100% {
      background-color: transparent;
    }
  }
`;
