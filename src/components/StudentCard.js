import React, { Component } from "react";
import SeeMoreMenu from "./SeeMoreMenu";
import { useRouteMatch } from "react-router-dom";

const StudentCard = ({ student, campusId }) => {
  const { path } = useRouteMatch();
  return (
    <div className="rounded-lg drop-shadow-md p-5 md:p-10 z-0 bg-white relative">
      {path !== "/" ? (
        <SeeMoreMenu studentId={student.id} campusId={campusId} />
      ) : null}
      <div className="flex flex-col md:flex-row gap-5">
        <img src={student.avatarUrl} alt="" className="h-16 w-16" />
        <div className="flex flex-col">
          <div className="text-3xl font-serif">
            {student.first_name} {student.last_name}
          </div>
          <div className="font-sans text-lg text-gray-400">{student.email}</div>
        </div>
      </div>
    </div>
  );
};

export default StudentCard;
