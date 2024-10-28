import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faTwitch,
  faTiktok,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"; // Social media icons

export default function Footer() {
  return (
    <footer
      className="text-gray-400 py-4 px-8"
      style={{ backgroundColor: "#161B22" }}
    >
      <div className="flex justify-between items-center">
        {/* Left Side: Text and Links */}
        <div className="flex space-x-6 text-sm">
          <span>© 2024 Techspardha, Inc.</span>
          <a href="/" className="hover:text-white">
            Terms
          </a>
          <a href="/" className="hover:text-white">
            Privacy (Updated 10/2024)
          </a>
          <a href="/" className="hover:text-white">
            Site Map
          </a>
          <a href="/" className="hover:text-white">
            What is Git?
          </a>
        </div>

        {/* Right Side: Social Media Icons */}
        <div className="flex space-x-4">
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedinIn} size="lg" />
          </a>
          <a
            href="https://youtube.com"
            aria-label="YouTube"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faYoutube} size="lg" />
          </a>
          <a
            href="https://twitch.tv"
            aria-label="Twitch"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faTwitch} size="lg" />
          </a>
          <a
            href="https://tiktok.com"
            aria-label="TikTok"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faTiktok} size="lg" />
          </a>
          <a
            href="https://github.com"
            aria-label="GitHub"
            className="hover:text-white"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </div>
      </div>
    </footer>
  );
}
