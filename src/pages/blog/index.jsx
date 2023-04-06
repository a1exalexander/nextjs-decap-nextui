import { Row, Spacer, Text, Container, Link } from '@nextui-org/react';
import Head from 'next/head';
import data from '@/data/blog.json';
import { sanitizeMeta } from '@/lib/meta';
import { getPostNames } from '@/lib/cms';

const meta = sanitizeMeta(data);

export default function Blog({ posts }) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
      </Head>
      <Container>
        <Spacer />
        <Row css={{ jc: 'center' }}>
          <h1>{data.title}</h1>
        </Row>
        <Row css={{ jc: 'center' }}>
          <Text b color="error">
            {data.description}
          </Text>
        </Row>
        <Spacer y={2} />
        <ul style={{ textAlign: 'center' }}>
          {posts.map((slug) => (
            <Link key={slug} href={`/blog/${slug}`}>
              {slug}
            </Link>
          ))}
        </ul>
      </Container>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPostNames();

  return { props: { posts } };
}
