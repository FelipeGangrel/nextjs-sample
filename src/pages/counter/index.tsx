import { useCallback } from "react";
import { useSelector } from "react-redux";
import { AppState, useAppDispatch } from "store";
import { increment, decrement } from "store/counter/slices";
import * as S from "./styles";

export default function Counter() {
  const dispatch = useAppDispatch();
  const { count } = useSelector((state: AppState) => state.counter);

  const handleIncrement = useCallback((): void => {
    dispatch(increment());
  }, [dispatch]);

  const handleDecrement = useCallback((): void => {
    dispatch(decrement());
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
