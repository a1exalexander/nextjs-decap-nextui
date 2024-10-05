import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { getPostPaths, getPost } from "@/lib/cms";
import Image from "next/image";

export default function Post({ body, title, thumbnail }) {
  return (
    <div style={{ textAlign: "center" }}>
      <div style={{ margin: "16px 0" }}></div>
      <h1>{title}</h1>
      <div style={{ margin: "8px 0" }}></div>
      <div
        style={{ width: "100%", position: "relative", paddingBottom: "50%" }}
      >
        <Image
          style={{ objectFit: "cover", objectPosition: "top" }}
          fill
          src={thumbnail}
          alt={title}
        />
      </div>

      <div style={{ margin: "32px 0" }}></div>
      <article className="post" style={{ textAlign: "left" }}>
        <MDXRemote {...body} />
      </article>
    </div>
  );
}

export async function getStaticProps(req) {
  const source = await getPost(req.params.slug);

  if (!source) {
    return {
      notFound: true,
    };
  }

  const body = await serialize(source.body);

  return { props: { ...source, body } };
}

export async function getStaticPaths() {
  const paths = await getPostPaths();

  return {
    paths,
    fallback: false,
  };
}
