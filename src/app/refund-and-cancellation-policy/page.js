import PolicyPageShell from "../PolicyPageShell";

export const metadata = {
  title: "Refund & Cancellation Policy | Rental In Dholera",
  description: "Read how cancellations and refunds are handled for Rental in Dholera services.",
};

export default function RefundAndCancellationPolicyPage() {
  return (
    <PolicyPageShell title="Refund & Cancellation Policy">
      <div className="policy-introduction">
        <p>At Rental in Dholera, we aim to provide clear information about our property investment, villa construction and rental assistance services.</p>
        <p>This Refund &amp; Cancellation Policy explains how cancellations and refunds are handled.</p>
      </div>

      <section>
        <h2><span>01</span> Property Enquiries</h2>
        <p>Submitting an enquiry through our website is free and does not create any purchase or booking obligation.</p>
        <p>You may withdraw an enquiry at any time by contacting us.</p>
      </section>

      <section>
        <h2><span>02</span> Property Booking or Purchase</h2>
        <p>Any booking amount, token amount, advance payment or other payment related to a property will be governed by the specific booking form, agreement or terms provided at the time of the transaction.</p>
        <p>Refund eligibility, cancellation charges and timelines may vary depending on the property and transaction.</p>
        <p>Please review the applicable terms before making a payment.</p>
      </section>

      <section>
        <h2><span>03</span> Villa Construction</h2>
        <p>Cancellation of villa construction services will be subject to the applicable construction agreement or service terms.</p>
        <p>If construction work has already started, any refund will be considered after deducting applicable costs for work completed, materials purchased, services provided or other agreed charges.</p>
      </section>

      <section>
        <h2><span>04</span> Rental Assistance</h2>
        <p>If you have purchased a rental assistance service, cancellation and refund eligibility will depend on the specific service and terms agreed with you.</p>
        <p>Rental assistance does not guarantee a tenant or rental income.</p>
      </section>

      <section>
        <h2><span>05</span> Non Refundable Payments</h2>
        <p>Certain payments may be non refundable where they relate to services already provided, third party expenses, documentation, processing, site visits, construction work, materials or other costs specifically identified as non refundable before payment.</p>
      </section>

      <section>
        <h2><span>06</span> Refund Process</h2>
        <p>Where a refund is approved, we will process it using the applicable payment method or another agreed method.</p>
        <p>The time required for the refund to reach your account may depend on the payment provider or bank.</p>
      </section>

      <section>
        <h2><span>07</span> How to Request a Cancellation or Refund</h2>
        <p>To request a cancellation or refund, please contact us with:</p>
        <ul>
          <li>Name</li>
          <li>Registered mobile number</li>
          <li>Email address</li>
          <li>Transaction or booking details</li>
          <li>Reason for cancellation</li>
          <li>Payment details, where required</li>
        </ul>
        <p>Email: <a href="mailto:info@rentalindholera.com">info@rentalindholera.com</a></p>
        <p>Phone: <a href="tel:+918448094508">+91 84 48 09 45 08</a></p>
        <p>We will review the request and communicate the applicable refund or cancellation terms.</p>
      </section>

      <section>
        <h2><span>08</span> Changes to Services</h2>
        <p>Property availability, pricing, construction timelines and rental services may change from time to time.</p>
        <p>Where a change materially affects an existing transaction, the terms of the relevant agreement will apply.</p>
      </section>

      <section>
        <h2><span>09</span> Changes to This Policy</h2>
        <p>We may update this Refund &amp; Cancellation Policy from time to time. Any changes will be published on this page with the revised Last Updated date.</p>
      </section>

      <section>
        <h2><span>10</span> Contact Us</h2>
        <p>For refund or cancellation related enquiries:</p>
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
