// // // src/pages/ServicesPage.jsx
// // import { useState } from "react";
// // import CategorySection from "../Components/CategorySection";
// // import CategorySidebar from "../Components/CategorySidebar";
// // import { servicesData } from "../data/ServiceData";

// // const ServicesPage = () => {
// //   const categories = servicesData.map((item) => item.category);

// //   // ⭐ default selected category
// //   const [selectedCategory, setSelectedCategory] = useState(categories[0]);

// //   const activeCategory = servicesData.find(
// //     (item) => item.category === selectedCategory
// //   );

// //   return (
// //     <div className="bg-white pt-24">
      
// //       {/* Header */}
// //       <div className="bg-[#9A1E85] text-white py-16 text-center">
// //         <h1 className="text-4xl font-bold">Our Printing Services</h1>
// //         <p className="mt-4 text-lg">
// //           Custom printing solutions for personal & business needs
// //         </p>
// //       </div>

// //       {/* Content */}
// //       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
// //         {/* Left Sidebar */}
// //         <div className="hidden lg:block">
// //           <CategorySidebar
// //             categories={categories}
// //             selectedCategory={selectedCategory}
// //             onSelect={setSelectedCategory}
// //           />
// //         </div>

// //         {/* Services */}
// //         <div className="lg:col-span-3">
// //           {activeCategory && (
// //             <CategorySection
// //               category={activeCategory.category}
// //               services={activeCategory.services}
// //             />
// //           )}
// //         </div>

// //       </div>
// //     </div>
// //   );
// // };

// // export default ServicesPage;


// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import CategorySection from "../Components/CategorySection";
// import CategorySidebar from "../Components/CategorySidebar";
// import { servicesData } from "../data/ServiceData";


// const ServicesPage = () => {
//   // All category names (for sidebar)
//   const categories = servicesData.map((item) => item.category);

//   // Read query param
//   const [searchParams] = useSearchParams();
//   const categoryFromURL = searchParams.get("category");

//   // Selected category state
//   const [selectedCategory, setSelectedCategory] = useState(
//     categoryFromURL || categories[0]
//   );

//   // Sync URL → state
//   useEffect(() => {
//     if (categoryFromURL && categories.includes(categoryFromURL)) {
//       setSelectedCategory(categoryFromURL);
//     }
//   }, [categoryFromURL, categories]);

//   // 🔥 IMPORTANT FIX (name OR slug both supported)
//   const activeCategory = servicesData.find(
//     (item) =>
//       item.category === selectedCategory ||
//       item.categorySlug === selectedCategory
//   );

//   return (
//     <div className="bg-white pt-24">
//       {/* Header */}
//       <div className="bg-[#9A1E85] text-white py-16 text-center">
//         <h1 className="text-4xl font-bold">Our Printing Services</h1>
//         <p className="mt-4 text-lg">
//           Custom printing solutions for personal & business needs
//         </p>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
//         {/* Sidebar */}
//         <div className="hidden lg:block">
//           <CategorySidebar
//             categories={categories}
//             selectedCategory={selectedCategory}
//             onSelect={setSelectedCategory}
//           />
//         </div>

//         {/* Services */}
//         <div className="lg:col-span-3">
//           {activeCategory ? (
//             <CategorySection
//               category={activeCategory.category}
//               services={activeCategory.services}
//             />
//           ) : (
//             <div className="text-center text-gray-500">
//               No services found for this category.
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ServicesPage;

import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CategorySection from "../Components/CategorySection";
import CategorySidebar from "../Components/CategorySidebar";
import { servicesData } from "../data/ServiceData";

const ServicesPage = () => {
  const [searchParams] = useSearchParams();
  const categorySlugFromURL = searchParams.get("category");

  // default = first category slug
  const [selectedCategorySlug, setSelectedCategorySlug] = useState(
    categorySlugFromURL || servicesData[0].categorySlug
  );

  // sync URL → state
  useEffect(() => {
    if (categorySlugFromURL) {
      setSelectedCategorySlug(categorySlugFromURL);
    }
  }, [categorySlugFromURL]);

  const activeCategory = servicesData.find(
    (item) => item.categorySlug === selectedCategorySlug
  );

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      {/* <div className="bg-[#9A1E85] text-white py-16 text-center">
        <h1 className="text-4xl font-bold">Our Printing Services</h1>
        <p className="mt-4 text-lg">
          Custom printing solutions for personal & business needs
        </p>
      </div> */}

      <div className="max-w-7xl mx-auto mb-[-20px] mt-[30px] text-center">
        <h1 className="HeroHeading text-4xl sm:text-5xl mb-4">Our Printing Services</h1>
        <p className="text-gray-500 max-w-2xl mx-auto">Custom printing solutions for personal & business needs</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-4 gap-10">
        
        {/* Sidebar */}
        <div className="hidden lg:block">
          <CategorySidebar
            categories={servicesData.map((item) => ({
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
              No services found.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;

