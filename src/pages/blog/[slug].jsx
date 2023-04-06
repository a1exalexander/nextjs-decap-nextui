import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
import { Col, Container, Image, Row, Spacer } from '@nextui-org/react';
import { getPostPaths, getPost } from '@/lib/cms';

export default function Post({ body, title, thumbnail }) {
  return (
    <Container css={{ textAlign: 'center' }}>
      <Spacer />

      <h1>{title}</h1>
      <Spacer y={0.5} />
      <Image
        showSkeleton
        width={400}
        height={300}
        objectFit="cover"
        maxDelay={10000}
        src={thumbnail}
        alt={title}
      />

      <Spacer y={2} />
      <article style={{ textAlign: 'left' }}>
        <MDXRemote {...body} />
      </article>
    </Container>
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
