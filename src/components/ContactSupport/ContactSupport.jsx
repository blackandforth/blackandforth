import React from "react";
import Navbar from "../Navbar/Navbar";

const ContactSupport = () => {
  return (
    <div>
      <Navbar />
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-5xl w-full bg-white shadow-lg rounded-lg p-10">
        {/* Header */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900">Contact & Support</h2>
          <p className="text-gray-600 mt-2">
            We're here to assist you. Whether it's inquiries, consultations, or support, 
            don't hesitate to reach out.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Left - Form */}
          <div className="bg-gray-50 p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Get in Touch with Us</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-gray-700 font-medium">Name *</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Email *</label>
                <input 
                  type="email" 
                  placeholder="example@company.com" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Phone Number *</label>
                <input 
                  type="tel" 
                  placeholder="+11 000 000 000" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium">Message *</label>
                <textarea 
                  placeholder="Leave us a Message" 
                  rows="4" 
                  className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-green-700 text-white font-semibold p-3 rounded-lg hover:bg-green-800 transition"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right - Contact Info */}
          <div className="flex flex-col justify-center space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
              <p className="text-green-600 font-medium text-xl">
                +27 (0) 82 319 8549
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800">Email Support</h3>
              <p className="text-gray-600">Email us & we will get back to you within 24 hours</p>
              <p className="text-green-600 font-medium text-lg mt-1">
                info@blackandforth.co.za
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full">
      {/* Map Image Section */}
      <div className="h-[350px] w-full">
        <img
          src="/Joburg-map.png" // Change this to the correct path
          alt="Johannesburg Map"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-green-900 text-white text-center py-12">
        <h2 className="text-xl font-semibold">
          Building Sustainable Futures, One Strategy at a Time.
        </h2>
        <button className="mt-4 px-6 py-2 border border-white rounded-lg bg-teal-700 transition">
          Contact Us
        </button>
      </div>
    </div>
    </div>
  );
};

export default ContactSupport;
