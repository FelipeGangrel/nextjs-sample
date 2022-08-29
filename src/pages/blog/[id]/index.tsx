import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import * as S from "./styles";

export const getStaticPaths: GetStaticPaths<{ id: string }> = async () => {
  return {
    paths: [{ params: { id: "id" }, locale: "en" }],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: {
      params: context.params,
      ...(await serverSideTranslations(context.locale || "en", ["blog-page"])),
    },
  };
};

export default function BlogPostPage() {
  const router = useRouter();
  const { t } = useTranslation("blog-page");
  const { id, message } = router.query;

  return (
    <S.PageContainer>
      <h1>{t("title", { id })}</h1>
      {(message && <p>{t("message", { message })}</p>) || (
        <p>{t("no_message")}</p>
      )}
    </S.PageContainer>
  );
}
