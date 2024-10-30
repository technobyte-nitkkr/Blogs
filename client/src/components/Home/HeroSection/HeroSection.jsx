import React from 'react';

const HeroSection = () => {
  return (
    <div className="w-full h-[70%] bg-grid-pattern bg-[length:139px_152px] bg-[#0B0D18]">
      <div className="flex max-w-full">
        <div className="max-h-full py-32 px-20">
          <h1 className="text-6xl font-extralight text-white text-wrap m-8">
            Innovate, Learn, Connect
          </h1>
          <p className="max-w-full text-xl text-white font-normal text-wrap mx-8">
            Explore the latest tech trends, gain insights from industry experts, and engage with fellow tech enthusiasts.
            From AI breakthroughs to coding tips, our blog is your go-to resource for all things.
          </p>
          <div className="flex justify-start items-center w-full">
            <button className="bg-blue-500 text-white max-w-full w-28 h-10 rounded-3xl m-8 hover:bg-[#65558F] ease-out">
              Sign Up
            </button>
            <button className="bg-[#A3C8F0] text-black max-w-full w-28 h-10 rounded-3xl">
              Write
            </button>
          </div>
        </div>
        <div className="flex items-end w-[900px] max-h-full mt-28">
          <img src="/Saly-11.png" alt="Hero Section Image" className="h-full" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
