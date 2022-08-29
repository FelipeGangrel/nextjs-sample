import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 480px;
  margin: 0 auto;
  gap: 1rem 0;
`;

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const HeaderTitle = styled.h1``;

export const Message = styled.div`
  padding: 1rem 2rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ErrorMesage = styled(Message)`
  background-color: ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.palette.white};
`;
