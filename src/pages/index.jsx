import Head from 'next/head';
import Script from 'next/script';
import data from '@/data/home.json';
import { sanitizeMeta } from '@/lib/meta';

const meta = sanitizeMeta(data);

export default function Home() {
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
      </div>
      <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js" />
      <Script id="netlify">
        {`
  if (window.netlifyIdentity) {
    window.netlifyIdentity.on("init", user => {
      if (!user) {
        window.netlifyIdentity.on("login", () => {
          document.location.href = "/admin/";
        });
      }
    });
  }
`}
      </Script>
    </>
  );
}
