import { NavLink, Link, Switch, Route } from "react-router-dom";
import React, { Component } from "react";

class Navbar extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <div className="z-10 text-3xl font-serif h-96 bg-eggshell p-5">
          <nav className="mx-auto my-2 border-b border-b-gold p-3 flex justify-between">
            <div className="flex gap-x-14 items-center">
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
            <div className="flex gap-x-5 ">
              <Link to="/create/student">
                <button className="font-sans text-xl font-bold py-2 px-4 border-gold rounded-md text-gold">
                  Add a student
                </button>
              </Link>
              <Link to="/create/campus">
                <button className="font-sans text-xl font-bold py-2 px-4 bg-gold rounded-md text-white">
                  Add a campus
                </button>
              </Link>
            </div>
          </nav>
          <div className="text-6xl max-w-screen-2xl mx-auto my-10">
            Welcome to SchoolDash
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
