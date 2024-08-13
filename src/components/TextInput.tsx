import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { incrementErrors, setEndTime, setStartTime, setUserInput, } from "../store/typingSlice";

const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const { userInput, text, startTime, endTime } = useSelector((state: RootState) => state.typing);

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
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [userInput, text, startTime]);

  return null; // Убирает видимое поле ввода
};

export default TextInput;
