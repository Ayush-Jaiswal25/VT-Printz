import React from "react";

const CancellationRefundPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-32 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">
        Cancellation, Replacement & Refund Policy
      </h1>

      {/* Cancellation */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          How do I cancel an order on PrintMine.in?
        </h2>

        <p className="mb-4">
          If unfortunately you need to cancel an order, please do so within
          <strong> 1 hour</strong> of placing the order.
        </p>

        <p className="mb-4">
          To cancel, email us at{" "}
          <strong>order@printmine.in</strong> with your{" "}
          <strong>Order Number</strong> mentioned in the subject line.
        </p>

        <p className="mb-4">
          If the order has already been dispatched, it{" "}
          <strong>cannot be cancelled</strong>.
        </p>

        <p className="font-semibold text-red-600">
          Note: Personalized or customized product orders cannot be cancelled
          or refunded once the order is placed.
        </p>
      </section>

      {/* Replacement */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Replacement Policy</h2>

        <p className="mb-4 font-semibold">
          Recording an unboxing video is mandatory.
        </p>

        <p className="mb-4">
          Please record an <strong>unboxing video</strong> starting from showing
          the sealed courier package to clearly displaying the product.
          <br />
          <strong className="text-red-600">
            Without this video, NO COMPLAINT will be entertained — no matter
            what.
          </strong>
        </p>

        <p className="mb-4">
          Products are eligible for replacement only if they are received in a
          <strong> damaged or defective condition</strong>.
        </p>

        <p className="mb-4">
          The issue must be reported to our team within{" "}
          <strong>2 hours</strong> of receiving the package.
        </p>

        <p className="mb-4">
          A brand-new replacement will be shipped after approval.{" "}
          <strong>Shipping charges will be applicable</strong>.
        </p>

        <p className="mb-4">
          Please ensure the <strong>original product tags and packaging</strong>{" "}
          are intact when reverse pickup is initiated.
        </p>

        <p className="font-semibold">
          Returns are not applicable for any orders as all products are
          personalized.
        </p>
      </section>

      {/* Transit Damage */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Damaged During Transit</h2>

        <p>
          We take utmost care to ensure product quality and safe delivery.
          However, if a fragile item is damaged during transit, please contact
          us within <strong>2 hours</strong> from the time of delivery.
        </p>
      </section>

      {/* Refund */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Refund Policy</h2>

        <p className="mb-4">
          Refunds are <strong>not applicable</strong> as all orders are
          personalized and customized specifically for you.
        </p>

        <p className="mb-4">
          Once an order has been processed and customization has begun, we are
          unable to offer refunds due to the unique nature of the products.
        </p>

        <p className="mb-4">
          If there is a defect or an error from our side, please contact our
          customer support team within <strong>2 hours</strong> of receiving the
          product. After review, we may offer a replacement or correction.
        </p>

        <p className="font-semibold">
          Refunds will not be issued for:
        </p>

        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li>Change of personal preference</li>
          <li>Incorrect information provided by the customer</li>
        </ul>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Need Help?</h2>

        <p>
          <strong>Phone:</strong> +91 6262062727 (10:00 AM – 7:00 PM)
          <br />
          <strong>Email:</strong> order@printmine.in
        </p>

        <p className="mt-4">
          For any queries regarding a product before ordering, feel free to
          contact us. We can share <strong>real-time product photos and
          videos</strong> via WhatsApp, email, or other channels.
        </p>

        <p className="mt-2">
          <strong>WhatsApp:</strong> +91 6262427271
        </p>
      </section>
    </div>
  );
};

export default CancellationRefundPolicy;
