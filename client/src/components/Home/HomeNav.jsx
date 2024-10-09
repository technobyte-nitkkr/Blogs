import React, { useState } from "react";

const HomeNav = () => {
  // State to keep track of the selected tab
  const [selectedTab, setSelectedTab] = useState("Top Picks");

  // Tabs array for easier mapping
  const tabs = ["Top Picks", "Explore", "Trending", "Latest"];

  return (
    <div className="w-screen bg-[#0B0D18]">
      <div className="flex justify-around gap-16 max-w-[687px] mx-auto py-5 bg-[#0B0D18]">
        {tabs.map((tab) => (
          <div
            key={tab}
            // Dynamically apply styles based on whether the tab is selected
            className={`px-4 py-2 rounded-lg text-lg font-mono cursor-pointer 
            transition-colors duration-300 ease-in-out
            ${
              selectedTab === tab
                ? "bg-[#E3C3C3] text-[#1E1E1E] font-bold" // Selected tab styles
                : "bg-[#0B0D18] text-[#E3C3C3]" // Unselected tab styles
            } hover:bg-[#E3C3C3] hover:text-[#1E1E1E]`} // Hover effect for all tabs
            style={{ fontFamily: "'JetBrains Mono', monospace" }}
            onClick={() => setSelectedTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeNav;
