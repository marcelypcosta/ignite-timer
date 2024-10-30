import styled, { css } from "styled-components";

export type ButtonVariant = "start" | "interrupt";

interface IButtonStyledProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  start: "#00875F",
  interrupt: "#AB222E",
};

export const ButtonStyled = styled.button<IButtonStyledProps>`
  color: #fff;
  display: flex;
  width: 648px;
  height: 64px;
  padding: 16px 40px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 8px;
  border: none;

  ${(props) => css`
    background-color: ${buttonVariants[props.variant]};
  `}
`;
