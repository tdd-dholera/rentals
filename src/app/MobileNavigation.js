"use client";

import { useRef, useState } from "react";

const links = [
  { href: "#why-dholera", label: "Why Dholera?" },
  { href: "#start", label: "Rental Income in Dholera" },
  { href: "#about", label: "About Us" },
  { href: "#why-us", label: "Why Choose Us?" },
  { href: "#testimonials", label: "Testimonials" },
  { href: "#faq", label: "FAQ" },
];

export default function MobileNavigation() {
  const detailsRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    detailsRef.current?.removeAttribute("open");
    setIsOpen(false);
  };

  const handleKeyDown = (event) => {
    if (event.key !== "Escape") return;

    closeMenu();
    detailsRef.current?.querySelector("summary")?.focus();
  };

  return (
    <details
      className="mobile-nav"
      ref={detailsRef}
      onKeyDown={handleKeyDown}
      onToggle={(event) => setIsOpen(event.currentTarget.open)}
    >
      <summary aria-label={isOpen ? "Close navigation" : "Open navigation"} aria-expanded={isOpen}>
        <span />
        <span />
        <span />
      </summary>
      <nav aria-label="Mobile navigation">
        {links.map((link) => (
          <a href={link.href} key={link.href} onClick={closeMenu}>{link.label}</a>
        ))}
      </nav>
    </details>
  );
}
