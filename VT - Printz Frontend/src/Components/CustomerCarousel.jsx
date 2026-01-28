



import React, { useState } from "react";

const reviews = [
  { 
    name: "Aarav Sharma", 
    role: "Lucknow, Uttar Pradesh", 
    text: "Printz delivered outstanding quality and very quick service. Truly impressed!", 
    rating: 5 
  },
  { 
    name: "Priya Verma", 
    role: "Kanpur, Uttar Pradesh", 
    text: "Great experience! The team understood our design perfectly and executed it well.", 
    rating: 4 
  },
  { 
    name: "Rohan Singh", 
    role: "Varanasi, Uttar Pradesh", 
    text: "Amazing print quality on our T-shirts and banners. Wonderful support too!", 
    rating: 5 
  },
  { 
    name: "Ananya Gupta", 
    role: "Agra, Uttar Pradesh", 
    text: "Loved the attention to detail and timely delivery. Highly recommended!", 
    rating: 5 
  },
  { 
    name: "Vikram Yadav", 
    role: "Noida, Uttar Pradesh", 
    text: "Fast service and excellent customer handling. Our ideas were printed flawlessly.", 
    rating: 4 
  },
];


const Star = ({ filled }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-[#FBBF24]" : "text-gray-300"}`}
    fill={filled ? "#FBBF24" : "none"}
    stroke="#FBBF24"
    strokeWidth="2"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.062 6.34a1 1 0 00.95.69h6.65c.969 0 1.371 1.24.588 1.81l-5.39 3.91a1 1 0 00-.364 1.118l2.062 6.34c.3.922-.755 1.688-1.54 1.118l-5.39-3.91a1 1 0 00-1.176 0l-5.39 3.91c-.784.57-1.838-.196-1.539-1.118l2.061-6.34a1 1 0 00-.364-1.118L2.7 11.767c-.783-.57-.38-1.81.588-1.81h6.65a1 1 0 00.95-.69l2.061-6.34z"
    />
  </svg>
);

const BubbleCylinderTestimonials = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  return (
    <section className="relative py-16
     bg-gradient-to-b from-[#F7F8FF] to-[#EDEFFE] overflow-x-hidden
     ">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-extrabold text-[#01227F]">
          What Our <span className="text-[#DB2A7B]">Customers</span> Say
        </h2>

        <p className="mb-12 text-gray-600">Customer experiences that highlight our dedication to outstanding results.</p>

        <div className="flex justify-center items-center gap-6 perspective-[1000px]">
          {reviews.map((review, i) => {
            const distance = i - activeIndex;
            const isActive = i === activeIndex;

            // Cylinder effect for horizontal layout
            
            const width = isActive ? "620px" : "180px";
            const height = isActive ? "260px" : "260px";
            const opacity = isActive ? 1 : 0.8;
            const zIndex = isActive ? 20 : 10;

            return (
              <div
                key={i}
                onClick={() => setActiveIndex(i)}
                className="
                backdrop-blur-xl
              rounded-3xl 
              p-2
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
             
              transform 
              hover:-translate-y-4
              hover:rotate-[0.8deg]
                relative cursor-pointer transition-all duration-500  bg-white flex flex-col justify-between"
                style={{
                  // transform: `scale(${scale}) rotateY(${rotateY}deg)`,
                  width: width,
                  minHeight: height,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                
                
                

                <div className="p-6 text-left">
                  <h3 className="text-lg font-bold text-[#01227F]">{review.name}</h3>
                  <p className="text-gray-500 text-sm mb-3">{review.role}</p>
                  <div
      className={`absolute top-16 left-6 right-6 transition-opacity duration-500`}
      style={{
        opacity: isActive ? 1 : 0,
        pointerEvents: isActive ? "auto" : "none", // prevent interaction when hidden
      }}
    >
      <p className="text-gray-700 mt-2 p-2">{review.text}</p>
    </div>
                </div>

                <div className="flex gap-1 p-4 justify-start">
                  {Array.from({ length: 5 }, (_, j) => (
                    <Star key={j} filled={j < review.rating} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BubbleCylinderTestimonials;

