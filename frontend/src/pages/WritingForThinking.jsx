import { useEffect, useState } from 'react';
import EssayCard from '../components/EssayCard.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { getEssays } from '../api.js';

const ALL = 'All essays';

export default function WritingForThinking() {
  const [theme, setTheme] = useState(ALL);
  const [themes, setThemes] = useState([]);
  const [essays, setEssays] = useState([]);
  const [status, setStatus] = useState('loading');

  usePageMeta({
    title: 'Writing for Thinking — Essays on clarity & judgement',
    description:
      'Read the Ink Therapy™ editorial library. Essays on writing for clarity, difficult decisions, leadership perspectives and conversations that matter.',
    image: 'https://images.hostinger.com/4859a494-c16d-4ac1-bf79-bf73b7323e4b.png',
  });

  useEffect(() => {
    let active = true;
    setStatus('loading');

    getEssays(theme === ALL ? undefined : theme)
      .then((data) => {
        if (!active) return;
        setThemes(data.themes);
        setEssays(data.essays);
        setStatus('ready');
      })
      .catch(() => active && setStatus('error'));

    return () => {
      active = false;
    };
  }, [theme]);

  return (
    <>
      <section className="hero hero--text">
        <div className="container">
          <p className="eyebrow">The editorial library</p>
          <h1 className="display display--xl">
            Writing for thinking. <em>Ideas worth sitting with.</em>
          </h1>
          <div className="hero-row">
            <p className="lead">
              On clarity, decisions, leadership and communication. A collection of perspectives on how writing can
              help you understand what you think.
            </p>
            <p className="hero-row__tag">Read slowly. Think further.</p>
          </div>
        </div>
      </section>

      <section className="section section--after-hero">
        <div className="container">
          <div className="theme-bar" role="group" aria-label="Read by theme">
            <span className="theme-bar__label">Read by theme</span>
            <div className="theme-bar__tabs">
              {[ALL, ...themes].map((item) => (
                <button
                  key={item}
                  type="button"
                  className={`theme-tab ${theme === item ? 'is-active' : ''}`}
                  aria-pressed={theme === item}
                  onClick={() => setTheme(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {status === 'error' && <p className="status">The essays could not be loaded. Please try again.</p>}
          {status === 'loading' && <p className="status">Loading essays…</p>}

          {status === 'ready' && (
            <div className="essay-grid">
              {essays.map((essay) => (
                <EssayCard key={essay.slug} essay={essay} />
              ))}
            </div>
          )}

          <div className="essay-closing">
            <h2 className="display display--sm">
              Not tips for better sentences. <em>Tools for better thinking.</em>
            </h2>
            <p>
              This library explores the work behind the words: making a decision, finding a point of view, preparing
              for a conversation, and recognising what you actually think.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}