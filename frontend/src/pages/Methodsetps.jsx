import ArrowRight from './ArrowRight.jsx';

export default function MethodSteps({ steps }) {
  return (
    <ol className="steps">
      {steps.map((step, index) => (
        <li key={step.title} className="steps__item">
          <div className="steps__top">
            <span>{String(index + 1).padStart(2, '0')}</span>
            {index < steps.length - 1 && <ArrowRight />}
          </div>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}