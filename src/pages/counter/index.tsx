import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import Counter from "./components/counter";
import * as S from "./styles";

export const getStaticProps: GetStaticProps = async (context) => {
  const { locale = "pt-BR" } = context;

  return {
    props: {
      ...(await serverSideTranslations(locale, ["counter-page", "common"])),
    },
  };
};

export default function CounterPage() {
  const { t } = useTranslation(["counter-page", "common"]);

  const user = {
    name: "John Doe",
  };

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.HeaderTitle>{t("counter-page:title")}</S.HeaderTitle>
      </S.PageHeader>
      <Counter />
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
