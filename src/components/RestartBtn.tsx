import React, { useState } from "react";
import { VscDebugRestart } from "react-icons/vsc";
import styled from "styled-components";

interface RestartBtnProps {
  onClick: () => void;
}

const RestartBtn: React.FC<RestartBtnProps> = ({ onClick }) => {
  const [color, setColor] = useState<string>("#eceff4");

  return (
    <IconWrapper
      onClick={onClick}
      onMouseEnter={() => setColor("#98c379")}
      onMouseLeave={() => setColor("#eceff4")}
      title="Restart Typing"
    >
      <VscDebugRestart color={color} size={30} />
    </IconWrapper>
  );
};

export default RestartBtn;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 6px;
  cursor: pointer;
  transform: rotateY(180deg);
`;
