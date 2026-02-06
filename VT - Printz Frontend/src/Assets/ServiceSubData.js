// src/Assets/ServiceData.js
import VisitingCards from './service_visitingcards.png';
import PamphletsPosters from './service_pamphletsposters.png';
import Letterheads from './service_letterheads.png';
import PhotoFrames from './service_photoframes.png';
import Invitations from './service_invitations.png';
import Tickets from './service_tickets.png';
import IDCards from './service_idcards.png';
import Packaging from './service_packaging.png';
import Banners from './service_banners.png';
import Brochures from './service_brochures.png';

export const servicessubData = [
  {
    category: "Printing Services",
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
            image: VisitingCards,
            description: "Custom business cards with your branding.",
            features: ["Custom designs", "High-quality card stock", "Fast delivery"]
          },
          {
            title: "Personalized Cards",
            slug: "personalized-cards",
            image: VisitingCards,
            description: "Personalized cards for personal use or gifting.",
            features: ["Full color printing", "Custom shapes", "Luxury finishes"]
          },
          {
            title: "Luxury Cards",
            slug: "luxury-cards",
            image: VisitingCards,
            description: "High-end luxury business cards with unique finishes.",
            features: ["Gold foiling", "Embossing", "Premium cardstock"]
          }
        ]
      },
      {
        title: "Pamphlets & Posters",
        slug: "pamphlets-posters",
        image: PamphletsPosters,
        description: "Custom printed pamphlets and posters for your business.",
        features: ["Glossy finish", "Custom sizes", "Affordable prices"],
        subcategories: [
          {
            title: "Flyers",
            slug: "flyers",
            image: PamphletsPosters,
            description: "Custom flyers for promotional use.",
            features: ["Full color printing", "High gloss finish", "Fast turnaround"]
          },
          {
            title: "Posters",
            slug: "posters",
            image: PamphletsPosters,
            description: "Custom printed posters for events and promotions.",
            features: ["Large format", "Custom designs", "Durable materials"]
          }
        ]
      },
      {
        title: "Letterheads",
        slug: "letterheads",
        image: Letterheads,
        description: "Custom letterheads for official use.",
        features: ["Premium paper", "Custom designs", "Fast delivery"],
        subcategories: []
      }
    ]
  },

  {
    category: "Signage & Marketing Materials",
    services: [
      {
        title: "Banners",
        slug: "banners",
        image: Banners,
        description: "Large custom banners for events, exhibitions, and promotions.",
        features: ["Weather-resistant", "Custom sizes", "Bold colors"],
        subcategories: []
      },
      {
        title: "Brochures",
        slug: "brochures",
        image: Brochures,
        description: "High-quality brochures for marketing and promotions.",
        features: ["Full-color printing", "Custom designs", "Fast turnaround"],
        subcategories: []
      }
    ]
  },
  {
    category: "Photo Frames",
    services: [
      {
        title: "Photo Frames",
        slug: "photo-frames",
        image: PhotoFrames,
        description: "Elegant photo frames for home and office decor.",
        features: ["Various sizes", "High-quality material", "Custom designs"],
        subcategories: []
      }
    ]
  },
  {
    category: "Invitations & Cards",
    services: [
      {
        title: "Invitations",
        slug: "invitations",
        image: Invitations,
        description: "Beautifully designed invitations for all occasions.",
        features: ["Custom designs", "Premium paper", "Envelopes included"],
        subcategories: []
      }
    ]
  },
  {
    category: "Tickets & Event Cards",
    services: [
      {
        title: "Tickets",
        slug: "tickets",
        image: Tickets,
        description: "Custom tickets for events, concerts, and parties.",
        features: ["Secure printing", "Numbering", "Perforation"],
        subcategories: []
      }
    ]
  },
  {
    category: "Corporate ID Cards & Accessories",
    services: [
      {
        title: "ID Cards",
        slug: "id-cards",
        image: IDCards,
        description: "Professional ID cards for employees and members.",
        features: ["Durable plastic", "High-resolution printing", "Accessories available"],
        subcategories: []
      }
    ]
  },
  {
    category: "Packaging Solutions",
    services: [
      {
        title: "Packaging",
        slug: "packaging",
        image: Packaging,
        description: "Custom packaging solutions for your products.",
        features: ["Eco-friendly", "Custom sizes", "Branding"],
        subcategories: []
      }
    ]
  }

];
