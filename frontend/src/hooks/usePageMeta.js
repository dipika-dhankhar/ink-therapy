import { useEffect } from 'react';

const setMeta = (selector, attribute, value) => {
  const element = document.head.querySelector(selector);
  if (element) element.setAttribute(attribute, value);
};

const ensureMeta = (selector, create) => {
  if (!document.head.querySelector(selector)) {
    const element = document.createElement('meta');
    create(element);
    document.head.appendChild(element);
  }
};

export default function usePageMeta({ title, description, image }) {
  useEffect(() => {
    if (!title) return;

    document.title = title;

    const tags = [
      ['meta[name="description"]', 'name', 'description', description],
      ['meta[property="og:title"]', 'property', 'og:title', title],
      ['meta[property="og:description"]', 'property', 'og:description', description],
      ['meta[property="og:image"]', 'property', 'og:image', image],
    ];

    tags.forEach(([selector, attribute, name, value]) => {
      if (!value) return;
      ensureMeta(selector, (element) => element.setAttribute(attribute, name));
      setMeta(selector, 'content', value);
    });
  }, [title, description, image]);
}
