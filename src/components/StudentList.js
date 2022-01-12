import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchStudents } from "../store/students";
import SeeMoreMenu from "./SeeMoreMenu";

const StudentList = (props) => {
  const { fetchStudents, students } = props;
  useEffect(() => {
    fetchStudents();
  }, [students.length]);
  return (
    <div>
      <div className="text-5xl font-serif pb-5 border-b border-dark-lava">
        Students
      </div>
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

const mapStateToProps = ({ students }) => {
  return {
    students,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentList);
