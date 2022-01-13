import React, { useEffect } from "react";
import { fetchCampuses } from "../store/campuses";
import { connect } from "react-redux";
import SeeMoreMenu from "./SeeMoreMenu";
import { Map, Plus } from "react-feather";
import { Link } from "react-router-dom";

const CampusList = (props) => {
  const { fetchCampuses, campuses } = props;
  useEffect(() => {
    fetchCampuses();
  }, [campuses.length]);
  return (
    <div>
      <div className="flex justify-between pb-5 border-b border-dark-lava">
        <div className="text-5xl font-serif">Campuses</div>
        <Link
          to="/create/campus"
          className="text-md bg-gold text-white inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold "
        >
          <Plus className="-ml-1 mr-2 h-5 w-5 " aria-hidden="true" />
          Add a campus
        </Link>
      </div>
      <div className="flex flex-col gap-7 md:grid-cols-3 md:grid my-10">
        {campuses.map((campus) => (
          <div key={campus.id} className="rounded-lg drop-shadow-md bg-white">
            <div
              className="h-48 bg-cover rounded-md"
              style={{ backgroundImage: `url(${campus.image})` }}
            ></div>
            <div className="flex flex-col relative p-10 gap-2">
              <SeeMoreMenu campusId={campus.id} />
              <div className="text-3xl font-serif">{campus.name}</div>
              <div className="font-sans text-lg text-gray-400 flex flex-row gap-2">
                <Map />
                {campus.address}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = ({ campuses }) => {
  return {
    campuses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
