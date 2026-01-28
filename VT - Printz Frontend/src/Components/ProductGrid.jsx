import React from "react";
import RoundTShirt from "../Assets/RoundTShirt.png";
import PoloTShirt from "../Assets/PoloTShirt.png";
import Caps from "../Assets/Caps.jpg";
import CSK from "../Assets/CSKJersy.png";
import Hoodie from "../Assets/Hoodie.png";
import Mugs from "../Assets/Mugs.png";
import Bottle from '../Assets/Bottle1.png';
import Pamplate from '../Assets/Pamplate1.png';
import Canopy from '../Assets/Canopy.jpg';

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
  return (
    <div>
      <div className="min-h-[90%] px-6 pb-20 bg-gradient-to-b from-[#ffffff] to-[#ffffff]">

      <h1 className="text-center text-5xl font-extrabold mb-16 tracking-tight">
        Popular Products
      </h1>

      <div className="grid gap-14 sm:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="
              group
              bg-[#FFFFFF10]
              backdrop-blur-xl
              rounded-3xl 
              p-5
              border border-white/10
              shadow-[0_20px_40px_rgba(0,0,0,0.35)]
              hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)]
              transition-all 
              duration-500 
              transform 
              hover:-translate-y-4
              hover:rotate-[0.8deg]
            "
            style={{
              perspective: "1000px"
            }}
          >
            {/* glowing background behind card */}
            <div className="
              absolute 
              inset-0 
              -z-10 
              rounded-3xl 
              opacity-0 
              blur-2xl
              group-hover:opacity-20 
              transition-all 
              duration-500 
              
            ">
            </div>

            <img
              src={product.img}
              alt={product.title}
              className="
                h-48 w-full object-cover 
                rounded-xl 
                shadow-[0_8px_20px_rgba(0,0,0,0.35)]
                group-hover:scale-105
                group-hover:shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                transition-all
                duration-500
              "
            />

            <div className="mt-5">
              <h2 className="text-xl font-semibold  mb-1">
                {product.title}
              </h2>

              {/* <p className="text-gray-600 text-sm mb-4">
                {product.desc}
              </p> */}

              {/* <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-[#0085E1]">
                  {product.price}
                </span>

                <button
                  className="
                    px-4 py-2 
                    text-white 
                    bg-[#DB2A7B]
                    font-semibold 
                    rounded-lg 
                    shadow-[0_0_15px_#DB2A7B80]
                    hover:bg-[#9A1E85]
                    
                    transition-all
                  "
                >
                  Buy
                </button>
              </div> */}
            </div>

          </div>
        ))}
      </div>
    </div>

    

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
          <button className="px-5 sm:px-6 py-2 rounded-full bg-[#DB2A7B] text-white font-semibold shadow-neu-button hover:bg-[#9A1E85] transition">
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
            <button className="px-4 py-2 rounded-full bg-[#DB2A7B] text-white font-medium shadow-neu-button hover:bg-[#9A1E85] transition">
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



