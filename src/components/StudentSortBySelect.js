import React, { Component, useState, Fragment } from "react";
import { fetchStudents } from "../store/students";
import { Listbox, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { ChevronDown, ArrowDown, ArrowUp } from "react-feather";

const studentSortOptions = [
  { id: 1, value: { order: ["gpa", "DESC"], formattedName: "GPA" } },
  { id: 2, value: { order: ["gpa", "ASC"], formattedName: "GPA" } },
  {
    id: 3,
    value: { order: ["last_name", "DESC"], formattedName: "Last Name" },
  },
  { id: 4, value: { order: ["last_name", "ASC"], formattedName: "Last Name" } },
];

const StudentSortBySelect = ({ sortStudents }) => {
  const [sortValue, setSortValue] = useState({});

  function _sortStudents(order) {
    sortStudents(order);
  }

  return (
    <Listbox
      onChange={(e) => {
        setSortValue(e);
        _sortStudents(e.order);
      }}
      value={sortValue}
      className="relative"
      as={"div"}
    >
      <Listbox.Button className="bg-dark-lava text-white min-w-fit drop-shadow-sm rounded-md border-0 text-md font-medium py-3 px-4 inline-flex items-center gap-1">
        <div className="">Sort by</div>
        <div className="flex">
          {sortValue.formattedName ? `${sortValue.formattedName}` : ""}
          {sortValue.order && sortValue.order[1] ? (
            sortValue.order[1] === "DESC" ? (
              <ArrowDown className="ml-1" size={20} />
            ) : (
              <ArrowUp className="ml-1" size={20} />
            )
          ) : (
            ""
          )}
        </div>
        <ChevronDown className="ml-2" />
      </Listbox.Button>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Listbox.Options className="z-20 absolute top-13 left-0 md:left-auto md:right-0 w-40 mt-1 py-2 bg-dark-lava text-white rounded-md drop-shadow-sm cursor-pointer">
          {studentSortOptions.map((option) => (
            <Listbox.Option key={option.id} value={option.value} as={Fragment}>
              {({ active }) => (
                <li
                  className={`${
                    active ? "bg-dim-gray" : ""
                  } px-3 py-2 flex gap-2 items-center`}
                >
                  {option.value.formattedName}
                  {option.value.order[1] === "DESC" ? (
                    <ArrowDown size={20} />
                  ) : (
                    <ArrowUp size={20} />
                  )}
                </li>
              )}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Transition>
    </Listbox>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    sortStudents: (order) => {
      dispatch(fetchStudents(order));
    },
  };
};

export default connect(null, mapDispatchToProps)(StudentSortBySelect);
