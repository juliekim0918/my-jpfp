import React, { Fragment, Component } from "react";
import { Link } from "react-router-dom";
import includes from "lodash/includes";
import { Plus, ArrowRight } from "react-feather";
import { connect } from "react-redux";

import StudentCard from "./StudentCard";
import FilterToggle from "./FilterToggle";
import StudentSortBySelect from "./StudentSortBySelect";
import { fetchStudents } from "../store/students";
import Loader from "./Loader";
import Pagination from "./Pagination";
const STUDENT = "student";

class StudentList extends Component {
  constructor() {
    super();
    this.state = {
      currStudents: [],
      currPage: 1,
      cardsPerPage: 10,
    };
  }

  setCurrStudents = (students) => {
    this.setState({ currStudents: students });
  };

  paginate = (num) => this.setState({ currPage: num });

  componentDidMount() {
    if (!this.props.currStudents) {
      this.props.fetchStudents();
    } else {
      this.setState({ currStudents: this.props.currStudents });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    //initial load
    if (
      prevProps.students !== this.props.students &&
      !this.props.currStudents
    ) {
      this.setState({ currPage: 1, currStudents: this.props.students });
    }

    // when deleting a student
    if (
      this.props.currCampus &&
      this.props.currCampus.students !== prevProps.currCampus.students
    ) {
      this.setState({
        currPage: 1,
        currStudents: this.props.currCampus.students,
      });
    }

    // when filter toggle is interacted with
    if (this.state.currStudents.length !== prevState.currStudents.length) {
      this.setState({ currPage: 1 });
    }
  }

  render() {
    const { setCurrStudents, paginate } = this;
    let { currStudents, currPage, cardsPerPage } = this.state;
    const {
      match: { path },
      campusId,
    } = this.props;
    const startIndex = (currPage - 1) * cardsPerPage;
    const endIndex = currPage * cardsPerPage;
    path === "/" ? (currStudents = currStudents.slice(1, 5)) : null;

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
          {!currStudents[0] ? <Loader /> : ""}
          {currStudents.slice(startIndex, endIndex).map((student) => {
            return (
              <StudentCard
                key={student.id}
                student={student}
                campusId={campusId}
              />
            );
          })}
        </div>

        <div className="mt-6 md:mt-auto mb-10">
          <Link
            to="/students"
            className={`${
              path === "/" ? "block" : "hidden"
            } font-md w-full h-12 bg-white max-w-fit py-2 inline-flex items-center px-4 rounded-md drop-shadow-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gold  `}
          >
            See more
            <ArrowRight className="-mr-1 ml-2 w-5" />
          </Link>
        </div>
        {currStudents.length > 10 ? (
          <Pagination
            entities={currStudents}
            paginate={paginate}
            currPage={currPage}
            cardsPerPage={cardsPerPage}
          />
        ) : null}
      </div>
    );
  }
}

const mapStateToProps = ({ students, currCampus }) => {
  return {
    students,
    currCampus,
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
