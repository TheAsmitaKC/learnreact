import React from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="navbar-main">
      <div className="left-nav">Logo</div>
      <ul className="middle-nav">
        <li> List</li>
        <li>Filter</li>
        <li>Pagination</li>
      </ul>
      <div className="right-nav">
        {" "}
        <Link to="/login">Login/Register</Link>
      </div>
    </div>
  );
};

export default navbar;
