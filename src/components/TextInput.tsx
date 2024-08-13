import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { incrementErrors, setEndTime, setStartTime, setUserInput, } from "../store/typingSlice";
import styled from "styled-components";

const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const { userInput, text, startTime, endTime } = useSelector(
    (state: RootState) => state.typing
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: KeyboardEvent) => {
    e.preventDefault();

    if (endTime !== null) {
      return;
    }

    const { key } = e;

    if (key === "Backspace") {
      dispatch(setUserInput(userInput.slice(0, -1)));
      return;
    }

    if (key.length === 1) {
      if (startTime === null) {
        dispatch(setStartTime(Date.now()));
      }

      if (key !== text[userInput.length]) {
        dispatch(incrementErrors());
      }

      dispatch(setUserInput(userInput + key));

      if (userInput + key === text) {
        dispatch(setEndTime(Date.now()));
      }
    }
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [userInput, text, startTime]);

  return (
    <InputHidden ref={inputRef} type="text" readOnly={text === userInput} />
  );
};

export default TextInput;

const InputHidden = styled.input`
  position: absolute;
  opacity: 0;
  bottom: 0;
  right: 0;
`;
