import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from 'axios';
import { Loader2 } from 'lucide-react';
import CustomProductPage from "./CustomProductPage";

const ServiceCategoryPage = () => {
  const { categorySlug, serviceSlug, subSlug } = useParams();

  const [catalogData, setCatalogData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/catalog/full-catalog");
        setCatalogData(res.data);
      } catch (error) {
        console.error("Failed to load catalog:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-24">
        <Loader2 className="animate-spin text-[#DB2A7B]" size={48} />
      </div>
    );
  }

  // 1️⃣ Find category from loaded data
  const selectedCategory = catalogData.find(
    (category) => category.categorySlug === categorySlug
  );

  if (!selectedCategory) {
    return <div className="pt-24 text-center">Category not found</div>;
  }

  // 2️⃣ CATEGORY PAGE
  if (!serviceSlug) {
    return (
      <div className="bg-gray-50 pt-24">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#9A1E85] mb-8">
            {selectedCategory.category}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {selectedCategory.services.map((service) => (
              <Link
                key={service.slug}
                to={`/services/${categorySlug}/${service.slug}`}
                className="block rounded-xl border bg-white p-6 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-40 w-full object-cover rounded-lg"
                />
                <h3 className="mt-4 font-semibold">{service.title}</h3>
                <p className="text-sm text-gray-500">{service.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // 3️⃣ Find service
  const selectedService = selectedCategory.services.find(
    (service) => service.slug === serviceSlug
  );

  if (!selectedService) {
    return <div className="pt-24 text-center">Service not found</div>;
  }

  // 4️⃣ SUBCATEGORY DETAIL PAGE
  if (subSlug) {
    const selectedSubcategory = selectedService.subcategories.find(
      (sub) => sub.slug === subSlug
    );

    if (!selectedSubcategory) {
      return <div className="pt-24 text-center">Subcategory not found</div>;
    }

    return (
      <div className="bg-gray-50 pt-24">
        <div className="max-w-4xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-[#9A1E85]">
            {selectedSubcategory.title}
          </h2>
          <img
            src={selectedSubcategory.image}
            alt={selectedSubcategory.title}
            className="mt-6 rounded-lg"
          />
          <p className="mt-4">{selectedSubcategory.description}</p>
        </div>
      </div>
    );
  }

  // 5️⃣ SERVICE PAGE (list subcategories / products)
  return <CustomProductPage />;
};

export default ServiceCategoryPage;
