import React, { useEffect, useState } from "react";
import { Fragment } from "react";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/whatsapp";
import "./App.css";

import htmlicon from "./images/html.webp";
import cssicon from "./images/css.webp";
import jsicon from "./images/js.webp";
import reacticon from "./images/react.webp";

const iconMapping = {
  htmlicon,
  cssicon,
  jsicon,
  reacticon,
};

const App = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/projects.json")
      .then((response) => response.json())
      .then((data) => setProjects(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (

    <Fragment>

      <header className="Header-container">
        <Header />
      </header>
      <div className="Banner-container">
          <Banner />
        </div>


        <div className="project-container-h2">
          <h2>Skills</h2>
        </div>
        <div className="Skill-container">
        <Skills />
        </div>

        <div className="project-container-h2">
          <h2>Projects</h2>
        </div>

      <main className="content">
       

        <div className="project-container">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <div className="h3-container">
                <h3>{project.name}</h3>
              </div>
              <div className="description-h4">
                <h4>Description</h4>
              </div>
              <p>{project.description}</p>

              <div className="language-icons">
                <h4>language used :</h4>

                <div className="icons-container">
                  {project.technologies.map((tech, idx) => (
                    <img
                      key={idx}
                      src={iconMapping[tech]}
                      alt={`img ${idx + 1}`}
                      title={`img ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            </div>
          ))}
        </div>
      </main>


     


      <footer className="Footer-container">
        <Footer />
      </footer>

      <WhatsAppButton />


    </Fragment>
  );
};

export default App;
