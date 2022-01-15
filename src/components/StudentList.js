import React, { Fragment, useReducer, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import includes from "lodash/includes";
import { Plus, ChevronDown } from "react-feather";

import SeeMoreMenu from "./SeeMoreMenu";
import FilterToggle from "./FilterToggle";
import { connect } from "react-redux";
import StudentCard from "./StudentCard";

const StudentList = (props) => {
  let { students, campusId } = props;
  const [currStudents, setCurrStudents] = useState([]);
  useEffect(() => {
    setCurrStudents(students);
  }, [students]);
  const { path } = useRouteMatch();

  return (
    <div>
      {includes(path, "student") || path === "/" ? (
        <Fragment>
          <div className="flex justify-between pb-5 border-b border-dark-lava">
            <div className="text-5xl font-serif ">Students</div>
            <Link
              to="/create/student"
              className="text-md bg-gold text-white inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold "
            >
              <Plus className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
              Add a student
            </Link>
          </div>
          <div className="flex justify-between py-5 border-b w-full border-dark-lava">
            <select className="bg-eggshell min-w-fit drop-shadow-md rounded-md border-0 text-md font-medium py-2 px-4 inline-flex items-center">
              <option value="">Sort</option>
              <option value="">By last name</option>
              <option value="">By GPA</option>
            </select>
            <FilterToggle
              students={currStudents}
              setCurrStudents={setCurrStudents}
            />
          </div>
        </Fragment>
      ) : (
        ""
      )}
      <div className="flex flex-col gap-7 md:grid-cols-2 md:grid my-10">
        {currStudents.map((student) => {
          return (
            <StudentCard
              key={student.id}
              student={student}
              campusId={campusId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
