import React, { Component } from "react";
import { connect } from "react-redux";
import { Map } from "react-feather";
const EnrollmentDetails = (props) => {
  const { currStudent } = props;
  return (
    <div className="flex flex-col gap-5">
      <div
        className="h-80 bg-cover rounded-md bg-center"
        style={{ backgroundImage: `url(${currStudent.campus.image})` }}
      ></div>
      <div className="text-5xl font-serif">{currStudent.campus.name}</div>
      <div className="font-sans text-lg text-gray-600 flex flex-row gap-2">
        <Map />
        {currStudent.campus.address}
      </div>
      <div className="font-sans text-lg">{currStudent.campus.description}</div>
    </div>
  );
};

const mapStateToProps = ({ currStudent }) => {
  return { currStudent };
};

export default connect(mapStateToProps)(EnrollmentDetails);
