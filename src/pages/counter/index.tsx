import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useCallback } from "react";
import { appActions, useAppDispatch, useAppSelector } from "store";
import * as S from "./styles";

interface StaticProps {
  locale: string;
}

// getting the locale param from the url
export const getStaticProps = async ({ locale }: StaticProps) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["counter-page", "common"])),
    },
  };
};

export default function Counter() {
  const dispatch = useAppDispatch();
  const { count } = useAppSelector((state) => state.counter);
  const { t } = useTranslation(["counter-page", "common"]);

  const user = {
    name: "John Doe",
  };

  const handleIncrement = useCallback((): void => {
    dispatch(appActions.counter.increment());
  }, [dispatch]);

  const handleDecrement = useCallback((): void => {
    dispatch(appActions.counter.decrement());
  }, [dispatch]);

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.HeaderTitle>{t("counter-page:title")}</S.HeaderTitle>
      </S.PageHeader>
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
      {/* Passing an object */}
      <S.Message>{t("common:auth_messages.welcome", { user })}</S.Message>
      {/* Passing properties */}
      <S.ErrorMesage>
        {t("common:error_messages.invalid_email", {
          email: "test@test.com",
        })}
      </S.ErrorMesage>
    </S.PageContainer>
  );
}
