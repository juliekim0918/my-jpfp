import React, { Component, Fragment } from "react";
import StudentList from "./StudentList";
import CampusList from "./CampusList";
import { Switch, Route } from "react-router-dom";
import SingleCampus from "./SingleCampus";
import SingleStudent from "./SingleStudent";

const Listview = () => {
  return (
    <div className="absolute top-2/3 left-0 right-0 w-11/12 mx-auto">
      <div className="p-16 rounded-lg max-w-screen-2xl mx-auto drop-shadow-lg bg-white z-0 mb-10">
        <Switch>
          <Route
            path="/students"
            exact
            render={(props) => <StudentList {...props} />}
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

export default Listview;
