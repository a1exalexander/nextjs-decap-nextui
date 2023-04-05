import { Row, Spacer, Text, Container } from '@nextui-org/react';
import Head from 'next/head';

export default function Blog() {
  return (
    <>
      <Head>
        <title>Blog | Merge Academy</title>
      </Head>
      <Container>
        <Spacer />
        <Row css={{ jc: 'center' }}>
          <h1>Blog</h1>
        </Row>
        <Text css={{ textAlign: 'center' }}>
          This is a <Text b color="success">blog</Text> page. You can add your blog posts here.
        </Text>
      </Container>
    </>
  );
}
