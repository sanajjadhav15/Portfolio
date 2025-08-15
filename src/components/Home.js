import React from "react";
import profile from "../utils/profile-pic.png";
import SkillSphere from "./SkillSphere";
import { CgProfile } from "react-icons/cg";
import { MdLocalPhone, MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FiDownload } from "react-icons/fi";

import {
  FaPython,
  FaDatabase,
  FaChartBar,
  FaChartLine,
  FaRProject,
} from "react-icons/fa";
import {
  SiTableau,
  SiMicrosoftexcel,
  SiPowerbi,
  SiJupyter,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiApachespark,
  SiGoogleanalytics,
  SiReact,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiFirebase,
  SiStreamlit,
  SiGit,
  SiGithub,
  SiFigma,
  SiPlotly,
} from "react-icons/si";
import { TbBrandPython } from "react-icons/tb";
import {
  PiMicrosoftExcelLogoFill,
  PiMicrosoftPowerpointLogoFill,
} from "react-icons/pi";

function Home() {
  return (
    <div className="min-h-screen bg-primary p-4 -mx-4 -my-5 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-data opacity-5"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-tertiary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <header className="relative z-10 flex flex-col md:flex-row items-center justify-center md:h-[90vh] overflow-hidden">
        <div className="flex flex-col items-center md:w-[30vw] text-center md:mr-10">
          <img
            src={profile}
            alt="Sanaj Jadhav"
            className="md:w-[300px] md:h-[300px] w-64 h-64 mt-1 object-cover rounded-t-lg hover:scale-[1.02] transition-transform duration-200"
          />

          <div className="p-6 text-white">
            <div className="text-sm flex flex-col items-center md:items-start text-white mb-4">
              <p className="flex md:text-2xl text-lg items-center mb-2">
                <CgProfile
                  size={28}
                  className="mr-3 text-white hover:text-accent"
                />
                15 Jun 2003
              </p>

              <p className="flex md:text-2xl text-lg items-center mb-2">
                <a
                  href="tel:+918767554973"
                  className="flex items-center hover:text-accent"
                >
                  <MdLocalPhone
                    size={28}
                    className="mr-3 mt-1 text-white hover:text-accent"
                  />
                  (+91) 8767554973
                </a>
              </p>

              <p className="flex md:text-2xl text-lg items-center mb-2">
                <a
                  href="mailto:sanajjadhav77@gmail.com"
                  className="flex items-center hover:text-accent"
                >
                  <MdEmail
                    size={28}
                    className="mr-3 mt-1 text-white hover:text-accent"
                  />
                  sanajjadhav77@gmail.com
                </a>
              </p>
              <p className="flex md:text-2xl text-lg items-center">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=Pune,IN"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-accent"
                >
                  <IoLocationSharp
                    size={28}
                    className="mr-3 mt-1 text-white hover:text-accent"
                  />
                  Pune, IN
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left max-w-md md:max-w-2xl">
          <h1 className="text-2xl md:text-5xl text-center text-white mb-4 md:mb-6">
            I'm <span className="text-accent">Sanaj Jadhav</span>
          </h1>
          <h3 className="text-xl md:text-3xl text-center text-accent mb-4">
            Data Analyst | SQL | Python | Excel | Power BI
          </h3>
          <p className="text-lg md:text-2xl text-white md:text-justify">
            I help transform raw, messy data into clear, actionable insights,
            turning "uh-huh" moments into "aha!" discoveries. I love diving into
            datasets, spotting trends, uncovering hidden patterns, and building
            dashboards that tell a story. Whether it's numbers, charts, or
            tables, I make data easy to understand and useful. My goal is to
            help you see what's really happening behind the numbers so decisions
            become smarter and more confident, think of me as your data guide,
            turning chaos into clarity, one insight at a time.
          </p>

          <div className="mt-6 flex items-center justify-center">
            <a
              href="/Sanaj_Resume_Data_Analyst.pdf"
              download="Sanaj_Jadhav_Data_Analyst_Resume.pdf"
              rel="noopener noreferrer"
            >
              <button className="text-accent md:text-xl flex items-center justify-center bg-transparent hover:bg-gradient-data hover:text-white hover:shadow-glow py-2 px-4 md:py-3 md:px-6 border border-accent rounded-lg transition-all duration-500 hover:scale-105">
                <FiDownload className="mr-2 md:mr-3" /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex justify-center mb-12">
        <section className="mt-12 flex flex-col md:w-[60vw]">
          <h2 className="text-2xl md:text-5xl text-center text-accent mb-6">
            Skills
          </h2>
          <p className="text-base md:text-xl text-center text-white mb-10 md:mb-16">
            I am proficient in programming languages including Python (Pandas,
            NumPy), SQL, ReactJS, C/C++, JavaScript, HTML, and CSS. I specialize
            in data analysis and visualization, using techniques like
            Exploratory Data Analysis (EDA) with Matplotlib, Seaborn, and
            Plotly. I have hands-on experience with databases and business
            intelligence tools such as MySQL, Firebase, Microsoft Excel, Power
            BI, and Tableau. Additionally, I am skilled in platforms and tools
            like Streamlit, Git, GitHub, and Figma. Combining these technical
            skills with strong documentation and presentation abilities, I turn
            complex datasets into actionable insights and build interactive
            dashboards that communicate data effectively.
          </p>
          <p className="text-lg md:text-3xl text-white text-center mb-6 md:mb-8">
            Programming Languages
          </p>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<FaPython size={40} />} label="Python" />
            <SkillSphere icon={<FaRProject size={40} />} label="R" />
            <SkillSphere icon={<FaDatabase size={40} />} label="SQL" />
            <SkillSphere icon={<SiReact size={40} />} label="ReactJS" />
            <SkillSphere icon={<SiCplusplus size={40} />} label="C/C++" />
            <SkillSphere icon={<SiJavascript size={40} />} label="JavaScript" />
            <SkillSphere icon={<SiHtml5 size={40} />} label="HTML" />
            <SkillSphere icon={<SiCss3 size={40} />} label="CSS" />
          </div>

          <div className="border-t border-gray-600 mt-8 mb-6"></div>

          <p className="text-lg md:text-3xl text-white text-center mt-6 mb-6 md:mb-8">
            Data Analysis & Visualization
          </p>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<SiPandas size={40} />} label="Pandas" />
            <SkillSphere icon={<SiNumpy size={40} />} label="NumPy" />
            <SkillSphere icon={<FaChartLine size={40} />} label="Matplotlib" />
            <SkillSphere icon={<FaChartBar size={40} />} label="Seaborn" />
            <SkillSphere icon={<SiPlotly size={40} />} label="Plotly" />
            <SkillSphere icon={<SiTableau size={40} />} label="Tableau" />
            <SkillSphere icon={<SiPowerbi size={40} />} label="Power BI" />
          </div>

          <div className="border-t border-gray-600 mt-8 mb-6"></div>

          <p className="text-lg md:text-3xl text-white text-center mt-6 mb-6 md:mb-8">
            Databases & Tools
          </p>
          <div className="flex flex-wrap justify-center">
            <SkillSphere icon={<SiMysql size={40} />} label="MySQL" />
            <SkillSphere icon={<SiFirebase size={40} />} label="Firebase" />
            <SkillSphere
              icon={<PiMicrosoftExcelLogoFill size={40} />}
              label="Excel"
            />
            <SkillSphere icon={<SiStreamlit size={40} />} label="Streamlit" />
            <SkillSphere icon={<SiGit size={40} />} label="Git" />
            <SkillSphere icon={<SiGithub size={40} />} label="GitHub" />
            <SkillSphere icon={<SiFigma size={40} />} label="Figma" />
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
