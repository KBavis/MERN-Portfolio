import "../styles/App.css";
import {
  FaRegCopyright,
  FaLinkedin,
  FaGithub,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <span className="copyright">
        Created By <a href="#">Kellen Bavis</a> |{" "}
        <span>
          <FaRegCopyright></FaRegCopyright>
        </span>{" "}
        2023 All rights reserved.
      </span>
      <span className="socials">
        <a href="https://github.com/KBavis" target="_blank">
          <FaGithub className="social"></FaGithub>
        </a>
        <a href="https://www.instagram.com/kellenbav/" target="_blank">
          <FaInstagramSquare className="social"></FaInstagramSquare>
        </a>{" "}
        <a
          href="https://www.linkedin.com/in/kellen-bavis-8b8108236/"
          target="_blank"
        >
          <FaLinkedin className="social"></FaLinkedin>
        </a>
      </span>
    </footer>
  );
};

export default Footer;
