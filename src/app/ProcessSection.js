"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import choosePlotImage from "@/assets/Choose-Plot.webp";
import villaImage from "@/assets/villa .webp";
import earnRentalImage from "@/assets/Earn-Rental.webp";

const steps = [
  {
    number: "01",
    label: "Choose Your Plot",
    description: "Select a well-located plot aligned with your budget and rental goals.",
    image: choosePlotImage,
  },
  {
    number: "02",
    label: "Build Your Villa",
    description: "Create a modern, tenant-ready home with practical planning support.",
    image: villaImage,
  },
  {
    number: "03",
    label: "Earn Rental Income",
    description: "Position your completed property for tenants and recurring rental returns.",
    image: earnRentalImage,
  },
];

function Arrow({ previous = false }) {
  return (
    <svg className={previous ? "is-previous" : ""} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function ProcessSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const didSwipe = useRef(false);
  const nextIndex = (activeIndex + 1) % steps.length;

  const showPrevious = () => setActiveIndex((current) => (current - 1 + steps.length) % steps.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % steps.length);

  const handleTouchEnd = (event) => {
    if (touchStart === null) return;
    const distance = event.changedTouches[0].clientX - touchStart;
    if (Math.abs(distance) > 45) {
      didSwipe.current = true;
      if (distance < 0) showNext();
      else showPrevious();
    }
    setTouchStart(null);
  };

  const handleCardClick = () => {
    if (didSwipe.current) {
      didSwipe.current = false;
      return;
    }
    showNext();
  };

  return (
    <section className="section process-section" id="start">
      <div className="shell">
        <div className="process-heading">
          <div className="section-heading light">
            <p>A Simple 3-Step Journey</p>
            <h2>Start Your Rental Income Today</h2>
            <span aria-hidden="true" />
          </div>
        </div>

        <div
          className="process-grid"
          role="region"
          aria-roledescription="carousel"
          aria-label="Rental income journey"
          onTouchStart={(event) => { didSwipe.current = false; setTouchStart(event.touches[0].clientX); }}
          onTouchEnd={handleTouchEnd}
        >
          {steps.map((step, index) => {
            const state = index === activeIndex ? " is-active" : index === nextIndex ? " is-next" : " is-hidden";
            return (
              <article
                className={`process-card${state}`}
                key={step.number}
                role={index === activeIndex ? "button" : undefined}
                tabIndex={index === activeIndex ? 0 : -1}
                onClick={index === activeIndex ? handleCardClick : undefined}
                onKeyDown={index === activeIndex ? (event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    showNext();
                  }
                } : undefined}
                aria-label={index === activeIndex ? `${step.label}. Tap to show the next step.` : undefined}
              >
                <div className="process-image">
                  <Image src={step.image} alt={step.label} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  <span className="process-number">{step.number}</span>
                </div>
                <div className="process-card-body">
                  <span className="process-step-label">Step {index + 1}</span>
                  <h3>{step.label}</h3>
                </div>
                {index < steps.length - 1 ? <span className="process-connector" aria-hidden="true"><Arrow /></span> : null}
              </article>
            );
          })}
        </div>

        <div className="process-mobile-controls">
          <button className="process-slider-button" type="button" onClick={(event) => { event.stopPropagation(); showPrevious(); }} aria-label="Previous step"><Arrow previous /></button>
          <div className="process-mobile-dots" aria-label={`Step ${activeIndex + 1} of ${steps.length}`}>
            {steps.map((step, index) => (
              <button
                className={index === activeIndex ? "is-active" : ""}
                type="button"
                key={step.number}
                onClick={(event) => { event.stopPropagation(); setActiveIndex(index); }}
                aria-label={`Show step ${index + 1}: ${step.label}`}
                aria-current={index === activeIndex ? "step" : undefined}
              />
            ))}
          </div>
          <button className="process-slider-button" type="button" onClick={(event) => { event.stopPropagation(); showNext(); }} aria-label="Next step"><Arrow /></button>
        </div>
      </div>
    </section>
  );
}
