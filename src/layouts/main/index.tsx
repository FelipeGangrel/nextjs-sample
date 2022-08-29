import { ReactElement } from "react";
import * as S from "./styles";

const MainLayout = ({ children }: { children: ReactElement }) => {
  return <S.Container>{children}</S.Container>;
};

export default MainLayout;
