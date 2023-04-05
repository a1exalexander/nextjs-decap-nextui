import { Container, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';

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
          This is a <Text b color="primary">home</Text> page. You can add your home page content here.
        </Text>
      </Container>
    </>
  );
}
