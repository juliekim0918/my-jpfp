import { Menu, Transition } from "@headlessui/react";
import React, { Component, Fragment } from "react";
import { MoreVertical } from "react-feather";
import { connect } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import { deleteStudent } from "../store/students";

const SeeMoreMenu = (props) => {
  const { path, url } = useRouteMatch();
  const { id, deleteStudent } = props;
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
                to={`${path}/${id}`}
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
                } group flex rounded-md items-center w-full px-2 py-2 text-md`}
                onClick={() => deleteStudent(id)}
              >
                Delete
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
      console.log(id);
      dispatch(deleteStudent(id));
    },
  };
};
export default connect(null, mapDispatchToProps)(SeeMoreMenu);
