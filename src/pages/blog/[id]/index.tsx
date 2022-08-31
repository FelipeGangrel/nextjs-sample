import MainLayout from "@/layouts/main";
import { NextPageWithLayout } from "@/pages/_app";
import { GetStaticPaths, GetStaticProps } from "next";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";
import { ReactElement } from "react";
import * as S from "./styles";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

interface Product {
  id: number;
  name: string;
}

interface PageProps {
  post: BlogPost;
  products: Product[];
}

interface QueryParams extends ParsedUrlQuery {
  id: string;
}

const getProductsData = async (): Promise<Product[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        { id: 1, name: "Product 1" },
        { id: 2, name: "Product 2" },
        { id: 3, name: "Product 3" },
        { id: 4, name: "Product 4" },
        { id: 5, name: "Product 5" },
      ]);
    }, 1_000);
  });
};

const getBlogPost = async (id: string): Promise<BlogPost> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: "Hello World",
        content: `This is a blog post for id: ${id}`,
      });
    }, 3_000);
  });
};

export const getStaticPaths: GetStaticPaths<QueryParams> = async () => {
  return {
    paths: [
      {
        params: { id: "1" },
      },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<PageProps, QueryParams> = async (
  context
) => {
  // using non-null assertion operator because we know that the id param is defined
  const { id } = context.params!;

  console.time("getting data in parallel");
  const [post, products] = await Promise.all([
    getBlogPost(id),
    getProductsData(),
  ]);
  console.timeEnd("getting data in parallel");

  // console.time("getting data in sequence");
  // const post2 = await getBlogPost(id);
  // const products2 = await getProductsData();
  // console.timeEnd("getting data in sequence");

  return {
    props: {
      post,
      products,
      ...(await serverSideTranslations(context.locale!, ["blog-page"])),
    },
  };
};

const BlogPostPage: NextPageWithLayout<PageProps> = ({ post, products }) => {
  const router = useRouter();
  const { t } = useTranslation("blog-page");
  const { id, message } = router.query;

  return (
    <S.PageContainer>
      <h1>{t("title", { id })}</h1>
      {(message && <p>{t("message", { message })}</p>) || (
        <p>{t("no_message")}</p>
      )}
      <pre>{JSON.stringify({ id }, null, 2)}</pre>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <pre>{JSON.stringify(products, null, 2)}</pre>
    </S.PageContainer>
  );
};

BlogPostPage.getLayout = (page: ReactElement) => {
  return <MainLayout>{page}</MainLayout>;
};

export default BlogPostPage;
