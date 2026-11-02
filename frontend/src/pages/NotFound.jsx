import { Link } from 'react-router-dom';
import usePageMeta from '../hooks/usePageMeta.js';

export default function NotFound() {
  usePageMeta({
    title: 'Page not found — Ink Therapy™',
    description: 'The page you are looking for could not be found.',
  });

  return (
    <section className="hero hero--text">
      <div className="container narrow">
        <p className="eyebrow">404</p>
        <h1 className="display display--xl">
          This page <em>could not be found.</em>
        </h1>
        <Link className="link-arrow" to="/">
          Return home
        </Link>
      </div>
    </section>
  );
}
