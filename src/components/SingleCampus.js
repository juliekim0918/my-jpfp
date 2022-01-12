import React, { Component, useEffect } from "react";
import { connect } from "react-redux";
import { fetchSingleCampus } from "../store/currCampus";
import { Edit2, Link, Map } from "react-feather";
import StudentList from "./StudentList";

const SingleCampus = (props) => {
  const { currCampus, fetchSingleCampus } = props;
  const id = props.match.params.campusId;
  useEffect(() => {
    fetchSingleCampus(id);
  }, [currCampus.id]);

  return (
    <div className="flex flex-col bg-eggshell rounded-md drop-shadow-md">
      <div
        className="h-96 bg-cover rounded-md bg-center relative from-slate-600"
        style={{
          backgroundImage: `linear-gradient( rgba(255, 255, 255, 0),rgba(0,0,0, 0.7)), url(${currCampus.image})`,
        }}
      >
        <div className="absolute text-5xl bottom-10 left-10 text-white font-serif">
          {currCampus.name}
        </div>
        <div className="flex gap-3 absolute bottom-10 right-10">
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium font-sans bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
          >
            <Edit2 className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
            Edit
          </button>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium font-sans bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold"
          >
            <Link className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
            Go to website
          </button>
        </div>
      </div>
      <div className="p-10 flex gap-10 flex-col">
        <div className="flex-inline">
          <div className="text-3xl font-serif pb-5 border-b border-dark-lava">
            About
          </div>
          <div className="my-5 font-sans text-gray-600 text-lg inline-flex items-center gap-2">
            <Map />
            {currCampus.address}
          </div>
          <div className="font-sans text-lg max-w-4xl">
            {currCampus.description}
          </div>
        </div>

        <div className="flex-inline">
          <div className="text-3xl font-serif pb-5 border-b border-dark-lava">
            Students
          </div>

          {currCampus.students ? (
            <StudentList students={currCampus.students} />
          ) : (
            <div className="text-3xl"> No students </div>
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = ({ currCampus }) => {
  return { currCampus };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleCampus: (id) => {
      dispatch(fetchSingleCampus(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
