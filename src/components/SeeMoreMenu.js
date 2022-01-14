import React, { Fragment } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { connect } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import includes from "lodash/includes";
import { MoreVertical } from "react-feather";

import { deleteStudent, unenrollStudent } from "../store/students";
import { deleteCampus } from "../store/campuses";

const SeeMoreMenu = (props) => {
  const { path } = useRouteMatch();
  const { campusId, studentId, deleteStudent, deleteCampus, unenrollStudent } =
    props;
  return (
    <Menu className="absolute right-5 top-5 z-50" as="div">
      <Menu.Button>
        <MoreVertical />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition duration-100 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-75 ease-out"
        leaveFrom="transform scale-100 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items className=" absolute right-0  w-20 bg-white rounded-md shadow-md focus:outline-none">
          <Menu.Item>
            {({ active }) => (
              <Link
                to={
                  includes(path, ":campusId") || includes(path, "students")
                    ? `/students/${studentId}`
                    : `${path}/${campusId}`
                }
                className={`${
                  active ? "bg-dark-lava text-white" : "text-gold"
                } group flex rounded-md items-center w-full px-2 py-2 text-md`}
              >
                View
              </Link>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-dark-lava text-white" : "text-gold"
                } ${
                  includes(path, ":campusId") ? "hidden" : ""
                } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                onClick={() => {
                  includes(path, "campus")
                    ? deleteCampus(campusId)
                    : deleteStudent(studentId);
                }}
              >
                Delete
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button
                className={`${
                  active ? "bg-dark-lava text-white" : "text-gold"
                }  ${
                  !includes(path, ":campusId") ? "hidden" : ""
                } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                onClick={() => {
                  unenrollStudent(studentId, campusId);
                }}
              >
                Unenroll
              </button>
            )}
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteStudent: (id) => {
      dispatch(deleteStudent(id));
    },
    deleteCampus: (id) => {
      dispatch(deleteCampus(id));
    },
    unenrollStudent: (studentId, campusId) => {
      dispatch(unenrollStudent(studentId, campusId));
    },
  };
};
export default connect(null, mapDispatchToProps)(SeeMoreMenu);
