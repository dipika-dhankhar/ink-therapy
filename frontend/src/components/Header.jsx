import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { CALL_URL, NAV_LINKS } from '../data/site.js';

export default function Header() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.classList.toggle('no-scroll', open);
    return () => document.body.classList.remove('no-scroll');
  }, [open]);

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="brand">
          Ink Therapy<sup>™</sup>
        </Link>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Primary">
          <div className="nav__links">
            {NAV_LINKS.map(({ to, label, end }) => (
              <NavLink key={to} to={to} end={end} className="nav__link">
                {label}
              </NavLink>
            ))}
          </div>
          <a className="btn btn--small btn--outline nav__cta" href={CALL_URL} target="_blank" rel="noreferrer">
            Book your free 30-minute call
            <svg className="btn__icon" width="12" height="12" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 12L12 2M12 2H4.5M12 2V9.5" stroke="currentColor" strokeWidth="1.3" />
            </svg>
          </a>
        </nav>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-label={open ? 'Close menu' : 'Open menu'}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}