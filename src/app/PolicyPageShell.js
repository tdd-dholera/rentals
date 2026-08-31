import Image from "next/image";
import Link from "next/link";
import logoWhiteImage from "@/assets/logo-white.png";

export default function PolicyPageShell({ title, children }) {
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
            <h1>{title}</h1>
            <p className="policy-updated">Last Updated: <time dateTime="2026-08-29">29 August 2026</time></p>
          </div>
        </section>

        <section className="policy-body">
          <article className="policy-content">{children}</article>
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
