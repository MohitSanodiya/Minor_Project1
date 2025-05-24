import React, { useState, useEffect, useRef } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

import gsap from "gsap";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Department from "./components/Department";
import MapComponent from "./components/MapComponent";
import BoxGrid from "./components/BoxGrid";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import MapModal from "./components/MapModal";
import SearchBoxModal from "./components/SearchBoxModal";

const App = () => {
  const [isMapOpen, setIsMapOpen] = useState(false);

  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const logoRef = useRef(null);

  // Animate modals and buttons
  useEffect(() => {
    if (isMapOpen || isSearchBoxOpen) {
      gsap.fromTo(
        `.modal ${isSearchBoxOpen ? ".search-box" : ".map-modal"}`,
        { scale: 0.7, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.6, ease: "power3.out" }
      );
      gsap.fromTo(
        ".btn",
        { scale: 1 },
        {
          scale: 1.1,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power2.inOut",
        }
      );
      gsap.fromTo(
        ".map-controls",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, delay: 0.5, ease: "power2.out" }
      );
    }
  }, [isMapOpen, isSearchBoxOpen]);

  useEffect(() => {
    if (logoRef.current) {
      gsap.to(logoRef.current, {
        y: -10,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  // Initial entrance animation
  useEffect(() => {
    gsap.from(".nav-slide", {
      y: -60,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".hero", {
      opacity: 0,
      y: 40,
      delay: 0.3,
      duration: 1,
      ease: "power3.out",
    });
    gsap.from(".footer", {
      opacity: 0,
      y: 60,
      duration: 1,
      delay: 0.5,
      ease: "power3.out",
    });
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 via-white to-yellow-50">
      {/* Navbar */}
      <Navbar />

      {/* Routes */}
      <div className="pt-20 px-4">
        <Routes>
          <Route
            path="/"
            element={
              <div className="hero">
                {/* Hero Section */}
                <div className="w-full h-[500px] bg-blue-100 shadow-inner rounded-xl flex flex-col justify-center items-center text-center">
                  <h1 className="text-5xl font-bold text-blue-800 drop-shadow-sm mb-3">
                    Welcome to Our College
                  </h1>
                  <p className="text-blue-700 text-xl font-medium">
                    Explore, Learn, and Achieve Your Dreams
                  </p>
                </div>

                {/* Buttons */}
                <div className="flex justify-center mt-7 gap-10">
                  <div
                    className="btn p-4 bg-yellow-400 hover:bg-yellow-500 transition-all duration-300 text-white text-center cursor-pointer rounded-xl shadow-lg hover:shadow-2xl hover:scale-110"
                    onClick={() => {
                      setIsSearchBoxOpen(true);
                      setIsMapOpen(false);
                    }}
                  >
                    🔍 Search Box
                  </div>
                  <div
                    className="btn p-4 bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white text-center cursor-pointer rounded-xl shadow-lg hover:shadow-2xl hover:scale-110"
                    onClick={() => setIsMapOpen(true)}
                  >
                    🗺️ Open Map
                  </div>
                </div>

                {/* Search Box Modal */}
                {isSearchBoxOpen && (
                  <SearchBoxModal onClose={() => setIsSearchBoxOpen(false)} />
                )}

                {isMapOpen && <MapModal onClose={() => setIsMapOpen(false)} />}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/department" element={<Department />} />
          <Route path="/place/:placeName" element={<div>Place Page</div>} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
};

export default App;
