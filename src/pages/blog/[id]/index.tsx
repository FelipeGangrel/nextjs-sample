import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import * as S from "./styles";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface PageProps {
  post: BlogPost;
}

interface QParams extends ParsedUrlQuery {
  id: string;
}

const getBlogPost = async (id: string): Promise<BlogPost> => {
  return new Promise((resolve, reject) => {
    const willResolve = Math.random() > 0.5;

    if (!willResolve) reject("Error fetching blog post");

    setTimeout(() => {
      resolve({
        id: 1,
        title: "Hello World",
        content: `This is a blog post for id: ${id}`,
      });
    }, 3_000);
  });
};

export const getStaticPaths: GetStaticPaths<QParams> = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PageProps, QParams> = async (
  context
) => {
  // using non-null assertion operator because we know that the id param is defined
  const { id } = context.params!;
  const post = await getBlogPost(id);

  return {
    props: {
      post,
      ...(await serverSideTranslations(context.locale!, ["blog-page"])),
    },
  };
};

const BlogPostPage: NextPage<PageProps> = ({ post }) => {
  const router = useRouter();
  const { t } = useTranslation("blog-page");
  const { id, message } = router.query;

  return (
    <S.PageContainer>
      <h1>{t("title", { id })}</h1>
      {(message && <p>{t("message", { message })}</p>) || (
        <p>{t("no_message")}</p>
      )}
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </S.PageContainer>
  );
};

export default BlogPostPage;
