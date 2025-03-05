import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";

const Navbar2 = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact-us";

  const [openDropdown, setOpenDropdown] = useState(null);
  const navigate = useNavigate();

  // Close dropdown when clicking outside
  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".dropdown-container")) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("click", closeDropdown);
    return () => document.removeEventListener("click", closeDropdown);
  }, []);

  // Toggle dropdowns
  const toggleDropdown = (menu) => {
    if (menu === "home" && location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        setOpenDropdown(openDropdown === menu ? null : menu);
      }, 300);
    } else if (menu === "foundation" && location.pathname !== "/foundation") {
      navigate("/foundation");
      setTimeout(() => {
        setOpenDropdown(openDropdown === menu ? null : menu);
      }, 300);
    } else {
      setOpenDropdown(openDropdown === menu ? null : menu);
    }
  };

  const handleNavigation = (path) => {
    if (path.startsWith("/#")) {
      const sectionId = path.replace("/#", "");
      
      if (window.location.pathname === "/foundation") {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      } else {
        navigate("/foundation");
        setTimeout(() => {
          const element = document.getElementById(sectionId);
          if (element) {
            element.scrollIntoView({ behavior: "smooth", block: "start" });
          }
        }, 300); // Slight delay to allow navigation
      }
    } else {
      navigate(path);
    }
  };

  return (
    <nav className="absolute top-0 left-0 right-0 bg-white flex items-center shadow-md z-50">
      {/* Logo */}
      <div>
        <Link to="/">
          <img src="/main-logo.png" alt="BF Logo" className="h-20" /> 
        </Link>
      </div>

      {/* Navigation Links - Pushed to the Right */}
      <ul className="hidden md:flex space-x-6 text-black ml-auto mr-4">
        {/* Home Dropdown */}
        <li className="relative dropdown-container">
          <button
            className="flex items-center cursor-pointer focus:outline-none"
            onClick={() => toggleDropdown("home")}
          >
            Home <FaChevronDown className="ml-1 text-sm" />
          </button>
          {openDropdown === "home" && (
            <ul className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg py-2 z-50">
              {[
                { name: "About Us", link: "/#about-us" },
                { name: "Principles", link: "/#principles" },
                { name: "Engagement Model", link: "/#engagement-model" },
                { name: "Business Consulting Solutions", link: "/#business-consulting" },
                { name: "Business Coaching Solutions", link: "/#business-coaching" },
                { name: "HR Consulting Solutions & Training", link: "/#hr-consulting" },
                { name: "Delivery Management & Advisory", link: "/#delivery-management" },
                { name: "Track Record", link: "/#track-record" },
              ].map((item, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNavigation(item.link)}
              >
              {item.name}
              </li>
              ))}
            </ul>
          )}
        </li>

        {/* Foundation Dropdown */}
        <li className="relative dropdown-container">
          <button
            className="flex items-center cursor-pointer focus:outline-none"
            onClick={() => toggleDropdown("foundation")}
          >
            Foundation <FaChevronDown className="ml-1 text-sm" />
          </button>
          {openDropdown === "foundation" && (
            <ul className="absolute left-0 mt-2 w-72 bg-white shadow-lg rounded-lg py-2 z-50">
              {[
                { name: "About Us", link: "/#foundation-about" },
                { name: "Who We Serve", link: "/#who-we-serve" },
                { name: "Our Promises", link: "/#our-promises" },
                { name: "Skills Development", link: "/#skills-development" },
                { name: "Entrepreneurship Development", link: "/#entrepreneurship-development" },
                { name: "Research and Development", link: "/#research-development" },
              ].map((item, index) => (
                <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleNavigation(item.link)}
              >
              {item.name}
              </li>
              ))}
            </ul>
          )}
        </li>

        {/* Contact Us Link */}
        <li>
          <Link to="/contact-us" className="cursor-pointer">Contact Us</Link>
        </li>
      </ul>

      {/* Right-Side Text Toggle */}
      <div className="bg-gray-800 text-white w-32 h-16 flex items-center justify-center text-lg font-medium">
        Foundation
      </div>
    </nav>
  );
};

export default Navbar2;
