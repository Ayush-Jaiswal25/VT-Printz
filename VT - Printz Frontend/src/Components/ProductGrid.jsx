import React from "react";
import { useNavigate } from "react-router-dom";
import RoundTShirt from "../Assets/RoundTShirt.png";
import PoloTShirt from "../Assets/PoloTShirt.png";
import Caps from "../Assets/Caps.jpg";
import CSK from "../Assets/CSKJersy.png";
import Hoodie from "../Assets/Hoodie.png";
import Mugs from "../Assets/Mugs.png";
import Bottle from '../Assets/Bottle1.png';
import Pamplate from '../Assets/Pamplate1.png';
import Canopy from '../Assets/Canopy.jpg';
import main from '../Assets/main.png';

const products = [
  {
    id: 1,
    title: "Custom Coffee Mugs",
    price: "$89",
    img: Mugs,
    desc: "Vintage vibes for modern streets."
  },
  {
    id: 2,
    title: "Flex & Pamphlet Designs",
    price: "$129",
    img: Pamplate,
    desc: "Bright sound, bright style."
  },
  {
    id: 3,
    title: "Custom Water Bottle",
    price: "$59",
    img: Bottle,
    desc: "Cozy, bold, and urban."
  },
  {
    id: 4,
    title: "Custom Canopy Tents",
    price: "$39",
    img: Canopy,
    desc: "Shade with attitude."
  },
  {
    id: 5,
    title: "",
    price: "",
    img: main,
    desc: ""
  }
];

const products1 = [
  {
    id: 1,
    title: "Round Neck T-shirt",
    price: "Rs.199",
    img: RoundTShirt,
    desc: "Premium round-neck custom T-shirt offering soft comfort, modern style, and vibrant personalized prints perfect for brands identity & daily wear."
  },
  {
    id: 2,
    title: "Polo T-shirt Classic",
    price: "Rs.299",
    img: PoloTShirt,
    desc: "Soft, Breathable, Elegant style."
  },
  {
    id: 3,
    title: "Custom Hoodies ",
    price: "Rs.499",
    img: Hoodie,
    desc: "Cozy, Bold, Stylish, Personalized."
  },
  {
    id: 4,
    title: "Brandy Caps",
    price: "Rs.99",
    img: Caps,
    desc: "Shade with attitude."
  },
  {
    id: 5,
    title: "Custom Jersey",
    price: "Rs.249",
    img: CSK,
    desc: "Athletic, Durable, Personalized."
  }
];

export default function ProductGrid3D() {
  const navigate = useNavigate();
  const handleView = (product) => {
    const numericPrice = (() => {
      const onlyDigits = String(product.price || "").replace(/[^0-9.]/g, "");
      const p = parseFloat(onlyDigits);
      return isNaN(p) ? 0 : p;
    })();
    navigate("/provider-product", {
      state: {
        item: {
          name: product.title || "Custom Product",
          category: "Custom Wear",
          price: numericPrice,
          media: product.img,
        },
      },
    });
  };
  return (
    <div>
      <section className="bg-white px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {products.slice(0, 2).map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-2xl shadow-md p-4 text-center flex-1 cursor-pointer"
                onClick={() => handleView(product)}
              >
                <h3 className="text-sm font-bold tracking-wide mb-3 uppercase">
                  {product.title}
                </h3>

                <img
                  src={product.img}
                  alt={product.title}
                  className="h-44 w-full object-contain mx-auto"
                />
              </div>
            ))}
          </div>


          {/* CENTER BIG CARD */}
          <div className="lg:col-span-2 bg-white border rounded-3xl shadow-lg p-10 flex flex-col items-center text-center">

            <h3 className="text-sm font-semibold text-gray-500 tracking-widest">
              CUSTOMIZED PREMIUM
            </h3>

            <h1 className="text-4xl md:text-5xl font-extrabold text-orange-500 mt-2">
              CORPORATE GIFTS
            </h1>

            <div className="mt-10 w-full h-80 relative rounded-2xl overflow-hidden">
              <img
                src={products[4].img}   // single image
                alt={products[4].title}
                className="absolute inset-0 w-full h-full object-contain"
              />
            </div>
            <button onClick={() => handleView(products1[0])} className="mt-10 px-10 py-3 bg-blue-700 text-white font-semibold rounded-full hover:bg-blue-800 transition">
              ORDER NOW
            </button>
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-6 h-full justify-between">
            {products.slice(2, 4).map((product) => (
              <div
                key={product.id}
                className="bg-white border rounded-2xl shadow-md p-4 text-center flex-1 cursor-pointer"
                onClick={() => handleView(product)}
              >
                <h3 className="text-sm font-bold tracking-wide mb-3 uppercase">
                  {product.title}
                </h3>

                <img
                  src={product.img}
                  alt={product.title}
                  className="h-44 w-full object-contain mx-auto"
                />
              </div>
            ))}
          </div>


        </div>
      </section>





      <div className="min-h-screen bg-gradient-to-b from-[#0C1E33] to-[#02192F] relative overflow-hidden">

        {/* Top gradient separator */}
        <div className="py-[60px] bg-gradient-to-b from-[#ffffff] to-[#0d2134]"></div>

        {/* Floating blob */}
        <div className="absolute bottom-0 right-0 w-40 sm:w-64 h-40 sm:h-64 bg-[#0085E1]/20 rounded-full blur-3xl animate-pulse"></div>

        <div className="px-4 sm:px-6">
          <h1 className="text-center text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-10 sm:mb-16 tracking-tight">
            Our Best Custom Wear
          </h1>

          {/* RESPONSIVE GRID */}
          <div className="
      grid gap-8 sm:gap-10 pb-20
      grid-cols-1 
      sm:grid-cols-2 
      lg:grid-cols-4
      auto-rows-auto
    ">

            {/* Large featured card / stays same on desktop */}
            <div className="
        bg-[#0A1B2E] rounded-3xl p-6 sm:p-8 shadow-neu hover:shadow-neu-hover 
        transition-transform duration-500 transform hover:-translate-y-2
        col-span-1 sm:col-span-2 lg:col-span-2 
        row-span-1 sm:row-span-2
      ">
              <img
                src={products1[0].img}
                alt={products1[0].title}
                className="w-full h-52 sm:h-64 lg:h-64 object-cover rounded-2xl mb-5"
              />

              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {products1[0].title}
              </h2>

              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed">
                {products1[0].desc}
                <br /><br />
                Whether you want a unique design, logo, name, or message, we print it with high-quality, long-lasting colors that stay vivid even after multiple washes.
                <br /><br />
                Features:–
                <br />● DTF Printing – Vibrant & durable
                <br />● Vinyl Printing – Premium finish
                <br />● Sublimation – Fade-resistant
              </p>

                <div className="flex md:mt-32 items-center justify-between ">
                <span className="text-2xl sm:text-3xl font-extrabold text-[#0085E1]">{products1[0].price}</span>
                <button onClick={() => handleView(products1[0])} className="px-5 sm:px-6 py-2 rounded-full bg-[#DB2A7B] text-white font-semibold shadow-neu-button hover:bg-[#9A1E85] transition">
                  View
                </button>
              </div>
            </div>

            {/* Smaller cards – responsive */}
            {products1.slice(1).map((product) => (
              <div
                key={product.id}
                className="
                  bg-[#0A1B2E] rounded-3xl p-5 sm:p-6 flex flex-col justify-between
                  shadow-neu hover:shadow-neu-hover 
                  transition-transform duration-500 transform hover:-translate-y-2
                "
              >
                <img
                  src={product.img}
                  alt={product.title}
                  className="w-full h-40 sm:h-48 object-cover rounded-2xl mb-4"
                />

                <h2 className="text-lg sm:text-xl font-bold text-white mb-1">{product.title}</h2>
                <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                  {product.desc}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xl sm:text-2xl font-bold text-[#0085E1]">{product.price}</span>
                  <button onClick={() => handleView(product)} className="px-4 py-2 rounded-full bg-[#DB2A7B] text-white font-medium shadow-neu-button hover:bg-[#9A1E85] transition">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom gradient separator */}
        <div className="py-[60px] bg-gradient-to-b from-[#0d2134] to-[#F7F8FF]"></div>

        {/* Neumorphism shadow styles */}
        <style>
          {`
      .shadow-neu {
        box-shadow: 8px 8px 20px rgba(0,0,0,0.4), -8px -8px 20px rgba(255,255,255,0.05);
      }
      .shadow-neu-hover {
        box-shadow: 12px 12px 28px rgba(0,0,0,0.5), -12px -12px 28px rgba(255,255,255,0.07);
      }
      .shadow-neu-button {
        box-shadow: 4px 4px 12px rgba(0,0,0,0.4), -4px -4px 12px rgba(255,255,255,0.05);
      }
    `}
        </style>
      </div>

    </div>
  );
}



