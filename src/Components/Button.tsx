import { ButtonStyled, type ButtonVariant } from "./Button.style";

interface IButton {
  variant?: ButtonVariant;
  children: string; 
}

export function Button({ variant = "start", children }: IButton) {
  return <ButtonStyled variant={variant}>{children}</ButtonStyled>;
}
