import Head from 'next/head';
import data from '@/data/blog.json';
import { sanitizeMeta } from '@/lib/meta';
import { getPostNames } from '@/lib/cms';
import Link from 'next/link';

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
      <div style={{maxWidth: '1200px', margin: '0 auto'}}>
        <div style={{margin: '16px 0'}}></div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <h1>{data.title}</h1>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p>
            {data.description}
          </p>
        </div>
        <div style={{margin: '32px 0'}}></div>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px'}}>
          {posts.map((slug) => (
            <Link key={slug} href={`/blog/${slug}`}>
              {slug}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export async function getStaticProps() {
  const posts = await getPostNames();

  return { props: { posts } };
}
