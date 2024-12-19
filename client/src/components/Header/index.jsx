import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
  // faMagnifyingGlass,
  // faUserCircle,
// } from "@fortawesome/free-solid-svg-icons"; // Import the user circle icon

export default function Header() {
  return (
    <>
      <header className="p-5 flex flex-row items-center bg-black text-white m-0 w-full h-[72px]">
        <div className="flex items-center mx-5">
          {" "}
          {/* Container for logo */}
          <img
            src="your-image-url.jpg" // Replace with your image URL
            alt="Blogs Logo"
            style={{ width: "23px", height: "24px", gap: "0px" }} // Remove opacity to make it visible
          />
          <h1
            className="text-2xl font-bold"
            style={{
              fontFamily: "JetBrains Mono", // Custom font
              fontSize: "20px", // Font size
              fontWeight: 700, // Font weight
              lineHeight: "24px", // Line height
              letterSpacing: "0.133928582072258px", // Letter spacing
              textAlign: "left", // Text alignment
            }}
          >
            Blogs
          </h1>
        </div>
        <nav className="flex-grow text-left -ml-20 md:mr-0 lg:mr-80 md-custom:mr-80">
          <ul className="list-none p-0 m-0 flex justify-center space-x-5 sm:flex hidden">
            {" "}
            {/* Navigation list */}
            <li className="cursor-pointer font-mono text-[16px] font-light leading-[32.08px] text-center">
              Top Picks
            </li>
            <li className="cursor-pointer font-mono text-[16px] font-light leading-[32.08px] text-center">
              About Us
            </li>
            <li className="cursor-pointer font-mono text-[16px] font-light leading-[32.08px] text-center">
              Write
            </li>
          </ul>
        </nav>
        <div
          className="flex items-center rounded-full pr-0 ml-0 mt-4 md:mt-0" // Removed bg-gray-800
          style={{ backgroundColor: "#161B22" }} // Set custom background color
        >
          {" "}
          <FontAwesomeIcon
            icon={faMagnifyingGlass} // Use the solid version here
            className="text-gray-400 mr-4 ml-2" // Lighter color for the icon
            size="lg"
          />
          <input
            type="text"
            placeholder="Search"
            className="bg-transparent p-2 rounded-l-full outline-none text-white"
            aria-label="Search"
          />
        </div>
        {/* User icon on the right */}
        <div className="ml-6">
          <FontAwesomeIcon
            icon={faUserCircle}
            className="text-gray-400 cursor-pointer"
            size="2x" // Adjust size based on preference
          />
        </div>
      </header>
      <div className="w-full" style={{ borderBottom: "1px solid #717171" }} />
      {/* Thin line added here */}
    </>
  );
}
