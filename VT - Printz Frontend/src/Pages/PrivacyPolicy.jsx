import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-32 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-6">
        This privacy policy sets out how <strong>PrintMine.in</strong> uses and
        protects any information that you give when you use this website.
      </p>

      <p className="mb-6">
        PrintMine.in is committed to ensuring that your privacy is protected.
        Should we ask you to provide certain information by which you can be
        identified when using this website, then you can be assured that it will
        only be used in accordance with this privacy statement.
      </p>

      <p className="mb-6">
        Online transactions are electronically encrypted to ensure that your
        financial data is safe and secure. You may use your credit card online
        with confidence. Your address, phone number, and financial data will be
        used only by PrintMine.in and will never be sold or disclosed to any
        third party.
      </p>

      <p className="mb-8">
        PrintMine.in is committed to maintaining your confidence and trust and
        maintains the following privacy policy to protect personal information
        you provide online.
      </p>

      {/* Personal Information Policy */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          Protection of Personal Information
        </h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            Personal information such as your name, address, email address,
            telephone number, and financial information is private and
            confidential.
          </li>
          <li>
            Your personal information will be used only by PrintMine.in and will
            never be sold or shared with external sources.
          </li>
        </ul>
      </section>

      {/* What We Collect */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">What We Collect</h2>
        <p className="mb-3">We may collect the following information:</p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Name and date of birth</li>
          <li>Contact information including email address</li>
          <li>
            Demographic information such as postcode, preferences, and interests
          </li>
          <li>
            Other information relevant to customer surveys and/or offers
          </li>
        </ul>
      </section>

      {/* How We Use Info */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">
          What We Do With the Information We Gather
        </h2>
        <p className="mb-3">
          We require this information to understand your needs and provide you
          with a better service, and in particular for the following reasons:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Internal record keeping</li>
          <li>Improving our products and services</li>
          <li>
            Sending promotional emails about new products, special offers, or
            other information you may find interesting
          </li>
          <li>
            Contacting you for market research purposes via email, phone, fax,
            or mail
          </li>
          <li>
            Customizing the website according to your interests
          </li>
        </ul>

        <p className="mt-4">
          If you believe that any information we are holding on you is incorrect
          or incomplete, please contact us as soon as possible. We will promptly
          correct any information found to be incorrect.
        </p>
      </section>

      {/* Contact */}
      <section>
        <h2 className="text-xl font-semibold mb-3">Contact Us</h2>
        <p className="mb-4">
          If you have any questions regarding this privacy policy, you may
          contact us using the information below:
        </p>

        <p>
          <strong>Email:</strong> order@printmine.in
          <br />
          <strong>Phone:</strong> +91 6262427271
          <br />
          <strong>WhatsApp:</strong> +91 6262427271
          <br />
          <strong>Availability:</strong> Monday to Saturday, 11:00 AM – 7:00 PM
        </p>

        <p className="mt-4">
          <strong>Office Address:</strong>
          <br />
          Beside HR Tower, Manuas Reality Road,
          <br />
          Agroha Colony, Raipur,
          <br />
          Chhattisgarh – 492001
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
