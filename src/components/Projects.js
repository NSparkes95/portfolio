// Description: This page contains the Projects component which displays a list of projects.
// Name: Nicole Sparkes
// Date: Dec 8,2024

import React from "react";
import "../styles/Projects.css";

function Projects() {
    const projects = [
      {
        title: "Portfolio Website",
        description: "A personal portfolio showcasing my work.",
        demo: "#",
        github: "https://github.com/NSparkes95/portfolio",
      },
      {
        title: "Recipe Website",
        description: "An online shopping platform with payment integration.",
        demo: "#",
        github: "https://github.com/NSparkes95/final_sprint_recipe_website",
      },
    ];
  
    return (
        <section id="projects" className="projects-section">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div key={index} className="project-card">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-links">
                            {project.demo !== "#" && (
                                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                                Live Demo
                              </a>
                            )} 
                            <a href={project.github} target={"_blank"} rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
  }
  
  export default Projects;