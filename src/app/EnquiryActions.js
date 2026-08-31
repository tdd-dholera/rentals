"use client";

import { useEffect, useState } from "react";

const whatsappNumber = "918448094508";
const whatsappMessage = "Hello, I would like to know more about property investment and rental opportunities in Dholera.";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function EnquiryActions() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.classList.add("modal-open");

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.classList.remove("modal-open");
    };
  }, [isOpen]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello, I would like to explore an investment opportunity in Dholera.",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone")}`,
    ].join("\n");

    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  return (
    <>
      <div className="hero-actions">
        <button className="button button-main" type="button" onClick={() => setIsOpen(true)}>
          Explore <ArrowIcon />
        </button>
        <a
          className="button button-ghost"
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noreferrer"
        >
          Talk to Our Team
        </a>
      </div>

      {isOpen ? (
        <div className="enquiry-modal" role="presentation" onMouseDown={(event) => {
          if (event.target === event.currentTarget) setIsOpen(false);
        }}>
          <section className="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiry-title">
            <button className="enquiry-close" type="button" onClick={() => setIsOpen(false)} aria-label="Close enquiry form">&times;</button>
            <p className="enquiry-eyebrow">Investment Enquiry</p>
            <h2 id="enquiry-title">Explore Dholera Opportunities</h2>
            <p className="enquiry-intro">Share your details and our team will help you understand the options suitable for your goals.</p>

            <form className="enquiry-form" onSubmit={handleSubmit}>
              <label>
                Full Name
                <input type="text" name="name" autoComplete="name" autoFocus required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" required />
              </label>
              <button className="button button-main enquiry-submit" type="submit">Send Enquiry on WhatsApp <ArrowIcon /></button>
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
