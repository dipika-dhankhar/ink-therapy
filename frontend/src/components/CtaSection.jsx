import CallButton from './CallButton.jsx';

export default function CtaSection() {
  return (
    <section className="cta">
      <div className="container cta__inner">
        <p className="eyebrow">Start with what’s on your mind</p>
        <h2 className="display">
          You don’t need the right words. <em>Just a place to begin.</em>
        </h2>
        <CallButton />
        <p className="cta__note">
          Not sure Ink Therapy is for you? Start with a conversation.
          <br />
          If it isn’t, I’ll tell you.
        </p>
      </div>
    </section>
  );
}
