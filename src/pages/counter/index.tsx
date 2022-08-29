import { GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";
import Counter from "./components/counter";
import * as S from "./styles";

interface User {
  name: string;
}

interface PageProps {
  user: User;
}

interface QueryParams extends ParsedUrlQuery {}

export const getStaticProps: GetStaticProps<PageProps, QueryParams> = async (
  context
) => {
  return {
    props: {
      user: { name: "John Doe" },
      ...(await serverSideTranslations(context.locale!, [
        "counter-page",
        "common",
      ])),
    },
  };
};

const CounterPage: NextPage<PageProps> = ({ user }) => {
  const { t } = useTranslation(["counter-page", "common"]);

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
      <S.Link href={"blog/1?message=olar amigo"}>Go to blog</S.Link>
    </S.PageContainer>
  );
};

export default CounterPage;
