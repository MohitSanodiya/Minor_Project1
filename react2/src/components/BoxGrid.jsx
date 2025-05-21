import React from "react";
import "remixicon/fonts/remixicon.css";
import { useNavigate } from "react-router-dom";

const BoxGrid = () => {
  const navigate = useNavigate();

  const place1 = "NIIST";
  const place2 = "HOSTEL";
  const place3 = "CRICKET GROUND";
  const place4 = "HOSPITAL";
  const place5 = "NIP";
  const place6 = "NURSING";
  const place7 = "MANAGEMENT DEPARTMENT";
  const place8 = "LIBRARY";
  const place9 = "AYURVEDIC";
  const place10 = "ELECTRICAL DEPARTMENT";
  const place11 = "Mechanical DEPARTMENT";
  const place12 = "LAW DEPARTMENT";
  const place13 = "CANTEEN";
  const place14 = "SCHOLARSHIP";
  const place15 = "TEA";
  const place16 = "NIPS";
  const place17 = "BASKETBALL GROUND";
  const place18 = "VOLLEYBALL";
  const place19 = "KABADDI GROUND";
  const place20 = "TEMPLE";
  const place21 = "PARKING";

  return (
    <div className="niist w-full max-h-[80vh] overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-10">
      <div
        className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all"
        onClick={() => navigate("/place/NIIST")} // <-- navigation on click
      >
        <i className="ri-building-4-line text-3xl mb-2"></i>
        <div>{place1}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-home-4-line text-3xl mb-2"></i>
        <div>{place2}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-football-line text-3xl mb-2"></i>
        <div>{place3}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-heart-pulse-line text-3xl mb-2"></i>
        <div>{place4}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-dna-line text-3xl mb-2"></i>
        <div>{place5}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-hospital-line text-3xl mb-2"></i>
        <div>{place6}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-briefcase-line text-3xl mb-2"></i>
        <div>{place7}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-booklet-line text-3xl mb-2"></i>
        <div>{place8}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-flask-line text-3xl mb-2"></i>
        <div>{place9}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-flashlight-fill text-3xl mb-2"></i>
        <div>{place10}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-tools-line text-3xl mb-2"></i>
        <div>{place11}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-government-line text-3xl mb-2"></i>
        <div>{place12}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-store-line text-3xl mb-2"></i>
        <div>{place13}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-award-line text-3xl mb-2"></i>
        <div>{place14}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-cup-line text-3xl mb-2"></i>
        <div>{place15}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-building-line text-3xl mb-2"></i>
        <div>{place16}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-basketball-line text-3xl mb-2"></i>
        <div>{place17}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-football-line text-3xl mb-2"></i>
        <div>{place18}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-run-line text-3xl mb-2"></i>
        <div>{place19}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-ancient-gate-line text-3xl mb-2"></i>
        <div>{place20}</div>
      </div>

      <div className="p-10 bg-blue-500 text-white text-center rounded-md shadow-lg cursor-pointer hover:bg-blue-600 transition-all">
        <i className="ri-parking-box-line text-3xl mb-2"></i>
        <div>{place21}</div>
      </div>
    </div>
  );
};

export default BoxGrid;
