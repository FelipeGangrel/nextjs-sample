import { useRouter } from "next/router";

const BlogPage = () => {
  const router = useRouter();
  return (
    <div>
      <h1>No id was provided</h1>
      <p>
        {/* imperative navigation */}
        <button onClick={() => router.push("blog/1")}>
          Go to real blog with id 1
        </button>
        <button
          onClick={() => {
            router.push({ pathname: "blog/[id]", query: { id: 2 } });
          }}
        >
          Go to real blog with id 2
        </button>
      </p>
    </div>
  );
};

export default BlogPage;
