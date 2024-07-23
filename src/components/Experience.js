import React from 'react';
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
  },
  {
    title: 'Geofencing Internship',
    company: 'Godavari Biorefineries Limited',
    img: geo,
    duration: 'Jun 2023 - July 2023',
    description: 'During my internship at Godavari Biorefineries Limited, I specialized in Geofencing technology for agricultural applications. Using Google Earth, I plotted and visualized agricultural plots, enhancing geospatial analysis and crop tracking. MS Excel was employed for managing and analyzing data, generating detailed reports to support decision-making. This experience refined my skills in geofencing and technology integration, leading to optimized geofencing strategies. My work improved operational efficiency and resource management, showcasing my proficiency in geospatial tools and data analysis.',
  }
];

function Experience() {
  return (
    <main className="min-h-screen bg-primary p-6 flex flex-col items-center -mx-4 -my-5">
      <h1 className="text-4xl text-white mb-4">Experiences</h1>
      <p className="text-white text-center mb-8">
        I have worked in various roles in the tech industry. Here are some of my experiences.
      </p>
      <section className="flex flex-col items-start space-y-6">
        {experiences.map((experience, index) => (
          <article
            key={index}
            className="bg-cardBackground border-b-[1.5px] border-accent p-6 rounded-lg shadow-lg hover:scale-[1.02] hover:shadow-2xl hover:bg-second transition-all duration-300 w-17rem md:w-[1200px] flex flex-col items-start text-end md:text-start"
          >
            <div className="flex items-center mb-4">
              <img src={experience.img} alt={`${experience.company} logo`} className="md:w-16 md:h-16 w-24 h-24 mr-4" />
              <div>
                <h2 className="text-xl font-semibold text-white">{experience.title}</h2>
                <p className="text-accent">{experience.company}</p>
                <p className="text-gray-400">{experience.duration}</p>
              </div>
            </div>
            <p className="text-white text-center md:text-start">{experience.description}</p>
          </article>
        ))}
      </section>
    </main>
  );
}

export default Experience;
