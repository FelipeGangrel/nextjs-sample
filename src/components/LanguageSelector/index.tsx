import { appActions, useAppSelector, useAppDispatch } from "@/store";
import * as S from "./styles";

export const LanguageSelector = () => {
  const dispatch = useAppDispatch();
  const { language } = useAppSelector((state) => state.settings);

  const { setLanguage } = appActions.settings;

  return (
    <S.Container>
      <S.CurrentLanguage>
        <span>{language}</span>
      </S.CurrentLanguage>
      <S.Controls>
        <S.Button onClick={() => dispatch(setLanguage("pt-BR"))}>
          PT-BR
        </S.Button>
        <S.Button onClick={() => dispatch(setLanguage("en"))}>En</S.Button>
      </S.Controls>
    </S.Container>
  );
};
