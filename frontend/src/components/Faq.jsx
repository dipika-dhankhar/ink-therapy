import { useState } from 'react';

export default function Faq({ items }) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="faq">
      {items.map((item, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={item.q} className={`faq__item ${isOpen ? 'is-open' : ''}`}>
            <button
              type="button"
              className="faq__question"
              aria-expanded={isOpen}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              <span>{item.q}</span>
              <span className="faq__icon" aria-hidden="true">
                +
              </span>
            </button>
            <div className="faq__answer" hidden={!isOpen}>
              <p>{item.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
