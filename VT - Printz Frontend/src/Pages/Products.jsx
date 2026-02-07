import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const Products = () => {
  const navigate = useNavigate();
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        // We can use the simple categories endpoint or full catalog. 
        // Full catalog gives us images too if they are stored on the category object.
        // But simpler endpoint is lighter. Let's use full catalog to be consistent with images.
        const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/catalog/full-catalog`);
        setCategories(res.data);
      } catch (error) {
        console.error("Failed to load products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const ProductCard = ({ img, label, slug }) => (
    <div
      onClick={() => navigate(`/services?category=${slug}`)}
      className="
        bg-white rounded-2xl cursor-pointer
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        overflow-hidden
      "
    >
      <div className="p-6">
        {/* Fallback image if category has no image */}
        <img
          src={img || "https://placehold.co/400x300?text=No+Image"}
          alt={label}
          className="w-full h-40 object-cover rounded-xl"
        />
      </div>

      <div className="p-5 text-center">
        <h2 className="HeroHeading text-lg font-semibold text-gray-800">
          {label}
        </h2>
      </div>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-28">
        <Loader2 className="animate-spin text-[#DB2A7B]" size={48} />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 pt-28 px-4 sm:px-10">
      <div className="max-w-7xl mx-auto mb-14 text-center">
        <h1 className="HeroHeading text-4xl sm:text-5xl mb-4">
          Explore Our Products
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose from a wide range of customized printing, packaging, and
          promotional solutions designed to elevate your brand.
        </p>
      </div>

      <div className="max-w-7xl mx-auto p-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {categories.map((cat, index) => (
            <ProductCard
              key={index}
              img={cat.image}
              label={cat.category}
              slug={cat.categorySlug}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
