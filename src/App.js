import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ContactPage from './pages/ContactPage';
import DeveloperCredits from './components/DeveloperCredits';
import ProductDetailPage from './pages/ProductDetailPage';
import ThirdPartyManufacturingPage from './pages/ThirdPartyManufacturingPage';
import PCDFranchisePage from './pages/PCDFranchisePage';
import ScrollToTop from './components/ScrollToTop';
import './App.css';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/developer" element={<DeveloperCredits />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/third-party-manufacturing" element={<ThirdPartyManufacturingPage />} />
            <Route path="/pcd-franchise" element={<PCDFranchisePage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
