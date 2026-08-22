import Image from "next/image";

const whyDholera = [
  "India’s First Greenfield Smart City",
  "Government-backed infrastructure development",
  "6 Lakh+ crore industrial investments",
  "Semiconductor Hub",
  "Planned residential and commercial zones",
  "Plug-and-play infrastructure",
  "Growing employment and business potential",
  "Long-term property appreciation potential",
];

const processSteps = [
  { number: "01", label: "Choose Your Plot", icon: "plot" },
  { number: "02", label: "Build Your Villa", icon: "villa" },
  { number: "03", label: "Earn Rental Income", icon: "income" },
];

const benefits = [
  { label: "Due Diligence Support", icon: "document" },
  { label: "On-Ground Team", icon: "team" },
  { label: "Local Market Understanding", icon: "map" },
  { label: "Rental-Income Focused Approach", icon: "key" },
  { label: "Property & Project Comparison", icon: "compare" },
  { label: "Transparent Guidance", icon: "guide" },
  { label: "Site Visit Assistance", icon: "visit" },
];

const testimonials = [
  {
    quote: "“Rental In Dholera helped us understand the property options and rental possibilities before making our decision.”",
    name: "Ranjan",
    position: "left",
  },
  {
    quote: "“The guidance was simple and focused on our budget and investment goal.”",
    name: "Anjana",
    position: "center",
  },
  {
    quote: "“We wanted to understand Dholera before investing. The team helped us compare the available options clearly.”",
    name: "Allen",
    position: "right",
  },
];

const faqs = [
  {
    question: "Can I buy a plot in Dholera and build a rental property?",
    answer: "Yes, investors can explore residential plots where the applicable land use and approvals permit construction. Property documents and permitted use should always be verified before investing.",
  },
  {
    question: "How can I earn rental income from Dholera?",
    answer: "A common approach is to invest in a suitable residential plot, construct a property and rent it to suitable tenants. Actual rental income depends on location, property type, demand and occupancy.",
  },
  {
    question: "Do you help with villa construction in Dholera?",
    answer: "Yes. We help investors with villa construction as part of their Dholera investment and rental property planning.",
  },
  {
    question: "Do you provide rental assistance?",
    answer: "Yes. We assist with rental-related activities such as property promotion and tenant coordination after the property is ready.",
  },
  {
    question: "Is rental income guaranteed?",
    answer: "No. Rental income is not guaranteed. Returns depend on tenant demand, rental rates, occupancy, property costs and market conditions.",
  },
];

function Brand() {
  return (
    <a className="brand" href="#top" aria-label="Rental In Dholera home">
      <span className="brand-mark" aria-hidden="true"><span /></span>
      <span className="brand-copy">
        <strong>Rental In Dholera</strong>
      </span>
    </a>
  );
}

function Icon({ name }) {
  const paths = {
    plot: <><path d="M3 19 9 7l6 3 6-5v14"/><path d="M3 19h18M9 7v12M15 10v9"/></>,
    villa: <><path d="m3 11 9-7 9 7"/><path d="M5 10v10h14V10M9 20v-6h6v6"/></>,
    income: <><path d="M4 19V9M10 19V5M16 19v-8M22 19H2"/><path d="m15 6 3-3 3 3M18 3v7"/></>,
    document: <><path d="M6 2h9l4 4v16H6z"/><path d="M14 2v5h5M9 12h7M9 16h7"/></>,
    team: <><circle cx="9" cy="8" r="3"/><circle cx="17" cy="9" r="2"/><path d="M3 20c0-4 2-7 6-7s6 3 6 7M15 14c3 0 5 2 5 5"/></>,
    map: <><path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3z"/><path d="M9 3v15M15 6v15"/></>,
    key: <><circle cx="8" cy="15" r="4"/><path d="m11 12 9-9M15 8l3 3M17 6l2 2"/></>,
    compare: <><path d="M4 7h12M13 4l3 3-3 3M20 17H8M11 14l-3 3 3 3"/></>,
    guide: <><path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z"/><path d="m9 12 2 2 4-5"/></>,
    visit: <><path d="M12 21s7-6 7-12a7 7 0 1 0-14 0c0 6 7 12 7 12Z"/><circle cx="12" cy="9" r="2"/></>,
    check: <path d="m5 12 4 4L19 6"/>,
    arrow: <><path d="M5 12h14M13 6l6 6-6 6"/></>,
  };

  return <svg viewBox="0 0 24 24" aria-hidden="true">{paths[name]}</svg>;
}

function SectionHeading({ eyebrow, title, light = false }) {
  return (
    <div className={`section-heading${light ? " light" : ""}`}>
      {eyebrow ? <p>{eyebrow}</p> : null}
      <h2>{title}</h2>
      <span aria-hidden="true" />
    </div>
  );
}

function NavLinks() {
  return (
    <>
      <a href="#why-dholera">Why Dholera?</a>
      <a href="#start">Rental Income in Dholera</a>
      <a href="#about">About Us</a>
      <a href="#why-us">Why Choose Us?</a>
      <a href="#testimonials">TESTIMONIALS</a>
      <a href="#faq">FAQ</a>
    </>
  );
}

export default function Home() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main id="top">
      <section className="hero" aria-labelledby="hero-title">
        <Image className="hero-image" src="/images/dholera-hero.png" alt="Plotted residential land and planned development in Dholera" fill priority sizes="100vw" />
        <div className="hero-overlay" />
        <div className="hero-top shell">
          <Brand />
          <p className="hero-kicker">Property Investment With a Rental-Focused Approach</p>
        </div>
        <div className="hero-content shell">
          <div className="hero-frame">
            <h1 id="hero-title">Build Rental Income in Dholera</h1>
            <p className="hero-description">Explore rental-focused investment opportunities in Dholera with expert guidance on the local market, suitable properties, and potential rental income.</p>
            <div className="hero-actions">
              <a className="button button-main" href="#start">Explore Opportunities <Icon name="arrow" /></a>
              <a className="button button-ghost" href="#about">Talk to Our Team</a>
            </div>
          </div>
        </div>
        <a className="scroll-cue" href="#why-dholera" aria-label="Scroll to Why Dholera"><span /></a>
      </section>

      <header className="site-nav">
        <div className="shell nav-inner">
          <Brand />
          <nav className="desktop-nav" aria-label="Primary navigation"><NavLinks /></nav>
          <details className="mobile-nav">
            <summary aria-label="Open navigation"><span /><span /><span /></summary>
            <nav aria-label="Mobile navigation"><NavLinks /></nav>
          </details>
        </div>
      </header>

      <section className="section why-section" id="why-dholera">
        <div className="shell why-grid">
          <div className="image-panel">
            <Image src="/images/why-dholera.png" alt="Aerial view of planned roads and infrastructure in Dholera" fill sizes="(max-width: 800px) 100vw, 50vw" />
          </div>
          <div className="why-copy">
            <SectionHeading title="Why Dholera?" />
            <ul className="check-list">
              {whyDholera.map((item) => <li key={item}><span><Icon name="check" /></span>{item}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section process-section" id="start">
        <div className="shell">
          <SectionHeading title="Start Your Rental Income Today" light />
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.number}>
                <span className="process-number">{step.number}</span>
                <div className="process-icon"><Icon name={step.icon} /></div>
                <h3>{step.label}</h3>
                {index < processSteps.length - 1 ? <span className="process-line" aria-hidden="true" /> : null}
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-copy">
            <SectionHeading eyebrow="About Rental In Dholera" title="About Rental In Dholera" />
            <div className="about-text">
              <p>Property Investment With a Rental-Focused Approach.</p>
              <p>Buying a property is one thing.</p>
              <p>Choosing a property that also creates a rental income opportunity needs better planning.</p>
              <p>RentalInDholera helps you understand the market, explore suitable opportunities and invest according to your goals.</p>
            </div>

          </div>
          <div className="about-image">
            <div className="about-image-main">
              <Image src="/images/rental-villa.png" alt="Contemporary villa suitable for rental planning in Dholera" fill sizes="(max-width: 800px) 88vw, 42vw" />
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section" id="why-us">
        <div className="shell">
          <SectionHeading title="Why Choose Us?" />
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <article className={`benefit-card${index === benefits.length - 1 ? " featured" : ""}`} key={benefit.label}>
                <span className="benefit-index">0{index + 1}</span>
                <div className="benefit-icon"><Icon name={benefit.icon} /></div>
                <h3>{benefit.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="shell">
          <SectionHeading eyebrow="TESTIMONIALS" title="What Our Clients Say" light />
          <div className="testimonial-grid">
            {testimonials.map((testimonial, index) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className={`avatar avatar-${testimonial.position}`} role="img" aria-label={`${testimonial.name} client portrait`} />
                <span className="review-number">Review 0{index + 1}</span>
                <blockquote>{testimonial.quote}</blockquote>
                <p>{testimonial.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section" id="faq">
        <div className="shell faq-grid">
          <div className="faq-intro">
            <SectionHeading title="FAQ" />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question} open={index === 0}>
                <summary><span>0{index + 1}</span>{faq.question}<i aria-hidden="true" /></summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band" aria-label="Explore rental opportunities">
        <Image src="/images/rental-cta.png" alt="Villa terrace overlooking the Dholera landscape at sunset" fill sizes="100vw" />
        <div className="cta-overlay" />
        <div className="shell cta-content">
          <h2>Start Your Rental Income Today</h2>
          <div className="hero-actions">
            <a className="button button-main" href="#start">Explore Opportunities <Icon name="arrow" /></a>
            <a className="button button-ghost" href="#about">Talk to Our Team</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <div className="footer-about">
            <Brand />
            <p>Rental opportunities and property support in Dholera.</p>
          </div>

          <div className="footer-column">
            <h2>Address</h2>
            <address>
              <a href="https://maps.app.goo.gl/oD7yWuDQTtRUyiPx7" target="_blank" rel="noreferrer">
                620, 6th Floor, JMD Megapolis, Sector 48, Gurugram, Haryana 122018
              </a>
            </address>
          </div>

          <div className="footer-column">
            <h2>Connect</h2>
            <a href="mailto:info@bookmyassets.com">info@bookmyassets.com</a>
            <div className="footer-socials" aria-label="Social media links">
              <a href="https://www.instagram.com/bookmyassets/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61583265159985" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/bookmyassetss/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@BookMyAssets" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>

          <nav className="footer-column footer-policies" aria-label="Policy links">
            <h2>Policies</h2>
            <a href="https://www.bookmyassets.com/policies/privacy" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a href="https://www.bookmyassets.com/policies/terms" target="_blank" rel="noreferrer">Terms of Service</a>
            <a href="https://www.bookmyassets.com/policies/copyright" target="_blank" rel="noreferrer">Copyright Policy</a>
            <a href="https://www.bookmyassets.com/policies/refund-and-cancellation" target="_blank" rel="noreferrer">Refund &amp; Cancellation</a>
          </nav>
        </div>

        <div className="shell footer-bottom">
          <p>© 2026 Rental In Dholera. All rights reserved.</p>
          <a className="back-top" href="#top" aria-label="Back to top">&uarr;</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
