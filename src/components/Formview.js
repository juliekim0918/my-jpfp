import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import startCase from "lodash/startCase";

import { fetchSingleStudent } from "../store/currStudent";
import CampusForm from "./CampusForm";
import StudentForm from "./StudentForm";
import SuccessfulFormBanner from "./SuccessfulFormBanner";

const Formview = ({ entityToManipulate, operation, title, history, match }) => {
  const [isPostOperation, setPostOperation] = useState(false);
  useEffect(() => {
    document.title =
      `SchoolDash | ${startCase(operation)} a ${startCase(
        entityToManipulate
      )}` || "SchoolDash";
  }, []);

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-5 md:gap-10">
      {isPostOperation ? (
        <SuccessfulFormBanner
          history={history}
          entityToManipulate={entityToManipulate}
        />
      ) : (
        ""
      )}
      <div className="rounded-md drop-shadow-sm h-fit">
        <div className="text-3xl font-serif">
          {startCase(operation)} a {entityToManipulate}
        </div>
        <div className="text-lg font-sans my-2">
          Please fill out the necessary details for your {entityToManipulate}
        </div>
      </div>
      <div className="rounded-md col-span-2 bg-eggshell drop-shadow-sm p-6 md:p-10">
        {entityToManipulate === "student" ? (
          <StudentForm
            history={history}
            operation={operation}
            match={match}
            setPostOperation={setPostOperation}
          />
        ) : (
          <CampusForm
            history={history}
            operation={operation}
            match={match}
            setPostOperation={setPostOperation}
          />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ currCampus, currStudent }) => {
  return { currCampus, currStudent };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleStudent: (id) => {
      dispatch(fetchSingleStudent(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Formview);
