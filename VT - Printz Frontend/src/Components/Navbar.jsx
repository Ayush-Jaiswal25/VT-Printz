import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import VTLogo from "../../public/VT_LogoTSC.png";
import ArrowDown from "../Assets/next_W.png";
import Search from "../Assets/search.png";
import CartIcon from "../Assets/cart1.png";
import Menu from "../Assets/menu.png";
import CartDrawer from "../Pages/CartDrawer";

const Navbar = () => {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [cartCount] = useState(1);
  const [activeLink, setActiveLink] = useState("");
  const [searchText, setSearchText] = useState("");

  // ✅ OPEN CART ONLY (NO TOGGLE)
  const handleCartClick = () => {
    setShowCart(true);
  };


  const NavLink = ({ label, to }) => (
    <Link
      to={to}
      onClick={() => setActiveLink(label)}
      className={`relative py-2 text-lg transition
        after:absolute after:left-0 after:bottom-1 after:h-[2px]
        after:bg-[#DB2A7B] after:w-0 hover:after:w-full
        ${activeLink === label ? "after:w-full text-[#DB2A7B]" : "text-[#02192F]"}`}
    >
      {label}
    </Link>
  );

  const ProductItem = ({ img, label, path }) => (
    <div
      className="flex items-center gap-4 cursor-pointer"
      onClick={() => {
        setProductsOpen(false);
        setMenuOpen(false);
        navigate(path);
      }}
    >
      <div className="w-14 h-14 bg-[#F5F6FF] rounded-xl flex items-center justify-center border-2 border-[#DB2A7B]">
        <img src={img} className="w-8" />
      </div>
      <span className="text-lg">{label}</span>
    </div>
  );

  return (
    <>
      <nav className="fixed top-0 w-full z-[100] bg-white shadow-lg">
        <div className="h-[84px] flex items-center px-4">

          {/* LOGO */}
          <Link to="/" className="flex-shrink-0">
            <img src={VTLogo} className="h-16 md:h-20" />
          </Link>

          {/* SEARCH */}
          <div className="ml-4 hidden sm:flex flex-1 max-w-[420px] rounded-full border border-[#DB2A7B] overflow-hidden">
            <input
              placeholder="Search products..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="flex-1 px-6 py-2 outline-none text-sm"
            />
            <button
              className="bg-[#DB2A7B] px-4"
              onClick={() => {
                navigate(`/product-list?search=${searchText}`);
                setSearchText("");
              }}
            >
              <img src={Search} className="h-5" />
            </button>
          </div>

          {/* DESKTOP MENU */}
          <div className="ml-auto hidden llg:flex items-center gap-8">
            <NavLink label="Products" to="/product-page" />
            <NavLink label="About Us" to="/about-us" />
            <NavLink label="Contact" to="/contact" />
            <NavLink label="Feedback" to="/feedback-list" />
            <NavLink label="Login/Signup" to="/login-and-signup" />

            {/* CART BUTTON */}
            <button onClick={() => setShowCart(true)} className="relative">
              <img src={CartIcon} className="h-5" />
              <span className="absolute -top-2 -right-2 bg-[#DB2A7B] text-white text-xs rounded-full px-1">
                {cartCount}
              </span>
            </button>

            {/* CART DRAWER */}
            {showCart && (
              <CartDrawer onClose={() => setShowCart(false)} />
            )}

          </div>

          {/* HAMBURGER */}
          <button
            className="ml-auto llg:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <img src={Menu} className="h-6" />
          </button>
        </div>
      </nav>

      {/* ✅ CART DRAWER (OPENED ON CLICK ONLY) */}
      {showCart && (
        <CartDrawer onClose={() => setShowCart(false)} />
      )}


    </>
  );
};

export default Navbar;
