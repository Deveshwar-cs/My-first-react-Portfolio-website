import React, {useState} from "react";
import {FaBars, FaTimes} from "react-icons/fa";

const navLinks = [
  {name: "Home", id: "home"},
  {name: "About", id: "about"},
  {name: "Skills", id: "skills"},
  {name: "Projects", id: "projects"},
  {name: "Contact", id: "contact"},
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");
  console.log(navLinks);
  return (
    <nav className="bg-black text-white fixed w-full z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Ace</h1>
        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => {
            return (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={() => setActive(link.id)}
                  className={`cursor-pointer transition ${
                    active === link.id
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "hover:text-blue-400"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-black flex flex-col text-center">
          {navLinks.map((link) => {
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={() => {
                  setActive(link.id);
                  setIsOpen(false);
                }}
                className={`${
                  active === link.id ? "text-blue-400" : "hover:text-blue-400"
                }`}
              >
                {link.name}
              </a>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
