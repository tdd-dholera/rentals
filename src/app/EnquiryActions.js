
"use client";

import Script from "next/script";
import { useEffect, useRef, useState } from "react";

const formSource = "Rentals in Dholera";

const recaptchaSiteKey =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function EnquiryActions() {
  const [isOpen, setIsOpen] = useState(false);

  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const [feedback, setFeedback] =
    useState(null);

  const [nameValue, setNameValue] =
    useState("");

  const [phoneValue, setPhoneValue] =
    useState("");

  const [recaptchaReady, setRecaptchaReady] =
    useState(false);

  const [recaptchaToken, setRecaptchaToken] =
    useState("");

  const recaptchaContainerRef =
    useRef(null);

  const recaptchaWidgetIdRef =
    useRef(null);

  const closeTimerRef =
    useRef(null);

  const cleanPhone =
    phoneValue.replace(/\D/g, "");

  const showRecaptcha =
    nameValue.trim().length > 1 &&
    /^\d{10,15}$/.test(cleanPhone);

  /*
   * Handle Escape key and body scroll.
   */
  useEffect(() => {
    if (!isOpen) return undefined;

    const handleKeyDown = (event) => {
      if (
        event.key === "Escape" &&
        !isSubmitting
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    document.body.classList.add(
      "modal-open"
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );

      document.body.classList.remove(
        "modal-open"
      );
    };
  }, [isOpen, isSubmitting]);

  /*
   * Cleanup success-close timer.
   */
  useEffect(() => {
    return () => {
      if (closeTimerRef.current) {
        clearTimeout(
          closeTimerRef.current
        );
      }
    };
  }, []);

  /*
   * Render reCAPTCHA only after
   * valid name + phone are entered.
   */
  useEffect(() => {
    if (
      !isOpen ||
      !showRecaptcha ||
      !recaptchaReady ||
      !recaptchaSiteKey ||
      !recaptchaContainerRef.current ||
      typeof window === "undefined" ||
      !window.grecaptcha
    ) {
      return undefined;
    }

    let isCancelled = false;

    window.grecaptcha.ready(() => {
      if (
        isCancelled ||
        !recaptchaContainerRef.current ||
        recaptchaWidgetIdRef.current !== null
      ) {
        return;
      }

      recaptchaWidgetIdRef.current =
        window.grecaptcha.render(
          recaptchaContainerRef.current,
          {
            sitekey: recaptchaSiteKey,

            size: window.matchMedia(
              "(max-width: 360px)"
            ).matches
              ? "compact"
              : "normal",

            callback: (token) => {
              setRecaptchaToken(token);
              setFeedback(null);
            },

            "expired-callback": () => {
              setRecaptchaToken("");
            },

            "error-callback": () => {
              setRecaptchaToken("");

              setFeedback({
                type: "error",
                message:
                  "Security verification failed. Please try again.",
              });
            },
          }
        );
    });

    return () => {
      isCancelled = true;
    };
  }, [
    isOpen,
    showRecaptcha,
    recaptchaReady,
  ]);

  /*
   * Remove valid token if user changes
   * name/phone and details become invalid.
   */
  useEffect(() => {
    if (!showRecaptcha) {
      setRecaptchaToken("");

      if (
        typeof window !== "undefined" &&
        window.grecaptcha &&
        recaptchaWidgetIdRef.current !== null
      ) {
        try {
          window.grecaptcha.reset(
            recaptchaWidgetIdRef.current
          );
        } catch {
          // Ignore reset error.
        }
      }
    }
  }, [showRecaptcha]);

  const resetRecaptcha = () => {
    setRecaptchaToken("");

    if (
      typeof window !== "undefined" &&
      window.grecaptcha &&
      recaptchaWidgetIdRef.current !== null
    ) {
      try {
        window.grecaptcha.reset(
          recaptchaWidgetIdRef.current
        );
      } catch {
        // Ignore reset error.
      }
    }
  };

  const resetFormState = () => {
    setNameValue("");
    setPhoneValue("");
    setRecaptchaToken("");
    setFeedback(null);

    recaptchaWidgetIdRef.current =
      null;
  };

  const openForm = () => {
    /*
     * Clear any old timer.
     */
    if (closeTimerRef.current) {
      clearTimeout(
        closeTimerRef.current
      );

      closeTimerRef.current = null;
    }

    resetFormState();

    setIsOpen(true);
  };

  const closeForm = () => {
    if (isSubmitting) return;

    if (closeTimerRef.current) {
      clearTimeout(
        closeTimerRef.current
      );

      closeTimerRef.current = null;
    }

    resetRecaptcha();
    resetFormState();

    setIsOpen(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const name =
      nameValue.trim();

    const phone =
      phoneValue.replace(/\D/g, "");

    /*
     * Validate name.
     */
    if (!name) {
      setFeedback({
        type: "error",
        message:
          "Please enter your full name.",
      });

      return;
    }

    /*
     * Validate phone.
     */
    if (!/^\d{10,15}$/.test(phone)) {
      setFeedback({
        type: "error",
        message:
          "Please enter a valid phone number.",
      });

      return;
    }

    /*
     * reCAPTCHA verification required.
     */
    if (!recaptchaToken) {
      setFeedback({
        type: "error",
        message:
          "Please complete the security verification.",
      });

      return;
    }

    const form =
      event.currentTarget;

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch(
        "/api/submit-form",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json",
          },

          body: JSON.stringify({
            fields: {
              name,
              phone,
              source: formSource,
            },

            source: formSource,

            recaptchaToken,
          }),
        }
      );

      const result =
        await response
          .json()
          .catch(() => ({}));

      if (!response.ok) {
        throw new Error(
          result.error ||
            "Unable to submit your enquiry. Please try again."
        );
      }

      /*
       * Lead submitted successfully.
       */
      form.reset();

      resetRecaptcha();

      setNameValue("");
      setPhoneValue("");

      /*
       * IMPORTANT:
       * Show success message FIRST.
       */
      setFeedback({
        type: "success",
        message:
          "Thank you. Your enquiry has been submitted successfully.",
      });

      /*
       * Keep popup visible for 2 seconds
       * so user can read the success message.
       */
      closeTimerRef.current =
        setTimeout(() => {
          setIsOpen(false);

          setFeedback(null);

          setNameValue("");
          setPhoneValue("");
          setRecaptchaToken("");

          recaptchaWidgetIdRef.current =
            null;

          closeTimerRef.current =
            null;
        }, 2000);
    } catch (error) {
      resetRecaptcha();

      setFeedback({
        type: "error",

        message:
          error?.message ||
          "Unable to submit your enquiry. Please try again.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/*
       * Load reCAPTCHA only after
       * user enters valid details.
       */}
      {isOpen &&
      showRecaptcha &&
      recaptchaSiteKey ? (
        <Script
          src="https://www.google.com/recaptcha/api.js?render=explicit"
          strategy="afterInteractive"
          onReady={() => {
            setRecaptchaReady(true);
          }}
          onLoad={() => {
            setRecaptchaReady(true);
          }}
          onError={() => {
            setRecaptchaReady(false);

            setFeedback({
              type: "error",
              message:
                "Security verification failed to load. Please refresh the page.",
            });
          }}
        />
      ) : null}

      <div className="hero-actions">
        <button
          className="button button-main"
          type="button"
          onClick={openForm}
        >
          Explore
          <ArrowIcon />
        </button>

        <button
          className="button button-ghost"
          type="button"
          onClick={openForm}
        >
          Talk to Our Team
        </button>
      </div>

      {isOpen ? (
        <div
          className="enquiry-modal"
          role="presentation"
          onMouseDown={(event) => {
            if (
              event.target ===
              event.currentTarget
            ) {
              closeForm();
            }
          }}
        >
          <section
            className="enquiry-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="enquiry-title"
          >
            <button
              className="enquiry-close"
              type="button"
              onClick={closeForm}
              aria-label="Close enquiry form"
              disabled={isSubmitting}
            >
              &times;
            </button>

            <p className="enquiry-eyebrow">
              Investment Enquiry
            </p>

            <h2 id="enquiry-title">
              Explore Dholera Opportunities
            </h2>

            <p className="enquiry-intro">
              Share your details and our
              team will help you understand
              the options suitable for your
              goals.
            </p>

            <form
              className="enquiry-form"
              onSubmit={handleSubmit}
            >
              <label>
                Full Name

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  maxLength={100}
                  autoFocus
                  required
                  value={nameValue}
                  disabled={
                    feedback?.type ===
                    "success"
                  }
                  onChange={(event) => {
                    setNameValue(
                      event.target.value
                    );
                  }}
                />
              </label>

              <label>
                Phone Number

                <input
                  type="tel"
                  name="phone"
                  autoComplete="tel"
                  inputMode="tel"
                  minLength={10}
                  maxLength={20}
                  required
                  value={phoneValue}
                  disabled={
                    feedback?.type ===
                    "success"
                  }
                  onChange={(event) => {
                    setPhoneValue(
                      event.target.value
                    );
                  }}
                />
              </label>

              {showRecaptcha ? (
                <div className="enquiry-recaptcha">
                  {recaptchaSiteKey ? (
                    <>
                      <div
                        ref={
                          recaptchaContainerRef
                        }
                      />

                      {!recaptchaReady ? (
                        <p
                          className="enquiry-feedback"
                          role="status"
                        >
                          Loading security
                          verification...
                        </p>
                      ) : null}
                    </>
                  ) : (
                    <p
                      className="enquiry-feedback is-error"
                      role="alert"
                    >
                      Security verification
                      is not configured.
                    </p>
                  )}
                </div>
              ) : null}

              {feedback?.type !==
              "success" ? (
                <button
                  className="button button-main enquiry-submit"
                  type="submit"
                  disabled={
                    isSubmitting ||
                    !showRecaptcha ||
                    !recaptchaToken
                  }
                >
                  {isSubmitting
                    ? "Submitting..."
                    : "Submit Enquiry"}

                  {!isSubmitting ? (
                    <ArrowIcon />
                  ) : null}
                </button>
              ) : null}

              {feedback ? (
                <p
                  className={`enquiry-feedback is-${feedback.type}`}
                  role={
                    feedback.type ===
                    "error"
                      ? "alert"
                      : "status"
                  }
                >
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
