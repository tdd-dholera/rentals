"use client";

import { useEffect, useState } from "react";

const whatsappNumber = "918448094508";
const whatsappMessage = "Hello, I would like to know more about property investment and rental opportunities in Dholera.";
const formSource = "Rentals in Dholera";

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function EnquiryActions() {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

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

  const openForm = () => {
    setFeedback(null);
    setIsOpen(true);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSubmitting) return;

    const form = event.currentTarget;
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const phone = String(formData.get("phone") || "").replace(/\D/g, "");

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fields: { name, phone, source: formSource },
          source: formSource,
        }),
      });
      const result = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(result.error || "Unable to submit your enquiry. Please try again.");
      }

      form.reset();
      setFeedback({
        type: "success",
        message: "Thank you. Your enquiry has been submitted successfully.",
      });
    } catch (error) {
      setFeedback({
        type: "error",
        message: error.message || "Unable to submit your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className="hero-actions">
        <button className="button button-main" type="button" onClick={openForm}>
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
                <input type="text" name="name" autoComplete="name" maxLength={100} autoFocus required />
              </label>
              <label>
                Phone Number
                <input type="tel" name="phone" autoComplete="tel" inputMode="tel" minLength={10} maxLength={20} required />
              </label>
              <button className="button button-main enquiry-submit" type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Submit Enquiry"} {!isSubmitting ? <ArrowIcon /> : null}
              </button>
              {feedback ? (
                <p className={`enquiry-feedback is-${feedback.type}`} role={feedback.type === "error" ? "alert" : "status"}>
                  {feedback.message}
                </p>
              ) : null}
            </form>
          </section>
        </div>
      ) : null}
    </>
  );
}
