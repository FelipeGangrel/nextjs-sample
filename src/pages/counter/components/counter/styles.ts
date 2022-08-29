import styled from "styled-components";
export { Button } from "styles/components";

export const CounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: inherit;
`;

export const CounterValue = styled.div`
  background-color: ${({ theme }) => theme.palette.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  border: 2px solid #e5e5e5;
  text-align: center;
  font-size: 2rem;
  padding: 0.5rem 1rem;
`;

export const Controls = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0px 1rem;
`;
