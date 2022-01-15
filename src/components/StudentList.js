import React, { Fragment, useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import includes from "lodash/includes";
import { Plus, ArrowRight } from "react-feather";

import StudentCard from "./StudentCard";
import FilterToggle from "./FilterToggle";
import StudentSortBySelect from "./StudentSortBySelect";
const STUDENT = "student";

const StudentList = ({ students, campusId }) => {
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
              <Plus className="md:-ml-1 md:mr-2 h-5 w-5" aria-hidden="true" />
              <span className="md:block hidden">Add a student</span>
            </Link>
          </div>
          <div
            className={`${
              includes(path, "students") ? "block" : "hidden"
            } flex flex-col gap-y-5 md:flex-row justify-between py-5 border-b w-full border-dark-lava`}
          >
            <FilterToggle
              setCurrStudents={setCurrStudents}
              entityToManipulate={STUDENT}
            />
            <StudentSortBySelect />
          </div>
        </Fragment>
      ) : (
        ""
      )}

      <div className="flex flex-col gap-7 mt-5 md:grid-cols-2 md:grid md:my-10">
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
      {path === "/" ? (
        <div className="mt-6 md:mt-auto mb-10">
          <Link
            to="/students"
            className="font-md w-full h-12 bg-white max-w-fit py-2 inline-flex items-center px-4 rounded-md drop-shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold  "
          >
            See more
            <ArrowRight className="-mr-1 ml-2 w-5" />
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default StudentList;
