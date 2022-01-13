import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = (props) => {
  return (
    <div>
      <div className="z-10 text-3xl font-serif h-96 bg-eggshell p-5">
        <nav className="mx-auto my-2 border-b border-b-gold p-3 flex justify-between">
          <div className="flex gap-x-5 md:gap-x-14 items-center">
            <NavLink to="/">
              <img src="/logo.png" alt="" className="w-7 " />
            </NavLink>
            <div className="flex flex-row gap-x-5">
              <NavLink
                to="/students"
                className={(isActive) =>
                  isActive ? "bg-spanish-gray bg-opacity-30 rounded-md" : ""
                }
              >
                <div className="font-sans text-xl py-2 px-4 ">Students</div>
              </NavLink>
              <NavLink
                to="/campuses"
                className={(isActive) =>
                  isActive ? "bg-spanish-gray bg-opacity-30 rounded-md" : ""
                }
              >
                <div className="font-sans text-xl py-2 px-4 rounded-md">
                  Campuses
                </div>
              </NavLink>
            </div>
          </div>
        </nav>
        <div className="text-6xl max-w-screen-2xl mx-auto my-10">
          Welcome to SchoolDash
        </div>
      </div>
    </div>
  );
};

export default Navbar;
