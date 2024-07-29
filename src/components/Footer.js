import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-second text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <p className="text-xl mb-2">with ❤️</p>
          <p className="text-2xl font-bold mb-4">Sanaj Jadhav</p>
          <div className="flex justify-center mb-4">
            <a
              href="https://www.linkedin.com/in/sanaj-jadhav-576a40258/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-accent hover:text-white transition-colors duration-200 mx-3"
            >
              <FaLinkedin size={32} />
            </a>
            <a
              href="https://github.com/sanajjadhav15"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-accent hover:text-white transition-colors duration-200 mx-3"
            >
              <FaGithub size={32} />
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
