import React from "react";

const departments = [
  {
    name: "Engineering",
    courses: ["B.Tech - Computer Science", "B.Tech - Mechanical", "B.Tech - Civil"],
    facilities: ["Advanced Labs", "Research Centers", "Internship Opportunities"],
  },
  {
    name: "Pharmacy",
    courses: ["B.Pharma", "M.Pharma - Pharmacology"],
    facilities: ["Modern Drug Research Labs", "Clinical Training", "Medical Library"],
  },
  {
    name: "Management",
    courses: ["MBA - Finance", "MBA - Marketing"],
    facilities: ["Business Incubation Center", "Guest Lectures", "Industry Visits"],
  },
];

const Department = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-10 pt-20">
      <h2 className="text-3xl font-bold text-center mb-6">Our Departments</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {departments.map((dept, index) => (
          <div key={index} className="p-6 bg-white shadow-lg rounded-md text-center">
            <h3 className="text-xl font-bold text-blue-600">{dept.name}</h3>
            <p className="mt-2 font-semibold">Courses Offered:</p>
            <ul className="text-gray-700">
              {dept.courses.map((course, i) => (
                <li key={i}>• {course}</li>
              ))}
            </ul>
            <p className="mt-2 font-semibold">Facilities:</p>
            <ul className="text-gray-700">
              {dept.facilities.map((facility, i) => (
                <li key={i}>✔ {facility}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Department;
