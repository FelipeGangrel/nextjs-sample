import MainLayout from "@/layouts/main";
import { NextPageWithLayout } from "@/pages/_app";
import { GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import { getSettingsState } from "@/store/settings/slices";
import { LanguageSelector } from "@/components";
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
  // const { language } = getSettingsState();

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

const CounterPage: NextPageWithLayout<PageProps> = ({ user }) => {
  const { t } = useTranslation(["counter-page", "common"]);
  // i18n.changeLanguage("en");

  return (
    <S.PageContainer>
      <S.PageHeader>
        <S.HeaderTitle>{t("counter-page:title")}</S.HeaderTitle>
      </S.PageHeader>
      <Counter />
      <LanguageSelector />
      {/* Passing an object */}
      <S.Message>{t("common:auth_messages.welcome", { user })}</S.Message>
      {/* Passing properties */}
      <S.ErrorMesage>
        {t("common:error_messages.invalid_email", {
          email: "test@test.com",
        })}
      </S.ErrorMesage>
      <S.Link href={"blog/1?message=olar amigo"}>Go to blog</S.Link>

      <S.Link
        href={`blog/1?${new URLSearchParams({
          message: "olar amigo",
        }).toString()}`}
      >
        Go to blog
      </S.Link>

      <S.Link href={`blog/1?message=${encodeURIComponent("olar amigo")}`}>
        Go to blog
      </S.Link>

      <S.Link
        href={{
          pathname: "blog/[id]",
          query: { id: 1, message: "olar amigo" },
        }}
      >
        Go to blog
      </S.Link>
    </S.PageContainer>
  );
};

CounterPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default CounterPage;
