import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedinIn,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Social media icons

export default function Footer() {
  return (
    <footer
      className="text-gray-400 py-4 px-8 bottom-0 relative w-[100%]"
      style={{ backgroundColor: "#161B22" }}
    >
      <div className="flex justify-between items-center">
        {/* Left Side: Text and Links */}
        <div className="flex space-x-6 text-sm">
          <span>© 2024 Techspardha, Inc.</span>
          <Link to="/" className="hover:text-white"> {/** add a link to our git presentation */}
            What is Git?
          </Link>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <Link to="https://www.instagram.com/technobyte_nitkkr/"
            aria-label="Instagram"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </Link>
          <Link to="https://www.linkedin.com/company/technobyte-nitkkr/"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </Link>
          <Link to="https://github.com/technobyte-nitkkr/"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
