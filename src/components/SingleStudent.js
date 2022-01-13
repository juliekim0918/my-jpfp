import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../store/currStudent";
import EnrollmentDetails from "./EnrollmentDetails";
import SingleStudentEmptyState from "./SingleStudentEmptyState";
import { Edit2, UserX } from "react-feather";
import { Link, useRouteMatch } from "react-router-dom";

const SingleStudent = (props) => {
  const { fetchSingleStudent, currStudent } = props;
  const { url } = useRouteMatch();
  const id = props.match.params.studentId;
  useEffect(() => {
    fetchSingleStudent(id);
  }, [id]);

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
      <div className="bg-eggshell p-10 flex flex-col rounded-md drop-shadow-sm justify-center items-center gap-5 h-fit">
        <img src={currStudent.avatarUrl} alt="" className="w-24 h-24" />
        <div className="flex flex-row gap-5">
          <Link
            to={`${url}/edit`}
            className="text-md bg-white inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold "
          >
            <Edit2 className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
            Edit
          </Link>
          <button className="text-md bg-red-400 bg-opacity-30 inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold ">
            <UserX className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
            Delete
          </button>
        </div>
        <div className="flex flex-col gap-1">
          <div className="text-3xl font-serif text-center">
            {currStudent.first_name} {currStudent.last_name}
          </div>
          <div className="font-sans text-lg text-gray-600 text-center">
            {currStudent.email} | GPA: {currStudent.gpa}
          </div>
        </div>
      </div>
      <div className="col-span-2 bg-eggshell p-10 rounded-md drop-shadow-sm">
        <div className="text-5xl font-serif pb-5 border-b border-dark-lava">
          Enrollment
        </div>
        <div className="flex flex-col gap-7 my-10">
          {currStudent.campusId ? (
            <EnrollmentDetails />
          ) : (
            <SingleStudentEmptyState url={url} />
          )}
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = ({ currStudent }) => {
  return { currStudent };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleStudent: (id) => {
      dispatch(fetchSingleStudent(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
