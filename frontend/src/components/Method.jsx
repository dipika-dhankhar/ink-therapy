export default function Method({ steps }) {
  return (
    <ol className="method">
      {steps.map((step, index) => (
        <li key={step.title} className="method__item">
          <span className="method__number">{String(index + 1).padStart(2, '0')}</span>
          <h3>{step.title}</h3>
          <p>{step.text}</p>
        </li>
      ))}
    </ol>
  );
}
