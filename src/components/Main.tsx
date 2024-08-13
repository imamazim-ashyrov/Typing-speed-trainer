import React from "react";
import TextDisplay from "./TextDisplay";
import TextInput from "./TextInput";
import Results from "./Results";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { setNewText } from "../store/typingSlice";
import RestartBtn from "./RestartBtn";

const Main: React.FC = () => {
  const dispatch = useDispatch();

  return (
    <Wrapper>
      <Heading>Typing Speed Trainer</Heading>
      <TextDisplay />
      <TextInput />
      <Results />
      <RestartBtn onClick={() => dispatch(setNewText())} />
    </Wrapper>
  );
};

export default Main;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
`;

const Heading = styled.h1`
  padding: 0 1em;
  font-size: 36px;
  color: var(--main-color);
  text-align: center;

  @media (max-width: 500px) {
    font-size: 22px;
  }
`;
