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
    <div className="min-h-screen bg-primary p-2 sm:p-4 -mx-2 sm:-mx-4 -my-2 sm:-my-5 relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-data opacity-5"></div>
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 bg-tertiary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <header className="relative z-10 flex flex-col lg:flex-row items-center justify-center min-h-[90vh] py-8 gap-6 lg:gap-10">
        <div className="flex flex-col items-center lg:w-[30vw] text-center">
          <img
            src={profile}
            alt="Sanaj Jadhav"
            className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-[280px] lg:h-[280px] xl:w-[300px] xl:h-[300px] object-cover rounded-t-lg hover:scale-[1.02] transition-transform duration-200"
          />

          <div className="p-4 sm:p-6 text-white w-full max-w-sm">
            <div className="flex flex-col items-center space-y-3 sm:space-y-3 lg:space-y-4">
              <div className="flex items-center text-sm sm:text-base lg:text-lg xl:text-xl">
                <CgProfile
                  size={20}
                  className="mr-3 text-white hover:text-accent"
                />
                <span>15 Jun 2003</span>
              </div>

              <a
                href="tel:+918767554973"
                className="flex items-center hover:text-accent text-sm sm:text-base lg:text-lg xl:text-xl"
              >
                <MdLocalPhone
                  size={20}
                  className="mr-3 text-white hover:text-accent"
                />
                <span>(+91) 8767554973</span>
              </a>

              <a
                href="mailto:sanajjadhav77@gmail.com"
                className="flex items-center hover:text-accent text-sm sm:text-base lg:text-lg xl:text-xl"
              >
                <MdEmail
                  size={20}
                  className="mr-3 text-white hover:text-accent"
                />
                <span className="break-all sm:break-normal">sanajjadhav77@gmail.com</span>
              </a>
              
              <a
                href="https://www.google.com/maps/search/?api=1&query=Pune,IN"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center hover:text-accent text-sm sm:text-base lg:text-lg xl:text-xl"
              >
                <IoLocationSharp
                  size={20}
                  className="mr-3 text-white hover:text-accent"
                />
                <span>Pune, IN</span>
              </a>
            </div>
          </div>
        </div>

        <div className="text-center lg:text-left max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl px-4 sm:px-0">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center lg:text-left text-white mb-4 lg:mb-6 leading-tight">
            I'm <span className="text-accent">Sanaj Jadhav</span>
          </h1>
          <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-center lg:text-left text-accent mb-4 lg:mb-6 leading-relaxed">
            Data Analyst | SQL | Python | Excel | Power BI
          </h3>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white text-center lg:text-justify leading-relaxed mb-6">
            I help transform raw, messy data into clear, actionable insights,
            turning "uh-huh" moments into "aha!" discoveries. I love diving into
            datasets, spotting trends, uncovering hidden patterns, and building
            dashboards that tell a story. Whether it's numbers, charts, or
            tables, I make data easy to understand and useful. My goal is to
            help you see what's really happening behind the numbers so decisions
            become smarter and more confident, think of me as your data guide,
            turning chaos into clarity, one insight at a time.
          </p>

          <div className="flex items-center justify-center lg:justify-start">
            <a
              href="/Sanaj_Resume_Data_Analyst.pdf"
              download="Sanaj_Jadhav_Data_Analyst_Resume.pdf"
              rel="noopener noreferrer"
            >
              <button className="text-accent text-sm sm:text-base md:text-lg lg:text-xl flex items-center justify-center bg-transparent hover:bg-gradient-data hover:text-white hover:shadow-glow py-2 px-3 sm:py-2 sm:px-4 lg:py-3 lg:px-6 border border-accent rounded-lg transition-all duration-500 hover:scale-105">
                <FiDownload className="mr-2 text-sm sm:text-base" /> Download Resume
              </button>
            </a>
          </div>
        </div>
      </header>

      <main className="relative z-10 flex justify-center mb-8 sm:mb-12 px-4 sm:px-0">
        <section className="mt-8 sm:mt-12 flex flex-col w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-center text-accent mb-4 sm:mb-6">
            Skills
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-center text-white mb-6 sm:mb-8 md:mb-10 lg:mb-16 leading-relaxed px-2 sm:px-0">
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
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center mb-4 sm:mb-6 lg:mb-8">
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

          <div className="border-t border-gray-600 mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center mt-4 sm:mt-6 mb-4 sm:mb-6 lg:mb-8">
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

          <div className="border-t border-gray-600 mt-4 sm:mt-6 lg:mt-8 mb-4 sm:mb-6"></div>

          <p className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white text-center mt-4 sm:mt-6 mb-4 sm:mb-6 lg:mb-8">
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
