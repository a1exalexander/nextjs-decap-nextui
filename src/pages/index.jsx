import { Container, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Merge Academy</title>
      </Head>
      <Container>
        <Spacer />
        <Row css={{ jc: 'center' }}>
          <h1>Home</h1>
        </Row>
        <Text css={{ textAlign: 'center' }}>
          This is a{' '}
          <Text b color="primary">
            home
          </Text>{' '}
          page. You can add your home page content here.
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
