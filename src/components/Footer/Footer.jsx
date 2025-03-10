import React from "react";
import { Mail, MapPin, Phone, Facebook, Instagram, Linkedin } from "lucide-react";
import { FaTiktok } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-gray-800">
      {/* Logos Section with Sliding Effect */}
      {/* Logos Section with Sliding Effect */}
<div className="bg-white overflow-hidden py-6">
  <div className="flex space-x-8 animate-slide items-center">
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
      <img
        key={index}
        src={src}
        alt={`Partner Logo ${index + 1}`}
        className="max-h-20 w-auto object-contain" // Increased height, auto width, and clean scaling
        loading="lazy"
      />
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
              <li><a href="#business-consulting" className="hover:underline">Business Consulting Solutions</a></li>
              <li><a href="#business-coaching" className="hover:underline">Business Coaching Solutions</a></li>
              <li><a href="#hr-consulting" className="hover:underline">HR & Customized Training Solutions</a></li>
              <li><a href="#delivery-management" className="hover:underline">Delivery Management & Advisory</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-2">
              <li><a href="#about-us" className="hover:underline">About Us</a></li>
              <li><a href="#principles" className="hover:underline">Our Guiding Principles</a></li>
              <li><a href="#engagement-model" className="hover:underline">Our Engagement Model</a></li>
              <li><a href="#business-consulting" className="hover:underline">Solutions</a></li>
              <li><a href="#" className="hover:underline">Blogs</a></li>
              <li><a href="#track-record" className="hover:underline">Track Record</a></li>
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
              <FaTiktok size={20} />
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
        <div className="flex justify-between text-center text-xs text-gray-600 py-4 border-t">
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
