import React from 'react';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-primary via-cardBackground to-primary text-white py-6 border-t border-accent/20 shadow-glow">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-xl mb-2 text-textSecondary">Crafted with ❤️ and data insights</p>
          <p className="text-2xl font-bold mb-2 text-accent">Sanaj Jadhav</p>
          <p className="text-sm text-textSecondary mb-4">Data Analyst & Business Intelligence Specialist</p>
          <div className="flex justify-center mb-4">
            <a
              href="https://www.linkedin.com/in/sanaj-jadhav-576a40258/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-accent hover:text-white transition-all duration-300 mx-3 hover:scale-110 hover:shadow-glow transform"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/sanajjadhav15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-accent hover:text-white transition-all duration-300 mx-3 hover:scale-110 hover:shadow-glow transform"
            >
              <FaGithub size={32} />
            </a>
            <a
              href="mailto:sanajjadhav77@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Email"
              className="text-accent hover:text-white transition-all duration-300 mx-3 hover:scale-110 hover:shadow-glow transform"
            >
              <FaEnvelope size={32} />
            </a>
            {/* Uncomment and update the Twitter link when available
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className="text-accent hover:text-white transition-colors duration-200"
            >
              <FaTwitter size={36} />
            </a>
            */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
