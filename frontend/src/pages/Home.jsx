import { Fragment } from "react";
import { Link } from "react-router-dom";
import ArrowRight from "./Arrowright.jsx";
import CallButton from "../components/CallButton.jsx";
import CtaSection from "../components/CtaSection.jsx";
import MethodSteps from "./Methodsetps.jsx";
import Offer from "../components/Offer.jsx";
import usePageMeta from "../hooks/usePageMeta.js";
import { IMAGES, METHOD_SHORT } from "../data/site.js";

const JOURNEY = [
  { label: "Where it began", title: "LinkedIn writing" },
  { label: "What it opened up", title: "Clarity + conversations" },
  { label: "Where it led", title: "Two books" },
];

const READERS = [
  "Dr. Bhavana Gautam",
  "Vidwata S. Mohta",
  "Deepa Soman",
  "Hira Jethanandani",
];

const COMPARISON = [
  ["Who writes", "You write", "I write"],
  ["My role", "Thinking partner", "Writer"],
  ["The outcome", "Sharper thinking", "A finished piece"],
];

export default function Home() {
  usePageMeta({
    title: "Ink Therapy™ — Make your thinking clearer",
    description:
      "A structured writing practice for senior professionals. Think through decisions, difficult conversations and leadership questions with Aananddika Sood.",
    image: IMAGES.hero,
  });

  return (
    <>
      <section className="hero-center">
        <div className="hero-center__copy">
          <p className="hero-center__eyebrow">
            A writing practice. A clearer perspective.
          </p>
          <h1 className="hero-center__title">
            Make your thinking clearer.{" "}
            <em>
              Writing is how we get
              <br /> to the thinking.
            </em>
          </h1>
          <p className="hero-center__lead">
            A structured writing practice for senior professionals who need to
            think something through—a decision, a difficult conversation, a
            leadership question, a career move, a point of view or something
            they can’t quite put into words yet.
          </p>
          <p className="hero-center__sub">
            Write your way to sharper clarity, steadier judgement and decisions
            you can stand behind.
          </p>
          <CallButton variant="btn--large" />
          <p className="hero-center__note">
            Not sure Ink Therapy is for you? Start with a conversation.
            <br />
            If it isn’t, I’ll tell you.
          </p>
        </div>

        <figure className="hero-center__figure">
          <img
            src={IMAGES.hero}
            alt="A geometric opening in modernist architecture frames a new perspective"
            fetchPriority="high"
          />
          <figcaption>
<span
  style={{
    fontSize: "20px",
    fontStyle: "italic",
    fontWeight: 500,
  }}
>
  the page is where clarity begins
</span>
         <a className="hero-center__link" href="#the-problem">
              Explore the practice
              <svg
                width="12"
                height="12"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M7 1v12M2 8l5 5 5-5"
                  stroke="currentColor"
                  strokeWidth="1.3"
                />
              </svg>
            </a>
          </figcaption>
        </figure>
      </section>

      <section className="section section--tight" id="the-problem">
        <div className="container">
          <p className="eyebrow">01 / The thinking behind the practice</p>
          <div className="split split--offset">
            <h2 className="display display--wide">
              When you have thought about it
              <br />
              <em>
                enough
                <br />
                but still don’t know what you
                <br />
                think.
              </em>
            </h2>
            <div className="copy">
              <p>
                You rewrite the email. You prepare for the meeting and leave out
                what you wanted to say.
              </p>
              <p>
                Sometimes the problem isn’t lack of information; competing noise
                needs somewhere to go.
              </p>
              <p className="copy__strong">
                Ink Therapy gives that thinking somewhere to go.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container feature">
          <figure className="feature__figure">
            <img
              src={IMAGES.stairs}
              alt="Concrete stairways offer intersecting perspectives in modernist architecture"
              loading="lazy"
            />
            <figcaption>Perspective is a practice.</figcaption>
          </figure>
          <div className="copy feature__copy">
            <p className="eyebrow">02 / What is Ink Therapy™?</p>
            <h2 className="display">
              Slow the thinking down. <em>Enough to see it.</em>
            </h2>
            <p>
              Ink Therapy™ is guided writing that helps you make sense of what
              is on your mind. Not by thinking harder, but by putting the
              thinking where you can see it.
            </p>
            <p>
              You write. I ask the questions that help you notice what matters,
              question what you assume, and say what you mean.
            </p>
            <p className="copy__strong">
              The writing is not the outcome.
              <br />
              The clarity is.
            </p>
            <Link className="link-arrow" to="/ink-therapy">
              Inside the Ink Therapy™ practice
            </Link>
          </div>
        </div>
      </section>

      <section className="section section--dark">
        <div className="container">
          <div className="section__row section__row--wide">
            <div>
              <p className="eyebrow">03 / A method, not a blank page</p>
              <h2 className="display">
                From thought <em>to perspective.</em>
              </h2>
            </div>
            <p className="section__aside">
              From what’s in your head to what you can see, examine and express.
            </p>
          </div>
          <MethodSteps steps={METHOD_SHORT} />
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <p className="eyebrow">04 / Room to work things through</p>
          <div className="split">
            <h2 className="display">
              Eight sessions. One method.{" "}
              <em>Your issue determines the path.</em>
            </h2>
            <div className="copy">
              <p className="copy__meta">
                <span>8 weeks</span>
                <span>8 guided sessions</span>
                <span>40 minutes each</span>
              </p>
              <p>
                Enough structure to move forward. Enough space for the question
                to change as your thinking becomes clearer.
              </p>
              <Link className="link-arrow" to="/ink-therapy">
                Explore the eight-week programme
              </Link>
            </div>
          </div>

          <div className="aside-row">
            <h3>Is it journaling or therapy?</h3>
            <p>
              Neither. Not a diary, not psychotherapy, and not formulaic
              coaching. A deliberate practice for thinking through what matters
              to you.
            </p>
            <p className="aside-row__note">
              Writing for clarity.
              <br />
              Not writing for its own sake.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section__row section__row--end section__row--ruled">
            <div>
              <p className="eyebrow">05 / Thinking, made visible</p>
              <h2 className="display">
                The work goes <em>beyond the page.</em>
              </h2>
            </div>
            <Link className="link-arrow" to="/about">
              Meet your thinking partner
            </Link>
          </div>

          <div className="journey">
            {JOURNEY.map((item, index) => (
              <Fragment key={item.title}>
                {index > 0 && <ArrowRight />}
                <div>
                  <p className="eyebrow eyebrow--small">{item.label}</p>
                  <h3>{item.title}</h3>
                </div>
              </Fragment>
            ))}
          </div>

          <div className="readers">
            <p className="eyebrow">Reader &amp; client perspectives</p>
            <ul>
              {READERS.map((name) => (
                <li key={name}>{name}</li>
              ))}
            </ul>
            <p className="readers__note">
              Testimonial excerpts will be published once the original quotes
              are supplied and approved.
            </p>
          </div>
        </div>
      </section>

      <Offer />

      <section className="section">
        <div className="container">
          <div className="section__row section__row--end">
            <div>
              <p className="eyebrow">Two different kinds of partnership</p>
              <h2 className="display">
                Want clearer thinking? <em>Or a finished piece?</em>
              </h2>
            </div>
            <p className="section__aside">
              Both begin with your ideas.
              <br />
              The difference is who does the writing.
            </p>
          </div>

          <div className="table-wrap">
            <table className="compare">
              <caption className="sr-only">
                Ink Therapy and ghostwriting compared
              </caption>
              <thead>
                <tr>
                  <th scope="col" className="compare__corner">
                    The distinction
                  </th>
                  <th scope="col">
                    Ink Therapy<sup>™</sup>
                  </th>
                  <th scope="col">Ghostwriting</th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map(([label, therapy, ghostwriting]) => (
                  <tr key={label}>
                    <th scope="row">{label}</th>
                    <td>{therapy}</td>
                    <td>{ghostwriting}</td>
                  </tr>
                ))}
                <tr>
                  <th scope="row">Explore</th>
                  <td>
                    <Link
                      className="link-arrow link-arrow--plain"
                      to="/ink-therapy"
                    >
                      Ink Therapy™
                    </Link>
                  </td>
                  <td>
                    <Link
                      className="link-arrow link-arrow--plain"
                      to="/ghostwriting"
                    >
                      Executive Communication
                    </Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CtaSection />
    </>
  );
}
