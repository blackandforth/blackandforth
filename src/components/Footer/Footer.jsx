import React from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin, Music } from "lucide-react";

const Footer = () => {
  return (
    <footer className="text-gray-800">
      {/* Logos Section with Sliding Effect */}
      <div className="bg-white overflow-hidden py-6">
  <div className="flex space-x-8 animate-slide">
    {[
      "/logo-1.png",
      "/logo-2.png",
      "/logo-3.png",
      "/logo-4.png",
      "/logo-5.png",
      "/logo-6.png",
      "/logo-7.png",
      "/logo-8.png",
      "/logo-9.png",
    ].map((src, index) => (
      <img key={index} src={src} alt="Partner Logo" className="h-16 object-contain" />
    ))}
  </div>
</div>


      <div className="bg-gray-100">
        <div className="container mx-auto px-6 py-10 grid md:grid-cols-4 gap-6 text-sm">
          {/* Guiding Principles */}
          <div>
            <h3 className="font-semibold mb-3">Guiding Principles</h3>
            <ul className="space-y-2">
              <li>Bravery</li>
              <li>Navigating uncharted territories</li>
              <li>Excellence</li>
              <li>Moving the needle</li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold mb-3">Solutions</h3>
            <ul className="space-y-2">
              <li>Business Consulting Solutions</li>
              <li>Business Coaching Solutions</li>
              <li>HR & Customized Training Solutions</li>
              <li>Delivery Management & Advisory</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li>About Us</li>
              <li>Our Guiding Principles</li>
              <li>Our Engagement Model</li>
              <li>Solutions</li>
              <li>Blogs</li>
              <li>Track Record</li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h3 className="font-semibold mb-3">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2"><Phone size={16} /> +27 (0) 82 319 8549</li>
              <li className="flex items-center gap-2"><Mail size={16} /> info@blackandforth.co.za</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Johannesburg, Gauteng, South Africa</li>
            </ul>
            <h3 className="font-semibold mt-4 mb-2">Follow Us</h3>
            <div className="flex gap-4">
              <Facebook size={20} />
              <Instagram size={20} />
              <Linkedin size={20} />
              <Music size={20} />
            </div>
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="container mx-auto px-6 py-6 flex flex-col md:flex-row items-center gap-4 md:gap-6">
          <input 
            type="email" 
            placeholder="Subscribe to Our Newsletter" 
            className="w-full md:w-auto flex-1 px-4 py-2 border rounded-lg"
          />
          <button className="bg-teal-900 text-white px-6 py-2 rounded-lg">Subscribe</button>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-xs text-gray-600 py-4 border-t">
          &copy; 2025 Black and Forth. All rights reserved.
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <a href="#" className="hover:underline">Terms & Conditions</a>
            <a href="#" className="hover:underline">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;