import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";

import { fetchStudents } from "../store/students";
import StudentList from "./StudentList";
import CampusList from "./CampusList";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import Formview from "./Formview";
import { fetchCampuses } from "../store/campuses";

const CREATE = "create";
const EDIT = "edit";
const STUDENT = "student";
const CAMPUS = "campus";

const Listview = (props) => {
  const { fetchStudents, fetchCampuses, students, campuses } = props;
  useEffect(() => {
    fetchStudents();
    fetchCampuses();
  }, [students.length, campuses.length]);
  console.log(campuses);

  return (
    <div className="absolute top-2/3 left-0 right-0 w-11/12 mx-auto">
      <div className="p-16 rounded-lg max-w-screen-2xl mx-auto drop-shadow-lg bg-white z-0 mb-10">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return (
                <Fragment>
                  <StudentList {...props} students={students.slice(1, 5)} />
                  <CampusList {...props} campuses={campuses.slice(1, 7)} />
                </Fragment>
              );
            }}
          />
          <Route
            path="/students"
            exact
            render={(props) => <StudentList {...props} students={students} />}
          />
          <Route
            path="/campuses"
            exact
            render={(props) => <CampusList {...props} campuses={campuses} />}
          />
          <Route
            path="/create/student"
            exact
            render={(props) => (
              <Formview
                {...props}
                operation={CREATE}
                entityToManipulate={STUDENT}
              />
            )}
          />
          <Route
            path="/create/campus"
            exact
            render={(props) => (
              <Formview
                {...props}
                operation={CREATE}
                entityToManipulate={CAMPUS}
              />
            )}
          />
          <Route
            path="/campuses/:campusId/edit"
            render={(props) => (
              <Formview
                {...props}
                operation={EDIT}
                entityToManipulate={CAMPUS}
              />
            )}
          />
          <Route
            path="/students/:studentId/edit"
            render={(props) => (
              <Formview
                {...props}
                operation={EDIT}
                entityToManipulate={STUDENT}
              />
            )}
          />
          <Route
            path="/students/:studentId"
            render={(props) => <SingleStudent {...props} />}
          />
          <Route
            path="/campuses/:campusId"
            render={(props) => <SingleCampus {...props} />}
          />
        </Switch>
      </div>
    </div>
  );
};

const mapStateToProps = ({ students, campuses }) => {
  return {
    students,
    campuses,
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

export default connect(mapStateToProps, mapDispatchToProps)(Listview);
