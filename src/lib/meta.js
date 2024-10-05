export const sanitizeMeta = (meta) => {
  const { title, description, image, url, type } = meta;
  const defaultTitle = 'Next + Decap';
  const defaultDescription = 'Website template using Next.js and Decap CMS';

  return {
    title: title ? `${title} | ${defaultTitle}` : defaultTitle,
    description: description || defaultDescription,
    image,
    url,
    type: type || 'website',
  };
};
