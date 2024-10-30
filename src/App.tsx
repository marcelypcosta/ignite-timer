import styled from "styled-components";
import { ButtonStyled } from "./Components/Button.style";
import { HandPalm, Play } from "@phosphor-icons/react";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export function App() {
  return (
    <Content>
      <ButtonStyled variant="start"><Play size={20}/> Começar</ButtonStyled>   
      <ButtonStyled variant="interrupt"><HandPalm size={20}/> Interromper</ButtonStyled>   
    </Content>
  );
}
