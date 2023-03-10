import "../styles/App.css";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import React, { useEffect, useState } from "react";
import shellLogo from "../images/bash-logo.jpg";
import basic_programming from "../images/basic_programming.jpg";
import html_logo from "../images/html_logo.ico";
import tensor from "../images/tensorflow-logo.webp";
import hospital from "../images/hospital.jpg";
import discord from "../images/discord.png";
import Card from "../components/Card";
import axios from "axios";

const options = {
  0: {
    items: 1,
    nav: true,
  },
  600: {
    items: 2,
    nav: true,
  },
  1000: {
    items: 3,
    nav: true,
  },
};

const Projects = () => {
  // const [projects, setProjects] = useState(null);

  // useEffect(() => {
  //   const fetchProjects = async () => {
  //     const response = await fetch("/projects");
  //     if (response == null) {
  //       console.log("Not getting any data from Mongo!!!!!!!!!!!!!!!!!");
  //     }
  //     const json = await response.json();

  //     if (response.ok) {
  //       setProjects(json);
  //     }
  //   };

  //   fetchProjects();
  // }, []);

  const [projects, setProjects] = useState([]);
  // orginal link was `http://localhost:4000/projects`
  //`http://ec2-54-89-169-174.compute-1.amazonaws.com:4000/projects`
  // `http://ec2-54-89-169-174.compute-1.amazonaws.com/projects`
  // `http://54.89.169.174/projects`
  useEffect(() => {
    axios
      .get(`https://code.kellenbavis.xyz/projects`)
      .then((res) => {
        console.log(res);
        setProjects(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <h2 className="title">Projects</h2>
        <div className="sub-title">
          Below are a list of some of the projects that I have completed over
          the years. If interested, click the project name or image to view the
          source code!
        </div>
        {projects.length && (
          <OwlCarousel
            className="carousel owl-carousel"
            loop={true}
            margin={20}
            autoplay={true}
            autoplayTimeout={3000}
            autoplaySpeed={1000}
            nav={true}
            autoplayHoverPause={true}
            responsive={options}
          >
            {projects.map((project) => (
              <Card key={project._id} project={project}></Card>
            ))}
          </OwlCarousel>
        )}
      </div>
    </div>
  );
};

export default Projects;
