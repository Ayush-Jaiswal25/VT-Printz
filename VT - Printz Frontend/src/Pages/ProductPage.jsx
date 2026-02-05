import { useNavigate } from "react-router-dom";

import Billboard from "../Assets/printing.jpg";
import Stamps from "../Assets/office.jpg";
import Photo from "../Assets/photo.jpg";
import Wedding from "../Assets/invitation.jpg";
import Tote from "../Assets/packaging.jpg";
import Ticket from "../Assets/event.jpg";
import Seven from "../Assets/id.jpg";
import Delivery from "../Assets/markiting.jpg";

const PRODUCTS = [
  {
    img: Billboard,
    label: "Printing Services",
    path:"/services?category=printing-services",
  },
  {
    img: Delivery,
    label: "Marketing Materials",
    path: "/services?category=marketing-materials",
  },
  {
    img: Stamps,
    label: "Office Items",
    path: "/services?category=office-items",
  },
  {
    img: Photo,
    label: "Photo Frames",
    path: "/services?category=photo-frames",
  },
  {
    img: Wedding,
    label: "Invitations & Cards",
    path: "/services?category=invitations-cards",
  },
  {
    img: Tote,
    label: "Packaging Solutions",
    path:"/services?category=packaging-solutions",
  },
  {
    img: Ticket,
    label: "Tickets & Event Cards",
    path:"/services?category=tickets-event-cards",
  },
  {
    img: Seven,
    label: "ID Cards & Accessories",
    path:"/services?category=corporate-id-cards-accessories",
  },
];

const ProductPage = () => {
  const navigate = useNavigate();

  const ProductCard = ({ img, label, path }) => (
    <div
      onClick={() => navigate(path)}
      className="
        bg-white rounded-2xl cursor-pointer
        shadow-md hover:shadow-xl
        transition-all duration-300
        hover:-translate-y-1
        overflow-hidden
      "
    >
      {/* Image Section */}
      <div className="p-6">
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
      <div className="p-5 text-center">
        <h2 className="HeroHeading text-lg font-semibold text-gray-800">
          {label}
        </h2>
      </div>
    </div>
  );

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
            {PRODUCTS.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
