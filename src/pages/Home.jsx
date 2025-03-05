import React from "react";
import Navbar from "../components/Navbar/Navbar";
import Hero from "../components/Hero/Hero.jsx";
import AboutUs from "../components/AboutUs/AboutUs.jsx";
import GuidingPrinciples from "../components/GuidingPrinciples/GuidingPrinciples.jsx";
import EngagementModel from "../components/EngagementModel/EngagementModel.jsx";
import BusinessConsultingSolutions from "../components/BusinessConsultingSolutions/BusinessConsultingSolutions.jsx";
import BusinessCoachingSolutions from "../components/BusinessCoachingSolutions/BusinessCoachingSolutions.jsx";
import HrConsultingSolutions from "../components/HrConsultingSolutions/HrConsultingSolutions.jsx";
import DeliveryManagement from "../components/DeliveryManagement/DeliveryManagement.jsx";
import Footer from "../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Hero />
      <section id="about-us" className="pt-18">
        <AboutUs />
      </section>
      <section id="principles" className="pt-18">
        <GuidingPrinciples />
      </section>
      <section id="engagement-model" className="pt-18">
        <EngagementModel />
      </section>
      <section id="business-consulting" className="pt-18">
        <BusinessConsultingSolutions />
      </section>
      <section id="business-coaching" className="pt-18">
        <BusinessCoachingSolutions />
      </section>
      <section id="hr-consulting" className="pt-18">
        <HrConsultingSolutions />
      </section>
      <section id="delivery-management" className="pt-18">
        <DeliveryManagement />
      </section>
      <section id="track-record" className="pt-18">
        <Footer />
      </section>
    </div>
  );
};


export default Home;