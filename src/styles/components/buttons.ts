import type { ButtonSize, ButtonVariant } from "contracts/ui";
import styled, { css } from "styled-components";
import { zoomIn } from "styles/mixed";

interface ButtonPropps {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const applyButtonSize = (size?: ButtonSize) => {
  switch (size) {
    case "small":
      return css`
        font-size: 1rem;
        padding: 0.4rem 1rem;
      `;
    case "large":
      return css`
        font-size: 1.4rem;
        padding: 0.8rem 1.4rem;
      `;
    case "medium":
    default:
      return css`
        font-size: 1.2rem;
        padding: 0.6rem 1.2rem;
      `;
  }
};

const applyButtonVariant = (variant?: ButtonVariant) => {
  switch (variant) {
    case "transparent":
      return css`
        background-color: "transparent";
        color: currentColor;
      `;
    case "secondary":
      return css`
        background-color: ${({ theme }) => theme.colors.secondary};
      `;
    case "danger":
      return css`
        background-color: ${({ theme }) => theme.colors.danger};
      `;
    case "primary":
    default:
      return css`
        background-color: ${({ theme }) => theme.colors.primary};
      `;
  }
};

export const BaseButton = styled.button<ButtonPropps>`
  ${(props) => applyButtonSize(props.size)}
  ${(props) => applyButtonVariant(props.variant)}
  border-radius: ${({ theme }) => theme.borderRadius};
  color: ${({ theme }) => theme.palette.white};
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 0 1rem;
  transition: 300ms ease;
  cursor: pointer;
  border: none;
  font-weight: 600;
  :hover:not(:disabled) {
    animation: ${zoomIn} 200ms linear;
    animation-fill-mode: forwards;
  }
  :disabled {
    opacity: 0.5;
  }
`;

export const Button = styled(BaseButton)``;
