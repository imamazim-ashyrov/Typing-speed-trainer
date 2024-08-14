import React, { ChangeEvent, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { incrementErrors, setEndTime, setOnFocus, setStartTime, setUserInput } from "../store/typingSlice";
import styled from "styled-components";

const TextInput: React.FC = () => {
  const dispatch = useDispatch();
  const { focusInput, userInput, text, startTime, endTime } = useSelector(
    (state: RootState) => state.typing
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (endTime !== null) return;

    const { value } = e.target;

    if (userInput === "" && value === " ") return;

    if (startTime === null) dispatch(setStartTime(Date.now()));

    if (value[userInput.length] !== text[userInput.length]) dispatch(incrementErrors());

    dispatch(setUserInput(value));

    if (value === text) {
      dispatch(setEndTime(Date.now()));
      dispatch(setOnFocus(false));
    }
  };

  const handleBlur = () => {
    dispatch(setOnFocus(false));
  };

  useEffect(() => {
    if (inputRef.current && focusInput) inputRef.current.focus();
  }, [focusInput, userInput]);

  return (
    <InputStyled
      value={userInput}
      ref={inputRef}
      onChange={handleChange}
      onBlur={handleBlur}
      type="text"
    />
  );
};

export default TextInput;

const InputStyled = styled.input`
  position: absolute;
  bottom: 0;
  right: 0;
  opacity: 0;
`;
