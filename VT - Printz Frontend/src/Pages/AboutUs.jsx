import React from "react";

const AboutUs = () => {
  return (
    <div
      className="relative text-white overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url(/printing-bg.png)" }}
    >
      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-[#02192F]/31"></div>

      {/* CONTENT */}
      <div className="relative z-10">

       {/* ================= HERO ================= */}
<section className="relative text-center px-6 md:px-16 pt-6 pb-14 mt-6">

  {/* HERO BACKDROP */}
  <div
    className="
      absolute inset-0
      mx-4 md:mx-10
      rounded-3xl
      bg-gradient-to-b
      from-[#02192F]/85
      via-[#02192F]/70
      to-[#02192F]/60
      backdrop-blur-sm
    "
  ></div>

  {/* HERO CONTENT */}
  <div className="relative z-10 py-14">
    <h1 className="HeroHeading text-4xl md:text-5xl mb-4 text-white drop-shadow-lg">
      About{" "}
      <span className="
        text-[#DB2A7B]
        drop-shadow-[0_3px_10px_rgba(219,42,123,0.6)]
      ">
        VT Printz
      </span>
    </h1>

    <p className="text-gray-100 max-w-3xl mx-auto text-base md:text-lg font-medium">
      Your one-stop solution for high-quality, customized printing services.
    </p>

    <p className="text-gray-200 max-w-2xl mx-auto mt-3 text-sm">
      Trusted by local businesses, startups, and creators for precision,
      reliability, and vibrant print quality.
    </p>
  </div>
</section>



        {/* ================= WHO WE ARE ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 py-10 grid md:grid-cols-2 gap-10">

          {/* LEFT CONTENT */}
          <div
            className="
              bg-[#02192F]/70 p-6 rounded-2xl border border-[#0085E1]/30
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#0085E1]
              hover:shadow-lg hover:shadow-[#0085E1]/20
            "
          >
            <h2 className="HeroHeading text-3xl mb-3 text-[#0085E1]">
              Who We Are
            </h2>

            <p className="text-gray-200 mb-3 leading-relaxed">
              <span className="text-[#DB2A7B] font-semibold">VT Printz</span> is a
              customer-centric printing studio delivering premium print solutions
              for individuals, businesses, and growing brands.
            </p>

            <p className="text-gray-200 mb-3 leading-relaxed">
              We focus on{" "}
              <span className="text-white font-semibold">
                quality, consistency, and design accuracy
              </span>{" "}
              — turning ideas into impactful printed products.
            </p>

            <p className="text-gray-200 leading-relaxed">
              Whether it’s a single custom order or bulk production, our workflow
              ensures reliable output, strict quality checks, and timely delivery.
            </p>
          </div>

          {/* ================= WHAT WE PRINT ================= */}
          <div
            className="
              bg-[#02192F]/80 p-6 rounded-2xl border border-[#DB2A7B]/40
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#DB2A7B]
              hover:shadow-lg hover:shadow-[#DB2A7B]/25
            "
          >
            <h3 className="HeroHeading text-xl mb-4 text-[#DB2A7B]">
              What We Print
            </h3>

            <ul className="grid grid-cols-2 gap-y-3 text-gray-200 text-sm">
              {[
                "T-Shirt Printing",
                "Mug Printing",
                "Visiting Cards",
                "Pamphlets",
                "ID Cards",
                "Flex & Banners",
                "Keychains",
                "Bottles",
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-[#DB2A7B] rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ================= MISSION ================= */}
        <section className="max-w-5xl mx-auto px-6 md:px-16 pb-6 text-center">
          <div
            className="
              bg-[#02192F]/60 border border-[#0085E1]/30 rounded-xl p-5
              transition-all duration-300
              hover:-translate-y-1
              hover:border-[#0085E1]
              hover:shadow-lg hover:shadow-[#0085E1]/20
            "
          >
            {/* <h3 className="text-lg font-semibold text-[#0085E1] mb-2"> */}
            <h3 className="HeroHeading text-xl mb-4 text-[#0085E1]">
              Our Mission
            </h3>
            <p className="text-gray-200 text-sm leading-relaxed">
              To empower brands and individuals with high-impact printed products
              through quality craftsmanship, modern design, and dependable service.
            </p>
          </div>
        </section>

        {/* ================= WHY CHOOSE US ================= */}
        <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20">
          <h2 className="text-3xl font-bold text-center mb-8">
            Why Choose Us
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                title: "Premium Quality",
                desc: "Sharp prints with vibrant colors and durable materials.",
              },
              {
                title: "Full Customization",
                desc: "Designs tailored exactly to your requirements.",
              },
              {
                title: "Affordable Pricing",
                desc: "Professional results without premium price tags.",
              },
              {
                title: "Reliable Delivery",
                desc: "On-time production with consistent quality control.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="
                  bg-[#02192F]/70 border border-[#DB2A7B]/30 rounded-xl p-5 text-center
                  transition-all duration-300
                  hover:-translate-y-1
                  hover:border-[#DB2A7B]
                  hover:shadow-lg hover:shadow-[#DB2A7B]/25
                "
              >
                <h3 className="HeroHeading text-lg text-[#DB2A7B] mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-200 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default AboutUs;
