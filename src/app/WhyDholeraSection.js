"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import abcdBuildingImage from "@/assets/abcd-building.webp";
import airportDholeraImage from "@/assets/airport-dholera.webp";
import expresswayDholeraImage from "@/assets/expressway-dholera.webp";
import renewDholeraImage from "@/assets/renew-dholera.webp";
import tataGateDholeraImage from "@/assets/tata-gate-dholera.webp";

const imageSlides = [
  {
    src: abcdBuildingImage,
    alt: "ABCD Building in Dholera",
    label: "ABCD Building",
  },
  {
    src: airportDholeraImage,
    alt: "Dholera International Airport development",
    label: "Dholera International Airport",
  },
  {
    src: expresswayDholeraImage,
    alt: "Ahmedabad Dholera Expressway",
    label: "Ahmedabad Dholera Expressway",
  },
  {
    src: renewDholeraImage,
    alt: "ReNew development in Dholera",
    label: "ReNew Power",
  },
  {
    src: tataGateDholeraImage,
    alt: "Tata facility entrance in Dholera",
    label: "Tata Semiconductor",
  },
];

const reasons = [
  { text: "India's First Greenfield Smart City" },
  { text: "Government backed infrastructure development" },
  { text: "6 Lakh+ crore industrial investments" },
  { text: "Semiconductor Hub" },
  { text: "Planned residential and commercial zones" },
  { text: "Plug and play infrastructure" },
  { text: "Growing employment and business potential" },
  { text: "Long term property appreciation potential" },
];

function ArrowIcon({ previous = false }) {
  return (
    <svg className={previous ? "is-previous" : ""} viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M13 6l6 6-6 6" />
    </svg>
  );
}

export default function WhyDholeraSection() {
  const railRef = useRef(null);
  const [activeImage, setActiveImage] = useState(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) return undefined;

    const slideshow = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % imageSlides.length);
    }, 4000);

    return () => window.clearInterval(slideshow);
  }, []);

  const moveCarousel = (direction) => {
    const rail = railRef.current;
    const card = rail?.querySelector("li");

    if (!rail || !card) return;

    const gap = Number.parseFloat(getComputedStyle(rail).columnGap) || 18;
    const step = card.offsetWidth + gap;
    const currentIndex = Math.round(rail.scrollLeft / step);
    const maxIndex = Math.max(0, Math.ceil((rail.scrollWidth - rail.clientWidth) / step));
    const targetIndex = direction > 0
      ? (currentIndex >= maxIndex ? 0 : currentIndex + 1)
      : (currentIndex <= 0 ? maxIndex : currentIndex - 1);
    const isWrapping = Math.abs(targetIndex - currentIndex) > 1;

    rail.scrollTo({ left: targetIndex * step, behavior: isWrapping ? "auto" : "smooth" });
  };

  return (
    <section className="section why-section" id="why-dholera">
      <div className="shell">
        <div className="why-heading-row">
          <div className="section-heading">
            <h2>Why Dholera?</h2>
            <span aria-hidden="true" />
          </div>
          <p>Explore the planning, infrastructure and business drivers shaping Dholera's long term growth potential.</p>
        </div>

        <div className="why-carousel-layout">
          <div className="why-image-panel" role="group" aria-roledescription="carousel" aria-label="Dholera development images">
            {imageSlides.map((slide, index) => (
              <Image
                className={`why-image-slide${index === activeImage ? " is-active" : ""}`}
                key={slide.label}
                src={slide.src}
                alt={index === activeImage ? slide.alt : ""}
                fill
                sizes="(max-width: 760px) calc(100vw - 28px), 42vw"
              />
            ))}
            <div className="why-image-shade" aria-hidden="true" />
            <div className="why-image-meta" aria-live="polite">
              <span>0{activeImage + 1} / 0{imageSlides.length}</span>
              <p>{imageSlides[activeImage].label}</p>
            </div>
          </div>

          <div className="why-carousel-panel">
            <div className="why-carousel-top">
              <p>Reasons to Explore</p>
              <div className="carousel-controls" aria-label="Reason card controls">
                <button type="button" onClick={() => moveCarousel(-1)} aria-label="Show previous reasons">
                  <ArrowIcon previous />
                </button>
                <button type="button" onClick={() => moveCarousel(1)} aria-label="Show next reasons">
                  <ArrowIcon />
                </button>
              </div>
            </div>

            <ul className="why-carousel-rail" ref={railRef} tabIndex={0} aria-label="Reasons to consider Dholera">
              {reasons.map((reason, index) => (
                <li className="why-reason-card" key={reason.text}>
                  <span>0{index + 1}</span>
                  <p>{reason.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
