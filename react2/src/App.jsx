import React, { useState, useEffect, useRef } from "react";
import {
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

import gsap from "gsap";
import About from "./components/About";
import ContactPage from "./components/ContactPage";
import Department from "./components/Department";
import MapComponent from "./components/MapComponent";
import BoxGrid from "./components/BoxGrid";
import Footer from "./components/Footer";

const App = () => {
  const location = useLocation();
  const [isMapOpen, setIsMapOpen] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [isSearchBoxOpen, setIsSearchBoxOpen] = useState(false);
  const logoRef = useRef(null);

  // Prevent body scroll when fullscreen
  useEffect(() => {
    document.body.style.overflow = isFullScreen ? "hidden" : "auto";
  }, [isFullScreen]);

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
      <nav className="w-full bg-blue-600 py-4 shadow-xl fixed top-0 z-50 nav-slide">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4">
          <div   ref={logoRef} className="text-3xl font-extrabold text-white tracking-wide drop-shadow-md">
            Kampus see
          </div>
          <div className="flex gap-6 text-lg font-medium">
            {["Home", "About", "Department", "Contact Us"].map((name, index) => (
              <Link
                key={index}
                to={name === "Home" ? "/" : `/${name.toLowerCase()}`}
                className={`cursor-pointer text-white hover:text-yellow-300 transition-all duration-300 ${
                  location.pathname === (name === "Home" ? "/" : `/${name.toLowerCase()}`)
                    ? "border-b-2 border-yellow-300 pb-1"
                    : ""
                }`}
              >
                {name}
              </Link>
            ))}
          </div>
        </div>
      </nav>

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
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm modal">
                    <div className={`relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-gray-400 overflow-hidden ${
                      isFullScreen ? "w-full h-full" : "w-3/4 h-3/4 flex flex-col items-center justify-center"
                    } search-box`}>
                      <button
                        className="absolute top-4 right-4 text-white bg-red-500 px-3 py-1 rounded-full text-xl shadow-lg"
                        onClick={() => setIsSearchBoxOpen(false)}
                      >
                        ❌
                      </button>
                      <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
                        Select a Place
                      </h2>
                      <BoxGrid />
                    </div>
                  </div>
                )}

                {/* Map Modal */}
                {isMapOpen && (
                  <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm modal">
                    <div className={`relative bg-white/90 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-gray-300 overflow-hidden ${
                      isFullScreen ? "w-full h-full" : "w-3/4 h-3/4 flex flex-col items-center justify-center"
                    } map-modal`}>
                      <button
                        className="absolute top-4 right-4 text-white  px-3 py-1 rounded-full text-xl map-controls"
                        onClick={() => setIsMapOpen(false)}
                      >
                        ❌
                      </button>
                      <h2 className="absolute top-4 left-[42%] text-3xl font-extrabold text-blue-700">
                        College Map
                      </h2>
                      <button
                        className="absolute top-4 left-4 text-black px-3 py-1 rounded-full text-3xl shadow map-controls"
                        onClick={() => setIsFullScreen(!isFullScreen)}
                      >
                        ⛶
                      </button>
                      <MapComponent />
                    </div>
                  </div>
                )}
              </div>
            }
          />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/department" element={<Department />} />
          <Route path="/place/:placeName" element={<div>Place Page</div>} />
        </Routes>
      </div>

      {/* Footer */}
     <Footer />
    </div>
  );
};

export default App;
