import React from 'react';
import { Pencil, Twitter, Facebook, Instagram, Github, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Pencil className="h-8 w-8 text-indigo-400" />
              <span className="ml-2 text-xl font-bold">Excelidraw</span>
            </div>
            <p className="text-gray-400 mb-4">
              Create beautiful hand-drawn diagrams, wireframes, and illustrations with our intuitive whiteboard tool.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-2">
              <li><a href="#features" className="text-gray-400 hover:text-white transition-colors duration-300">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Templates</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Integrations</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-white transition-colors duration-300">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Changelog</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Documentation</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Tutorials</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Blog</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Community</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">API</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">About</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a></li>
              <li>
                <div className="flex items-center mt-4">
                  <Mail className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>contact@excelidraw.com</span>
                </div>
                <div className="flex items-center mt-2">
                  <Phone className="h-5 w-5 text-indigo-400 mr-2" />
                  <span>+1 (555) 123-4567</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Excelidraw. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <ul className="flex space-x-6 text-sm">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Cookies</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">Sitemap</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;