import React from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../store/currStudent";
import lowerCase from "lodash/lowerCase";
import CampusForm from "./CampusForm";
import StudentForm from "./StudentForm";
import { useHistory } from "react-router-dom";

const Formview = (props) => {
  let { entityToManipulate, operation } = props;
  entityToManipulate = lowerCase(entityToManipulate);
  const history = useHistory();

  return (
    <div className="flex flex-col md:grid md:grid-cols-3 gap-10">
      <div className="rounded-md drop-shadow-sm h-fit">
        <div className="text-3xl font-serif">Add a {entityToManipulate}</div>
        <div className="text-lg font-sans my-2">
          Please fill out the necessary details for our new {entityToManipulate}
        </div>
      </div>
      <div className="rounded-md col-span-2 bg-eggshell drop-shadow-sm p-10">
        {entityToManipulate === "student" ? (
          <StudentForm history={history} />
        ) : (
          <CampusForm history={history} />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = ({ currStudent }) => {
  return { currStudent };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSingleStudent: (id) => {
      dispatch(fetchSingleStudent(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Formview);
