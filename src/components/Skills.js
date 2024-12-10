import React from "react";
import "../styles/Skills.css";

function Skills() {
  const skills = ["React", "JavaScript", "HTML", "CSS", "Node.js"];

  return (
    <section id="skills">
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <span key={index} className="skill">{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;