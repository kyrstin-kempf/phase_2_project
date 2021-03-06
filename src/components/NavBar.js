import React from "react";
import { NavLink } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import '../styles.css';

function NavBar() {

  return (
      <nav className="nav-menu">
        <NavLink end to="/"><AiFillHome/></NavLink>
        <h1 className="web-title">Greek God Card Generator</h1>
        <NavLink end to="/gods/new" className='add-god'>Create God</NavLink>
      </nav>
  );
}

export default NavBar;
