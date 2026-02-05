import React from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { MyContext } from "../ContextAPI.jsx";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const shapeOptions = ["Logo Cutout", "Circle", "Square"];
const packOptions = [10, 20, 50, 100, "3 Pieces Sample"];

function ProviderProductDetail() {
  const { addToCart, shareCartOnWhatsApp } = React.useContext(MyContext) || {};
  const location = useLocation();
  const [params] = useSearchParams();

  const stateItem = location.state?.item;
  const queryItem = {
    name: params.get("name"),
    category: params.get("category"),
    price: params.get("price"),
    media: params.get("media"),
  };
  const baseItem = stateItem || queryItem;
  const name = baseItem?.name || "Customized Magnetic Badge";
  const category = baseItem?.category || "Magnetic Badge";
  const basePrice = parseFloat(baseItem?.price) || 1699;
  const media = baseItem?.media || undefined;
  const oldPrice = Math.round(basePrice * 1.23);

  const [shape, setShape] = React.useState(shapeOptions[0]);
  const [pack, setPack] = React.useState(10);
  const [logoFile, setLogoFile] = React.useState(null);
  const fileRef = React.useRef(null);
  const [logoUrl, setLogoUrl] = React.useState(null);
  React.useEffect(() => {
    if (!logoFile) {
      setLogoUrl(null);
      return;
    }
    const u = URL.createObjectURL(logoFile);
    setLogoUrl(u);
    return () => URL.revokeObjectURL(u);
  }, [logoFile]);

  const qty = typeof pack === "number" ? pack : 3;
  const total = basePrice * qty;

  const onAddToCart = () => {
    const title = `${name} | ${shape} | ${qty} Pcs`;
    addToCart && addToCart({ name: title, price: total, quantity: 1 });
    shareCartOnWhatsApp && shareCartOnWhatsApp();
  };

  return (
    <div className="bg-white pt-24">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative">
          <div
            className="w-full aspect-square rounded-xl overflow-hidden border border-gray-200 bg-gray-100"
            style={{
              backgroundImage: media ? `url(${media})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          {logoUrl && (
            <div className="absolute inset-0 flex items-center justify-center">
              <div
                className="flex items-center justify-center bg-white/80"
                style={{
                  width: 120,
                  height: 120,
                  borderRadius: shape === "Circle" ? 9999 : shape === "Square" ? 6 : 12,
                  overflow: "hidden",
                  boxShadow: "0 6px 16px rgba(0,0,0,0.25)",
                  border: "2px solid #fff",
                }}
              >
                <img src={logoUrl} alt="logo" className="max-w-full max-h-full object-contain" />
              </div>
            </div>
          )}
          <div className="absolute left-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
            <ChevronLeft size={16} />
          </div>
          <div className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow">
            <ChevronRight size={16} />
          </div>
        </div>
        <div className="space-y-4">
          <div className="text-2xl font-bold text-[#02192F]">{name}</div>
          <div className="text-sm text-gray-600">{category}</div>
          <div className="flex items-center gap-2">
            <div className="text-2xl font-bold text-[#02192F]">₹{basePrice}</div>
            <div className="text-gray-400 line-through">₹{oldPrice}</div>
            <div className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded">SAVE 23%</div>
          </div>
          <div>
            <button onClick={() => fileRef.current?.click()} className="w-full bg-[#F59E0B] text-white font-semibold py-3 rounded-lg">Upload Your Logo</button>
            <input ref={fileRef} type="file" className="hidden mt-2 w-full text-sm" onChange={(e) => setLogoFile(e.target.files?.[0] || null)} />
          </div>
          <div className="text-sm text-green-700 bg-green-100 px-3 py-2 rounded-lg">
            We’ll send design preview for approval after order is Placed/Confirmed.
          </div>
          <div className="text-sm text-orange-700 bg-orange-100 px-3 py-2 rounded-lg">
            82% Customers choose the 20 pcs pack because it reduces the cost per badge.
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Shape</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {shapeOptions.map((s) => (
                <button
                  key={s}
                  onClick={() => setShape(s)}
                  className={`px-3 py-1.5 rounded-md text-sm border ${shape === s ? "bg-[#02192F] text-white border-[#02192F]" : "border-gray-300 text-gray-800"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-gray-900">Quantity</div>
            <div className="mt-2 flex flex-wrap gap-2">
              {packOptions.map((p) => (
                <button
                  key={p}
                  onClick={() => setPack(p)}
                  className={`px-3 py-1.5 rounded-md text-sm border ${pack === p ? "bg-[#02192F] text-white border-[#02192F]" : "border-gray-300 text-gray-800"}`}
                >
                  {typeof p === "number" ? `${p} Pcs` : p}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-lg font-semibold">Total: ₹{total}</div>
          </div>
          <div>
            <button onClick={onAddToCart} className="w-full bg-[#DB2A7B] text-white font-semibold py-3 rounded-lg active:scale-95">
              ADD TO CART
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProviderProductDetail;