import { Link } from 'react-router-dom';
import CallButton from '../components/CallButton.jsx';
import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { IMAGES } from '../data/site.js';

const FORMATS = ['Books', 'Op-eds', 'Keynotes', 'LinkedIn'];

const STEPS = [
  { title: 'Find the thinking', text: 'Begin with the lived experience, ideas and questions behind the brief.' },
  { title: 'Find the point', text: 'Identify what you want the reader or audience to understand.' },
  { title: 'Shape the argument', text: 'Give the idea a structure, with evidence and a clear line of reasoning.' },
  { title: 'Find your voice', text: 'Make the expression recognisably yours. Precise, human and grounded.' },
  { title: 'Refine', text: 'Challenge every sentence until the piece says what it needs to say.' },
];

export default function Ghostwriting() {
  usePageMeta({
    title: 'Executive Communication & Ghostwriting — Ink Therapy™',
    description:
      'Your thinking deserves more than content. Ghostwriting for books, op-eds, keynotes and LinkedIn, and a thinking partnership for senior leaders.',
    image: IMAGES.glass,
  });

  return (
    <>
      <section className="hero hero--split">
        <div className="container">
          <p className="eyebrow">Executive Communication &amp; Ghostwriting</p>
          <h1 className="display display--xl">
            Your thinking deserves <em>more than content.</em>
          </h1>

          <div className="hero-split hero-split--even">
            <div className="hero-split__copy">
              <p className="lead">
                It deserves a point of view.
                <br />
                An argument. A voice that is yours.
              </p>
            </div>
            <div className="hero-split__copy">
              <p className="hero-split__text">
                For leaders with something worth saying—and the need to say it clearly. From the first conversation to
                the final piece, we begin with the thinking, not the format.
              </p>
              <CallButton />
            </div>
          </div>
        </div>

        <figure className="hero-wide">
          <img
            src={IMAGES.glass}
            alt="Reflections across modern glass buildings reveal a different view of the city"
            fetchPriority="high"
          />
          <figcaption>
            <span>Substance before visibility.</span>
          </figcaption>
        </figure>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow">Two ways to work together</p>

          <div className="ways">
            <article className="way">
              <div className="way__head">
                <p className="way__label">01 / Ghostwriting</p>
                <h2 className="display">
                  I write it. <em>You bring the thinking.</em>
                </h2>
              </div>
              <div className="way__body">
                <p>
                  You have the experience, ideas and perspective. I help find the thread, build the argument and write
                  a piece that sounds like you—not like everyone else.
                </p>
                <ul className="tags">
                  {FORMATS.map((format) => (
                    <li key={format}>{format}</li>
                  ))}
                </ul>
                <p>
                  For work that needs a finished expression. Scope and commercial arrangements are discussed around
                  your brief.
                </p>
                <CallButton />
              </div>
            </article>

            <article className="way">
              <div className="way__head">
                <p className="way__label">02 / Thinking Partner</p>
                <h2 className="display">
                  You write it. <em>I train the muscle.</em>
                </h2>
              </div>
              <div className="way__body">
                <p>
                  For leaders making judgement calls under pressure. We use writing to examine the question, challenge
                  assumptions and work toward a position you can stand behind.
                </p>
                <p>
                  The quality of the sentences is not the test. What matters is the thinking. You do the writing; I
                  guide the practice.
                </p>
                <p className="offer__meta-line">Ink Therapy™ · 8 weeks · ₹19,999</p>
                <Link className="link-arrow" to="/ink-therapy">
                  Explore the thinking partnership
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__row">
            <div>
              <p className="eyebrow">How the work takes shape</p>
              <h2 className="display">
                The idea comes first. <em>The words follow.</em>
              </h2>
            </div>
            <p className="section__aside">
              A considered process.
              <br />
              Not a content production line.
            </p>
          </div>

          <ol className="process">
            {STEPS.map((step, index) => (
              <li key={step.title} className="process__item">
                <span className="process__number">{String(index + 1).padStart(2, '0')}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaSection />
    </>
  );
}