import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import mainbannerImg from '../assets/photos/mainbanner.png';

const ContactPage = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      {/* The local navbar JSX will be removed here */}

      {/* Contact Form Section */}
      <section className="w-full py-8 md:py-16 px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-black mb-6 md:mb-8 text-center text-gray-900">Contact Us</h1>
          <form className="space-y-4 md:space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-base"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-base"
                placeholder="your@email.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                id="message"
                rows={6}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent text-base"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white px-6 py-3 rounded-lg text-base font-semibold hover:bg-gray-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full border-t pt-8 md:pt-16 pb-12 md:pb-24 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-8 md:gap-32">
          <div className="mb-4 md:mb-0 opacity-30">
            <span className="font-black text-2xl tracking-widest">Zephyra</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 w-full md:w-auto">
            <div>
              <h5 className="font-semibold mb-3 md:mb-4">Product</h5>
              <ul className="text-gray-500 space-y-2 text-sm md:text-base">
                <li>Features</li>
                <li>Themes</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 md:mb-4">Company</h5>
              <ul className="text-gray-500 space-y-2 text-sm md:text-base">
                <li>About</li>
                <li>Contact</li>
                <li>Careers</li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-3 md:mb-4">Resources</h5>
              <ul className="text-gray-500 space-y-2 text-sm md:text-base">
                <li>Blog</li>
                <li>Privacy</li>
                <li>Terms</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactPage; 