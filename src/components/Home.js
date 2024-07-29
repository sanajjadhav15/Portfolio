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
      <header className="flex flex-col md:flex-row items-center justify-center md:h-[90vh] overflow-hidden">
        <div className="flex flex-col items-center md:w-[30vw] text-center md:mr-10">
          {/* <div className="bg-transparent p-8 rounded-lg overflow-hidden w-[50vw] max-w-xs"> */}
            <img
              src={profile}
              alt="Sanaj Jadhav"
              className="md:w-96 md:h-96 w-72 h-72 object-cover rounded-t-lg hover:scale-[1.02] transition-transform duration-200"
            />

            <div className="p-6 text-white">
              <div className="text-sm flex flex-col items-center md:items-start text-white mb-4">
                <p className="flex md:text-3xl text-lg items-center mb-2">
                  <CgProfile
                    size={35}
                    className="mr-3 text-white hover:text-accent"
                  />
                  15 Jun 2003
                </p>

                <p className="flex md:text-3xl text-lg items-center mb-2">
                  <a
                    href="tel:+918767554973"
                    className="flex items-center hover:text-accent"
                  >
                    <MdLocalPhone
                      size={35}
                      className="mr-3 mt-1 text-white hover:text-accent"
                    />
                    (+91) 8767554973
                  </a>
                </p>

                <p className="flex md:text-3xl text-lg items-center mb-2">
                  <a
                    href="mailto:sanajjadhav15@gmail.com"
                    className="flex items-center hover:text-accent"
                  >
                    <MdEmail
                      size={35}
                      className="mr-3 mt-1 text-white hover:text-accent"
                    />
                    sanajjadhav15@gmail.com
                  </a>
                </p>
                <p className="flex md:text-3xl text-lg items-center">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Mumbai,IN"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center hover:text-accent"
                  >
                    <IoLocationSharp
                      size={35}
                      className="mr-3 mt-1 text-white hover:text-accent"
                    />
                    Mumbai, IN
                  </a>
                </p>
              </div>
            {/* </div> */}
          </div>
        </div>

        <div className="text-center md:text-left max-w-md md:max-w-4xl">
          <h1 className="md:text-5xl text-2xl text-center text-white mb-2 md:mb-4">
            Hello, World!
          </h1>
          <h2 className="text-3xl md:text-6xl text-center text-white mb-4 md:mb-6">
            I'm <span className="text-accent">Sanaj Jadhav</span>
          </h2>
          <p className="text-xl md:text-3xl text-white md:text-justify">
            I’m a dedicated software developer with a focus on crafting
            responsive and user-friendly web applications. Proficient in
            JavaScript, React, and Node.js. I excel at designing intuitive and
            engaging user experiences. My passion for technology and continuous
            learning fuels my ability to transform innovative concepts into
            impactful solutions. Let’s connect and bring your ideas to life!
          </p>

          <div className="mt-6 flex items-center justify-center">
            <a
              href="https://drive.google.com/file/d/1rLVPr9OHZgbtWmmhF259EkNK1R5IMbNw/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="text-accent md:text-2xl flex items-center justify-center bg-transparent hover:bg-accent hover:text-black py-2 px-4 md:py-4 md:px-8 border border-accent rounded-lg transition-colors duration-300">
                <FiDownload className="mr-2 md:mr-4" /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      <main className="flex justify-center mb-12">
        <section className="mt-12 flex flex-col md:w-[60vw]">
          <h2 className="text-3xl md:text-6xl text-center text-accent mb-6">Skills</h2>
          <p className="text-base md:text-2xl text-center text-white mb-10 md:mb-16">
            I am proficient in programming languages such as C/C++, Python,
            HTML, CSS, Tailwind CSS, Bootstrap, Javascript, and jQuery. My
            expertise extends to frameworks like React.js, Next.js, and
            Firebase. I also excel in using tools like Figma, Canva, Microsoft
            Office Suite, and Photoshop. My strong documentation and
            presentation skills ensure clear communication and effective project
            delivery.
          </p>
          <p className="text-lg md:text-4xl text-white text-center mb-6 md:mb-8">
            Technical Skills
          </p>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<TbBrandCpp size={58} />} label="C/C++" />
            <SkillSphere icon={<FaPython size={58} />} label="Python" />
            <SkillSphere icon={<FaHtml5 size={58} />} label="HTML" />
            <SkillSphere icon={<FaCss3Alt size={58} />} label="CSS" />
            <SkillSphere
              icon={<RiTailwindCssFill size={58} />}
              label="Tailwind CSS"
            />
            <SkillSphere icon={<FaJsSquare size={58} />} label="JavaScript" />
            <SkillSphere icon={<FaReact size={58} />} label="React.js" />
            <SkillSphere icon={<FaNode size={58} />} label="Node.js" />
          </div>

          <div className="border-t border-gray-600 mt-8 mb-6"></div>

          <p className="text-lg md:text-4xl text-white text-center mt-6 mb-6 md:mb-8">Tools</p>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<CgFigma size={58} />} label="Figma" />
            <SkillSphere icon={<SiCanva size={58} />} label="Canva" />
            <SkillSphere
              icon={<SiAdobephotoshop size={58} />}
              label="Photoshop"
            />
            <SkillSphere
              icon={<PiMicrosoftExcelLogoFill size={58} />}
              label="Excel"
            />
            <SkillSphere
              icon={<PiMicrosoftPowerpointLogoFill size={58} />}
              label="PowerPoint"
            />
            <SkillSphere icon={<FaGitAlt size={58} />} label="Git" />
            <SkillSphere icon={<RiFirebaseFill size={58} />} label="Firebase" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
