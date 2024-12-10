import React from 'react';

const TermsOfService: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Terms of Service</h1>
      <p className="mb-4">
        Effective Date: 1st December 2024
      </p>
      <p className="mb-4">
        Welcome to Wilderness Wheels Uganda! By accessing or using our transport services, website, or any related offerings, you agree to be bound by these Terms of Service ("Terms"). Please read them carefully.
      </p>

      <h2 className="text-xl font-bold mb-2">1. Definitions</h2>
      <ul className="list-disc list-inside mb-4">
        <li>"We," "our," or "us": Refers to Wilderness Wheels Uganda.</li>
        <li>"Client," "you," or "your": Refers to the individual or entity using our services.</li>
        <li>"Services": Refers to our transport solutions, including vehicle rentals with professional drivers, town runner services, corporate transport, safari services, and any related offerings.</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">2. Booking and Payment</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Bookings: All bookings are subject to availability and must be confirmed by our team.</li>
        <li>Payment: Clients must make payments as agreed during booking. Full payment or deposits may be required in advance. Accepted payment methods will be communicated at the time of booking.</li>
        <li>Cancellations: Cancellations made within 48 hours may incur a cancellation fee. Refunds will be processed based on the cancellation policy provided during booking.</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">3. Use of Services</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Professional Drivers: All our vehicles include professional drivers provided at no additional cost. Self-driving is not permitted.</li>
        <li>Client Responsibilities: Clients must:
          <ul className="list-disc list-inside ml-4">
            <li>Provide accurate information during booking.</li>
            <li>Adhere to all safety rules and instructions provided by our drivers.</li>
            <li>Treat our vehicles and staff with respect.</li>
          </ul>
        </li>
        <li>Prohibited Use: Our services may not be used for illegal activities or purposes that may endanger the vehicle, driver, or passengers.</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">4. Liability</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Wilderness Wheels Uganda’s Responsibility:
          <ul className="list-disc list-inside ml-4">
            <li>We are committed to providing safe, reliable, and efficient services.</li>
            <li>We are not liable for delays caused by traffic, road conditions, weather, or events beyond our control.</li>
          </ul>
        </li>
        <li>Client Responsibility:
          <ul className="list-disc list-inside ml-4">
            <li>Clients are liable for any damages caused to the vehicle due to negligence or misconduct during the service period.</li>
          </ul>
        </li>
      </ul>

      <h2 className="text-xl font-bold mb-2">5. Service Modifications</h2>
      <p className="mb-4">
        We reserve the right to modify, suspend, or discontinue any service, route, or vehicle availability at any time, with reasonable notice to clients.
      </p>

      <h2 className="text-xl font-bold mb-2">6. Refunds and Disputes</h2>
      <ul className="list-disc list-inside mb-4">
        <li>Refund requests must be made in writing and are subject to approval based on our cancellation and refund policy.</li>
        <li>Disputes must be reported to us within 5 days of the service date for resolution.</li>
      </ul>

      <h2 className="text-xl font-bold mb-2">7. Privacy</h2>
      <p className="mb-4">
        We are committed to protecting your personal information. Please review our Privacy Policy for details on how we collect, use, and protect your data.
      </p>

      <h2 className="text-xl font-bold mb-2">8. Governing Law</h2>
      <p className="mb-4">
        These Terms are governed by the laws of Uganda. Any disputes arising from these Terms will be resolved through arbitration or in Ugandan courts.
      </p>

      <h2 className="text-xl font-bold mb-2">9. Changes to Terms</h2>
      <p className="mb-4">
        We may update these Terms from time to time. Updated terms will be posted on our website with the "Effective Date" clearly indicated. By continuing to use our services, you agree to the updated Terms.
      </p>

      <h2 className="text-xl font-bold mb-2">10. Contact Us</h2>
      <p className="mb-4">
        For questions or concerns regarding these Terms, please contact us:
      </p>
      <p className="mb-4">
        Wilderness Wheels Uganda<br />
        Email: info@wildernesswheelsuganda.com<br />
        Phone: +256 700870088<br />
        Address: Kawala Road, Kamya K.B BLB/ 002/3069, Block 203, Kazo Lugoba
      </p>
      <p className="mb-4">
        Thank you for choosing Wilderness Wheels Uganda! We look forward to serving you with professionalism and excellence.
      </p>
    </div>
  );
};

export default TermsOfService;
