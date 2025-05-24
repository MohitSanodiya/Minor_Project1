// components/SearchBoxModal.jsx
import React from "react";
import BoxGrid from "./BoxGrid";

const SearchBoxModal = ({ isFullScreen, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black/40 backdrop-blur-sm modal">
      <div className={`relative bg-white/80 backdrop-blur-lg p-6 rounded-2xl shadow-2xl border border-gray-400 overflow-hidden ${
        isFullScreen ? "w-full h-full" : "w-3/4 h-3/4 flex flex-col items-center justify-center"
      } search-box`}>
        <button
          className="absolute top-4 right-4 text-white px-3 py-1 rounded-full text-xl shadow-lg"
          onClick={onClose}
        >
          ❌
        </button>
        <h2 className="text-3xl font-extrabold text-blue-700 mb-4">
          Select a Place
        </h2>
        <BoxGrid />
      </div>
    </div>
  );
};

export default SearchBoxModal;
