import { Container, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';
import Script from 'next/script';
import data from '@/data/home.json';

export default function Home() {
  return (
    <>
      <Head>
        <title>Merge Academy</title>
      </Head>
      <Container>
        <Spacer />
        <Row css={{ jc: 'center' }}>
          <h1>{data.title}</h1>
        </Row>
        <Text css={{ textAlign: 'center' }}>
          {data.description}
        </Text>
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
