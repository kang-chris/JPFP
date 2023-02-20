import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div id="navbarMain">
      <h1>Welcome!</h1>
      <div id='navItems'>
        <Link to={`/campuses`} style={{ textDecoration: 'none' }}>
        <button className="bigButton">View All Campuses</button>
        </Link>
        <Link to={`/students`} style={{ textDecoration: 'none' }}>
        <button className="bigButton">View All Students</button>
        </Link>
        </div>
      </div>
</>
  );
};

export default Navbar;