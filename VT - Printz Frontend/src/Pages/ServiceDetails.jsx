// // src/pages/ServiceDetail.jsx
// import { useParams, Link } from "react-router-dom";
// import { getServiceBySlug } from "../Utils/getServiceBySlug";

// const ServiceDetail = () => {
//   const { slug } = useParams();
//   const service = getServiceBySlug(slug);

//   if (!service) {
//     return (
//       <div className="min-h-[60vh] flex flex-col items-center justify-center text-center">
//         <h2 className="text-2xl font-semibold text-[#9A1E85]">
//           Service Not Found
//         </h2>
//         <Link
//           to="/services"
//           className="mt-4 text-[#0085E1] underline"
//         >
//           Back to Services
//         </Link>
//       </div>
//     );
//   }

//   return (
//     <div className="bg-white">

//       {/* Hero */}
//       <div className="bg-[#9A1E85] text-white py-14">
//         <div className="max-w-7xl mx-auto px-6">
//           <p className="text-sm opacity-80">{service.category}</p>
//           <h1 className="text-4xl font-bold mt-2">
//             {service.title}
//           </h1>
//           <p className="mt-4 max-w-2xl">
//             {service.description}
//           </p>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-2 gap-12">

//         {/* Image */}
//         <div className="border-2 border-[#DB2A7B] rounded-xl overflow-hidden">
//           <img
//             src={service.image}
//             alt={service.title}
//             className="w-full h-full object-cover"
//           />
//         </div>

//         {/* Details */}
//         <div>
//           <h2 className="text-2xl font-semibold text-[#9A1E85] mb-6">
//             Why Choose This Service?
//           </h2>

//           <ul className="space-y-4">
//             {service.features.map((feature, index) => (
//               <li
//                 key={index}
//                 className="flex items-start gap-3 text-gray-700"
//               >
//                 <span className="text-[#0085E1] font-bold text-lg">✓</span>
//                 {feature}
//               </li>
//             ))}
//           </ul>

//           {/* CTA */}
//           <div className="mt-10 flex flex-wrap gap-4">
//             <button className="px-6 py-3 rounded-md bg-[#0085E1] text-white font-medium hover:bg-[#9A1E85] transition">
//               Order Now
//             </button>

//             <button className="px-6 py-3 rounded-md border-2 border-[#DB2A7B] text-[#9A1E85] hover:bg-[#DB2A7B] hover:text-white transition">
//               Get Quote
//             </button>
//           </div>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default ServiceDetail;


// src/pages/ServiceDetailPage.jsx
import { useParams } from "react-router-dom";
import { servicesData } from "../data/ServiceData";

const ServiceDetailPage = () => {
  const { categorySlug, serviceSlug } = useParams(); // Get category and service slugs from URL

  // Find the selected category
  const selectedCategory = servicesData.find(
    (category) => category.category.toLowerCase().replace(/\s+/g, "-") === categorySlug
  );

  if (!selectedCategory) {
    return <div>Category not found</div>; // Handle when category is not found
  }

  // Find the selected service inside the category
  const selectedService = selectedCategory.services.find(
    (service) => service.slug === serviceSlug
  );

  if (!selectedService) {
    return <div>Service not found</div>; // Handle when service is not found
  }

  return (
    <div className="bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="flex flex-col md:flex-row items-center gap-12">
          <img
            src={selectedService.image}
            alt={selectedService.title}
            className="w-full md:w-1/2 rounded-lg"
          />
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold text-[#9A1E85]">{selectedService.title}</h1>
            <p className="mt-4 text-lg">{selectedService.description}</p>

            {/* Features of the service */}
            <div className="mt-6">
              <h3 className="font-semibold">Features:</h3>
              <ul className="list-disc pl-5 text-sm text-gray-600">
                {selectedService.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-6">
              <button className="bg-[#9A1E85] text-white px-8 py-3 rounded-lg hover:bg-[#7b166b]">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailPage;
