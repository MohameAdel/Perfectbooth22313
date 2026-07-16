"use client";

import React, { useState } from 'react';

type AccordionItemProps = {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
  id: string;
};

function AccordionItem({ question, answer, isOpen, onClick, id }: AccordionItemProps) {
  return (
    <div className="faq-accordion-item">
      <button
        id={`faq-btn-${id}`}
        className="faq-accordion-trigger"
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={onClick}
      >
        <span className="faq-accordion-question">{question}</span>
        <span className="faq-accordion-icon" aria-hidden="true">
          {isOpen ? '−' : '+'}
        </span>
      </button>
      <div
        id={`faq-panel-${id}`}
        className={`faq-accordion-panel ${isOpen ? 'open' : ''}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        aria-hidden={!isOpen}
      >
        <div className="faq-accordion-content-wrapper">
          <div className="faq-accordion-content">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

type AccordionProps = {
  items: {
    q: string;
    a: string;
  }[];
};

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-accordion-container">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          id={`item-${index}`}
          question={item.q}
          answer={item.a}
          isOpen={openIndex === index}
          onClick={() => toggleItem(index)}
        />
      ))}
    </div>
  );
}
