import React from "react";

const skills = ["Wordpress","HTML","CSS","JavaScript","PHP", "MYSQL","React","Git","Tailwind","SCSS"];

const Skills = () => {
  return <section id="skills" className="mb-28 scroll-m-28">
    <div className="container">
      <h2 className="mb-6 text-center">My skills</h2>
      <ul className="flex flex-wrap justify-center gap-2">
        {
          skills.map(skill => (
            <li className="bg-white px-5 py-3 rounded-xl border border-black/[0.1]">{skill}</li>
          ))
        }
      </ul>
    </div>
  </section>;
};

export default Skills;
