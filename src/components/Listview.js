import React, { useEffect } from "react";
import StudentList from "./StudentList";
import CampusList from "./CampusList";
import { Switch, Route } from "react-router-dom";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";
import { fetchStudents } from "../store/students";
import { connect } from "react-redux";
import Formview from "./Formview";
const CREATE = "CREATE";
const STUDENT = "STUDENT";
const CAMPUS = "CAMPUS";

const Listview = (props) => {
  const { fetchStudents, students } = props;
  useEffect(() => {
    fetchStudents();
  }, [students.length]);
  return (
    <div className="absolute top-2/3 left-0 right-0 w-11/12 mx-auto">
      <div className="p-16 rounded-lg max-w-screen-2xl mx-auto drop-shadow-lg bg-white z-0 mb-10">
        <Switch>
          <Route
            path="/students"
            exact
            render={(props) => <StudentList {...props} students={students} />}
          />
          <Route
            path="/create/student"
            exact
            render={(props) => (
              <Formview operation={CREATE} entityToManipulate={STUDENT} />
            )}
          />
          <Route
            path="/create/campus"
            exact
            render={(props) => (
              <Formview operation={CREATE} entityToManipulate={CAMPUS} />
            )}
          />
          <Route
            path="/campuses"
            exact
            render={(props) => <CampusList {...props} />}
          />
          <Route
            path="/students/:studentId"
            render={(props) => <SingleStudent {...props} />}
          ></Route>
          <Route
            path="/campuses/:campusId"
            render={(props) => <SingleCampus {...props} />}
          ></Route>
        </Switch>
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

export default connect(mapStateToProps, mapDispatchToProps)(Listview);
