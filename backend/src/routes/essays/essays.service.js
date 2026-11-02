const essays = require('../../data/essays');

const themes = ['Clarity', 'Decision-making', 'Leadership', 'Communication'];

const toSummary = ({ slug, theme, readTime, title, excerpt, image, imageAlt }) => ({
  slug,
  theme,
  readTime,
  title,
  excerpt,
  image,
  imageAlt,
});

const list = (theme) => {
  const items = theme ? essays.filter((essay) => essay.theme === theme) : essays;
  return items.map(toSummary);
};

const getBySlug = (slug) => {
  const essay = essays.find((item) => item.slug === slug);
  if (!essay) return null;

  const related = essay.related
    .map((relatedSlug) => essays.find((item) => item.slug === relatedSlug))
    .filter(Boolean)
    .map(toSummary);

  return { ...essay, related };
};

module.exports = { themes, list, getBySlug };
