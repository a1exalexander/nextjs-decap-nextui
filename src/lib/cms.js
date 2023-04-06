import fs from 'fs/promises';
import path from 'path';

export async function getPostNames() {
  const files = await fs.readdir(path.join(process.cwd(), 'src/data/blog'));
  return files.map((file) => file.replace(/\.json$/, ''));
}

export async function getPostPaths() {
  const postNames = await getPostNames();
  return postNames.map((slug) => ({ params: { slug } }));
}

export async function getPost(slug) {
  const postPath = path.join(process.cwd(), 'src/data/blog', `${slug}.json`);

  const post = await fs.readFile(postPath, 'utf8');

  if (post) {
    return JSON.parse(post);
  }

  return post;
}
