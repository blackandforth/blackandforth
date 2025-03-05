import React, { Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

// Lazy load pages
const Home = React.lazy(() => import("./pages/Home"));
const Foundation = React.lazy(() => import("./pages/Foundation"));
const ContactUs = React.lazy(() => import("./pages/ContactUs"));

const App = () => {
  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <Router>
      <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
        <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/foundation" element={<Foundation />} />
            <Route path="/contact-us" element={<ContactUs />}/>
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;
