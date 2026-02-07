import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Loader2 } from "lucide-react";

import Billboard from "../Assets/printing.jpg";

const ProductPage = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/catalog/full-catalog`);
        // Map the API data to the structure needed for the card
        const mappedData = res.data.map(cat => ({
          label: cat.category,
          img: cat.image || Billboard, // Fallback image if none provided
          path: `/services?category=${cat.categorySlug}`
        }));
        setCategories(mappedData);
      } catch (error) {
        console.error("Failed to load categories:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();

    // Poll for updates every 10 seconds to keep the user view in sync with admin changes
    const interval = setInterval(fetchCategories, 10000);
    return () => clearInterval(interval);
  }, []);

  const ProductCard = ({ img, label, path }) => (
    <div
      onClick={() => navigate(path)}
      className="
        bg-white rounded-2xl cursor-pointer
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        overflow-hidden
        h-full flex flex-col
      "
    >
      {/* Image Section */}
      <div className="p-6 flex-grow">
        <img
          src={img}
          alt={label}
          className="
            w-full h-40 object-cover
            rounded-xl
          "
        />
      </div>

      {/* Text Section */}
      <div className="p-5 text-center mt-auto">
        <h2 className="HeroHeading text-lg font-semibold text-gray-800">
          {label}
        </h2>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <Loader2 className="animate-spin text-[#DB2A7B]" size={48} />
      </div>
    );
  }

  return (
    <div
      className="relative min-h-screen pt-28 px-4 sm:px-10"
      style={{
        backgroundImage: `url(${Billboard})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-white/80" />

      <div className="relative z-10">
        {/* PAGE HEADER */}
        <div className="max-w-7xl mx-auto mb-10 text-center">
          <h1 className="HeroHeading text-4xl sm:text-5xl mb-4">
            Explore Our Products
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Choose from a wide range of customized printing, packaging, and
            promotional solutions designed to elevate your brand.
          </p>
        </div>

        {/* PRODUCTS GRID */}
        <div className="max-w-7xl mx-auto p-10 mt-[-45px]">
          <div
            className="
              grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4
              gap-8
            "
          >
            {categories.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
