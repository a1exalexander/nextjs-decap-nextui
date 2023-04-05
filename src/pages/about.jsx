import { Container, Row, Spacer, Text } from '@nextui-org/react';
import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | Merge Academy</title>
      </Head>
      <Container>
        <Spacer />
        <Row css={{ jc: 'center' }}>
          <h1>About</h1>
        </Row>
        <Text css={{ textAlign: 'center' }}>
          This is an <Text b color='error'>about</Text> page. You can add your about information here.
        </Text>
      </Container>
    </>
  );
}
