import React from 'react';
import { TreeDeciduous, Mail, Instagram, Twitter } from 'lucide-react';
const Footer = () => {
  return <footer id="contact" className="bg-white pt-20 pb-10 border-t border-gray-100">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <TreeDeciduous className="h-6 w-6 text-nature-leaf" />
              <span className="font-serif text-xl font-medium text-nature-leaf">The Mother Tree</span>
            </div>
            <p className="text-gray-600 mb-6 max-w-md">Our vision is to regrow a forest of Mother Trees, inspiring communities across the world that empower co-creation and collaboration for the posterity of our people and the planet.</p>
            <div className="flex space-x-4">
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-nature-leaf hover:text-white transition-colors duration-300">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 rounded-full bg-gray-100 text-gray-600 hover:bg-nature-leaf hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              
            </div>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Membership</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Be-leave'rs</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Rooted Membership</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">The Mother Board</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Gift Memberships</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-medium text-sm uppercase tracking-wider text-gray-900 mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Our Mission</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Contact Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-600 hover:text-nature-leaf transition-colors duration-300">Privacy Policy</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} <span className="text-nature-leaf">The Mother Tree</span>. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-nature-leaf transition-colors duration-300 text-sm">Terms</a>
            <a href="#" className="text-gray-500 hover:text-nature-leaf transition-colors duration-300 text-sm">Privacy</a>
            <a href="#" className="text-gray-500 hover:text-nature-leaf transition-colors duration-300 text-sm">Cookies</a>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;