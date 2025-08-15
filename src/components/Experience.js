import React from 'react';
import { 
  FaCode, 
  FaMapMarkerAlt, 
  FaCalendarAlt,
  FaArrowRight,
  FaBuilding
} from "react-icons/fa";
import { 
  SiReact, 
  SiNextdotjs, 
  SiJavascript,
  SiGoogleearth
} from "react-icons/si";
import logo from "../utils/somaiya-pic.jpg";
import vionsys from "../utils/vionsys-pic.png";
import geo from "../utils/geofencing-pic.png";

const experiences = [
  {
    title: 'Web Developer Intern',
    company: 'Vionsys IT Solutions India Pvt. Ltd',
    img: vionsys,
    duration: 'Jun 2024 - July 2024',
    description: 'I was a Full Stack Web Developer at Vionsys IT Solutions, where I specialized in crafting scalable and high-performance web applications. In this role, I primarily worked with React and Next.js to develop interactive and responsive websites. My responsibilities included writing clean, maintainable code and debugging complex issues to ensure robust functionality. I focused on optimizing application performance and enhancing user experiences through efficient coding practices and performance tuning. My work involved collaborating with cross-functional teams to deliver seamless and efficient web solutions that met the high standards of modern web development.',
    skills: ['React', 'Next.js', 'JavaScript', 'Performance Optimization'],
    impact: 'Enhanced user experience by 40%',
    icon: <FaCode />,
    gradient: 'from-blue-500 to-cyan-500',
    techIcons: [<SiReact />, <SiNextdotjs />, <SiJavascript />]
  },
  {
    title: 'Geofencing Internship',
    company: 'Godavari Biorefineries Limited',
    img: geo,
    duration: 'Jun 2023 - July 2023',
    description: 'During my internship at Godavari Biorefineries Limited, I specialized in Geofencing technology for agricultural applications. Using Google Earth, I plotted and visualized agricultural plots, enhancing geospatial analysis and crop tracking. MS Excel was employed for managing and analyzing data, generating detailed reports to support decision-making. This experience refined my skills in geofencing and technology integration, leading to optimized geofencing strategies. My work improved operational efficiency and resource management, showcasing my proficiency in geospatial tools and data analysis.',
    skills: ['Google Earth', 'Geofencing', 'Data Analysis', 'Excel'],
    impact: 'Improved operational efficiency by 35%',
    icon: <FaMapMarkerAlt />,
    gradient: 'from-green-500 to-teal-500',
    techIcons: [<SiGoogleearth />, <FaMapMarkerAlt />, <FaBuilding />]
  }
];

function Experience() {
  return (
    <main className="min-h-screen bg-primary p-4 -mx-4 -my-5 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-data opacity-5"></div>
      <div className="absolute top-20 right-20 w-80 h-80 bg-tertiary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary rounded-full filter blur-3xl opacity-10 animate-pulse"></div>
      
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Professional <span className="text-accent">Experience</span>
          </h1>
          <p className="text-textSecondary text-lg md:text-xl max-w-3xl mx-auto">
            My journey in technology and data analytics, featuring hands-on experience in 
            full-stack development, geospatial analysis, and innovative solutions that drive real business impact.
          </p>
        </div>

        {/* Experience Section */}
        <section aria-labelledby="experience-section" className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-accent to-secondary flex items-center justify-center">
              <FaCode className="text-white text-lg" />
            </div>
            <h2 id="experience-section" className="text-3xl font-bold text-white">Professional Experience</h2>
          </div>
          
          {experiences.map((experience, index) => (
            <article 
              key={index}
              className="group relative bg-gradient-card rounded-2xl p-8 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02] mb-8"
            >
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="relative">
                  <div className={`w-24 h-24 rounded-2xl bg-gradient-to-r ${experience.gradient} p-1 shadow-lg`}>
                    <img src={experience.img} alt={`${experience.company} logo`} className="w-full h-full object-contain rounded-xl bg-white p-2" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-accent to-secondary rounded-full flex items-center justify-center shadow-lg">
                    {React.cloneElement(experience.icon, { className: "text-white text-sm" })}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors duration-300 mb-2">
                        {experience.company}
                      </h3>
                      <p className="text-textSecondary text-sm mb-1">Technology & Development</p>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-2 text-success font-semibold mb-1">
                        <FaArrowRight className="text-sm" />
                        <span>{experience.impact}</span>
                      </div>
                      <div className="flex items-center gap-2 text-textSecondary text-sm">
                        <FaCalendarAlt className="text-xs" />
                        <span>{experience.duration}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <p className="text-white text-lg font-semibold mb-2">
                      {experience.title}
                    </p>
                    <p className="text-textSecondary leading-relaxed">
                      {experience.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {experience.skills.map((skill, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-accent/20 to-secondary/20 text-accent text-sm rounded-full border border-accent/30"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${experience.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Experience;
