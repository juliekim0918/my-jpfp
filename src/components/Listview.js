import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";

import StudentList from "./StudentList";
import CampusList from "./CampusList";
import SingleStudent from "./SingleStudent";
import SingleCampus from "./SingleCampus";
import Formview from "./Formview";
import NotFound from "./NotFound";

const CREATE = "create";
const EDIT = "edit";
const STUDENT = "student";
const CAMPUS = "campus";

const Listview = () => {
  return (
    <div className="absolute top-[80%] md:top-2/3 left-0 right-0 w-11/12 mx-auto">
      <div className="p-5 md:p-16 rounded-lg max-w-screen-2xl mx-auto drop-shadow-lg bg-white z-0 mb-10">
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return (
                <Fragment>
                  <StudentList {...props} />
                  <CampusList {...props} />
                </Fragment>
              );
            }}
          />
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
          <Route render={(props) => <NotFound {...props} />} />
        </Switch>
      </div>
    </div>
  );
};

export default Listview;
