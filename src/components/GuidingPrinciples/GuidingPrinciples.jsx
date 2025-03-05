import React from "react";
import AboutImg from "../../assets/website/about-us.png";

const GuidingPrinciples = () => {
    return (
      <div className="bg-gray-100 py-16 px-6 md:px-16 lg:px-32">
        <div className="text-center mb-12">
          <div className="w-12 h-1 bg-black mx-auto mb-4"></div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins">
            OUR GUIDING PRINCIPLES
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto border border-gray-300 rounded-lg p-10 relative">
          <div className="absolute w-px h-full bg-gray-300 left-1/2 transform -translate-x-1/2 hidden md:block"></div>
          <div className="absolute h-px w-full bg-gray-300 top-1/2 transform -translate-y-1/2"></div>
          
          <div className="text-center px-6 flex flex-col items-center">
            <div className="text-teal-600 text-3xl mb-4">⚙️</div>
            <h3 className="text-lg font-bold font-poppins">Challenging Conventional Norms</h3>
            <p className="text-gray-600 mt-2 font-poppins">
              The world is constantly evolving, and change is an inevitable part of life. Today's solutions may not be relevant tomorrow. Adaptability is essential for unlearning conventional approaches and being willing to relearn for consistent growth.
            </p>
          </div>
          
          <div className="text-center px-6 flex flex-col items-center">
            <div className="text-teal-600 text-3xl mb-4">🛒</div>
            <h3 className="text-lg font-bold font-poppins">Navigating Uncharted Territories</h3>
            <p className="text-gray-600 mt-2 font-poppins">
              Innovation demands the courage to venture into uncharted territories. We construct new bridges and forge new pathways. We are not confined by conventional paths; instead, we are trailblazers who embrace positive change and relish novel.
            </p>
          </div>
          
          <div className="text-center px-6 flex flex-col items-center">
            <div className="text-teal-600 text-3xl mb-4">❤️</div>
            <h3 className="text-lg font-bold font-poppins">Excellence</h3>
            <p className="text-gray-600 mt-2 font-poppins">
              When we succeed, everyone succeeds! At the heart of our being lies an unwavering commitment to delivering exceptional quality, manifesting in our conduct and the outcomes we produce.
            </p>
          </div>
          
          <div className="text-center px-6 flex flex-col items-center">
            <div className="text-teal-600 text-3xl mb-4">🏛️</div>
            <h3 className="text-lg font-bold font-poppins">Moving The Needle</h3>
            <p className="text-gray-600 mt-2 font-poppins">
              Enhancing profitability and managing financial risks with expert advisory tailored for the financial sector.
            </p>
          </div>
        </div>
      </div>
    );
  }
  

export default GuidingPrinciples;
