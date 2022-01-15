import React, { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { connect } from "react-redux";

const FilterToggle = ({ students, setCurrStudents }) => {
  const [enabled, setEnabled] = useState(false);
  function filterStudents() {
    if (!enabled) {
      setCurrStudents(students.filter((student) => !student.campusId));
    } else {
      setCurrStudents(students);
    }
  }

  return (
    <Switch.Group as={Fragment}>
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={() => {
            setEnabled(!enabled);
            filterStudents();
          }}
          className={`${
            enabled ? "bg-gold" : "bg-gray-400"
          } p-2 relative rounded-full transition ease-in-out duration-200 transform h-8 w-16`}
        >
          <span
            className={`${
              enabled ? "translate-x-8" : "translate-x-0"
            } left-1 top-1 absolute w-6 h-6 rounded-full bg-white inline-block transition ease-in-out duration-200`}
          ></span>
        </Switch>
        <Switch.Label className="ml-4 font-semibold">
          Show unenrolled
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};
const mapStateToProps = ({ students, currCampus }) => ({
  students,
  currCampus,
});
export default connect(mapStateToProps)(FilterToggle);
