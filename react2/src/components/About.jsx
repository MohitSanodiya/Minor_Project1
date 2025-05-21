import React from "react";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10 pt-20"> {/* pt-20 added here */}
      <h2 className="text-3xl font-bold text-center mb-6">About NRI Group of Institutions, Bhopal</h2>
      <p className="text-gray-700 text-lg text-center max-w-4xl mx-auto">
        Established in <strong>2000</strong>, NRI Group of Institutions is one of the top institutes in Madhya Pradesh, offering <strong>45+ courses</strong> across <strong>Engineering, Pharmacy, Management, Law, and more</strong>.
      </p>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="p-6 bg-white shadow-lg rounded-md text-center">
          <h3 className="text-xl font-bold text-blue-600">🏆 Ranked Among Top 10</h3>
          <p>Ranked among <strong>Top 10 Institutions in MP</strong>.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-md text-center">
          <h3 className="text-xl font-bold text-blue-600">📚  Modern Infrastructure</h3>
          <p>Libraries, hostels, sports facilities, and modern labs.</p>
        </div>
        <div className="p-6 bg-white shadow-lg rounded-md text-center">
          <h3 className="text-xl font-bold text-blue-600">🎓  Top Alumni Placements</h3>
          <p>Students placed in <strong>Schlumberger, Couchbase, and CheckPoint</strong>.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
