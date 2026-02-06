import React from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  ShoppingCart,
  Volume2,
  VolumeX,
  X,
  ChevronLeft,
  ChevronRight,
  Heart,
  Share2,
} from "lucide-react";

const items = [
  {
    label: "T Shirts",
    video: "/videos/tshirts.mp4",
    price: 399,
    oldPrice: 999,
    views: "17K",
  },
  {
    label: "Card",
    video: "/videos/badges.mp4",
    price: 599,
    oldPrice: 999,
    views: "7K",
  },
  {
    label: "Mobile Stand",
    video: "/videos/mobile-stand.mp4",
    price:199,
    oldPrice:299,
    views: "19K",
  },
  {
    label: "Metal Pens",
    video: "/videos/pens.mp4",
    price: 129,
    oldPrice: 175,
    views: "17K",
  },
  {
    label: "Keychains",
    video: "/videos/keychains.mp4",
    price: 999,
    oldPrice: 1599,
    views: "11K",
  },
  {
    label: "Colors",
    video: "/videos/colors.mp4",
    price: 299,
    oldPrice: 499,
    views: "15K",
  },
  {
    label: "Fabric",
    video: "/videos/fabric.mp4",
    price:999,
    oldPrice: 1499,
    views: "24K",
  },
  {
    label: "Quality",
    video: "/videos/quality.mp4",
    price:699,
    oldPrice:1599,
    views: "36K",
  },
];

export default function WatchAndBuy() {
  const [soundOn, setSoundOn] = React.useState({});
  const navigate = useNavigate();
  const [viewerOpen, setViewerOpen] = React.useState(false);
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [viewerMuted, setViewerMuted] = React.useState(true);
  const [liked, setLiked] = React.useState({});
  const [shareHint, setShareHint] = React.useState(false);
  const viewerRef = React.useRef(null);
  React.useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (viewerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow || "";
    }
    return () => {
      document.body.style.overflow = originalOverflow || "";
    };
  }, [viewerOpen]);
  React.useEffect(() => {
    const onKey = (e) => {
      if (!viewerOpen) return;
      if (e.key === "Escape") setViewerOpen(false);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + items.length) % items.length);
      if (e.key === "ArrowRight") setActiveIndex((i) => (i + 1) % items.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [viewerOpen]);
  const toggleSound = (e, i) => {
    const container = e.currentTarget.closest(".watch-card");
    const v = container && container.querySelector("video");
    if (v) {
      v.muted = !v.muted;
      setSoundOn((prev) => ({ ...prev, [i]: !prev[i] }));
    }
  };
  const handleBuy = (label) => {
    navigate(`/product-list?search=${encodeURIComponent(label)}`);
  };
  const getDiscount = (p) => {
    if (!p?.oldPrice || !p?.price) return 0;
    const d = Math.round(((p.oldPrice - p.price) / p.oldPrice) * 100);
    return d > 0 ? d : 0;
  };
  const openViewer = (i) => {
    setActiveIndex(i);
    setViewerOpen(true);
    setViewerMuted(true);
    setTimeout(() => {
      if (viewerRef.current) viewerRef.current.play();
    }, 0);
  };
  const closeViewer = () => setViewerOpen(false);
  const prevItem = () =>
    setActiveIndex((i) => (i - 1 + items.length) % items.length);
  const nextItem = () => setActiveIndex((i) => (i + 1) % items.length);
  const toggleViewerSound = () => {
    if (viewerRef.current) {
      viewerRef.current.muted = viewerMuted;
      viewerRef.current.play();
      setViewerMuted(!viewerMuted);
    }
  };
  const toggleLike = () =>
    setLiked((p) => ({ ...p, [activeIndex]: !p[activeIndex] }));
  const handleShare = async () => {
    const label = items[activeIndex]?.label || "";
    const url = `${window.location.origin}/product-list?search=${encodeURIComponent(label)}`;
    try {
      if (navigator.share) {
        await navigator.share({ title: label, url });
      } else if (navigator.clipboard) {
        await navigator.clipboard.writeText(url);
        setShareHint(true);
        setTimeout(() => setShareHint(false), 1500);
      }
    } catch (_) {
      setShareHint(true);
      setTimeout(() => setShareHint(false), 1500);
    }
  };
  return (
    <section className="w-full bg-white py-6 mt-5">
      <div className="max-w-8xl mb-20  mx-auto px-4">
        <h2 className="text-center text-3xl sm:text-4xl font-bold mb-6 ">
          Watch and Buy
        </h2>
        <div className="flex gap-3 sm:gap-6 overflow-x-auto pb-2 hidescroll snap-x snap-mandatory">
          {items.map((item, index) => (
            <div
              key={index}
              className="watch-card flex-shrink-0 w-64 rounded-xl bg-white shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden snap-start"
            >
              <div
                className="relative h-[34rem] sm:h-[34rem]"
                onClick={() => openViewer(index)}
              >
                <video
                  src={item.video}
                  muted
                  autoPlay
                  loop
                  playsInline
                  preload="auto"
                  className="w-full h-full object-cover"
                  onMouseEnter={(e) => e.target.play()}
                  onMouseLeave={(e) => {
                    e.target.pause();
                    e.target.currentTime = 0;
                  }}
                />
                <div className="absolute top-2 left-2 bg-black/60 text-white text-[10px] sm:text-xs rounded-full px-2 py-1">
                  {item.views}
                </div>
                <button
                  onClick={(e) => toggleSound(e, index)}
                  className="absolute top-2 right-2 bg-black/60 text-white text-[10px] sm:text-xs rounded-full px-2 py-1"
                >
                  {soundOn[index] ? "🔊" : "🔇"}
                </button>
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/50 to-transparent h-20" />
                <Link
                  to={`/product-list?search=${encodeURIComponent(item.label)}`}
                  onClick={(e) => e.stopPropagation()}
                  className="absolute bottom-3 left-3 right-3 block"
                >
                  <div className="bg-white/95 rounded-xl shadow-md px-3 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-md border border-gray-200 bg-gray-100 flex items-center justify-center text-gray-600 text-xs font-semibold">
                        {item.label?.slice(0, 1)}
                      </div>
                      <div className="flex-1">
                        <div className="text-[11px] sm:text-xs font-medium text-gray-900 truncate">
                          {item.label}
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="text-[#02192F] font-semibold text-sm sm:text-base">
                            ₹{item.price}
                          </div>
                          <div className="text-gray-400 line-through text-[10px] sm:text-xs">
                            ₹{item.oldPrice}
                          </div>
                          {getDiscount(item) > 0 && (
                            <span className="text-[10px] sm:text-xs bg-gray-200 text-gray-700 px-2 py-0.5 rounded-md">
                              {getDiscount(item)}% OFF
                            </span>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="mt-3 w-full bg-[#222] text-white text-[11px] sm:text-sm font-semibold py-2 rounded-lg shadow text-center">
                      BUY NOW
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {viewerOpen && (
        <div className="fixed inset-0 z-50 overflow-hidden pt-16 sm:pt-20">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={closeViewer}
          ></div>
          <button
            onClick={closeViewer}
            className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow"
          >
            <X size={18} />
          </button>
          <button
            onClick={prevItem}
            className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextItem}
            className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow"
          >
            <ChevronRight size={18} />
          </button>
          <div className="relative mx-auto max-w-[420px] h-[82vh] flex items-center justify-center">
            <div
              className="relative w-full h-full rounded-2xl overflow-hidden bg-black ring-1 ring-white/30 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                key={activeIndex}
                ref={viewerRef}
                src={items[activeIndex].video}
                muted={viewerMuted}
                autoPlay
                loop
                playsInline
                preload="auto"
                className="w-full h-full object-cover"
              />
              <div className="absolute top-3 left-3 bg-black/60 text-white text-xs rounded-full px-2 py-1">
                {items[activeIndex].views}
              </div>
              <div className="absolute right-3 top-3 bg-white/80 p-2 rounded-full shadow">
                <button onClick={toggleViewerSound}>
                  {viewerMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
                </button>
              </div>
              <div className="absolute right-3 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                <button
                  onClick={toggleLike}
                  className={`bg-white/80 p-2 rounded-full shadow ${liked[activeIndex] ? "text-[#DB2A7B]" : ""}`}
                >
                  <Heart size={16} />
                </button>
                <div className="relative">
                  <button
                    onClick={handleShare}
                    className="bg-white/80 p-2 rounded-full shadow"
                  >
                    <Share2 size={16} />
                  </button>
                  {shareHint && (
                    <span className="absolute -left-20 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded">
                      Copied
                    </span>
                  )}
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent h-24" />
              <div className="absolute inset-x-0 bottom-5 flex items-center justify-center gap-4">
                <Link
                  to={`/product-list?search=${encodeURIComponent(items[activeIndex].label)}`}
                  className="flex items-center gap-2 bg-[#DB2A7B] text-white text-sm font-semibold px-5 py-2 rounded-full shadow active:scale-95"
                >
                  <ShoppingCart size={16} />
                  ADD TO CART
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}



