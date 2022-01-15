import React, { useState, Fragment } from "react";
import { Switch } from "@headlessui/react";
import { connect } from "react-redux";
import difference from "lodash/difference";

const FilterToggle = ({
  students,
  setCurrStudents,
  campuses,
  setCurrCampuses,
  entityToManipulate,
}) => {
  const [enabled, setEnabled] = useState(false);

  function filterStudents() {
    if (!enabled) {
      setCurrStudents(students.filter((student) => !student.campusId));
    } else {
      setCurrStudents(students);
    }
  }

  function filterCampuses() {
    if (!enabled) {
      const campusIdArr = campuses.map((c) => c.id);
      const studentCampusIdArr = students.map((s) => s.campusId);
      const campusesWithNoEnrollment = difference(
        campusIdArr,
        studentCampusIdArr
      );
      setCurrCampuses(
        campuses.filter((campus) =>
          campusesWithNoEnrollment.includes(campus.id)
        )
      );
    } else {
      setCurrCampuses(campuses);
    }
  }

  return (
    <Switch.Group as={Fragment}>
      <div className="flex items-center">
        <Switch
          checked={enabled}
          onChange={() => {
            setEnabled(!enabled);
            entityToManipulate === "student"
              ? filterStudents()
              : filterCampuses();
          }}
          className={`${
            enabled ? "bg-gold" : "bg-dark-lava"
          } p-2 relative rounded-full transition ease-in-out duration-200 transform h-8 w-16`}
        >
          <span
            className={`${
              enabled ? "translate-x-8" : "translate-x-0"
            } left-1 top-1 absolute w-6 h-6 rounded-full bg-white inline-block transition ease-in-out duration-200`}
          ></span>
        </Switch>
        <Switch.Label className="ml-4 font-semibold text-sm w-36">
          {entityToManipulate === "student"
            ? "Show unenrolled students"
            : "Show campuses with no enrollments"}
        </Switch.Label>
      </div>
    </Switch.Group>
  );
};
const mapStateToProps = ({ students, campuses }) => ({
  students,
  campuses,
});
export default connect(mapStateToProps)(FilterToggle);
