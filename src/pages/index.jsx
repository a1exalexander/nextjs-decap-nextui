import { Container, Row, Spacer, Text } from '@nextui-org/react';
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
      <Container>
        <Spacer />
        <Row css={{ jc: 'center' }}>
          <h1>{data.title}</h1>
        </Row>
        <Row css={{ jc: 'center' }}>
          <Text b color="primary">
            {data.description}
          </Text>
        </Row>
      </Container>
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
