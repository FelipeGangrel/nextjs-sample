import { useTranslation } from "next-i18next";
import { appActions, useAppDispatch, useAppSelector } from "@/store";
import { useCallback } from "react";
import * as S from "./styles";

export default function Counter() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const { t } = useTranslation(["counter-page", "common"]);

  const handleIncrement = useCallback((): void => {
    dispatch(appActions.counter.increment());
  }, [dispatch]);

  const handleDecrement = useCallback((): void => {
    dispatch(appActions.counter.decrement());
  }, [dispatch]);

  return (
    <S.CounterContainer>
      <S.CounterValue>{count}</S.CounterValue>
      <S.Controls>
        <S.Button onClick={handleIncrement} variant="primary">
          {t("counter-page:buttons.increment")}
        </S.Button>
        <S.Button onClick={handleDecrement} variant="primary" size="large">
          {t("counter-page:buttons.decrement")}
        </S.Button>
      </S.Controls>
    </S.CounterContainer>
  );
}
