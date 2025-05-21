import React from "react";

const ContactPage = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-center bg-gray-100 p-10">
      <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
      <p className="text-lg text-gray-700 mt-4">Get in touch with us for any queries or assistance.</p>
      
      <div className="mt-8 w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-4">
          <input type="text" placeholder="Your Name" className="border p-3 rounded-md w-full" />
          <input type="email" placeholder="Your Email" className="border p-3 rounded-md w-full" />
          <textarea placeholder="Your Message" className="border p-3 rounded-md w-full h-32"></textarea>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
