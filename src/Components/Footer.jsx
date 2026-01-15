import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-6xl mx-auto flex px-6  flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm">
          © {new Date().getFullYear()} Ace. All rights reserved.
        </p>

        <div className="flex gap-6">
          <a href="" className="hover:text-white transition">
            GitHub
          </a>
          <a href="" className="hover:text-white transition">
            LinkedIn
          </a>
          <a href="" className="hover:text-white transition">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
