import { useState } from "react";

function CartDrawer({ onClose }) {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Customized Polo T-Shirt",
      subtitle: "5 Pcs / Black",
      price: 3350,
      oldPrice: 3850,
      qty: 1,
      image: "https://via.placeholder.com/80",
    },
  ]);

  const isEmpty = cartItems.length === 0;

  const updateQty = (id, type) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? {
              ...item,
              qty: type === "inc"
                ? item.qty + 1
                : Math.max(1, item.qty - 1),
            }
          : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const discount = subtotal * 0.12;

  return (
    <>
      {/* BACKDROP */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/50 z-[105]"
      />

      {/* CART DRAWER */}
      <div
        className="
          fixed right-0 top-0
          h-[100vh]
          w-[380px]
          bg-white
          z-[110]
          shadow-xl
          transition-transform duration-300
          translate-x-0
        "
      >
        {/* HEADER */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-semibold">SHOPPING CART</h2>
          <button onClick={onClose} className="text-xl">✕</button>
        </div>

        {/* PROMO */}
        <div className="bg-red-600 text-white text-sm text-center py-2 font-medium">
          Your brand deserves this! Click Buy Now to Proceed
        </div>

        {/* CONTENT */}
        <div className="flex flex-col overflow-y-auto">
          {isEmpty ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center px-6">
              <h3 className="text-lg font-semibold mb-1">
                Your cart is empty
              </h3>
              <button
                onClick={onClose}
                className="bg-[#DB2A7B] text-white px-6 py-2 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="p-5 space-y-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 rounded-lg border"
                  />

                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">{item.name}</h4>
                    <p className="text-xs text-gray-500">{item.subtitle}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-red-600 font-semibold">
                        ₹ {item.price}
                      </span>
                      <span className="text-gray-400 line-through text-xs">
                        ₹ {item.oldPrice}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 mt-3">
                      <div className="flex border rounded-full">
                        <button
                          onClick={() => updateQty(item.id, "dec")}
                          className="px-3"
                        >−</button>
                        <span className="px-4 text-sm">{item.qty}</span>
                        <button
                          onClick={() => updateQty(item.id, "inc")}
                          className="px-3"
                        >+</button>
                      </div>

                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        🗑
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* FOOTER */}
        {!isEmpty && (
          <div className="border-t p-5 space-y-3">
            <div className="flex justify-between text-sm text-red-600">
              <span>12% off on order above ₹999</span>
              <span>- ₹ {discount.toFixed(0)}</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span>Total</span>
              <span>₹ {(subtotal - discount).toFixed(0)}</span>
            </div>

            <button className="w-full bg-black text-white py-3 rounded-xl">
              BUY NOW
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default CartDrawer;
