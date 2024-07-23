import React from "react";
import logo from "../utils/somaiya-pic.jpg";
import logo2 from "../utils/scottish-pic.png";
import logo3 from "../utils/nss-pic.png";

function Education() {
  return (
    <main className="min-h-screen bg-primary p-4 -mx-4 -my-5">
      <div className="max-w-6xl mx-auto">
        {/* Education Section */}
        <section aria-labelledby="education-section" className="mb-12">
          <h1 id="education-section" className="text-4xl text-white mb-4 text-center md:text-start">Education</h1>
          
          <article className="bg-cardBackground p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <div className="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-reverse md:space-x-4 space-y-4 md:space-y-0">
              <img src={logo} alt="K. J. Somaiya Institute of Information Technology logo" className="w-32 h-32 object-contain mx-auto md:mx-0" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl text-accent mb-2">
                  K. J. Somaiya Institute of Information Technology (KJSIT), Mumbai, MH
                </h2>
                <p className="text-white mb-2 font-semibold">
                  Bachelor of Technology in Information Technology
                </p>
                <p className="text-white">CGPA: 9</p>
                <p className="text-white">Dec 2021 - Present</p>
              </div>
            </div>
          </article>
          
          <article className="bg-cardBackground p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl mt-6">
            <div className="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-reverse md:space-x-4 space-y-4 md:space-y-0">
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl text-accent mb-2">
                  Late Rangnathrao Kaldate Guruji Secondary and Higher Secondary School, Parbhani, MH
                </h2>
                <p className="text-white mb-2 font-semibold">
                  Higher Secondary School
                </p>
                <p className="text-white">Percentage: 97.8%</p>
                <p className="text-white">Jun 2019 - Jun 2021</p>
              </div>
            </div>
          </article>
          
          <article className="bg-cardBackground p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl mt-6">
            <div className="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-reverse md:space-x-4 space-y-4 md:space-y-0">
              <img
                src={logo2}
                alt="Scottish Academy logo"
                className="w-32 h-32 object-contain mx-auto md:mx-0"
              />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl text-accent mb-2">
                  Scottish Academy, Parbhani, MH
                </h2>
                <p className="text-white mb-2 font-semibold">
                  Secondary School
                </p>
                <p className="text-white">Percentage: 96.2%</p>
                <p className="text-white">Jun 2008 - Jun 2019</p>
              </div>
            </div>
          </article>
        </section>

        {/* Volunteering */}
        <section aria-labelledby="volunteering-section" className="mb-12">
          <h1 id="volunteering-section" className="text-4xl text-white mb-4 text-center md:text-start">Volunteering</h1>
          
          <article className="bg-cardBackground p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl">
            <div className="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-reverse md:space-x-4 space-y-4 md:space-y-0">
              <img src={logo3} alt="National Service Scheme logo" className="w-32 h-32 object-contain mx-auto md:mx-0" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl text-accent mb-2">
                  National Service Scheme (NSS)
                </h2>
                <p className="text-white mb-2 font-semibold">
                  Senior Volunteer
                </p>
                <p className="text-white">Jun 2022 - Mar 2023</p>
              </div>
            </div>
          </article>
          
          <article className="bg-cardBackground p-6 rounded-lg shadow-lg transition-transform transform hover:scale-[1.02] hover:shadow-xl mt-6">
            <div className="flex flex-col md:flex-row-reverse items-center space-x-0 md:space-x-reverse md:space-x-4 space-y-4 md:space-y-0">
              <img src={logo3} alt="National Service Scheme logo" className="w-32 h-32 object-contain mx-auto md:mx-0" />
              <div className="flex-1 text-center md:text-left">
                <h2 className="text-2xl text-accent mb-2">
                  National Service Scheme (NSS)
                </h2>
                <p className="text-white mb-2 font-semibold">
                  Junior Volunteer
                </p>
                <p className="text-white">Jun 2021 - Jun 2022</p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Education;
