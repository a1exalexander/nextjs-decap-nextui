import {
  Container,
  Row,
  Spacer,
  Text,
  Input,
  Button,
  Textarea,
} from '@nextui-org/react';
import Head from 'next/head';
import data from '@/data/about.json';
import { sanitizeMeta } from '@/lib/meta';

const meta = sanitizeMeta(data);

export default function About() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const myForm = event.target;
    const formData = new FormData(myForm);

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(formData).toString(),
    })
      .then(() => console.log('Form successfully submitted'))
      .catch((error) => alert(error));
  };

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
          <Text b color="success">
            {data.description}
          </Text>
        </Row>
        <Spacer y={2} />
        <Row css={{ jc: 'center' }}>
          <form
            style={{ maxWidth: '400px', width: '100%' }}
            name="contact"
            method="post"
            onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />

            <Input
              fullWidth
              name="name"
              label="Name"
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
            <Spacer y={0.5} />
            <Textarea
              fullWidth
              name="message"
              label="Message"
              placeholder="Enter your amazing ideas."
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
