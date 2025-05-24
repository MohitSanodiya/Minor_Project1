
 import React from 'react';

const MapComponent = () => {
  return (
    <div className="relative w-screen h-full overflow-x-auto overflow-y-auto">
      {/* Optional: horizontal line */}
      <h1 className='w-[98%] h-1 bg-blue-800 absolute top-[40px]'></h1>

      <iframe 
        src="/map/index.html"  
        title="College Map"
        className="min-w-[1450px] min-h-full"
        style={{
          border: "none",
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
          paddingTop: "60px"
        }}
      ></iframe>
    </div>
  );
};

export default MapComponent;
