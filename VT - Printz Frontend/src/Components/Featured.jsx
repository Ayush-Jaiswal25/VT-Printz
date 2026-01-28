import Delivery from "../Assets/delivery.png";
import BStar from "../Assets/Bstar.png";
import Seven from "../Assets/Seven.png";

const features = [
  {
    title: "Fast Delivery",
    description:
      "Experience swift delivery powered by our optimized logistics network.",
    icon: Delivery,
  },
  {
    title: "Best Quality",
    description:
      "We maintain the highest standards to ensure premium quality in every product.",
    icon: BStar,
  },
  {
    title: "24/7 Support",
    description:
      "Get instant assistance anytime with our dedicated support team.",
    icon: Seven,
  },
];

export default function Featured() {
  return (
    <div>
      <section
        className="relative pb-28 
        bg-gradient-to-b from-white to-[#F4F6FF]
        overflow-hidden"
      >
        {/* Top Gradient Decorations */}
        <div className="py-[10px] bg-gradient-to-b from-gray-100 to-[#fadbe9] relative overflow-hidden"></div>
        <div className="py-[40px] bg-gradient-to-b to-white from-[#fadbe9] relative overflow-hidden"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-16 sm:mb-20">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#01227F] leading-tight">
              Why Choose <span className="text-[#DB2A7B]">Us</span>
            </h2>

            <div className="w-full flex justify-center mt-4">
              <div className="h-2 w-48 sm:w-72 md:w-96 bg-gradient-to-r from-[#DB2A7B] to-[#01227F] rounded-full"></div>
            </div>

            <p className="text-gray-600 max-w-xl mx-auto mt-4 text-sm sm:text-base">
              Experience unmatched quality, lightning-fast delivery, and round-the-clock support.
            </p>
          </div>

          {/* Feature Cards */}
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              md:grid-cols-3 
              gap-6 sm:gap-8
              px-2 sm:px-8 md:px-20 lg:px-40
              transition-all
            "
          >
            {features.map((f, i) => (
              <div
                key={i}
                className="
                  bg-white rounded-3xl p-6 sm:p-8 shadow-xl
                  border border-gray-100 
                  transform transition-all duration-500 hover:-translate-y-3
                  hover:shadow-2xl backdrop-blur-lg
                  relative overflow-hidden
                "
              >
                {/* Corner Shape */}
                <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 bg-[#DB2A7B]/10 rounded-bl-[40px]"></div>

                {/* Icon */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 bg-[#F5F6FF] rounded-2xl flex items-center justify-center border-2 border-[#DB2A7B]">
                  <img src={f.icon} alt="" className="w-10 sm:w-12" />
                </div>

                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3">
                  {f.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {f.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
