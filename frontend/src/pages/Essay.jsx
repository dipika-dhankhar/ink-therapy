import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import CtaSection from '../components/CtaSection.jsx';
import EssayCard from '../components/EssayCard.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { getEssay } from '../api.js';
import NotFound from './NotFound.jsx';

export default function Essay() {
  const { slug } = useParams();
  const [essay, setEssay] = useState(null);
  const [status, setStatus] = useState('loading');

  useEffect(() => {
    let active = true;
    setStatus('loading');

    getEssay(slug)
      .then((data) => {
        if (!active) return;
        setEssay(data);
        setStatus('ready');
      })
      .catch((error) => active && setStatus(error.status === 404 ? 'missing' : 'error'));

    return () => {
      active = false;
    };
  }, [slug]);

  usePageMeta({
    title: essay ? `${essay.title} — Ink Therapy™` : undefined,
    description: essay?.excerpt,
    image: essay?.image,
  });

  if (status === 'missing') return <NotFound />;

  if (status !== 'ready') {
    return (
      <section className="section">
        <div className="container narrow">
          <p className="status">{status === 'error' ? 'This essay could not be loaded.' : 'Loading essay…'}</p>
        </div>
      </section>
    );
  }

  return (
    <>
      <article className="essay">
        <header className="container narrow essay__head">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span>/</span>
            <Link to="/writing-for-thinking">Writing for Thinking</Link>
            <span>/</span>
            <span>{essay.theme}</span>
          </nav>
          <p className="eyebrow">
            {essay.theme} / {essay.readTime} min read
          </p>
          <h1 className="display display--xl">{essay.title}</h1>
          <p className="lead">{essay.excerpt}</p>
          <p className="essay__byline">Ink Therapy™ / Writing for Thinking</p>
        </header>

        <figure className="container essay__figure">
          <img src={essay.image} alt={essay.imageAlt} fetchPriority="high" />
        </figure>

        <div className="container narrow essay__body">
          <p className="essay__intro">{essay.intro}</p>

          {essay.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}

          <aside className="prompt">
            <p className="eyebrow">A question to write with</p>
            <h2>{essay.prompt.question}</h2>
            <p>{essay.prompt.hint}</p>
            <Link className="link-arrow" to="/ink-therapy">
              Take the thinking into a guided practice
            </Link>
          </aside>
        </div>
      </article>

      <section className="section section--tint">
        <div className="container">
          <div className="section__head">
            <p className="eyebrow">Continue the thinking</p>
            <h2 className="display">
              A little further <em>into the question.</em>
            </h2>
          </div>
          <div className="essay-grid essay-grid--two">
            {essay.related.map((item) => (
              <EssayCard key={item.slug} essay={item} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
