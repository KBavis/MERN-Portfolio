import "../App.css";
import OwlCarousel from "react-owl-carousel";
import "../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";
import shellLogo from "../images/bash-logo.jpg";
import basic_programming from "../images/basic_programming.jpg";
import html_logo from "../images/html_logo.ico";
import tensor from "../images/tensorflow-logo.webp";
import hospital from "../images/hospital.jpg";
import discord from "../images/discord.png";
import Card from "../components/Card";

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
  return (
    <div className="projects" id="projects">
      <div className="projects-content">
        <h2 className="title">Projects</h2>
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
          <Card
            image={shellLogo}
            link="https://github.com/KBavis/KellenBavisProjects/tree/main/Shell"
            name="Linux Shell"
            description="A command-line application written in C that's main
                functionality is to replicate a Linux Shell. The program
                effectively implements concepts of I/O redirection, parsing, and
                the synchronization of concurrent processes."
          ></Card>
          <Card
            image={html_logo}
            link=""
            name="Kellen Bavis's Portfolio"
            description="A web application created to display my past projects, skills,
                and contact information. Incorperates a vast number of
                technologies and languages such as ReactJS, CSS, ExpressJS,
                NodeJS, Docker, Caddy, and AWS."
          ></Card>
          <Card
            image={basic_programming}
            link="https://github.com/KBavis/KellenBavisProjects/tree/main/Interpreter"
            name="Interpreter"
            description="A command-line program written in Java that is designed to
                execute code written in the programming language BASIC. Utilizes
                the process of lexical analysis, parsing, semantic analysis,
                optimization, and code generation to swiftly execute
                instructions."
          ></Card>
          <Card
            image={tensor}
            link="https://github.com/KBavis/KellenBavisProjects/tree/main/Handwriting"
            name="Handwriting Detection"
            description="A command-line application written in Python that filters and
                normalizes a dataset containing 60,000 images of handwritten
                numerics values. This application utilizes TensorFlow to train a
                neural network that predicts the likelihood of given image being
                a specific value with 98% accuracy."
          ></Card>
          <Card
            image={hospital}
            link="https://github.com/KBavis/KellenBavisProjects/tree/main/IntelligentHospital"
            name="Intelligent Hospital"
            description="A command-line application written in Java that utilizes a MySQL
                Database and GUI to serve as an intermediate between patient and
                doctor functionality within a hospital. Requires user
                authentication through unique login and password."
          ></Card>
          <Card
            image={discord}
            link="https://github.com/KBavis/KellenBavisProjects/tree/main/DiscordBot"
            name="Discord Bot"
            description="A full-stack application that utilizes ReactJS, DiscordJS,
                MongoDB, and ExpressJS to allow Discord users to engage in
                interactive minigames. The user statstics generated from these
                minigames are then stored in our database and displayed via our
                front-end."
          ></Card>
        </OwlCarousel>
      </div>
    </div>
  );
};

export default Projects;
