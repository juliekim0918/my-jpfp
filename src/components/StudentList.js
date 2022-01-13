import React from "react";
import { useRouteMatch } from "react-router-dom";
import SeeMoreMenu from "./SeeMoreMenu";
import includes from "lodash/includes";
import { Link } from "react-router-dom";
import { Plus } from "react-feather";

const StudentList = (props) => {
  const { students } = props;
  const { path } = useRouteMatch();
  return (
    <div>
      {includes(path, "student") ? (
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
      ) : (
        ""
      )}
      <div className="flex flex-col gap-7 md:grid-cols-2 md:grid my-10">
        {students.map((student) => {
          return (
            <div
              key={student.id}
              className="rounded-lg drop-shadow-md p-10 z-0 bg-white relative"
            >
              <SeeMoreMenu id={student.id} />
              <div className="flex flex-row gap-5">
                <img src={student.avatarUrl} alt="" className="h-16 w-16" />
                <div className="flex flex-col">
                  <div className="text-3xl font-serif">
                    {student.first_name} {student.last_name}
                  </div>
                  <div className="font-sans text-lg text-gray-400">
                    {student.email}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StudentList;
