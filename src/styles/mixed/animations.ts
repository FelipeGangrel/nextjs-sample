import { keyframes } from "styled-components";

export const zoomIn = keyframes`
    to {
      transform: scale(1.05);
    }
`;

export const modalSlideUp = keyframes`
    from {
      transform: translateY(10vh);
    }
    to {
      transform: translateY(0vh);
    }
`;

export const rotate = keyframes`
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(359deg);
    }
`;
