import Image from "next/image";
import Link from "next/link";
import logoWhiteImage from "@/assets/logo-white.png";

export const metadata = {
  title: "Privacy Policy | Rental In Dholera",
  description: "Learn how Rental in Dholera collects, uses, shares and protects personal information.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="policy-page">
      <header className="policy-header">
        <div className="shell policy-nav">
          <Link href="/" aria-label="Rental In Dholera home">
            <Image src={logoWhiteImage} alt="Rental In Dholera" priority />
          </Link>
          <Link href="/">Back to Home</Link>
        </div>
      </header>

      <main>
        <section className="policy-hero">
          <div className="shell policy-hero-content">
            <p>Legal Information</p>
            <h1>Privacy Policy</h1>
            <p className="policy-updated">Last Updated: <time dateTime="2026-08-29">29 August 2026</time></p>
          </div>
        </section>

        <section className="policy-body">
          <article className="policy-content">
            <div className="policy-introduction">
              <p>At Rental in Dholera, we respect your privacy and are committed to protecting the personal information you share with us.</p>
              <p>This Privacy Policy explains how we collect, use and protect your information when you visit our website, contact us, or use our services related to Dholera property investment, villa construction and rental assistance.</p>
            </div>

            <section>
              <h2><span>01</span> Information We Collect</h2>
              <p>When you contact us or submit an enquiry, we may collect information such as:</p>
              <ul>
                <li>Name</li>
                <li>Mobile number</li>
                <li>Email address</li>
                <li>Location</li>
                <li>Investment budget</li>
                <li>Property or rental requirements</li>
                <li>Any other information you voluntarily provide</li>
              </ul>
              <p>We may also collect basic website information such as browser type, device information, IP address and pages visited for website performance and security.</p>
            </section>

            <section>
              <h2><span>02</span> How We Use Your Information</h2>
              <p>We may use your information to:</p>
              <ul>
                <li>Respond to your enquiries</li>
                <li>Understand your property or investment requirements</li>
                <li>Share suitable Dholera property opportunities</li>
                <li>Provide information about plots, villas and rental services</li>
                <li>Coordinate property related services</li>
                <li>Contact you regarding your enquiry</li>
                <li>Improve our website and services</li>
                <li>Maintain website security and prevent misuse</li>
              </ul>
              <p>We will use personal data for lawful purposes and, where required, based on your consent or another lawful basis.</p>
            </section>

            <section>
              <h2><span>03</span> How We Share Your Information</h2>
              <p>We do not sell or rent your personal information.</p>
              <p>We may share necessary information with trusted service providers, property partners, construction teams or other parties involved in providing the service you have requested.</p>
              <p>We may also disclose information when required by applicable law or a lawful government or regulatory request.</p>
            </section>

            <section>
              <h2><span>04</span> WhatsApp, Phone &amp; Other Communication</h2>
              <p>If you contact us through WhatsApp, phone, email or an enquiry form, we may use the information you provide to respond to your request.</p>
              <p>If you provide your contact details for property or investment enquiries, we may contact you regarding relevant Dholera investment, construction or rental opportunities.</p>
              <p>You can ask us to stop promotional communications at any time.</p>
            </section>

            <section>
              <h2><span>05</span> Cookies</h2>
              <p>Our website may use cookies and similar technologies to improve website functionality, understand visitor behaviour and measure website performance.</p>
              <p>You can manage or disable cookies through your browser settings. Some website features may not work properly if certain cookies are disabled.</p>
            </section>

            <section>
              <h2><span>06</span> Data Security</h2>
              <p>We take reasonable steps to protect personal information from unauthorized access, misuse, loss or disclosure.</p>
              <p>However, no method of transmitting or storing information online can be guaranteed to be completely secure.</p>
            </section>

            <section>
              <h2><span>07</span> Data Retention</h2>
              <p>We retain personal information only for as long as reasonably necessary for the purpose for which it was collected, to provide requested services, maintain business records, comply with legal requirements, or resolve disputes.</p>
            </section>

            <section>
              <h2><span>08</span> Your Privacy Rights</h2>
              <p>Depending on applicable law, you may have rights regarding your personal data, including the ability to request information about how your data is processed, request correction or deletion where applicable, and withdraw consent where processing is based on consent.</p>
              <p>You can contact us using the details below to make a privacy related request. The DPDP framework provides mechanisms for individuals to exercise applicable rights and raise grievances.</p>
            </section>

            <section>
              <h2><span>09</span> Third Party Websites</h2>
              <p>Our website may contain links to third party websites, social media platforms or other services.</p>
              <p>We are not responsible for the privacy practices or content of third party websites. We recommend reviewing their privacy policies before providing them with personal information.</p>
            </section>

            <section>
              <h2><span>10</span> Children&apos;s Privacy</h2>
              <p>Our website and services are not specifically directed toward children. We do not knowingly collect personal information from children except where permitted and handled in accordance with applicable law.</p>
            </section>

            <section>
              <h2><span>11</span> Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our services, website practices or applicable legal requirements.</p>
              <p>Any updated version will be published on this page with the revised Last Updated date.</p>
            </section>

            <section>
              <h2><span>12</span> Contact Us</h2>
              <p>If you have questions about this Privacy Policy or how we handle your personal information, you can contact us:</p>
              <address className="policy-contact">
                <strong>Rental in Dholera</strong>
                <a href="mailto:info@rentalsindholera.com">info@rentalsindholera.com</a>
                <a href="tel:+918448094508">+91 84 48 09 45 08</a>
                <span>8/8 Dogran Street, Near Hoti Mardaan Gurudwara, Patiala, 147001</span>
              </address>
            </section>
          </article>
        </section>
      </main>

      <footer className="policy-footer">
        <div className="shell">
          <p>© 2026 Rentals In Dholera. All rights reserved.</p>
          <Link href="/">Return to Home</Link>
        </div>
      </footer>
    </div>
  );
}
