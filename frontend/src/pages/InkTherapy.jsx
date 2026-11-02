import CallButton from '../components/CallButton.jsx';
import CtaSection from '../components/CtaSection.jsx';
import Faq from '../components/Faq.jsx';
import MethodSteps from './Methodsetps.jsx';
import Offer from '../components/Offer.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { FAQS, METHOD_LONG } from '../data/site.js';

const GLANCE = [
  ['Duration', '8 weeks'],
  ['Sessions', '8 guided sessions'],
  ['Time together', '40 minutes each'],
  ['Investment', '₹19,999'],
];

const RHYTHM = [
  {
    title: 'Begin with your issue',
    text: 'We start with what needs your attention. A decision, a conversation, a question of leadership, a career move. You do not need to arrive with the problem neatly defined.',
  },
  {
    title: 'Write. Examine. Return.',
    text: 'Each 40-minute session gives the thinking a place to go. Guided prompts, careful questions and reflection help you distinguish what you know from what you assume.',
  },
  {
    title: 'Carry the method forward',
    text: 'The aim is a practice you can return to. A way to work through the next difficult question without starting from a blank page.',
  },
];

export default function InkTherapy() {
  usePageMeta({
    title: 'Ink Therapy™ — The eight-week writing practice',
    description:
      'Eight weeks, eight guided sessions, 40 minutes each. Explore the five-step writing method, ₹19,999 programme and Right-Fit Promise.',
    image: 'https://images.hostinger.com/86e1b0bb-e581-4e51-8548-ed2baa1b6ed1.png',
  });

  return (
    <>
      <section className="hero hero--text">
        <div className="container">
          <p className="eyebrow">Ink Therapy™ / The guided writing practice</p>
          <h1 className="display display--xl">
            Your thinking. <em>With room to become clear.</em>
          </h1>
          <div className="hero-split">
            <div className="hero-split__copy">
              <p className="lead">Eight sessions. One method. Your issue determines the path.</p>
              <p className="hero-split__text">
                A structured writing practice for senior professionals navigating decisions, difficult conversations
                and questions that do not come with an obvious answer.
              </p>
              <CallButton />
            </div>

            <div className="glance">
              <p className="eyebrow">The programme, at a glance</p>
              <dl>
                {GLANCE.map(([label, value]) => (
                  <div key={label} className="glance__row">
                    <dt>{label}</dt>
                    <dd>{value}</dd>
                  </div>
                ))}
              </dl>
              <a className="link-arrow link-arrow--down link-arrow--small" href="#programme">
                Read the Right-Fit Promise
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__row section__row--wide">
            <div>
              <p className="eyebrow">The five-step method</p>
              <h2 className="display">
                From thought <em>to perspective.</em>
              </h2>
            </div>
            <p className="section__aside section__aside--muted">From what’s in your head to what you can see, examine and express.</p>
          </div>
          <MethodSteps steps={METHOD_LONG} />
        </div>
      </section>

      <section className="section">
        <div className="container split-layout split-layout--rhythm">
          <div>
            <p className="eyebrow">Eight weeks, thoughtfully structured</p>
            <h2 className="display">
              A consistent rhythm. <em>Not a rigid script.</em>
            </h2>
          </div>

          <div className="rhythm">
            <ol className="rhythm__list">
              {RHYTHM.map((item, index) => (
                <li key={item.title} className="rhythm__item">
                  <span className="rhythm__number">{String(index + 1).padStart(2, '0')}</span>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className="rhythm__note">
              Not a diary. Not psychotherapy. Not formulaic coaching.
              <br />A thinking partnership, with writing at its centre.
            </p>
          </div>
        </div>
      </section>

      <Offer id="programme" />

      <section className="section">
        <div className="container split-layout split-layout--faq faq-split">
          <div>
            <p className="eyebrow">Before you begin</p>
            <h2 className="display">
              A few good <em>questions.</em>
            </h2>
            <p className="split-layout__note">The free call is also a place to ask yours.</p>
          </div>
          <Faq items={FAQS} />
        </div>
      </section>

      <CtaSection />
    </>
  );
}