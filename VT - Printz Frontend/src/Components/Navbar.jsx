import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import VTLogo from "../../public/VT_LogoTSC.png";
import ArrowDown from "../Assets/next_W.png";
import Search from "../Assets/search.png";
import Cart from "../Assets/cart1.png";

import CartDrawer from "../Pages/CartDrawer";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [productsOpen, setProductsOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeLink, setActiveLink] = useState("");
  const [searchText, setSearchText] = useState("");
const [showCart, setShowCart] = useState(false);

  const navigate = useNavigate();
  const closeMenu = () => setMenuOpen(false);

  const NavLink = ({ label, onClick }) => (
    <button
      onClick={() => {
        setActiveLink(label);
        onClick && onClick();
      }}
      className={`relative py-2 text-lg transition
        after:absolute after:left-0 after:bottom-1 after:h-[2px]
        after:bg-[#DB2A7B] after:w-0 hover:after:w-full
        ${activeLink === label ? "after:w-full text-[#DB2A7B]" : "text-[#02192F]"}
      `}
    >
      {label}
    </button>
  );

  
  return (
    <>
    <nav className="fixed top-0 z-[100] w-full">
      <div className="w-full bg-[#fff] h-[84px] flex items-center pl-4 pr-10 text-white relative shadow-shadow10px shadow-[#000]">

        {/* LOGO */}
        <Link to="/" onClick={closeMenu} className="flex-shrink-0 pb-2">
          <img src={VTLogo} className="h-16 md:h-20" />
        </Link>

        {/* SEARCH */}
        <div className="absolute left-[40%] -translate-x-1/2 hidden mmmd:flex items-center bg-gray-100 rounded-full w-[420px] focus-within:w-[480px] transition-all duration-300 shadow-shadow5px shadow-[#8c236c] overflow-hidden">
          <input type="text" placeholder="Search products..." className="flex-1 px-6 py-3 text-gray-800 placeholder-gray-400 rounded-s-full outline-none text-sm border-[1.5px] border-[#DB2A7B]"/>

          <button className="bg-[#DB2A7B] border-[#DB2A7B] border-[1.5px] hover:bg-[#c8236c] transition px-5 py-3" onClick={() => {
              navigate(`/product-list?search=${searchText}`);
              setSearchText("");
            }}>
            <img src={Search} alt="Search" className="h-5 w-5" />
          </button>
        </div>

        {/* DESKTOP MENU */}
        <div className="ml-auto hidden mmmd:flex items-center gap-8">

          <Link to="/product-page">
            <NavLink label="Products" />
          </Link>
          

          <Link to="/about-us"><NavLink label="About Us" /></Link>
          <Link to="/feedback-list"><NavLink label="Feedback" /></Link>

          <button
    onClick={() => {setCartCount(cartCount + 1), setShowCart(true)}}
    className="relative flex items-center justify-center w-10 h-10 rounded-full hover:bg-white/10 transition group"
  >
    <img
      src={Cart}
      alt="Cart"
      className="h-5 w-5 group-hover:scale-110 transition"
    />

    
    <span  className="absolute -top-1 -right-1 bg-[#DB2A7B] text-white text-[10px] font-semibold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
      {cartCount}
    </span>
  </button>
        </div>

        {/* HAMBURGER */}
        <button className="ml-auto mmmd:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          <Hamburger open={menuOpen} />
        </button>
      </div>

      
      {/* MOBILE MENU */}
      
        
<div
        className={`mmmd:hidden fixed top-[84px] left-0 w-full h-[calc(100vh-84px)]
        bg-[#02192F] text-white p-6 transition-transform duration-300 ease-in-out
        ${menuOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
          {/* MOBILE SEARCH */}
          <div className=" flex items-center bg-gray-100 rounded-full w-[320px] focus-within:w-[340px] transition-all duration-300 shadow-shadow5px shadow-[#8c236c] overflow-hidden">
          <input type="text" placeholder="Search products..." className="flex-1 px-6 py-3 text-gray-800 placeholder-gray-400 rounded-s-full outline-none text-sm border-[1.5px] border-[#DB2A7B]"/>

          <button className="bg-[#DB2A7B] border-[#DB2A7B] border-[1.5px] hover:bg-[#c8236c] transition px-5 py-3" onClick={() => {
              navigate(`/product-list?search=${searchText}`);
              setSearchText("");
            }}>
            <img src={Search} alt="Search" className="h-5 w-5" />
          </button>
        </div>

<Link to="/product-page">
          <button onClick={() => {setMobileProductsOpen(!mobileProductsOpen), closeMenu()}} className="flex justify-between w-full">
            Products 
          </button>
          </Link>

         

          <Link onClick={closeMenu} to="/about-us">About Us</Link> <br />
          <Link onClick={closeMenu} to="/feedback-list">Feedback</Link>
          <span  className="w-full h-px bg-gray-300 my-2 block" />
          <div onClick={() => {setShowCart(true); closeMenu();}}>Cart ({cartCount})</div>
          
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
 function Hamburger({ open }) {
  

  return (
    <button
      className={`hamburger ${open ? "open" : ""}`}
      onClick={() => setOpen(!open)}
      aria-label="Menu"
    >
      <span />
      <span />
      <span />
    </button>
  );
}



