import React from "react";
import ecotech from "../../assets/ecotech.jpeg";
import logisync from "../../assets/logisync.jpg";
import forgeline from "../../assets/forgeline.jpeg";
import skillup from "../../assets/skillup.jpg";
import voguevibe from "../../assets/voguevibe.jpeg";


const Projects = () => {
  return (
    <section id="projects" className="mb-28 scroll-m-28">
      <div className="container">
        <h2 className="mb-6 text-center">My Projects</h2>
        <div className="container grid gap-y-32 sm:gap-y-20">
        <div className="h-72 bg-slate-100 grid sm:grid-cols-2 p-8 gap-6 rounded-lg">
          <div>
            <h3 className="pb-4">EcoTech</h3>
            <p>
            Landing Page for a startup. Website was created with HTML and CSS, JavaScript. Uploaded on CMS Worpdress to handle content using PHP.
            </p>
          </div>
          <a href={ecotech}>
            <img
              className="projectimg"
              src={ecotech}
              alt=""
            />
          </a>
        </div>
        <div className="h-72 bg-slate-100 grid sm:grid-cols-2 p-8 gap-6 rounded-lg">
          <div>
            <h3 className="pb-4">LogiSync</h3>
            <p>
              Landing page for a logistic company. Website was created using Wordpress builder Elementor.
            </p>
          </div>
          <a href={logisync}>
            <img
              className="projectimg"
              src={logisync}
              alt=""
            />
          </a>
        </div>
        <div className="h-72 bg-slate-100 grid sm:grid-cols-2 p-8 gap-6 rounded-lg">
          <div>
            <h3 className="pb-4">SkillUp</h3>
            <p>
             Online learning and teaching platform-marketplace. Website was created with Wordpress builder Elementor, plugins WooCommerce and Tutor LMS. 
            </p>
          </div>
          <a href={skillup}>
            <img
              className="projectimg"
              src={skillup}
              alt=""
            />
          </a>
        </div>
        <div className="h-72 bg-slate-100 grid sm:grid-cols-2 p-8 gap-6 rounded-lg">
          <div>
            <h3 className="pb-4">forGeline</h3>
            <p>
              Website for a business Metal Construction. Website was created using HTML,CSS,JavaScript. Uploaded to Worpdress using PHP.
            </p>
          </div>
          <a href={forgeline}>
            <img
              className="projectimg"
              src={forgeline}
              alt=""
            />
          </a>
        </div>
        <div className="h-72 bg-slate-100 grid sm:grid-cols-2 p-8 gap-6 rounded-lg">
          <div>
            <h3 className="pb-4">VogueVibe</h3>
            <p>
              Website for a clothing store. Website was created using Wordpress builder Elementor and plugin WooCommece.
            </p>
          </div>
          <a href={voguevibe}>
            <img
              className="projectimg"
              src={voguevibe}
              alt=""
            />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
