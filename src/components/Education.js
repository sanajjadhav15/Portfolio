import React from "react";
import { FaGraduationCap, FaAward, FaCalendarAlt, FaUniversity, FaHandsHelping } from "react-icons/fa";
import logo from "../utils/somaiya-pic.jpg";
import logo2 from "../utils/scottish-pic.png";
import logo3 from "../utils/nss-pic.png";

function Education() {
  return (
    <main className="min-h-screen bg-primary p-2 sm:p-4 -mx-2 sm:-mx-4 -my-2 sm:-my-5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-data opacity-5"></div>
      <div className="absolute top-10 right-4 sm:top-20 sm:right-20 w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 bg-tertiary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-10 left-4 sm:bottom-20 sm:left-20 w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-4">
            Educational <span className="text-accent">Journey</span>
          </h1>
          <p className="text-textSecondary text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            A comprehensive academic journey focused on Information Technology and Data Analytics, 
            combined with leadership and community service through volunteer work.
          </p>
        </div>

        {/* Education Section */}
        <section aria-labelledby="education-section" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-secondary flex items-center justify-center">
              <FaGraduationCap className="text-white text-lg" />
            </div>
            <h2 id="education-section" className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Education</h2>
          </div>
          
          <article className="group relative bg-gradient-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02] mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 p-1 shadow-lg">
                  <img src={logo} alt="K. J. Somaiya Institute of Information Technology logo" className="w-full h-full object-contain rounded-xl bg-white p-2" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <FaUniversity className="text-white text-sm" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                      K. J. Somaiya Institute of Technology
                    </h3>
                    <p className="text-textSecondary text-sm mb-2 sm:mb-1">Mumbai, Maharashtra</p>
                    {/* Mobile: Show CGPA and dates below location */}
                    <div className="block sm:hidden space-y-2">
                      <div className="flex items-center gap-2 text-success font-semibold">
                        <FaAward className="text-sm" />
                        <span>CGPA: 9.0</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>Dec 2021 - May 2025</span>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: Show CGPA and dates on the right */}
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center gap-2 text-success font-semibold mb-1">
                      <FaAward className="text-sm" />
                      <span>CGPA: 9.0</span>
                    </div>
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <FaCalendarAlt className="text-xs" />
                      <span>Dec 2021 - May 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-white text-lg font-semibold mb-2">
                    Bachelor of Technology in Information Technology
                  </p>
                  <p className="text-textSecondary leading-relaxed">
                    Comprehensive program covering software development, data structures, algorithms, database management, 
                    and modern technologies. Specialized in data analytics and machine learning applications.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                    Information Technology
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-accent/20 to-secondary/20 text-accent text-sm rounded-full border border-accent/30">
                    Data Analytics
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm rounded-full border border-green-400/30">
                    9.0 CGPA
                  </span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </article>
          
          <article className="group relative bg-gradient-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02] mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 p-1 shadow-lg">
                  <div className="w-full h-full rounded-xl bg-gradient-to-br from-purple-100 to-pink-100 flex items-center justify-center">
                    <FaGraduationCap className="text-purple-600 text-2xl" />
                  </div>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <FaAward className="text-white text-sm" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                      Late Rangnathrao Kaldate Guruji School
                    </h3>
                    <p className="text-textSecondary text-sm mb-2 sm:mb-1">Parbhani, Maharashtra</p>
                    {/* Mobile: Show percentage and dates below location */}
                    <div className="block sm:hidden space-y-2">
                      <div className="flex items-center gap-2 text-success font-semibold">
                        <FaAward className="text-sm" />
                        <span>97.8%</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>Jun 2019 - Jun 2021</span>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: Show percentage and dates on the right */}
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center gap-2 text-success font-semibold mb-1">
                      <FaAward className="text-sm" />
                      <span>97.8%</span>
                    </div>
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <FaCalendarAlt className="text-xs" />
                      <span>Jun 2019 - Jun 2021</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-white text-lg font-semibold mb-2">
                    Higher Secondary School Certificate (HSC)
                  </p>
                  <p className="text-textSecondary leading-relaxed">
                    Completed higher secondary education with Science stream, achieving exceptional academic performance. 
                    Focused on Mathematics, Physics, Chemistry, and Computer Science fundamentals.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-purple-300 text-sm rounded-full border border-purple-400/30">
                    Science Stream
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-success/20 to-green-500/20 text-success text-sm rounded-full border border-success/30">
                    Top Performer
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-warning/20 to-orange-500/20 text-warning text-sm rounded-full border border-warning/30">
                    97.8% Score
                  </span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </article>
          
          <article className="group relative bg-gradient-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02] mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 p-1 shadow-lg">
                  <img
                    src={logo2}
                    alt="Scottish Academy logo"
                    className="w-full h-full object-contain rounded-xl bg-white p-2"
                  />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <FaGraduationCap className="text-white text-sm" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                      Scottish Academy
                    </h3>
                    <p className="text-textSecondary text-sm mb-2 sm:mb-1">Parbhani, Maharashtra</p>
                    {/* Mobile: Show percentage and dates below location */}
                    <div className="block sm:hidden space-y-2">
                      <div className="flex items-center gap-2 text-success font-semibold">
                        <FaAward className="text-sm" />
                        <span>96.2%</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>Jun 2008 - Jun 2019</span>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: Show percentage and dates on the right */}
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center gap-2 text-success font-semibold mb-1">
                      <FaAward className="text-sm" />
                      <span>96.2%</span>
                    </div>
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <FaCalendarAlt className="text-xs" />
                      <span>Jun 2008 - Jun 2019</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-white text-lg font-semibold mb-2">
                    Secondary School Certificate (SSC)
                  </p>
                  <p className="text-textSecondary leading-relaxed">
                    Foundation years of academic excellence with comprehensive education in core subjects. 
                    Developed strong analytical and problem-solving skills that formed the basis for future technical education.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm rounded-full border border-green-400/30">
                    Secondary Education
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-success/20 to-green-500/20 text-success text-sm rounded-full border border-success/30">
                    Excellence Award
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                    Foundation Years
                  </span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-green-500 to-teal-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </article>
        </section>

        {/* Volunteering Section */}
        <section aria-labelledby="volunteering-section" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center">
              <FaHandsHelping className="text-white text-lg" />
            </div>
            <h2 id="volunteering-section" className="text-xl sm:text-2xl md:text-3xl font-bold text-white">Volunteering & Community Service</h2>
          </div>
          
          <article className="group relative bg-gradient-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02] mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 p-1 shadow-lg">
                  <img src={logo3} alt="National Service Scheme logo" className="w-full h-full object-contain rounded-xl bg-white p-2" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <FaHandsHelping className="text-white text-sm" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                      National Service Scheme (NSS)
                    </h3>
                    <p className="text-textSecondary text-sm mb-2 sm:mb-1">Community Service Organization</p>
                    {/* Mobile: Show role and dates below location */}
                    <div className="block sm:hidden space-y-2">
                      <div className="flex items-center gap-2 text-warning font-semibold">
                        <FaAward className="text-sm" />
                        <span>Senior Volunteer</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>Jun 2022 - Mar 2023</span>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: Show role and dates on the right */}
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center gap-2 text-warning font-semibold mb-1">
                      <FaAward className="text-sm" />
                      <span>Senior Volunteer</span>
                    </div>
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <FaCalendarAlt className="text-xs" />
                      <span>Jun 2022 - Mar 2023</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-white text-lg font-semibold mb-2">
                    Senior Volunteer & Team Leader
                  </p>
                  <p className="text-textSecondary leading-relaxed">
                    Led community service initiatives and coordinated volunteer teams for social welfare projects. 
                    Organized educational workshops, health awareness camps, and environmental conservation activities 
                    impacting over 500 community members.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-orange-500/20 to-red-500/20 text-orange-300 text-sm rounded-full border border-orange-400/30">
                    Leadership
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 text-green-300 text-sm rounded-full border border-green-400/30">
                    Community Impact
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-blue-300 text-sm rounded-full border border-blue-400/30">
                    Team Management
                  </span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500 to-red-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </article>
          
          <article className="group relative bg-gradient-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02] mb-8">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="relative">
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 p-1 shadow-lg">
                  <img src={logo3} alt="National Service Scheme logo" className="w-full h-full object-contain rounded-xl bg-white p-2" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                  <FaHandsHelping className="text-white text-sm" />
                </div>
              </div>
              
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                  <div className="mb-3 sm:mb-0">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                      National Service Scheme (NSS)
                    </h3>
                    <p className="text-textSecondary text-sm mb-2 sm:mb-1">Community Service Organization</p>
                    {/* Mobile: Show role and dates below location */}
                    <div className="block sm:hidden space-y-2">
                      <div className="flex items-center gap-2 text-purple-300 font-semibold">
                        <FaHandsHelping className="text-sm" />
                        <span>Junior Volunteer</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>Jun 2021 - Jun 2022</span>
                      </div>
                    </div>
                  </div>
                  {/* Desktop: Show role and dates on the right */}
                  <div className="hidden sm:block text-right">
                    <div className="flex items-center gap-2 text-purple-300 font-semibold mb-1">
                      <FaHandsHelping className="text-sm" />
                      <span>Junior Volunteer</span>
                    </div>
                    <div className="flex items-center gap-2 text-textSecondary text-sm">
                      <FaCalendarAlt className="text-xs" />
                      <span>Jun 2021 - Jun 2022</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-4">
                  <p className="text-white text-lg font-semibold mb-2">
                    Junior Volunteer & Community Contributor
                  </p>
                  <p className="text-textSecondary leading-relaxed">
                    Actively participated in community development projects and social awareness campaigns. 
                    Contributed to blood donation drives, cleanliness initiatives, and educational support programs 
                    for underprivileged children.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 text-sm rounded-full border border-indigo-400/30">
                    Community Service
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-pink-500/20 to-red-500/20 text-pink-300 text-sm rounded-full border border-pink-400/30">
                    Social Impact
                  </span>
                  <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 text-sm rounded-full border border-cyan-400/30">
                    Foundation Year
                  </span>
                </div>
              </div>
            </div>
            
            {/* Hover Gradient Border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-indigo-500 to-purple-500 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"></div>
          </article>
        </section>
      </div>
    </main>
  );
}

export default Education;
