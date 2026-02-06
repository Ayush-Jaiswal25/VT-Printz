import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySection from "../Components/CategorySection";
import CategorySidebar from "../Components/CategorySidebar";
import axios from 'axios';
import { Loader2 } from 'lucide-react';

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const categorySlugFromURL = searchParams.get("category");

  const [catalogData, setCatalogData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategorySlug, setSelectedCategorySlug] = useState("");

  // 1. Fetch Data
  // 1. Fetch Data
  useEffect(() => {
    const fetchData = async (initializeSelection = false) => {
      try {
        // Determine API URL based on environment
        // Assuming localhost for now as per instructions, or relative path if proxied
        const res = await axios.get("http://localhost:5000/api/catalog/full-catalog");
        setCatalogData(res.data);

        // Set default category if not already set or if URL param exists (ONLY ON INIT)
        if (initializeSelection && res.data.length > 0) {
          if (categorySlugFromURL) {
            setSelectedCategorySlug(categorySlugFromURL);
          } else {
            setSelectedCategorySlug(res.data[0].categorySlug);
          }
        }
      } catch (error) {
        console.error("Failed to load catalog:", error);
      } finally {
        setLoading(false);
      }
    };

    // Initial fetch
    fetchData(true);

    // Poll for updates every 10 seconds
    const interval = setInterval(() => fetchData(false), 10000);
    return () => clearInterval(interval);
  }, []);

  // 2. Sync URL changes to state (only if data is loaded)
  useEffect(() => {
    if (categorySlugFromURL && catalogData.length > 0) {
      setSelectedCategorySlug(categorySlugFromURL);
    }
  }, [categorySlugFromURL, catalogData]);

  const activeCategory = catalogData.find(
    (item) => item.categorySlug === selectedCategorySlug
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <Loader2 className="animate-spin text-[#DB2A7B]" size={48} />
      </div>
    );
  }

  return (
    <div className="bg-white pt-24 min-h-screen">
      <div className="max-w-7xl mx-auto mb-[-20px] mt-[30px] text-center">
        <h1 className="HeroHeading text-4xl sm:text-5xl mb-4">Our Printing Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Custom printing solutions for personal & business needs</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">

        {/* Sidebar */}
        <div className="hidden lg:block">
          <CategorySidebar
            categories={catalogData.map((item) => ({
              name: item.category,
              slug: item.categorySlug,
            }))}
            selectedCategory={selectedCategorySlug}
            onSelect={setSelectedCategorySlug}
          />
        </div>

        {/* Services */}
        <div className="lg:col-span-3">
          {activeCategory ? (
            <CategorySection
              category={activeCategory.category}
              services={activeCategory.services}
              categorySlug={activeCategory.categorySlug}
            />
          ) : (
            <div className="text-center text-gray-500">
              {catalogData.length === 0 ? "No categories found." : "Category not found."}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

