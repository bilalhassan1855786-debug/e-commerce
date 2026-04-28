// src/components/Footer.tsx
import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { SiGithub } from "react-icons/si";
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p className="mb-2">Connect with me:</p>
      <div className="flex justify-center gap-6 text-2xl">
        <a
          href="https://github.com/bilalhassan1855786-debug"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://web.facebook.com/profile.php?id=100066269662216"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="hover:text-blue-500 transition"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.linkedin.com/in/bilal-hassan-160762397/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://instagram.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="hover:text-pink-400 transition"
        >
          <FaInstagram />
        </a>
        <a
          href="https://tiktok.com/@yourusername"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="TikTok"
          className="hover:text-pink-500 transition"
        >
          <SiTiktok />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
