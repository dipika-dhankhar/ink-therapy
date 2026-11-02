import { CALL_URL } from '../data/site.js';

export default function CallButton({ children = 'Book your free 30-minute call', variant = '' }) {
  return (
    <a className={`btn ${variant}`} href={CALL_URL} target="_blank" rel="noreferrer">
      <span>{children}</span>
      <svg className="btn__icon" width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
        <path d="M2 12L12 2M12 2H4.5M12 2V9.5" stroke="currentColor" strokeWidth="1.2" />
      </svg>
    </a>
  );
}