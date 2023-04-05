export default function Doc({ meta, content }) {
  return <div>Post</div>;
}

const docsDirectory = join(process.cwd(), 'src/data');

function getDocBySlug(slug) {
  const realSlug = slug.replace(/\.json$/, '');
  const fullPath = join(docsDirectory, `${realSlug}.json`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  console.log(fileContents);

  return { slug: realSlug, content: '' };
}

export async function getStaticProps({ params }) {
  const doc = getDocBySlug(params.slug);

  return {
    props: {
      ...doc,
    },
  };
}

export async function getStaticPaths() {
  const docs = getAllDocs();

  return {
    paths: docs.map((doc) => {
      return {
        params: {
          slug: doc.slug,
        },
      };
    }),
    fallback: false,
  };
}
