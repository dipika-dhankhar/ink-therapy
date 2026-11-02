import { Link } from 'react-router-dom';

export default function EssayCard({ essay }) {
  return (
    <Link to={`/writing-for-thinking/${essay.slug}`} className="essay-card">
      <div className="essay-card__image">
        <img src={essay.image} alt={essay.imageAlt} loading="lazy" />
      </div>
      <p className="essay-card__meta">
        {essay.theme} / {essay.readTime} min read
      </p>
      <h3>{essay.title}</h3>
      <p>{essay.excerpt}</p>
      <span className="link-arrow">Read the essay</span>
    </Link>
  );
}
