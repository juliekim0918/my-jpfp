import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Map, ArrowRight } from "react-feather";

const EnrollmentDetails = (props) => {
  const { currStudent } = props;
  return (
    <div className="flex flex-col gap-5">
      <div
        className="h-80 bg-cover rounded-md bg-center"
        style={{ backgroundImage: `url(${currStudent.campus.image})` }}
      ></div>
      <div className="inline-flex flex-col gap-2 md:flex-row md:justify-between">
        <div className="text-5xl font-serif">{currStudent.campus.name}</div>
        <Link
          to={`/campuses/${currStudent.campusId}`}
          className="font-md w-full h-12 bg-white max-w-fit py-2 inline-flex items-center px-4 rounded-md shadow-sm text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold "
        >
          See more
          <ArrowRight className="-mr-1 ml-2 w-5" aria-hidden="true" />
        </Link>
      </div>
      <div className="font-sans text-lg text-gray-600 flex flex-row gap-2">
        <Map />
        {currStudent.campus.address}
      </div>
      <div className="font-sans text-lg whitespace-pre-line	">
        {currStudent.campus.description}
      </div>
    </div>
  );
};

const mapStateToProps = ({ currStudent }) => {
  return { currStudent };
};

export default connect(mapStateToProps)(EnrollmentDetails);
