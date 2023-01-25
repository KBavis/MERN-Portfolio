import "bootstrap/dist/css/bootstrap.css";
import "../styles/App.css";
import "../styles/Home.css";
import Typed from "react-typed";
import MySidebar from "../components/MySidebar";
import { saveAs } from "file-saver";
import { sidebarClasses } from "react-pro-sidebar";

const textLines = [
  `Developer`,
  `Student`,
  `Innovator`,
  `Designer`,
  `Software Engineer`,
  `Problem Solver`,
];

const downloadResume = () => {
  saveAs(
    "https://kb-resume-bucket.s3.amazonaws.com/Resume-KellenBavis.pdf",
    "KellenBavisResume.pdf"
  );
};

const Home = () => {
  return (
    <div className="home" id="home">
      <div className="home-content">
        <h5 className="text-1">Hi, my name is </h5>
        <h1 className="text-2">Kellen Bavis</h1>
        <h5 className="text-3">
          And I am a{" "}
          <Typed
            className="typing"
            strings={textLines}
            typeSpeed={100}
            backSpeed={60}
            loop={true}
          ></Typed>
        </h5>
        <div className="hire-link">
          <a
            id="hire"
            href="Resume-KellenBavis.pdf"
            download={"KellenBavis-Resume"}
          >
            Download Resume
          </a>
        </div>
        <MySidebar></MySidebar>
      </div>
    </div>
  );
};

export default Home;
