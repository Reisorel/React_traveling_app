import React from 'react';
import { Cloudinary } from '@cloudinary/url-gen';
import './App.css';
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import Packages from './Components/Packages/Packages';
import Boutique from './Components/Boutique/Boutique';
import About from "./Components/About/About";
import Pages from './Components/Pages/Pages';
import Actualités from './Components/Actualités/Actualités';
import { Routes, Route } from 'react-router-dom'; // Import des composants Routes et Route

const App = () => {
  return (
    <div className="appContainer">
      {/* Navbar sera affichée sur toutes les pages */}
      <Navbar />

      {/* Configuration des routes */}
      <div className="mainContent">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <Content />
              </>
            }
          />
          <Route path="/home" element={<Home />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/about" element={<About />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/actualites" element={<Actualités />} />
        </Routes>
      </div>

      {/* Footer sera affiché sur toutes les pages */}
      <Footer />
    </div>
  );
};

export default App;
