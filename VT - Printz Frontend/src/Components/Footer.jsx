import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <div className="bg-white px-4 sm:px-10 pb-8 mt-8">
      <footer className="relative max-w-7xl mx-auto rounded-[28px] bg-[#02192F] px-6 sm:px-12 py-6 text-gray-300">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div>
            <img src="/VT_LogoTSC.png" alt="VT Printz" className="w-32 mb-3" />

            <p className="text-sm max-w-md">
              Your trusted printing partner for T-shirts, mugs, banners &
              custom merchandise.
            </p>

            {/* PRODUCTS */}
            <div className="flex gap-3 mt-5">
              <img src="/tshirt.png" className="w-20" />
              <img src="/mug.png" className="w-16" />
              <img src="/card.png" className="w-16" />
            </div>

            {/* SOCIAL */}
            <div className="flex gap-4 mt-5">
              <FaFacebookF />
              <FaInstagram />
              <FaTwitter />
            </div>
          </div>

          {/* LINKS */}
          <div className="grid grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="text-[#DB2A7B] mb-2">Company</h4>
               <Link to="/about-us"><p>About Us</p></Link>
              <Link to="/location"><p>Location</p></Link>
              <p>Blog</p>
            </div>

            <div>
              <h4 className="text-[#DB2A7B] mb-2">Support</h4>
              <Link to="/faq"><p>FAQ</p></Link>
              <p>Contact</p>
            </div>

            <div>
              <h4 className="text-[#DB2A7B] mb-2">Quick Links</h4>
              <Link to="/"><p>Home</p></Link>
              <Link to="/products"><p>Products</p></Link>
              <Link to="/feedback-list"><p>Feedback</p></Link>
            </div>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/20 text-xs flex justify-between flex-wrap">
          <p className="hidden sm:flex">© 2026 VT Printz</p>
          <p className="sm:space-x-10 flex justify-between w-full sm:w-auto">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/Cancelation-Policy">Refund Policy</Link>
          </p>
          <p className="sm:hidden flex w-full justify-center pt-4">© 2026 VT Printz</p>
        </div>

      </footer>
    </div>
  );
};

export default Footer;
