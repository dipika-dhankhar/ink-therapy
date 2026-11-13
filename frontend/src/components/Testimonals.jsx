export default function Testimonials({ eyebrow, heading, items }) {
  return (
    <div className="testimonials">
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      {heading && <h3 className="testimonials__heading">{heading}</h3>}
      <div className="testimonials__grid">
        {items.map(({ name, role, quote }) => (
          <figure key={name} className="testimonial">
            <blockquote>“{quote}”</blockquote>
            <figcaption>
              <span className="testimonial__name">{name}</span>
              {role && <span className="testimonial__role">{role}</span>}
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  );
}