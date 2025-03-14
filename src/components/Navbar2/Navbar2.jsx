import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMenu } from "react-icons/hi"; // Hamburger Icon
import { HiX } from "react-icons/hi"; // Close Icon

const Navbar2 = () => {
  const location = useLocation();
  const isContactPage = location.pathname === "/contact-us";

  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 flex items-center">
        {/* Logo */}
        <div className="flex items-center justify-between w-full px-4 py-3 md:px-8 md:py-0">
          <Link to="/">
            <img src="/foundation-logo.png" alt="BF Logo" className="h-20" />
          </Link>
  
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden flex items-center space-x-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenu className="text-2xl" />
            )}
          </button>
        </div>
  
        {/* Desktop Navigation Links */}
        <div className="hidden md:flex flex-grow justify-center mr-80">
        <ul className="flex items-center gap-x-10 font-semibold text-black">
          {/* Home Dropdown */}
          <li className="relative dropdown-container">
            <button
              className="flex items-center cursor-pointer focus:outline-none"
              onClick={() => toggleDropdown("home")}
            >
              Home <TiArrowSortedDown className="ml-1 text-sm" />
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
              Foundation <TiArrowSortedDown className="ml-1 text-sm" />
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
            <Link to="/contact-us" className="cursor-pointer whitespace-nowrap">
              Contact Us
            </Link>
          </li>
        </ul>
        </div>
  
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>
        )}
        {mobileMenuOpen && (
          <div className="fixed top-0 right-0 w-3/4 h-full bg-white z-50 mobile-menu transform transition-all duration-300 ease-in-out">
            <div className="flex flex-col p-6 space-y-4">
              <Link
                to="/"
                className="py-2 text-xl font-semibold text-black hover:text-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/foundation"
                className="py-2 text-xl font-semibold text-black hover:text-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Foundation
              </Link>
              <Link
                to="/contact-us"
                className="py-2 text-xl font-semibold text-black hover:text-teal-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        )}
  
        {/* Right-Side Text Toggle (Hidden on mobile) */}
        <div
          className="absolute top-0 right-0 h-full flex items-center bg-teal-700 text-white w-36 hidden md:flex items-center justify-center text-lg font-medium"
        >
          Foundation
        </div>
      </nav>
    );
  };
  
  export default Navbar2;
  