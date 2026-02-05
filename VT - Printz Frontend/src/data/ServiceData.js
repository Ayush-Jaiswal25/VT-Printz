// src/data/servicesData.jsx
import VisitingCards from "../Assets/Printing_Services_Images/service_visitingcards.png";
import PamphletsPosters from "../Assets/Printing_Services_Images/service_pamphletsposters.png";
import Letterheads from "../Assets/Printing_Services_Images/service_letterheads.png";
import StickersAndLabels from "../Assets/Printing_Services_Images/service_stickersandlabels.png";
import BillBooks from "../Assets/Printing_Services_Images/billbooks.png";
import PrintedPens from "../Assets/Printing_Services_Images/printed_pens.png";
import Envelops from "../Assets/Printing_Services_Images/envelops.png";
import FilesAndFolders from "../Assets/Printing_Services_Images/files&folders.png";
import GarmentsTag from "../Assets/Printing_Services_Images/garmentstag.png";
import CardHolder from "../Assets/Printing_Services_Images/cardholder.png";
import ShootingTargets from "../Assets/Printing_Services_Images/shooting targets.jpg";

import Banners from "../Assets/Marketing_Materials_Images/custombanner.png";
import Brochures from "../Assets/Marketing_Materials_Images/brochors.png";
import TableTopTentCards from "../Assets/Marketing_Materials_Images/tabletent.jpg";
import CustomRollUpStandees from "../Assets/Marketing_Materials_Images/image.png";



import PinBoard from "../Assets/Office_Items_Images/pinboard.png";
import PreInkedStamps from "../Assets/Office_Items_Images/preinkedstamps.png";
import PromotionalCalendars from "../Assets/Office_Items_Images/promotionalcalenders.png";
import PromotionalDiaries from "../Assets/Office_Items_Images/promotionaldiary.png";
import PromotionalMugs from "../Assets/Office_Items_Images/promotionalmug.png";
import RubberStamps from "../Assets/Office_Items_Images/rubberstamps.png";
import SelfInkedStamp from "../Assets/Office_Items_Images/selfinkedstamp.png";
import WhiteBoard from "../Assets/Office_Items_Images/whiteboard.png";


import CanvasPhotoFrame from "../Assets/Photo_Frames_Images/canvasphotoframe.png";
import ClassicPhotoFrame from "../Assets/Photo_Frames_Images/classicphotoframe.png";
import FramelessPhotoFrame from "../Assets/Photo_Frames_Images/framelessphotoframe.png";
import MattePhotoFrame from "../Assets/Photo_Frames_Images/mattephotoframe.png";
import PersonalizedAcrylicPhotoFrame from "../Assets/Photo_Frames_Images/personalizedacrylicphotoframe.png";
import WallPhotoFrame from "../Assets/Photo_Frames_Images/wallphotoframe.png";



import WeddingInvitations from "../Assets/Invitations_And_Cards_Images/weddinginvitations.png";
import ThankYouCards from "../Assets/Invitations_And_Cards_Images/thankyoucard.png";
import PostCards from "../Assets/Invitations_And_Cards_Images/postcard.png";
import BusinessInvitations from "../Assets/Invitations_And_Cards_Images/businessinvitation.png";
import BirthdayInvitations from "../Assets/Invitations_And_Cards_Images/birthdayinvitation.png";
import Certificates from "../Assets/Invitations_And_Cards_Images/certificate.png";
import GiftCouponCards from "../Assets/Invitations_And_Cards_Images/giftcouponcards.png";
import Vouchers from "../Assets/Invitations_And_Cards_Images/vouchers.png";
import RateCards from "../Assets/Invitations_And_Cards_Images/ratecards.png";

import EventTickets from "../Assets/Tickets_And_Events/eventtickets.png";
import RaffleCards from "../Assets/Tickets_And_Events/raffle.png";



import IDCards from "../Assets/Corporate_ID_Accessories/idcards.png";
import Lanyards from "../Assets/Corporate_ID_Accessories/lanyards.png";
import EventIDCards from "../Assets/Corporate_ID_Accessories/eventidcards.png";
import IDCardAccessories from "../Assets/Corporate_ID_Accessories/idcardaccessories.png";


import ToteBags from "../Assets/Packaging_Solutions/totebags.png";
import JuteBags from "../Assets/Packaging_Solutions/jutebags.png";


const marketingImages = {
  "Banners": Banners,
  "Brochures": Brochures,
  "Table Top Tent Cards":TableTopTentCards,
  "Custom Roll-Up Standees": CustomRollUpStandees,
};


const officeImages = {
  "Rubber Stamps": RubberStamps,
  "Self-Inked Stamps": SelfInkedStamp,
  "Pre-Inked Stamps": PreInkedStamps,
  "Pin Boards": PinBoard,
  "White Boards": WhiteBoard,
  "Promotional Diaries": PromotionalDiaries,
  "Promotional Calendars": PromotionalCalendars,
  "Promotional Mugs": PromotionalMugs,
};


const photoFrameImages = {
  "Classic Photo Frames": ClassicPhotoFrame,
  "Wall Photo Frames": WallPhotoFrame,
  "Canvas Photo Frames": CanvasPhotoFrame,
  "Matte Photo Frames": MattePhotoFrame,
  "Personalized Acrylic Photo Frames": PersonalizedAcrylicPhotoFrame,
  "Frameless Photo Frames": FramelessPhotoFrame,
};


const invitationImages = {
  "Wedding Invitations": WeddingInvitations,
  "Thank You Cards": ThankYouCards,
  "Post Cards": PostCards,
  "Business Invitations": BusinessInvitations,
  "Birthday Invitations": BirthdayInvitations,
  "Certificates": Certificates,
  "Gift Coupon Cards": GiftCouponCards,
  "Vouchers": Vouchers,
  "Rate Cards": RateCards,
};

const TicketsAndEventCardsImages = {
  "Event Tickets": EventTickets,
  "Raffle Cards": RaffleCards,
};

const corporateIdImages = {
  "ID Cards": IDCards,
  "Lanyards": Lanyards,
  "Event ID Cards": EventIDCards,
  "ID Card Accessories": IDCardAccessories,
};

const packagingImages = {
  "Tote Bags": ToteBags,
  "Jute Bags": JuteBags,
};


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
        originalPrice: 500,
        discountedPrice: 350,
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
            originalPrice: 500,
            discountedPrice: 350,
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
            originalPrice: 600,
            discountedPrice: 450,
          },
          {
            title: "Luxury Cards",
            slug: "luxury-cards",
            image: "https://picsum.photos/600/400?random=4",
            description: "Premium luxury cards with exclusive finishes.",
            features: ["Gold foiling", "Embossing", "Premium cardstock"],
            originalPrice: 800,
            discountedPrice: 650,
          },
        ],
      },

      {
        title: "Pamphlets & Posters",
        slug: "pamphlets-posters",
        image: PamphletsPosters,
        description: "Custom printed pamphlets and posters.",
        features: ["Glossy finish", "Custom sizes", "Affordable prices"],
        originalPrice: 700,
        discountedPrice: 550,
        subcategories: [
          {
            title: "Flyers",
            slug: "flyers",
            image: "https://picsum.photos/600/400?random=6",
            description: "Custom flyers for promotions.",
            features: ["Full color printing", "Fast turnaround"],
            originalPrice: 700,
            discountedPrice: 550,
          },
          {
            title: "Posters",
            slug: "posters",
            image: "https://picsum.photos/600/400?random=7",
            description: "Large format posters.",
            features: ["Durable material", "Custom design"],
            originalPrice: 900,
            discountedPrice: 750,
          },
        ],
      },

      {
        title: "Letterheads",
        slug: "letterheads",
        image: Letterheads,
        description: "Custom letterheads for official use.",
        features: ["Premium paper", "Custom designs", "Fast delivery"],
        originalPrice: 400,
        discountedPrice: 300,
        subcategories: [],
      },

      {
        title: "Stickers & Labels",
        slug: "stickers-labels",
        image: StickersAndLabels,
        description: "High-quality stickers and labels.",
        features: ["Durable adhesive", "Custom shapes", "Weather resistant"],
        originalPrice: 300,
        discountedPrice: 200,
        subcategories: [],
      },

      {
        title: "Bill Books",
        slug: "bill-books",
        image:BillBooks,
        description: "Printed bill books for business use.",
        features: ["Duplicate copies", "Custom branding"],
        originalPrice: 600,
        discountedPrice: 450,
        subcategories: [],
      },

      {
        title: "Printed Pens",
        slug: "printed-pens",
        image: PrintedPens,
        description: "Branded pens for promotion.",
        features: ["Smooth writing", "Custom logo"],
        originalPrice: 100,
        discountedPrice: 80,
        subcategories: [],
      },

      {
        title: "Envelopes",
        slug: "envelopes",
        image: Envelops,
        description: "Printed envelopes with branding.",
        features: ["Multiple sizes", "Premium paper"],
        originalPrice: 250,
        discountedPrice: 180,
        subcategories: [],
      },

      {
        title: "Files / Folders",
        slug: "files-folders",
        image:FilesAndFolders,
        description: "Custom printed files and folders.",
        features: ["Professional finish", "Durable"],
        originalPrice: 350,
        discountedPrice: 280,
        subcategories: [],
      },

      {
        title: "Garment Tags",
        slug: "garment-tags",
        image:GarmentsTag,
        description: "Printed garment tags for apparel.",
        features: ["Custom shapes", "Premium paper"],
        originalPrice: 150,
        discountedPrice: 120,
        subcategories: [],
      },

      {
        title: "Card Holders",
        slug: "card-holders",
        image:CardHolder,
        description: "Business card holders.",
        features: ["Durable material", "Compact design"],
        originalPrice: 200,
        discountedPrice: 150,
        subcategories: [],
      },

      {
        title: "Shooting Targets",
        slug: "shooting-targets",
        image:ShootingTargets,
        description: "Printed shooting targets.",
        features: ["High contrast", "Custom sizes"],
        originalPrice: 50,
        discountedPrice: 40,
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
      image: marketingImages[title],
      description: "Impactful marketing materials.",
      features: ["Vibrant colors", "Durable materials", "Custom branding"],
      originalPrice: 200 + (index * 50),
      discountedPrice: 150 + (index * 40),
      subcategories:[],
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
      image: officeImages[title],
      description: "Branded office essentials.",
      features: ["Custom branding", "Bulk orders"],
      originalPrice: 150 + (index * 30),
      discountedPrice: 120 + (index * 25),
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
      image: photoFrameImages[title],
      description: "Beautiful photo frames.",
      features: ["Premium finish", "Custom sizes"],
      originalPrice: 300 + (index * 70),
      discountedPrice: 250 + (index * 60),
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
      image: invitationImages[title],
      description: "Elegant cards for every occasion.",
      features: ["Premium paper", "Custom designs"],
      originalPrice: 180 + (index * 20),
      discountedPrice: 150 + (index * 15),
      subcategories: [],
    })),
  },

  {
    category: "Tickets & Event Cards",
    categorySlug: "tickets-event-cards",
    services: ["Event Tickets", "Raffle Cards"].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: TicketsAndEventCardsImages[title],
      description: "Professional event ticket printing.",
      features: ["Secure printing", "Bulk orders"],
      originalPrice: 120 + (index * 40),
      discountedPrice: 100 + (index * 30),
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
      image: corporateIdImages[title],
      description: "Professional identification solutions.",
      features: ["Durable material", "Custom branding"],
      originalPrice: 90 + (index * 10),
      discountedPrice: 70 + (index * 8),
      subcategories: [],
    })),
  },

  {
    category: "Packaging Solutions",
    categorySlug: "packaging-solutions",
    services: ["Tote Bags", "Jute Bags"].map((title, index) => ({
      title,
      slug: title.toLowerCase().replace(/\s+/g, "-"),
      image: packagingImages[title],
      description: "Eco-friendly packaging solutions.",
      features: ["Reusable", "Eco-friendly"],
      originalPrice: 220 + (index * 50),
      discountedPrice: 180 + (index * 40),
      subcategories: [],
    })),
  },
];
