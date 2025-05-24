// components/MapModal.jsx
import React from "react";
import MapComponent from "./MapComponent";

const MapModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm modal">
      <div className="relative  bg-white backdrop-blur-lg p-6 h-[610px] w-[100%] rounded-2xl shadow-2xl border border-gray-300 overflow-hidden map-modal">
        {/* Top Control Bar */}
        <div className="absolute top-4 left-0 w-full px-4 flex items-center justify-center z-10">
          {/* Title */}
          <h2 className="text-xl md:text-2xl font-extrabold text-blue-700 text-center">
            College Map
          </h2>

          {/* Close Button */}
          <button
            className="text-white px-3 py-1 cursor-pointer rounded-full text-xl absolute right-4 map-controls"
            onClick={onClose}
          >
            ❌
          </button>
        </div>

        <MapComponent />
      </div>
    </div>
  );
};

export default MapModal;
