import Image from "next/image";
import ProcessSection from "./ProcessSection";
import WhyDholeraSection from "./WhyDholeraSection";
import EnquiryActions from "./EnquiryActions";
import MobileNavigation from "./MobileNavigation";
import dueDiligenceIcon from "../assets/due diligence support icon.svg";
import localMarketIcon from "../assets/local market undertanding icon.svg";
import onGroundTeamIcon from "../assets/on ground team icon.svg";
import propertyComparisonIcon from "../assets/property and project comparison icon.svg";
import rentalIncomeIcon from "../assets/rental income focased approach icon.svg";
import siteVisitIcon from "../assets/site visit assistance icon.svg";
import transparentGuidanceIcon from "../assets/tranparent guidance icon.svg";
import img1 from "@/assets/home-page.webp"
import mobileHeroImage from "@/assets/hero-section-mobile.webp"
import img3 from "@/assets/About-Rentals-In-Dholera.webp"
import mobileAboutImage from "@/assets/About-Rentals-In-Dholera-mobile-2.webp"
import logoImage from "@/assets/logo.png"
import logoWhiteImage from "@/assets/logo-white.png"

const benefits = [
  { label: "Due Diligence Support", icon: dueDiligenceIcon },
  { label: "On Ground Team", icon: onGroundTeamIcon },
  { label: "Local Market Understanding", icon: localMarketIcon },
  { label: "Rental Income Focused Approach", icon: rentalIncomeIcon },
  { label: "Property & Project Comparison", icon: propertyComparisonIcon },
  { label: "Transparent Guidance", icon: transparentGuidanceIcon },
  { label: "Site Visit Assistance", icon: siteVisitIcon },
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
    answer: "We connect with you, understand your requirement and support you with best suited solution.",
  },
  {
    question: "Do you provide rental assistance?",
    answer: "Yes. We assist with rental related activities such as property promotion and tenant coordination after the property is ready.",
  },
  {
    question: "Is rental income guaranteed?",
    answer: "No. Rental income is not guaranteed. Returns depend on tenant demand, rental rates, occupancy, property costs and market conditions.",
  },
];

function Brand({ inverse = false }) {
  return (
    <a className="brand" href="#top" aria-label="Rental In Dholera home">
      <Image className="brand-logo" src={inverse ? logoWhiteImage : logoImage} alt="Rentals in Dholera" priority />
    </a>
  );
}

function Icon({ name }) {
  const paths = {
    plot: <><path d="M12 14s4-3.3 4-7a4 4 0 1 0-8 0c0 3.7 4 7 4 7Z"/><circle cx="12" cy="7" r="1.25"/><path d="m7.5 13-4.5 3 4.5 3 4.5-3 4.5 3 4.5-3-4.5-3"/></>,
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
    mail: <><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/></>,
    phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.8a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.33 1.84.56 2.8.69A2 2 0 0 1 22 16.92Z"/>,
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
      <a href="#testimonials">Testimonials</a>
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
        <Image className="hero-image hero-image-desktop" src={img1} alt="Plotted residential land and planned development in Dholera" fill priority sizes="(max-width: 760px) 0px, 100vw" />
        <Image className="hero-image hero-image-mobile" src={mobileHeroImage} alt="Plotted residential land and planned development in Dholera" fill priority sizes="(max-width: 760px) 100vw, 0px" />
        <div className="hero-overlay" />
        <div className="hero-top shell">
          <Brand inverse />
          <p className="hero-kicker">Property Investment With a Rental Focused Approach</p>
        </div>
        <div className="hero-content shell">
          <div className="hero-frame">
            <h1 id="hero-title">Build Rental Income in Dholera</h1>
            <p className="hero-description">Turn your Dholera investment into a potential rental income asset with support for plot selection, villa construction, and rental assistance.</p>
            <EnquiryActions />
          </div>
        </div>
        <a className="scroll-cue" href="#why-dholera" aria-label="Scroll to Why Dholera"><span /></a>
      </section>

      <header className="site-nav">
        <div className="shell nav-inner max-w-6xl">
          <Brand inverse />
          <nav className="desktop-nav" aria-label="Primary navigation"><NavLinks /></nav>
          <MobileNavigation />
        </div>
      </header>

      <WhyDholeraSection />

      <ProcessSection />

      <section className="section about-section" id="about">
        <div className="shell about-grid">
          <div className="about-copy">
            <SectionHeading eyebrow="About Us" title="About Rental In Dholera" />
            <div className="about-text">
              <h3>Helping Investors Turn Dholera Property Into Potential Rental Income</h3>
              <p>Rental in Dholera is a property investment and rental assistance platform focused on helping investors make the most of the growing Dholera region.</p>
              <p>Our approach is simple. We help investors find the right plot, build the right property and explore rental opportunities so their investment can move beyond land ownership toward a potential income generating asset.</p>
            </div>
          </div>
          <div className="about-image">
            <div className="about-image-main">
              <Image className="about-image-desktop" src={img3} alt="Contemporary villa suitable for rental planning in Dholera" fill sizes="(max-width: 760px) 0px, 42vw" />
              <Image className="about-image-mobile" src={mobileAboutImage} alt="Contemporary villa suitable for rental planning in Dholera" fill sizes="(max-width: 760px) calc(100vw - 28px), 0px" />
            </div>
          </div>
          <div className="about-services">
            <div className="about-services-heading">
              <h3>What We Do</h3>
            </div>
            <div className="about-services-grid">
              <article className="about-service-card">
                <span className="about-service-icon"><Icon name="plot" /></span>
                <h4>Plot Investment</h4>
                <p>We help investors explore suitable residential plots based on their budget and investment objectives.</p>
              </article>
              <article className="about-service-card">
                <span className="about-service-icon"><Icon name="villa" /></span>
                <h4>Villa Construction</h4>
                <p>We assist with constructing residential properties designed for personal use or potential rental purposes.</p>
              </article>
              <article className="about-service-card">
                <span className="about-service-icon"><Icon name="income" /></span>
                <h4>Rental Assistance</h4>
                <p>Once the property is ready, we help with rental related activities including property promotion and tenant coordination.</p>
              </article>
              <article className="about-service-card">
                <span className="about-service-icon"><Icon name="guide" /></span>
                <h4>End to End Support</h4>
                <p>From property selection to construction and rental assistance, we help coordinate the key stages of your investment.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="section benefits-section" id="why-us">
        <div className="shell">
          <SectionHeading title="Why Choose Us?" />
          <div className="benefits-grid" tabIndex={0} aria-label="Why choose us benefits">
            {benefits.map((benefit, index) => (
              <article className={`benefit-card${index === benefits.length - 1 ? " featured" : ""}`} key={benefit.label} tabIndex={0}>
                <span className="benefit-index">0{index + 1}</span>
                <div className="benefit-icon">
                  <Image src={benefit.icon} alt="" aria-hidden="true" />
                </div>
                <h3>{benefit.label}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section" id="testimonials">
        <div className="shell">
          <SectionHeading eyebrow="TESTIMONIALS" title="What Our Clients Say" light />
          <div className="testimonial-grid" tabIndex={0} aria-label="Client testimonials">
            {testimonials.map((testimonial, index) => (
              <article className="testimonial-card" key={testimonial.name}>
                <div className={`avatar avatar-${testimonial.position}`} role="img" aria-label={`${testimonial.name} client portrait`} />
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
            <SectionHeading title="FAQs" />
          </div>
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
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
          <EnquiryActions />
        </div>
      </section>

      <footer className="footer">
        <div className="shell footer-main">
          <div className="footer-about">
            <Brand inverse />
            <p>We help investors explore Dholera plots, villa construction and rental opportunities under one roof.</p>
          </div>

          <div className="footer-column">
            <h2>Address</h2>
            <address>
              <a href="https://www.google.com/maps/search/?api=1&amp;query=8%2F8%20Dogran%20Street%2C%20Near%20Hoti%20Mardaan%20Gurudwara%2C%20Patiala%2C%20147001" target="_blank" rel="noreferrer">
                8/8 Dogran Street, Near Hoti Mardaan Gurudwara, Patiala, 147001
              </a>
            </address>
          </div>

          <div className="footer-column">
            <h2>Contact Us</h2>
            <a className="footer-contact" href="mailto:info@rentalsindholera.com"><Icon name="mail" /> <span>info@rentalsindholera.com</span></a>
            <a className="footer-contact" href="tel:+918448094508"><Icon name="phone" /> <span>+91 84 48 09 45 08</span></a>
            <div className="footer-socials" aria-label="Social media links">
              <a href="https://www.instagram.com/rentals_in_dholera/" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://www.facebook.com/profile.php?id=61583265159985" target="_blank" rel="noreferrer">Facebook</a>
              <a href="https://www.linkedin.com/company/bookmyassetss/" target="_blank" rel="noreferrer">LinkedIn</a>
              <a href="https://www.youtube.com/@BookMyAssets" target="_blank" rel="noreferrer">YouTube</a>
            </div>
          </div>

          <nav className="footer-column footer-policies" aria-label="Policy links">
            <h2>Policies</h2>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-and-conditions">Terms &amp; Conditions</a>
            <a href="/copyright-policy">Copyright Policy</a>
            <a href="/refund-and-cancellation-policy">Refund &amp; Cancellation Policy</a>
          </nav>
        </div>

        <div className="shell footer-bottom">
          <p>© 2026 Rentals In Dholera. All rights reserved.</p>
          <a className="back-top" href="#top" aria-label="Back to top">&uarr;</a>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </main>
  );
}
