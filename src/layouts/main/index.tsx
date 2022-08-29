import { fetchHello } from "services/hello";
import { ReactElement } from "react";
import useSWR from "swr";
import * as S from "./styles";

interface LayoutProps {
  children: ReactElement;
}

const MainLayout = ({ children }: LayoutProps) => {
  const { data } = useSWR("/api/hello", fetchHello);

  return (
    <S.Container>
      <S.Header>
        <S.UserName>{data?.name}</S.UserName>
      </S.Header>
      <S.Main>{children}</S.Main>
      <S.Footer>footer here</S.Footer>
    </S.Container>
  );
};

export default MainLayout;
