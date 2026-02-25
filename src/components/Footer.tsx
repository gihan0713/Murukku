import React from 'react';
import { Facebook, Instagram, Phone, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <span className="text-2xl font-bold text-orange-500 tracking-tight mb-4 block">Ceylon<span className="text-white">Bites</span></span>
            <p className="text-gray-400">
              Authentic Sri Lankan snacks made with love and traditional spices. Bringing the taste of home to your doorstep.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Contact Us</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Phone size={16} />
                <span>+94 77 123 4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} />
                <span>orders@ceylonbites.lk</span>
              </li>
              <li>No. 45, Temple Road, Colombo 04</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-orange-500">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-full hover:bg-orange-600 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>&copy; {new Date().getFullYear()} Ceylon Bites. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
