import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProductPage from './pages/ProductPage';
import CompareAll from './pages/CompareAll';
import PreBook from './pages/PreBook';
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';
import Rentals from './pages/Rentals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/compare" element={<CompareAll />} />
        <Route path="/prebook" element={<PreBook />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/rentals" element={<Rentals />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
