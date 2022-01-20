import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Map, Plus, ArrowRight } from "react-feather";
import { connect } from "react-redux";
import includes from "lodash/includes";

import { fetchCampuses } from "../store/campuses";
import { fetchStudents } from "../store/students";
import SeeMoreMenu from "./SeeMoreMenu";
import Pagination from "./Pagination";
import FilterToggle from "./FilterToggle";
import CampusSortBySelect from "./CampusSortBySelect";
import Loader from "./Loader";
import SuccessfulDeleteBanner from "./SuccessfulDeleteBanner";
const CAMPUS = "campus";

class CampusList extends Component {
  constructor() {
    super();
    this.state = {
      currCampuses: [],
      currPage: 1,
      cardsPerPage: 15,
    };
  }

  setCurrCampuses = (campuses) => {
    this.setState({ currCampuses: campuses });
  };

  paginate = (num) => this.setState({ currPage: num });

  componentDidMount() {
    document.title = this.props.title || "SchoolDash | Home";
    this.props.fetchCampuses();
    this.props.fetchStudents();
  }

  componentDidUpdate(prevProps, prevState) {
    //initial load
    if (
      prevState.currCampuses !== this.props.campuses &&
      !this.state.currCampuses.length
    ) {
      this.setState({
        currPage: 1,
        currCampuses: this.props.campuses,
      });
    }

    // when deleting a college
    if (
      this.props.campuses &&
      this.props.campuses.length !== prevProps.campuses.length
    ) {
      this.setState({
        currPage: 1,
        currCampuses: this.props.campuses,
      });
    }

    // when filter toggle is turned on/off
    if (this.state.currCampuses.length !== prevState.currCampuses.length) {
      this.setState({ currPage: 1 });
    }
  }

  render() {
    let { currCampuses, cardsPerPage, currPage } = this.state;
    const { match } = this.props;
    const { setCurrCampuses, paginate } = this;
    const startIndex = (currPage - 1) * cardsPerPage;
    const endIndex = currPage * cardsPerPage;
    match.path === "/" ? (currCampuses = currCampuses.slice(1, 7)) : null;

    return (
      <div>
        <SuccessfulDeleteBanner />
        <div className="flex justify-between pb-5 border-b border-dark-lava">
          <div className="text-5xl font-serif">Campuses</div>
          <Link
            to="/create/campus"
            className="text-md bg-gold text-white inline-flex items-center px-4 py-2 rounded-md shadow-sm text-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold "
          >
            <Plus className="md:-ml-1 md:mr-2 h-5 w-5 " aria-hidden="true" />
            <span className="md:block hidden">Add a campus</span>
          </Link>
        </div>
        <div
          className={`${
            includes(match.path, "campuses") ? "block" : "hidden"
          } flex flex-col gap-y-5 md:flex-row justify-between py-5 border-b w-full border-dark-lava`}
        >
          <FilterToggle
            currCampuses={currCampuses}
            setCurrCampuses={setCurrCampuses}
            entityToManipulate={CAMPUS}
          />
          <CampusSortBySelect
            currCampuses={currCampuses}
            setCurrCampuses={setCurrCampuses}
          />
        </div>
        <div className="flex flex-col gap-7 md:grid-cols-3 mt-5 md:grid md:my-10 my-6">
          {!currCampuses[0] ? <Loader /> : ""}
          {currCampuses.slice(startIndex, endIndex).map((campus) => (
            <div key={campus.id} className="rounded-lg drop-shadow-md bg-white">
              <div
                className="h-48 bg-cover rounded-md"
                style={{ backgroundImage: `url(${campus.image})` }}
              ></div>
              <div className="flex flex-col relative p-10 gap-2">
                {match.path !== "/" ? (
                  <SeeMoreMenu campusId={campus.id} />
                ) : null}
                <div className="text-3xl font-serif">{campus.name}</div>
                <div className="font-sans text-lg text-gray-400 flex flex-row gap-2">
                  <Map />
                  {campus.address}
                </div>
              </div>
            </div>
          ))}
        </div>
        {match.path === "/" ? (
          <div className="mt-6 md:mt-auto">
            <Link
              to="/campuses"
              className="font-md w-full h-12 bg-white max-w-fit py-2 inline-flex items-center px-4 rounded-md drop-shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold  "
            >
              See more
              <ArrowRight className="-mr-1 ml-2 w-5" />
            </Link>
          </div>
        ) : (
          <Pagination
            entities={currCampuses}
            cardsPerPage={cardsPerPage}
            paginate={paginate}
            currPage={currPage}
          />
        )}
      </div>
    );
  }
}

const mapStateToProps = ({ campuses, students }) => {
  return {
    campuses,
    students,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchStudents: () => {
      dispatch(fetchStudents());
    },
    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusList);
