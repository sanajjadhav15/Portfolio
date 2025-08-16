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
      ? "text-lg lg:text-xl font-bold text-accent transition-colors duration-300"
      : "text-lg lg:text-xl font-bold text-white hover:text-accent transition-colors duration-300";
  };

  return (
    <div className="relative">
      <header className="w-full bg-gradient-to-r from-primary via-cardBackground to-primary p-3 sm:p-4 shadow-glow border-b border-accent/20 backdrop-blur-sm">
        <div className="container mx-auto flex justify-between items-center">
          {/* Mobile title/logo */}
          <div className="md:hidden flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-accent tracking-wide">
              Sanaj Jadhav
            </h1>
            <p className="text-xs sm:text-sm text-textSecondary">Data Analyst</p>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex flex-1 justify-center">
            <ul className="flex space-x-8 lg:space-x-14">
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
          
          {/* Mobile menu button */}
          <button
            className="md:hidden text-2xl sm:text-3xl text-accent focus:outline-none z-[60] relative"
            aria-label="Toggle menu"
            onClick={toggleMenu}
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <div className="w-full h-1 bg-gradient-to-r from-accent via-secondary to-tertiary mt-4 animate-pulse"></div>
      </header>
      
      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gradient-to-br from-primary via-cardBackground to-primary bg-opacity-98 backdrop-blur-md z-50 shadow-xl border-b border-accent/20">
          <nav className="py-8 px-4">
            <ul className="flex flex-col items-center space-y-6 sm:space-y-8">
              <li>
                <Link 
                  to="/" 
                  className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300" 
                  onClick={toggleMenu}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/education"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Education
                </Link>
              </li>
              <li>
                <Link
                  to="/experience"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-xl sm:text-2xl font-bold text-white hover:text-accent transition-colors duration-300"
                  onClick={toggleMenu}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
}

export default Header;
