import React from "react";

const TermsConditions = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-32 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Terms & Conditions</h1>

      <p className="mb-6">
        By using the shopping and customization services of <strong>VT-Printz</strong>{" "}
        (a brand of <strong>HK Enterprises</strong>), you (the{" "}
        <strong>Customer</strong>) are deemed to have read, understood, and
        accepted the terms and conditions stated below. HK Enterprises reserves
        the right to add, remove, change, or modify these terms at any time
        without prior notice. Customers are advised to review this section
        periodically.
      </p>

      {/* 1. General */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">1. General</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <strong>VT-Printz</strong> is a brand owned and operated by{" "}
            <strong>HK Enterprises</strong>, specializing in customized printing
            solutions, corporate gifts, and promotional merchandise.
          </li>
          <li>
            By placing an order, the customer authorizes HK Enterprises to
            process the order and arrange production and delivery.
          </li>
          <li>
            HK Enterprises acts solely as a service facilitator and is not a
            buyer or seller of third-party branded goods.
          </li>
        </ul>
      </section>

      {/* 2. Pricing & Taxes */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">2. Pricing & Taxes</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>All prices are listed in Indian Rupees (INR).</li>
          <li>Prices are inclusive of GST unless otherwise stated.</li>
          <li>
            Applicable GST rates (5%, 12%, 18%, or 28%) are applied during
            checkout based on product category.
          </li>
          <li>HK Enterprises is fully GST-compliant.</li>
        </ul>
      </section>

      {/* 3. Delivery */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          3. Order Processing & Delivery
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Orders placed before 2:00 PM are processed within 24–48 hours.</li>
          <li>Delivery may take 4–10 working days depending on location.</li>
          <li>We are not liable for delays due to:</li>
          <ul className="list-disc ml-10 mt-2 space-y-1">
            <li>Incorrect or incomplete address</li>
            <li>Public holidays, lockdowns, or natural disasters</li>
            <li>Recipient unavailability or rejection</li>
            <li>Courier company policies</li>
          </ul>
          <li>Returned or rejected orders may still be chargeable.</li>
        </ul>
      </section>

      {/* 4. No Return */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          4. No Return / Cancellation Policy
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            All products are customized; therefore, returns or exchanges are not
            accepted.
          </li>
          <li>Orders cannot be cancelled once placed.</li>
          <li>
            Change requests may be made within 2 working hours, subject to
            feasibility.
          </li>
        </ul>
      </section>

      {/* 5. Availability */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          5. Product Availability & Substitution
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Products are delivered as shown on the website.</li>
          <li>
            In case of unavailability, customers may modify or wait for the
            order.
          </li>
          <li>
            VT-Printz reserves the right to substitute items if required.
          </li>
        </ul>
      </section>

      {/* 6. Liability */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          6. Liability & Responsibility
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>Mismatch in quality expectations</li>
          <li>Damage or misuse after delivery</li>
          <li>Delivery issues due to wrong recipient details</li>
          <li>
            Liability is limited to the value of the purchased product.
          </li>
          <li>Services are provided “as is”.</li>
        </ul>
      </section>

      {/* 7. Brand Disclaimer */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          7. Brand Affiliation Disclaimer
        </h2>
        <p>
          VT-Printz has no affiliation with any national or international brand.
          Product names refer only to style or design and not to any brand.
        </p>
      </section>

      {/* 8. IP */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">8. Intellectual Property</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>All trademarks belong to their respective owners.</li>
          <li>
            Customers confirm they have rights to the content submitted.
          </li>
        </ul>
      </section>

      {/* 9. Jurisdiction */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">9. Jurisdiction</h2>
        <p>All disputes are subject to Raipur, Chhattisgarh, India.</p>
      </section>

      {/* 10. Replacement */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          10. Replacement for Damaged or Wrong Product
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            A full, unedited parcel opening video is mandatory for replacement.
          </li>
          <li>
            Video must clearly show the package, label, and product.
          </li>
          <li>Claims without video will not be accepted.</li>
        </ul>
      </section>

      {/* 11. Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">11. Contact Information</h2>
        <p>
          <strong>Customer Support – VT-Printz</strong>
          <br />
          📞 6262062727 / 6262427271
          <br />
          📧 order@printmine.in
          <br />
          🕙 Mon–Sat, 10:00 AM – 7:00 PM
        </p>
      </section>
    </div>
  );
};

export default TermsConditions;
