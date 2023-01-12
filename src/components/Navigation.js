import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navbar shadow-md  ">
      <div className="flex-1">
        <NavLink to="/" className="btn btn-ghost normal-case text-xl">
          Home
        </NavLink>
      </div>
      <div className="flex-none fill-current">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/about"> About </NavLink>
          </li>
          <li>
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;
