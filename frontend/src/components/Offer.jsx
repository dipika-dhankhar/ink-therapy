import CallButton from './CallButton.jsx';

export default function Offer({ id }) {
  return (
    <section className="section section--dark offer" id={id}>
      <div className="container offer__inner">
        <div className="offer__main">
          <p className="eyebrow">The flagship practice</p>
          <h2 className="offer__title">
            Ink Therapy<sup>™</sup>
          </h2>
          <p className="offer__lead">
            The cost of eight weeks
            <br />
            <em>thinking through what matters.</em>
          </p>
          <p className="offer__text">
            Sharper thinking. Steadier judgement.
            <br />
            Decisions you can stand behind.
          </p>
        </div>

        <div className="offer__side">
          <p className="offer__meta">8 weeks · 8 sessions · 40 minutes each</p>
          <p className="offer__price">₹19,999</p>
          <p className="offer__unit">for the complete programme</p>
          <div className="offer__promise">
            <p className="eyebrow">The Right-Fit Promise</p>
            <p>
              Not the right fit after the first two sessions?
              <br />
              The full balance is refunded.
            </p>
          </div>
          <CallButton variant="btn--light" />
          <p className="offer__note">Start with a free conversation. No pressure to commit.</p>
        </div>
      </div>
    </section>
  );
}