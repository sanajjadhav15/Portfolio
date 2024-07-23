import React from "react";
import { IoCode } from "react-icons/io5";
import todo from "../utils/todo-pic.png";
import pet from "../utils/pet-pic.png";
import robo from "../utils/robo-pic.png";
import shop from "../utils/shopping-pic.png";
import tictactoe from "../utils/tictactoe-pic.png";
import calci from "../utils/calculator-pic.png";

function Projects() {
  const projects = [
    {
      title: "To Do",
      description:
        "A simple and responsive todo application built with React and Firebase. It features user authentication, responsive design, task management (add, complete, delete), and secure data storage in Firebase Firestore. Users can easily manage their tasks with a clean and intuitive interface.",
      technologies: ["React", "Firebase"],
      imageUrl: todo,
      githubLink: "https://github.com/sanajjadhav15/To-Do",
    },
    {
      title: "Pet Adoption",
      description:
        "A responsive React-based application for pet adoption. Users can search for pets by location, type, and breed, view detailed profiles with a carousel of images, and initiate the adoption process through an intuitive modal interface. Perfect for finding and adopting pets in a user-friendly environment.",
      technologies: ["React"],
      imageUrl: pet,
      githubLink: "https://github.com/sanajjadhav15/Pet-Adoption",
    },
    {
      title: "RoboFriends",
      description:
        "A React app for searching and viewing unique robot cards. It uses Robohash to generate custom robot images. New robots can be added via Google Form, automatically updating the app with personalized cards. Explore and interact with various robot friends easily!",
      technologies: ["React", "React Bootstrap", "Robohash"],
      imageUrl: robo,
      githubLink: "https://github.com/sanajjadhav15/Robofriends",
    },
    {
      title: "E Commerce",
      description:
        "A React-based shopping cart app that fetches product data from an API. Users can add items to their cart, adjust quantities, and switch between light and dark themes. The app provides a user-friendly interface to view total items and prices, and allows users to manage their cart efficiently.",
      technologies: ["React", "Tailwind CSS", "Context API"],
      imageUrl: shop,
      githubLink: "https://github.com/sanajjadhav15/E-commerce",
    },
    {
      title: "Tic Tac Toe",
      description:
        "A classic Tic Tac Toe game implemented with React. Players take turns to mark spaces on a 3x3 grid, aiming to align three marks in a row to win. If the grid fills without a winner, the game ends in a draw.",
      technologies: ["React", "HTML", "CSS"],
      imageUrl: tictactoe,
      githubLink: "https://github.com/sanajjadhav15/Tic-Tac-Toe",
    },
    {
      title: "Calculator",
      description:
        "A simple web-based calculator for basic arithmetic operations. It includes a clear button to reset input, a backspace button to remove the last digit, and support for decimal numbers. The design is responsive, utilizing Bootstrap.",
      technologies: ["HTML", "CSS", "Bootstrap", "JavaScript"],
      imageUrl: calci,
      githubLink: "https://github.com/sanajjadhav15/Calculator",
    },
  ];

  const colors = ["#FF204E", "#687EFF", "#F8DE22", "#1EAE98", "#D67BFF"];

  return (
    <main className="min-h-screen bg-primary p-4 -mx-4 -my-5">
      <div className="container mx-auto">
        <h1 className="text-4xl text-white mb-4 text-center">My Projects</h1>
        <p className="text-white text-base mb-8 text-center">
          Here are some of the projects I have worked on, showcasing my skills in various technologies and my passion for creating impactful solutions.
        </p>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 m-8">
          {projects.map((project, index) => (
            <article
              key={index}
              className="relative bg-cardBackground rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-[1.02]"
            >
              <img
                src={project.imageUrl}
                alt={`${project.title} project`}
                className="w-full h-48 object-contain"
              />
              <div className="p-6">
                <h2 className="text-2xl font-semibold mb-2 text-accent text-center md:text-start">
                  {project.title}
                </h2>
                <p className="mb-3 text-white text-center md:text-start">
                  {project.description}
                </p>
                <div className="text-sm font-semibold text-white">
                  <ul className="list-disc list-inside flex flex-wrap gap-4">
                    {project.technologies.map((tech, idx) => (
                      <li
                        key={idx}
                        className="flex items-center text-4xl"
                        style={{ color: colors[idx % colors.length] }}
                      >
                        <span className="mr-2">&#8226;</span>
                        <span className="mr-1 text-white text-sm mt-1">
                          {tech}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute inset-0 flex items-center justify-center bg-second bg-opacity-85 text-white text-lg font-semibold opacity-0 hover:opacity-100 transition-opacity duration-300"
                style={{
                  borderRadius: "0 0 0 0",
                  height: "100%",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <IoCode className="mr-2 text-2xl" />
                <span>View Project</span>
              </a>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}

export default Projects;
