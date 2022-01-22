import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Navbar bg="dark">
        <Navbar.Brand href="#home">
          <img
            src="https://raw.githubusercontent.com/shahzaibkhalid/mern-app-generator/master/static/logo.png"
            width="60"
          
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/profile" className="nav-link">Profile</Link>
        <Link to="/login" className="nav-link">Login</Link>
      </Navbar>
    </div>
  );
};

export default NavBar;
