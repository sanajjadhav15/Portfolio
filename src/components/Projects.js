import React, { useState } from "react";
import { 
  FaGithub, 
  FaChartLine, 
  FaDatabase, 
  FaBrain, 
  FaRobot, 
  FaSearch,
  FaArrowRight,
  FaCode,
  FaChartBar,
  FaCog,
  FaTasks,
  FaPaw,
  FaUsers
} from "react-icons/fa";
import { 
  SiPython, 
  SiTableau, 
  SiPowerbi, 
  SiTensorflow, 
  SiScikitlearn,
  SiStreamlit,
  SiPostgresql,
  SiMysql,
  SiReact,
  SiFirebase
} from "react-icons/si";

function Projects() {
  const [activeFilter, setActiveFilter] = useState("all");
  
  const projects = [
    {
      id: 1,
      title: "AutoEDA - Automated Exploratory Data Analysis App",
      description: "Developed a Streamlit-based Python application that automates data preprocessing and exploratory data analysis from user-uploaded datasets. Utilized Pandas, NumPy, and Plotly to programmatically generate key statistics, data distributions, and smart visualizations. Designed the tool to generate exportable reports with actionable insights, significantly reducing manual analysis time.",
      technologies: ["Python", "Streamlit", "Pandas", "NumPy", "Plotly"],
      category: "analytics",
      impact: "Significantly reduced manual analysis time",
      githubLink: "https://github.com/sanajjadhav15/AutoEDA",
      icon: <FaRobot />,
      gradient: "from-blue-500 to-purple-500",
      techIcons: [<SiPython />, <SiStreamlit />, <FaChartLine />]
    },
    {
      id: 2,
      title: "Streaming Service Insights - Netflix Dashboard",
      description: "Designed and developed an interactive KPI dashboard using Streamlit and Netflix dataset to track user engagement trends, content consumption patterns, and retention metrics. Processed and analyzed large-scale data with Pandas and NumPy to identify viewing trends and user behavior. Designed compelling visualizations with Plotly and Matplotlib to present key metrics, such as content consumption by genre, for data-driven recommendations.",
      technologies: ["Streamlit", "Python", "Pandas", "NumPy", "Plotly", "Matplotlib"],
      category: "dashboard",
      impact: "Enhanced content consumption insights",
      githubLink: "https://github.com/sanajjadhav15/Streaming-Service-Insights",
      icon: <FaChartLine />,
      gradient: "from-red-500 to-pink-500",
      techIcons: [<SiStreamlit />, <SiPython />, <FaChartBar />]
    },
    {
      id: 3,
      title: "Advanced Excel Call Centre Dashboard",
      description: "Built an interactive Excel dashboard integrating call details and customer demographics via Data Model, enabling dynamic KPI tracking and detailed drill-down analysis. Applied Power Query for automated data cleaning, transformation, and standardization to ensure accuracy and consistency across 1,000 call records. Developed business intelligence visuals (Pivot Tables, Charts, Slicers) to analyze call trends, representative performance, customer satisfaction, and revenue patterns for decision-making.",
      technologies: ["Excel", "Power Query", "Pivot Tables", "Data Model", "Charts"],
      category: "dashboard",
      impact: "Improved call center performance analysis",
      githubLink: "https://github.com/sanajjadhav15/Excel-call-centre-dashboard",
      icon: <FaChartBar />,
      gradient: "from-green-500 to-teal-500",
      techIcons: [<FaDatabase />, <FaChartBar />, <FaCog />]
    },
    {
      id: 4,
      title: "To Do",
      description: "A simple and responsive todo application built with React and Firebase. It features user authentication, responsive design, task management (add, complete, delete), and secure data storage in Firebase Firestore. Users can easily manage their tasks with a clean and intuitive interface.",
      technologies: ["React", "Firebase"],
      category: "web",
      impact: "Streamlined task management",
      githubLink: "https://github.com/sanajjadhav15/To-Do",
      icon: <FaTasks />,
      gradient: "from-yellow-500 to-orange-500",
      techIcons: [<SiReact />, <SiFirebase />, <FaCode />]
    },
    {
      id: 5,
      title: "Pet Adoption",
      description: "A responsive React-based application for pet adoption. Users can search for pets by location, type, and breed, view detailed profiles with a carousel of images, and initiate the adoption process through an intuitive modal interface. Perfect for finding and adopting pets in a user-friendly environment.",
      technologies: ["React"],
      category: "web",
      impact: "Enhanced pet adoption experience",
      githubLink: "https://github.com/sanajjadhav15/Pet-Adoption",
      icon: <FaPaw />,
      gradient: "from-pink-500 to-rose-500",
      techIcons: [<SiReact />, <FaSearch />, <FaUsers />]
    },
    {
      id: 6,
      title: "RoboFriends",
      description: "A React app for searching and viewing unique robot cards. It uses Robohash to generate custom robot images. New robots can be added via Google Form, automatically updating the app with personalized cards. Explore and interact with various robot friends easily!",
      technologies: ["React", "React Bootstrap", "Robohash"],
      category: "web",
      impact: "Interactive robot card experience",
      githubLink: "https://github.com/sanajjadhav15/Robofriends",
      icon: <FaRobot />,
      gradient: "from-cyan-500 to-blue-500",
      techIcons: [<SiReact />, <FaRobot />, <FaUsers />]
    },
  ];

  const categories = [
    { id: "all", label: "All Projects", count: projects.length },
    { id: "dashboard", label: "Dashboards", count: projects.filter(p => p.category === "dashboard").length },
    { id: "analytics", label: "Analytics", count: projects.filter(p => p.category === "analytics").length },
    { id: "web", label: "Web Apps", count: projects.filter(p => p.category === "web").length },
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

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
            My <span className="text-accent">Projects</span>
          </h1>
          <p className="text-textSecondary text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Discover my diverse portfolio featuring data analytics, business intelligence, and web development projects. 
            From interactive dashboards and automated analysis tools to modern React applications, showcasing solutions that drive real impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-3 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-accent to-secondary text-white shadow-glow"
                  : "bg-cardBackground/50 text-textSecondary hover:text-white border border-accent/20 hover:border-accent/40"
              }`}
            >
              {category.label}
              <span className="ml-2 text-sm opacity-75">({category.count})</span>
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-gradient-card rounded-2xl p-6 border border-accent/20 hover:border-accent/40 shadow-card hover:shadow-glow transition-all duration-500 backdrop-blur-sm transform hover:scale-[1.02]"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Icon & Title */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${project.gradient} flex items-center justify-center text-white text-xl shadow-lg`}>
                    {project.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white group-hover:text-accent transition-colors duration-300">
                  {project.title}
                    </h3>
                    <p className="text-success text-sm font-medium">{project.impact}</p>
                  </div>
                </div>
                
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-textSecondary hover:text-accent transition-colors duration-300 transform hover:scale-110"
                >
                  <FaGithub size={24} />
                </a>
              </div>

              {/* Description */}
              <p className="text-textSecondary mb-6 leading-relaxed">
                  {project.description}
                </p>

              {/* Tech Stack */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-sm font-semibold text-accent">Tech Stack:</span>
                  <div className="flex gap-2">
                    {project.techIcons.map((icon, idx) => (
                      <div key={idx} className="text-accent text-lg">
                        {icon}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                    <span
                        key={idx}
                      className="px-3 py-1 bg-gradient-to-r from-accent/20 to-secondary/20 text-accent text-sm rounded-full border border-accent/30"
                      >
                          {tech}
                        </span>
                    ))}
                </div>
              </div>

              {/* View Project Link */}
              <div className="flex justify-end">
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                  className="group/link flex items-center gap-2 text-accent hover:text-white font-semibold transition-all duration-300 transform hover:scale-105"
                >
                <span>View Project</span>
                  <FaArrowRight className="transform group-hover/link:translate-x-1 transition-transform duration-300" />
                </a>
              </div>

              {/* Hover Gradient Border */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-card p-6 rounded-xl border border-accent/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-accent mb-2">6</div>
              <div className="text-textSecondary">Projects Completed</div>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl border border-accent/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-success mb-2">100%</div>
              <div className="text-textSecondary">Modern Solutions</div>
            </div>
            <div className="bg-gradient-card p-6 rounded-xl border border-accent/20 backdrop-blur-sm">
              <div className="text-3xl font-bold text-warning mb-2">15+</div>
              <div className="text-textSecondary">Technologies Used</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Projects;