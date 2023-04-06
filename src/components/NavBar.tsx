import { Link } from "react-router-dom";
import React from "react";
import "./NavBar.css";

const NavBar: React.FC = () => {
  return (
    <header className="nav-wrapper">
      <div className="nav left">Landonline</div>
      <div className="nav right">
        {/* <Link to="/" className="nav-link">
          Home
        </Link> */}
        <Link to="/page1" className="nav-link">
          Page 1
        </Link>
        <Link to="/app1" className="nav-link">
          App 1
        </Link>
        <Link to="/cra" className="nav-link">
          CRA
        </Link>
      </div>
    </header>
  );
};

export default NavBar;
