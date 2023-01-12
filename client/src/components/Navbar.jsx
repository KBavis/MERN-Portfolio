import "bootstrap/dist/css/bootstrap.css";
import { Navbar, Row, Col, Nav, NavbarBrand } from "react-bootstrap";
import "../App.css";
import logo from "../images/logo_free-file (1).png";
import React, { useState, useEffect } from "react";

const NavBar = () => {
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
      variant="light"
      href="#top"
    >
      <Navbar.Brand className="logo">
        <img src={logo} width="50px" height="50px" margin="30px"></img>
      </Navbar.Brand>
      <h1>
        Kellen Bavis's <span>Portfolio</span>
      </h1>
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
    </Navbar>
  );
};

export default NavBar;
