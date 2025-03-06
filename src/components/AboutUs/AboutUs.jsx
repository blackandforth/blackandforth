import React from "react";
import AboutImg from "../../assets/website/about-us.png";

const AboutUs = () => {
  return (
    <section className="py-16 px-6 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-10">
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-6"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 font-poppins">ABOUT US</h2>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-stretch">
          {/* Left Side: Text */}
          <div className="text-gray-800 self-stretch flex flex-col justify-center">
            <p className="text-md text-justify leading-relaxed font-poppins">
              We are a dynamic management consulting firm committed to driving organizational excellence. 
              With a focus on strategy enablement, coaching, and leadership development firm, we empower organizations 
              to navigate challenges and achieve sustainable growth. Our seasoned consultants bring diverse expertise, 
              delivering tailored solutions to enhance efficiency, foster innovation, and maximize profitability.
            </p>
            <p className="text-md text-justify leading-relaxed mt-4 font-poppins">
              Our focus is on partnering with our clients in developing the strategies and capabilities 
              necessary for success in the marketplace. We achieve this by providing a comprehensive range of 
              services, spanning from ideation to execution. Our clientele encompasses corporations, non-profits, 
              and start-ups across the globe.
            </p>
            <p className="text-md text-justify leading-relaxed mt-4 font-poppins">
              Our purpose is to collaborate with institutions in the state-owned and private sector partnerships that 
              benefit the broader society. By doing so, we aim to create societies that are socially empowered, economically viable, 
              environmentally sustainable, and resilient for future generations.
            </p>
          </div>

          {/* Right Side: Image */}
          <div className="flex justify-center h-full">
            <img
              src={AboutImg}
              loading="lazy"
              alt="About Us"
              className="shadow-lg w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
