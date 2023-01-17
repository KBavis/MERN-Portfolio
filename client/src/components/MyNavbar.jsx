import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../images/logo_free-file (1).png";
import React, { useState } from "react";
import "../styles/TopNavbar.css";

const MyNavbar = () => {
  const [state, setState] = useState(false);

  const changeColorOnScroll = () => {
    const scrollValue = document.documentElement.scrollTop;
    if (scrollValue > 40) {
      setState(true);
    } else {
      setState(false);
    }
  };
  window.addEventListener("scroll", changeColorOnScroll);

  return (
    <Navbar
      className={state ? "sticky sticky-top" : "color-nav sticky-top"}
      expand="lg"
    >
      <Navbar.Brand>
        <img src={logo} width="50px" height="50px" margin="30px"></img>
      </Navbar.Brand>
      <h1 id="title-resume">
        Kellen Bavis's <span>Portfolio</span>
      </h1>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="#home" className="nav-item">
            Home
          </Nav.Link>
          <Nav.Link href="#about" className="nav-item">
            About
          </Nav.Link>
          <Nav.Link href="#projects" className="nav-item">
            Projects
          </Nav.Link>
          <Nav.Link href="#contact" className="nav-item">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
