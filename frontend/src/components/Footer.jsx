import { Link } from 'react-router-dom';
import { EMAIL, FOOTER_LINKS } from '../data/site.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <div>
            <Link to="/" className="footer__brand">
              Ink Therapy<sup>™</sup>
            </Link>
            <p className="footer__tagline">Writing is how we get to the thinking.</p>
          </div>
          <a className="link-arrow link-arrow--plain" href={`mailto:${EMAIL}`}>
            {EMAIL}
          </a>
        </div>

        <div className="footer__bottom">
          <p>© 2026 INK THERAPY™. ALL RIGHTS RESERVED.</p>
          <nav aria-label="Footer">
            {FOOTER_LINKS.map(({ to, label }) => (
              <Link key={to} to={to}>
                {label}
              </Link>
            ))}
          </nav>
          <p>By Aananddika Sood</p>
        </div>
      </div>
    </footer>
  );
}