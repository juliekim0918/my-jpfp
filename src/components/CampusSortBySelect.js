import React, { Component, useState, Fragment } from "react";
import { fetchStudents } from "../store/students";
import { Listbox, Transition } from "@headlessui/react";
import { connect } from "react-redux";
import { ChevronDown, ArrowDown, ArrowUp } from "react-feather";

const campusSortOptions = [
  {
    id: 1,
    value: { order: ["studentCount", "DESC"], formattedName: "Student Count" },
  },
  {
    id: 2,
    value: { order: ["studentCount", "ASC"], formattedName: "Student Count" },
  },
];

const CampusSortBySelect = ({
  campuses,
  campusesWithStudentCount,
  setCurrCampuses,
}) => {
  const [sortValue, setSortValue] = useState({});

  function sortCampuses(operation) {
    let sortedCampuses =
      operation === "ASC"
        ? campusesWithStudentCount.sort((firstCampus, secondCampus) => {
            return firstCampus.studentCount - secondCampus.studentCount;
          })
        : campusesWithStudentCount.sort((firstCampus, secondCampus) => {
            return secondCampus.studentCount - firstCampus.studentCount;
          });

    console.log("all sorted campuses", sortedCampuses);
    setCurrCampuses(sortedCampuses);
  }

  return (
    <Listbox
      onChange={(e) => {
        setSortValue(e);
        sortCampuses(e.order[1]);
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
        <Listbox.Options className="z-20 absolute top-13 right-0 w-40 mt-1 py-2 bg-dark-lava text-white rounded-md drop-shadow-sm cursor-pointer">
          {campusSortOptions.map((option) => (
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

const mapStateToProps = ({ campuses, students }) => {
  const campusesWithStudentCount = campuses.map((campus) => {
    campus["studentCount"] = students.filter(
      (s) => s.campusId === campus.id
    ).length;
    return campus;
  });
  return { campusesWithStudentCount, campuses };
};
const mapDispatchToProps = (dispatch) => {
  return {
    sortStudents: (order) => {
      dispatch(fetchStudents(order));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CampusSortBySelect);
