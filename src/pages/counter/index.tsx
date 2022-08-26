import { useCallback } from "react";
import { appActions, useAppDispatch, useAppSelector } from "store";
import * as S from "./styles";

export default function Counter() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);

  const handleIncrement = useCallback((): void => {
    dispatch(appActions.counter.increment());
  }, [dispatch]);

  const handleDecrement = useCallback((): void => {
    dispatch(appActions.counter.decrement());
  }, [dispatch]);

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.HeaderTitle>Counter</S.HeaderTitle>
      </S.PageHeader>
      <S.CounterContainer>
        <S.CounterValue>{count}</S.CounterValue>
        <S.Controls>
          <S.Button onClick={handleIncrement} variant="primary">
            +
          </S.Button>
          <S.Button onClick={handleDecrement} variant="primary" size="large">
            -
          </S.Button>
        </S.Controls>
      </S.CounterContainer>
    </S.PageContainer>
  );
}
