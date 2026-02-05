import React from "react";

const Location = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-28 px-4">
      <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        {/* Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 text-center">
          Our Location
        </h1>
        <p className="text-center text-gray-600 mt-3">
          Visit our office or reach us easily using the directions below
        </p>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">

          {/* Address & Steps */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">
              📌 Office Address
            </h2>

            <p className="text-gray-700 leading-relaxed">
              <strong>VT-Printz (HK Enterprises)</strong><br />
              Beside HR Tower,<br />
              Manuas Reality Road,<br />
              Agroha Colony,<br />
              Raipur, Chhattisgarh – 492001<br />
              India
            </p>

            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">
              🚗 How to Reach Us
            </h3>

            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Open <strong>Google Maps</strong> on your mobile or desktop.</li>
              <li>Search for <strong>“VT-Printz Raipur”</strong>.</li>
              <li>Start navigation from your current location.</li>
              <li>Reach <strong>HR Tower, Agroha Colony</strong>.</li>
              <li>Our office is located <strong>beside HR Tower</strong>.</li>
            </ol>

            {/* Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=HR+Tower+Agroha+Colony+Raipur+Chhattisgarh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 bg-[#DB2A7B] hover:bg-[#c21f6a] text-white px-6 py-3 rounded-xl font-medium transition"
            >
              📍 Open in Google Maps
            </a>
          </div>

          {/* Google Map */}
          <div className="w-full h-[400px] rounded-xl overflow-hidden border">
            <iframe
              title="VT Printz Location"
              src="https://www.google.com/maps?q=HR%20Tower%20Agroha%20Colony%20Raipur%20Chhattisgarh&output=embed"
              className="w-full h-full border-0"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Location;
