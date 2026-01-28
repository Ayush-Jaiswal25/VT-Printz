import React from 'react'
import './main.css'

import { Route, Routes, useLocation} from 'react-router-dom';
import { Helmet } from 'react-helmet';


import Navbar from './Components/Navbar.jsx'
import Footer from './Components/Footer.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/AboutUs.jsx'
import ServicesPage from './Pages/ServicesPage.jsx'
import ServiceDetail from './Pages/ServiceDetails.jsx'
import ServiceCategoryPage from './Pages/ServiceCategory.jsx'
import Products from './Pages/Products.jsx';

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
  <Route path='/products' element={<Products />} />

  {/* ✅ QUERY BASED SERVICES PAGE */}
  <Route path="/services" element={<ServicesPage />} />

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