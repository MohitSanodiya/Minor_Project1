import React from 'react';

const MapComponent = () => {
  return (
    <div className="w-full h-screen flex justify-center flex-col items-center">
      <h1 className='w-[98%] h-1 bg-blue-800 absolute top-[70px] '></h1>
      <iframe
        src="/map/index.html"  // Directly refer to the path relative to the public folder
        width="100%"  // Adjust the width to a percentage
        height="85%" // Adjust the height to a percentage
        title="College Map"
        style={{ border: "none", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", paddingTop:"30px" }}
      ></iframe>
    </div>
  );
};

export default MapComponent;