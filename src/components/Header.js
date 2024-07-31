import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const getLinkClass = (path) => {
    return location.pathname === path
      ? "text-2xl font-bold text-accent"
      : "text-2xl font-bold text-white hover:text-accent";
  };

  return (
    <header className="bg-primary p-6 shadow-lg mb-0">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl font-bold text-accent md:hidden tracking-wide">
          Sanaj Jadhav
        </h1>
        <nav className="flex-1 flex justify-center">
          <ul className="hidden md:flex space-x-14">
            <li>
              <Link to="/" className={getLinkClass("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/education" className={getLinkClass("/education")}>
                Education
              </Link>
            </li>
            <li>
              <Link to="/experience" className={getLinkClass("/experience")}>
                Experience
              </Link>
            </li>
            <li>
              <Link to="/projects" className={getLinkClass("/projects")}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" className={getLinkClass("/contact")}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button
          className="md:hidden text-3xl text-accent focus:outline-none"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          <FaBars />
        </button>
      </div>
      {isOpen && (
        <nav className="md:hidden fixed top-0 left-0 w-full h-full bg-primary bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-12 transition-opacity duration-300">
          <button
            className="text-4xl text-accent focus:outline-none"
            aria-label="Close menu"
            onClick={toggleMenu}
          >
            <FaTimes />
          </button>
          <ul className="flex flex-col items-center space-y-12">
            <li>
              <Link to="/" className={getLinkClass("/")} onClick={toggleMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/education"
                className={getLinkClass("/education")}
                onClick={toggleMenu}
              >
                Education
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                className={getLinkClass("/experience")}
                onClick={toggleMenu}
              >
                Experience
              </Link>
            </li>
            <li>
              <Link
                to="/projects"
                className={getLinkClass("/projects")}
                onClick={toggleMenu}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={getLinkClass("/contact")}
                onClick={toggleMenu}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <div className="w-full h-1 bg-accent mt-8"></div>
    </header>
  );
}

export default Header;
