import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';

// Placeholder Pages
const Shop = () => <div className="container section-padding"><h1 className="text-4xl">Shop Page</h1><p className="mt-4 text-muted">Browse our extensive catalog...</p></div>;
const About = () => <div className="container section-padding"><h1 className="text-4xl">About Us</h1><p className="mt-4 text-muted">Learn more about our mission...</p></div>;
const BecomeVendor = () => <div className="container section-padding"><h1 className="text-4xl">Become a Vendor</h1><p className="mt-4 text-muted">Join our growing ecosystem...</p></div>;
const Wholesale = () => <div className="container section-padding"><h1 className="text-4xl">Wholesale Offer</h1><p className="mt-4 text-muted">Bulk orders for business...</p></div>;
const Contact = () => <div className="container section-padding"><h1 className="text-4xl">Contact Us</h1><p className="mt-4 text-muted">Get in touch with our team...</p></div>;

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/become-vendor" element={<BecomeVendor />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/new-arrivals" element={<Shop />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
