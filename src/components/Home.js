import React from "react";
import profile from "../utils/profile-pic.png";
import SkillSphere from "./SkillSphere";
import { CgProfile } from "react-icons/cg";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";
import { TbBrandCpp } from "react-icons/tb";
import {
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
} from "react-icons/fa";
import { FaNode } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { CgFigma } from "react-icons/cg";
import { SiCanva, SiAdobephotoshop } from "react-icons/si";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";
import { FaGitAlt } from "react-icons/fa";
import { RiFirebaseFill } from "react-icons/ri";

function Home() {
  return (
    <div className="min-h-screen bg-primary p-4 -mx-4 -my-5">
      <header className="flex flex-col md:flex-row items-center h-[70vh] justify-center space-y-8 md:space-y-0 md:space-x-8 md:mt-12" role="banner">
        <div className="flex flex-col items-center text-center">
          <div className="bg-transparent p-4 rounded-lg overflow-hidden w-full max-w-xs">
            <img
              src={profile}
              alt="Sanaj Jadhav Profile Picture"
              className="md:w-56 md:h-56 w-64 h-64 object-cover rounded-t-lg hover:scale-[1.02] transition-transform duration-200"
            />
            <div className="p-6 text-white">
              <div className="text-sm flex flex-col items-center md:items-start text-white mb-4">
                <p className="flex text-base items-center mb-2">
                  <CgProfile
                    size={20}
                    className="mr-2 text-white hover:text-accent"
                    aria-hidden="true"
                  />
                  15 Jun 2003
                </p>

                <p className="flex text-base items-center mb-2">
                  <a
                    href="tel:+918767554973"
                    className="flex items-center hover:text-accent"
                    aria-label="Phone number"
                  >
                    <MdLocalPhone
                      size={20}
                      className="mr-2 mt-1 text-white hover:text-accent"
                      aria-hidden="true"
                    />
                    (+91) 8767554973
                  </a>
                </p>

                <p className="flex text-base items-center mb-2">
                  <a
                    href="mailto:sanajjadhav15@gmail.com"
                    className="flex items-center hover:text-accent"
                    aria-label="Email address"
                  >
                    <MdEmail
                      size={20}
                      className="mr-2 mt-1 text-white hover:text-accent"
                      aria-hidden="true"
                    />
                    sanajjadhav15@gmail.com
                  </a>
                </p>
                <p className="flex text-base items-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Mumbai,IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-accent"
                    aria-label="Location"
                  >
                    <IoLocationSharp
                      size={20}
                      className="mr-2 mt-1 text-white hover:text-accent"
                      aria-hidden="true"
                    />
                    Mumbai, IN
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left max-w-md md:max-w-lg md:mt-0">
          <h1 className="text-2xl text-white mb-2 text-center">
            Hello, World!
          </h1>
          <h2 className="text-3xl text-white mb-4 text-center">
            I'm <span className="text-accent">Sanaj Jadhav</span>
          </h2>
          <p className="text-lg text-white md:text-justify text-center">
            I’m a dedicated software developer with a focus on crafting
            responsive and user-friendly web applications. Proficient in
            JavaScript, React, and Node.js. I excel at designing intuitive and
            engaging user experiences. My passion for technology and continuous
            learning fuels my ability to transform innovative concepts into
            impactful solutions. Let’s connect and bring your ideas to life!
          </p>

          <div className="mt-4 flex items-center justify-center space-x-4">
            <a
              href="https://drive.google.com/file/d/1rLVPr9OHZgbtWmmhF259EkNK1R5IMbNw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Resume"
            >
              <button className="text-accent flex items-center justify-center bg-transparent hover:bg-accent hover:text-black py-2 px-4 border border-accent rounded-lg transition-colors duration-300">
                <FiDownload className="mr-2" aria-hidden="true" /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex justify-center mb-12" role="main">
        <section className="mt-12 flex flex-col md:w-[60%]">
          <h2 className="text-3xl text-center text-accent mb-6">Skills</h2>
          <p className="text-base text-center text-white mb-10">
            I am proficient in programming languages such as C/C++, Python,
            HTML, CSS, Tailwind CSS, Bootstrap, Javascript, and jQuery. My
            expertise extends to frameworks like React.js, Next.js, and
            Firebase. I also excel in using tools like Figma, Canva, Microsoft
            Office Suite, and Photoshop. My strong documentation and
            presentation skills ensure clear communication and effective project
            delivery.
          </p>
          <h3 className="text-lg text-white text-center mb-6">
            Technical Skills
          </h3>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<TbBrandCpp size={36} />} label="C/C++" />
            <SkillSphere icon={<FaPython size={36} />} label="Python" />
            <SkillSphere icon={<FaHtml5 size={36} />} label="HTML" />
            <SkillSphere icon={<FaCss3Alt size={36} />} label="CSS" />
            <SkillSphere
              icon={<RiTailwindCssFill size={36} />}
              label="Tailwind CSS"
            />
            <SkillSphere icon={<FaJsSquare size={36} />} label="JavaScript" />
            <SkillSphere icon={<FaReact size={36} />} label="React.js" />
            <SkillSphere icon={<FaNode size={36} />} label="Node.js" />
          </div>

          <div className="border-t border-gray-600 mt-8 mb-6"></div>

          <h3 className="text-lg text-white text-center mt-6 mb-6">Tools</h3>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<CgFigma size={36} />} label="Figma" />
            <SkillSphere icon={<SiCanva size={36} />} label="Canva" />
            <SkillSphere
              icon={<SiAdobephotoshop size={36} />}
              label="Photoshop"
            />
            <SkillSphere
              icon={<PiMicrosoftExcelLogoFill size={36} />}
              label="Excel"
            />
            <SkillSphere
              icon={<PiMicrosoftPowerpointLogoFill size={36} />}
              label="PowerPoint"
            />
            <SkillSphere icon={<FaGitAlt size={36} />} label="Git" />
            <SkillSphere icon={<RiFirebaseFill size={36} />} label="Firebase" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
