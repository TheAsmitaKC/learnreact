import React from "react";
import "../Navbar/navbar.css";
import { Link } from "react-router-dom";
const navbar = () => {
  return (
    <div className="navbar-main">
      <div className="left-nav">Logo</div>
      <ul className="middle-nav">
        <li>
          {" "}
          <Link to="/home">List</Link>
        </li>
        <li>
          {" "}
          <Link to="/filter">Filter</Link>
        </li>
        <li>
          <Link to="/pagination">Pagination</Link>
        </li>
      </ul>
      <div className="right-nav">
        {" "}
        <Link to="/login">Login/Register</Link>
      </div>
    </div>
  );
};

export default navbar;
