import React, { useState } from "react";

const HomeNav = () => {
  const [selectedTab, setSelectedTab] = useState("Top Picks");
  const tabs = ["Top Picks", "Explore", "Trending", "Latest"];

  return (
    <div
      className=" mx-auto w-[95%] border-b-2 mb-4"
      style={{
        borderImageSource:
          "linear-gradient(141.07deg, #00336C 3.32%, #D51B10 95.71%)",
        borderImageSlice: 1,
      }}
    >
      <div
        className=" md:flex md:justify-around grid grid-cols-2 gap-4 px-4"
        style={{ justifyContent: "space-evenly", justifyItems: "center" }}
      >
        {tabs.map((tab) => (
          <div
            key={tab}
            className="px-4 py-2 text-lg font-mono cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={() => setSelectedTab(tab)}
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
          >
            <span
              className={`rounded-lg ${
                selectedTab === tab
                  ? "bg-[#E3C3C3] text-[#1E1E1E] font-bold px-4 py-2"
                  : "bg-transparent text-[#E3C3C3] px-2 py-1"
              } hover:bg-[#E3C3C3] hover:text-[#1E1E1E]`}
            >
              {tab}
            </span>
          </div>
        ))}
      </div>
      <br />
    </div>
  );
};

export default HomeNav;
