import PolicyPageShell from "../PolicyPageShell";

export const metadata = {
  title: "Copyright Policy | Rental In Dholera",
  description: "Read the copyright and permitted content usage policy for the Rental in Dholera website.",
};

export default function CopyrightPolicyPage() {
  return (
    <PolicyPageShell title="Copyright Policy">
      <div className="policy-introduction">
        <p>All content published on the Rental in Dholera website is protected by applicable copyright and intellectual property laws.</p>
        <p>This Copyright Policy explains how website content may and may not be used.</p>
      </div>

      <section>
        <h2><span>01</span> Ownership of Content</h2>
        <p>Unless otherwise stated, the content on this website is owned by or licensed to Rental in Dholera.</p>
        <p>This includes:</p>
        <ul>
          <li>Website text and articles</li>
          <li>Images and photographs</li>
          <li>Logos and branding</li>
          <li>Graphics and designs</li>
          <li>Videos</li>
          <li>Icons and illustrations</li>
          <li>Property descriptions</li>
          <li>Marketing materials</li>
          <li>Website layout and other original content</li>
        </ul>
      </section>

      <section>
        <h2><span>02</span> Use of Website Content</h2>
        <p>You may access and view the content on this website for personal and informational purposes.</p>
        <p>You must not, without our prior written permission:</p>
        <ul>
          <li>Copy or reproduce website content</li>
          <li>Republish our articles or website pages</li>
          <li>Use our images or videos commercially</li>
          <li>Modify or distribute our content</li>
          <li>Use our logo or branding</li>
          <li>Copy our website design or layout</li>
          <li>Use our content on another real estate or property website</li>
        </ul>
      </section>

      <section>
        <h2><span>03</span> Sharing Our Content</h2>
        <p>You may share links to our website or publicly available pages for legitimate informational purposes.</p>
        <p>When referring to our content, please provide proper credit to Rental in Dholera and link back to the relevant page where appropriate.</p>
      </section>

      <section>
        <h2><span>04</span> Property Images and Third Party Content</h2>
        <p>Some property photographs, images, logos or other materials displayed on our website may belong to third parties or may be used with permission.</p>
        <p>Such content remains the property of its respective owner and may be subject to separate copyright or usage restrictions.</p>
      </section>

      <section>
        <h2><span>05</span> Copyright Infringement</h2>
        <p>If you believe that content published on our website infringes your copyright, please contact us with:</p>
        <ul>
          <li>Your name and contact details</li>
          <li>Identification of the copyrighted work</li>
          <li>The URL or location of the content in question</li>
          <li>An explanation of the alleged infringement</li>
          <li>Any supporting information or documents</li>
        </ul>
        <p>We will review legitimate copyright concerns and take appropriate action where required.</p>
      </section>

      <section>
        <h2><span>06</span> Request for Permission</h2>
        <p>If you would like to use any content from the Rental in Dholera website for commercial, promotional, editorial or other purposes, please contact us for written permission.</p>
        <p>Email: <a href="mailto:info@rentalindholera.com">info@rentalindholera.com</a></p>
        <p>Permission may be granted subject to specific conditions.</p>
      </section>

      <section>
        <h2><span>07</span> Changes to This Policy</h2>
        <p>We may update this Copyright Policy from time to time. Any changes will be published on this page with the revised Last Updated date.</p>
      </section>

      <section>
        <h2><span>08</span> Contact Us</h2>
        <p>For copyright or content related enquiries:</p>
        <address className="policy-contact">
          <strong>Rental in Dholera</strong>
          <a href="mailto:info@rentalindholera.com">info@rentalindholera.com</a>
          <a href="tel:+918448094508">+91 84 48 09 45 08</a>
          <span>8/8 Dogran Street, Near Hoti Mardaan Gurudwara, Patiala, 147001</span>
        </address>
      </section>
    </PolicyPageShell>
  );
}
