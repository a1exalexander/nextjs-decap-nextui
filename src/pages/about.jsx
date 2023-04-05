import { Container, Row, Spacer, Text, Input, Button } from '@nextui-org/react';
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
          This is an{' '}
          <Text b color="error">
            about
          </Text>{' '}
          page. You can add your about information here.
        </Text>
        <Spacer y={2} />
        <Row css={{ jc: 'center' }}>
          <form
            style={{ maxWidth: '400px', width: '100%' }}
            name="contact"
            netlify>
            <Input
              fullWidth
              name="name"
              label="Full Name"
              placeholder="Oleksandr Ratushnyi"
            />
            <Spacer y={0.5} />
            <Input
              fullWidth
              name="email"
              type="email"
              label="Email"
              placeholder="alex@merge.rocks"
            />
            <Spacer y={1} />
            <Button css={{ w: '100%' }} color="gradient" type="submit">
              Send
            </Button>
          </form>
        </Row>
      </Container>
    </>
  );
}
