import React from "react";
import Logo from "../assets/svg/moviechilllogo.svg";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="">
      <img src={Logo} alt="Logo" />
      <div className="flex gap-9">
        <NavLink to="/" className="font-[100] text-[1rem] ">
          Home
        </NavLink>
        <NavLink to="/films" className="font-[300] text-[1.1rem] ">
          Films
        </NavLink>
        <NavLink to="/tvlives" className="font-[300] text-[1.1rem] ">
          TV Lives
        </NavLink>
        <NavLink to="/favorite" className="font-[300] text-[1.1rem] ">
          Favorites
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
