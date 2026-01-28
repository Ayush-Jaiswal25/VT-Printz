import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import ArrowDown from "../Assets/next_W.png";
import Search from "../Assets/search.png";
import Cart from "../Assets/cart1.png";
import Menu from "../Assets/menu.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const navigate = useNavigate();

  const ProductItem = ({ label, path }) => (
    <div
      className="cursor-pointer py-2"
      onClick={() => {
        setMenuOpen(false);
        navigate(path);
      }}
    >
      {label}
    </div>
  );

  return (
    <nav className="fixed top-0 w-full z-[100] bg-white shadow-lg">
      <div className="h-[84px] flex items-center px-4">

        {/* LOGO (PUBLIC ASSET – CORRECT WAY) */}
        <Link to="/">
          <img src="/VT_LogoTSC.png" className="h-16 md:h-20" />
        </Link>

        {/* SEARCH */}
        <div className="ml-4 hidden sm:flex flex-1 max-w-[420px] bg-gray-100 rounded-full border border-[#DB2A7B] overflow-hidden">
          <input
            placeholder="Search products..."
            className="flex-1 px-5 py-2 outline-none text-sm"
          />
          <button className="bg-[#DB2A7B] px-4">
            <img src={Search} className="h-5" />
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="ml-auto hidden llg:flex items-center gap-8">
          <Link to="/products">Products</Link>
          <Link to="/about-us">About Us</Link>
          <Link to="/feedback">Feedback</Link>

          <button onClick={() => setCartCount(cartCount + 1)} className="relative">
            <img src={Cart} className="h-5" />
            <span className="absolute -top-2 -right-2 bg-[#DB2A7B] text-white text-xs rounded-full px-1">
              {cartCount}
            </span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <button className="ml-auto llg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <img src={Menu} className="h-6" />
        </button>
      </div>

      {menuOpen && (
        <div className="llg:hidden bg-[#02192F] text-white px-6 py-4 space-y-4">
          <button onClick={() => setMobileProductsOpen(!mobileProductsOpen)}>
            Products <img src={ArrowDown} className="inline h-3 ml-2" />
          </button>

          {mobileProductsOpen && (
            <div className="space-y-2">
              <ProductItem label="Printing Services" path="/services?category=Printing Services" />
              <ProductItem label="Marketing Materials" path="/services?category=Marketing Materials" />
              <ProductItem label="Office Items" path="/services?category=Office Items" />
            </div>
          )}

          <Link to="/about-us">About Us</Link>
          <Link to="/feedback">Feedback</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
