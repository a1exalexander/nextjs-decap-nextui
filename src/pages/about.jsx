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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <form
            style={{ maxWidth: '400px', width: '100%' }}
            name="contact"
            method="post"
            onSubmit={handleSubmit}>
            <input type="hidden" name="form-name" value="contact" />

            <input
              style={{width: '100%'}}
              name="name"
              label="Name"
              placeholder="Oleksandr Ratushnyi"
            />
            <div style={{margin: '8px 0'}}></div>
            <input
              style={{width: '100%'}}
              name="email"
              type="email"
              label="Email"
              placeholder="alex@merge.rocks"
            />
            <div style={{margin: '8px 0'}}></div>
            <textarea
              style={{width: '100%'}}
              name="message"
              label="Message"
              placeholder="Enter your amazing ideas."
            />
            <div style={{margin: '16px 0'}}></div>
            <button style={{ width: '100%' }} type="submit">
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
