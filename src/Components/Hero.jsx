import React from "react";

const Hero = () => {
  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <div className="text-center">
        <h1>
          Hi, I’m <span className="text-blue-500">Ace</span>
        </h1>
        <p className="text-xl mb-6">Frontend Developer | React Enthusiast</p>
        <button className="px-4 transition-all duration-100 ease-in-out py-3 bg-amber-300 text-black cursor-pointer hover:text-amber-700 rounded-lg">
          View Projects
        </button>
      </div>
    </section>
  );
};

export default Hero;
