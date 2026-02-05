import React from 'react'
import './main.css'

import { Route, Routes, useLocation } from 'react-router-dom';
import { Helmet } from 'react-helmet';


import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/AboutUs.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
import ServiceDetail from './Pages/ServiceDetails.jsx'
import ServiceCategoryPage from './Pages/ServiceCategory.jsx'
import Products from './Pages/Products.jsx';
import ProductList from './Pages/ProductList.jsx';
import ProductPage from './Pages/ProductPage.jsx';
import FeedbackList from './Pages/FeedbackList.jsx';
import FeedbackForm from './Pages/FeedbackForm.jsx';
import TermsOfService from './Pages/TermsConditions.jsx';
import PrivacyPolicy from './Pages/PrivacyPolicy.jsx';
import CancellationRefundPolicy from './Pages/CancellationRefundPolicy.jsx';
import Location from './Pages/Location.jsx';
import FAQ from './Components/FAQ.jsx';
import ProviderProductDetail from './Pages/ProviderProductDetail.jsx';
import LoginAndSignup from './Pages/LoginAndSignup.jsx';
import CartDrawer from './Pages/CartDrawer.jsx';

function App() {
  const location = useLocation();

  return (
    <div>
      <Helmet><title>Vinto Printz</title></Helmet>

      <Navbar />

      <div id='Body-routes' className="body-routes">
        <Routes location={location} key={location.pathname}>
          <Route path='/' element={<Home />} />
          <Route path='/about-us' element={<About />} />
          <Route path='/login-and-signup' element={<LoginAndSignup />} />
          <Route path='/products' element={<Products />} />
          <Route path='/card-drawer' element={<CartDrawer />} />
          <Route path='/product-list' element={<ProductList />} />
          <Route path='/product-page' element={<ProductPage />} />
          {/* ✅ QUERY BASED SERVICES PAGE */}
          <Route path="/services" element={<ServicesPage />} />
          <Route path='/provider-product' element={<ProviderProductDetail />} />
          <Route path="/feedback-form" element={<FeedbackForm />} />
          <Route path="/feedback-list" element={<FeedbackList />} /> 
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/location" element={<Location />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/Cancelation-Policy" element={<CancellationRefundPolicy />} />

          {/* ✅ CATEGORY / SERVICE FLOW */}
          <Route path="/services/:categorySlug" element={<ServiceCategoryPage />} />
          <Route path="/services/:categorySlug/:serviceSlug" element={<ServiceCategoryPage />} />
          <Route path="/services/:categorySlug/:serviceSlug/:subSlug" element={<ServiceDetail />} />
        </Routes>
      </div>

      <Footer />

    </div>
  )
}

export default App