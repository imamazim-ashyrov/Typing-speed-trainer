import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { incrementErrors, setEndTime, setOnFocus, setStartTime, setUserInput, } from "../store/typingSlice";

const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const { focusInput, userInput, text, startTime, endTime } = useSelector(
    (state: RootState) => state.typing
  );

  const handleChange = (e: KeyboardEvent) => {
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
        dispatch(setOnFocus(false));
      }
    }
  };

  useEffect(() => {
    if (focusInput) {
      window.addEventListener("keydown", handleChange);
      return () => {
        window.removeEventListener("keydown", handleChange);
      };
    }
  }, [focusInput, userInput]);

  return null;
};

export default TextInput;