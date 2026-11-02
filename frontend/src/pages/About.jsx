import CtaSection from '../components/CtaSection.jsx';
import usePageMeta from '../hooks/usePageMeta.js';
import { IMAGES } from '../data/site.js';

const CAREER = [
  {
    title: 'Journalism',
    place: 'ANI · Indian Express · Dainik Bhaskar',
    text: 'The discipline of asking questions, looking closely and finding the story that matters.',
  },
  {
    title: 'Government communication',
    place: 'Government PRO · Chandigarh',
    text: 'Working where public information, responsibility and clear communication meet.',
  },
  {
    title: 'Corporate communication',
    place: 'Intel · Asia Pacific & Japan',
    text: 'A wider perspective on organisations, leadership and the work of communicating across contexts.',
  },
  {
    title: 'Founder & CXO advisory',
    place: 'The thinking behind the message',
    text: 'Helping leaders find the point, shape the argument and express a perspective that is their own.',
  },
];

export default function About() {
  usePageMeta({
    title: 'Aananddika Sood — The thinking behind Ink Therapy™',
    description:
      'Meet Aananddika Sood. A 20+ year journey through journalism, government, Intel APJ and founder/CXO advisory, now brought to a guided writing practice.',
    image: IMAGES.stairs,
  });

  return (
    <>
      <section className="hero hero--about">
        <div className="container">
          <p className="eyebrow">About / Aananddika Sood</p>
          <h1 className="display display--xl">
            A career in words. <em>A practice in thinking.</em>
          </h1>

          <div className="about-hero">
            <div className="about-hero__copy">
              <p className="lead">
                Journalist. Communicator.
                <br />
                Writer. Thinking partner.
              </p>
              <p>
                More than 20 years across journalism, government communication, corporate communication and
                founder/CXO advisory have brought me back to one thing: the quality of the thinking behind the words.
              </p>
              <p>
                Ink Therapy™ brings that attention to the question you are trying to work through. Not to tell you
                what to think, but to help you see what you think.
              </p>
            </div>

            <figure className="hero__figure">
              <img
                src={IMAGES.stairs}
                alt="A modernist architectural staircase in Chandigarh, a study in structure and perspective"
                fetchPriority="high"
              />
              <figcaption>
                <span>Structure gives perspective somewhere to stand.</span>
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__row">
            <div>
              <p className="eyebrow">20+ years / A continuing thread</p>
              <h2 className="display">
                Different worlds. <em>The same attention.</em>
              </h2>
            </div>
            <p className="section__aside">
              To the question.
              <br />
              To the thinking.
              <br />
              To what needs to be said.
            </p>
          </div>

          <ol className="career">
            {CAREER.map((item, index) => (
              <li key={item.title} className="career__item">
                <span className="career__number">{String(index + 1).padStart(2, '0')}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p className="career__place">{item.place}</p>
                </div>
                <p className="career__text">{item.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section section--dark belief">
        <div className="container container--wide">
          <p className="eyebrow">The belief behind the work</p>
          <blockquote className="quote">
            <p>
              “Your lived experience is the one thing
              <br />
              <em>no model can be trained on.</em>”
            </p>
            <footer>Aananddika Sood / Founder, Ink Therapy™</footer>
          </blockquote>

          <div className="belief__text">
            <p>
              A model can generate words. It cannot have lived your experience, carried your responsibilities or made
              your choices.
            </p>
            <p>
              That is where your perspective begins. The work is to give it enough attention—and enough structure—to
              become something you can see, examine and express.
            </p>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}