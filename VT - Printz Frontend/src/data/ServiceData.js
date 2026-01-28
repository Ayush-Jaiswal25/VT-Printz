// src/data/servicesData.jsx
import VisitingCards from "../Assets/Printing_Services_Images/service_visitingcards.png";
import PamphletsPosters from "../Assets/Printing_Services_Images/service_pamphletsposters.png";
import Letterheads from "../Assets/Printing_Services_Images/service_letterheads.png";
import StickersAndLabels from "../Assets/Printing_Services_Images/service_stickersandlabels.png";
import BillBooks from "../Assets/Printing_Services_Images/billbooks.png";
import PrintedPens from "../Assets/Printing_Services_Images/printed_pens.png";
import Envelops from "../Assets/Printing_Services_Images/envelops.png"

export const servicesData = [
  {
    category: "Printing Services",
    categorySlug: "printing-services",
    services: [
      {
        title: "Visiting Cards",
        slug: "visiting-cards",
        image: VisitingCards,
        description: "High-quality professional printing with premium materials.",
        features: ["Premium quality", "Custom sizes", "Fast delivery"],
        subcategories: [
          {
            title: "Business Cards",
            slug: "business-cards",
            image: "https://picsum.photos/600/400?random=2",
            description: "Custom business cards with your branding.",
            features: [
              "Custom designs",
              "High-quality card stock",
              "Fast delivery",
            ],
          },
          {
            title: "Personalized Cards",
            slug: "personalized-cards",
            image: "https://picsum.photos/600/400?random=3",
            description: "Personalized cards for gifting or personal use.",
            features: [
              "Full color printing",
              "Custom shapes",
              "Luxury finishes",
            ],
          },
          {
            title: "Luxury Cards",
            slug: "luxury-cards",
            image: "https://picsum.photos/600/400?random=4",
            description: "Premium luxury cards with exclusive finishes.",
            features: ["Gold foiling", "Embossing", "Premium cardstock"],
          },
        ],
      },

      {
        title: "Pamphlets & Posters",
        slug: "pamphlets-posters",
        image: PamphletsPosters,
        description: "Custom printed pamphlets and posters.",
        features: ["Glossy finish", "Custom sizes", "Affordable prices"],
        subcategories: [
          {
            title: "Flyers",
            slug: "flyers",
            image: "https://picsum.photos/600/400?random=6",
            description: "Custom flyers for promotions.",
            features: ["Full color printing", "Fast turnaround"],
          },
          {
            title: "Posters",
            slug: "posters",
            image: "https://picsum.photos/600/400?random=7",
            description: "Large format posters.",
            features: ["Durable material", "Custom design"],
          },
        ],
      },

      {
        title: "Letterheads",
        slug: "letterheads",
        image: Letterheads,
        description: "Custom letterheads for official use.",
        features: ["Premium paper", "Custom designs", "Fast delivery"],
        subcategories: [],
      },

      {
        title: "Stickers & Labels",
        slug: "stickers-labels",
        image: StickersAndLabels,
        description: "High-quality stickers and labels.",
        features: ["Durable adhesive", "Custom shapes", "Weather resistant"],
        subcategories: [],
      },

      {
        title: "Bill Books",
        slug: "bill-books",
        image:BillBooks,
        description: "Printed bill books for business use.",
        features: ["Duplicate copies", "Custom branding"],
        subcategories: [],
      },

      {
        title: "Printed Pens",
        slug: "printed-pens",
        image: PrintedPens,
        description: "Branded pens for promotion.",
        features: ["Smooth writing", "Custom logo"],
        subcategories: [],
      },

      {
        title: "Envelopes",
        slug: "envelopes",
        image: Envelops,
        description: "Printed envelopes with branding.",
        features: ["Multiple sizes", "Premium paper"],
        subcategories: [],
      },

      {
        title: "Files / Folders",
        slug: "files-folders",
        image: "https://picsum.photos/600/400?random=11",
        description: "Custom printed files and folders.",
        features: ["Professional finish", "Durable"],
        subcategories: [],
      },

      {
        title: "Garment Tags",
        slug: "garment-tags",
        image: "https://picsum.photos/600/400?random=12",
        description: "Printed garment tags for apparel.",
        features: ["Custom shapes", "Premium paper"],
        subcategories: [],
      },

      {
        title: "Card Holders",
        slug: "card-holders",
        image: "https://picsum.photos/600/400?random=13",
        description: "Business card holders.",
        features: ["Durable material", "Compact design"],
        subcategories: [],
      },

      {
        title: "Shooting Targets",
        slug: "shooting-targets",
        image: "https://picsum.photos/600/400?random=14",
        description: "Printed shooting targets.",
        features: ["High contrast", "Custom sizes"],
        subcategories: [],
      },
    ],
  },

  {
    category: "Marketing Materials",
    categorySlug: "marketing-materials",
    services: [
      "Banners",
      "Brochures",
      "Table Top Tent Cards",
      "Custom Roll-Up Standees",
    ].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${20 + index}`,
      description: "Impactful marketing materials.",
      features: ["Vibrant colors", "Durable materials", "Custom branding"],
      subcategories: [],
    })),
  },

  {
    category: "Office Items",
    categorySlug: "office-items",
    services: [
      "Rubber Stamps",
      "Self-Inked Stamps",
      "Pre-Inked Stamps",
      "Pin Boards",
      "White Boards",
      "Promotional Diaries",
      "Promotional Calendars",
      "Promotional Mugs",
    ].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${40 + index}`,
      description: "Branded office essentials.",
      features: ["Custom branding", "Bulk orders"],
      subcategories: [],
    })),
  },

  {
    category: "Photo Frames",
    categorySlug: "photo-frames",
    services: [
      "Classic Photo Frames",
      "Wall Photo Frames",
      "Canvas Photo Frames",
      "Matte Photo Frames",
      "Personalized Acrylic Photo Frames",
      "Frameless Photo Frames",
    ].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${60 + index}`,
      description: "Beautiful photo frames.",
      features: ["Premium finish", "Custom sizes"],
      subcategories: [],
    })),
  },

  {
    category: "Invitations & Cards",
    categorySlug: "invitations-cards",
    services: [
      "Wedding Invitations",
      "Thank You Cards",
      "Post Cards",
      "Business Invitations",
      "Birthday Invitations",
      "Certificates",
      "Gift Coupon Cards",
      "Vouchers",
      "Rate Cards",
    ].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${80 + index}`,
      description: "Elegant cards for every occasion.",
      features: ["Premium paper", "Custom designs"],
      subcategories: [],
    })),
  },

  {
    category: "Tickets & Event Cards",
    categorySlug: "tickets-event-cards",
    services: ["Event Tickets", "Raffle Cards"].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${100 + index}`,
      description: "Professional event ticket printing.",
      features: ["Secure printing", "Bulk orders"],
      subcategories: [],
    })),
  },

  {
    category: "Corporate ID Cards & Accessories",
    categorySlug: "corporate-id-cards-accessories",
    services: [
      "ID Cards",
      "Lanyards",
      "Event ID Cards",
      "ID Card Accessories",
    ].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${120 + index}`,
      description: "Professional identification solutions.",
      features: ["Durable material", "Custom branding"],
      subcategories: [],
    })),
  },

  {
    category: "Packaging Solutions",
    categorySlug: "packaging-solutions",
    services: ["Tote Bags", "Jute Bags"].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: `https://picsum.photos/600/400?random=${140 + index}`,
      description: "Eco-friendly packaging solutions.",
      features: ["Reusable", "Eco-friendly"],
      subcategories: [],
    })),
  },
];
