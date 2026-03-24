import React from 'react';
import { Github, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-12">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Lavina Kalda
              </h3>
              <p className="text-gray-400 text-sm">
                Building digital solutions that scale. Transforming ideas into powerful products.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <button
                  onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  About
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Services
                </button>
                <button
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Work
                </button>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="block text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Contact & Social */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="space-y-3 mb-6">
                <a
                  href="mailto:lavikalda@gmail.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  <Mail className="w-4 h-4" />
                  lavikalda@gmail.com
                </a>
                <a
                  href="https://wa.me/918180916716"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 text-sm"
                >
                  <Phone className="w-4 h-4" />
                  +91 81809 16716
                </a>
              </div>

              {/* Social Links */}
              {/* <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                  aria-label="Twitter"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-slate-800 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-cyan-500 transition-all duration-300"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div> */}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-500 text-sm">
              © {currentYear} Lavina Kalda. All rights reserved.
            </p>
            {/* <div className="flex gap-6">
              <button className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Privacy Policy
              </button>
              <button className="text-gray-500 hover:text-cyan-400 transition-colors duration-300 text-sm">
                Terms of Service
              </button>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
