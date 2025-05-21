import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-blue-800 text-white py-10 mt-10 shadow-inner">
        <div className="max-w-7xl mx-auto text-center px-4">
          <h3 className="text-3xl font-bold mb-3 text-yellow-300">Stay Connected</h3>
          <p className="mb-4 text-yellow-100">Follow us on social media for the latest updates.</p>
          <div className="flex justify-center gap-6 text-3xl">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all"><FaFacebookF /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all"><FaInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-yellow-300 transition-all"><FaTwitter /></a>
          </div>
          <div className="mt-6 border-t border-yellow-400 pt-4">
            <p className="text-yellow-300">&copy; 2025 Kampus see. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
