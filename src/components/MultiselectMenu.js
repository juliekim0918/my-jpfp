import React from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

const customStyles = {
  control: (styles) => ({
    ...styles,
    padding: "2px",
    ":hover": {
      border: "1px solid #D5A021",
    },
    boxShadow: "none",
    ringColor: "none",
    border: "1px solid rgb(209 213 219)",
    borderRadius: "0.375rem",
  }),

  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isFocused ? "rgba(237,231,217,1)" : "",
    ":hover": {
      backgroundColor: "rgba(237,231,217,0.7)",
    },
  }),
  multiValueLabel: (provided) => ({
    ...provided,
    backgroundColor: "#D5A021",
    color: "white",
    padding: "6px 14px",
    paddingRight: "5px",
    borderRadius: "5px",
  }),
  multiValueRemove: (provided) => ({
    ...provided,
    color: "white",
    ":hover": {
      color: "#D5A021",
      backgroundColor: "rgba(237, 231, 217, 0.7)",
    },
  }),
  multiValue: (provided) => ({
    ...provided,
    backgroundColor: "#D5A021",
    borderRadius: "5px",
  }),
};

const MultiselectMenu = ({ options, handleSelectedStudents }) => {
  options = options.reduce((acc, student) => {
    const option = {
      value: student.id,
      label: `${student.first_name} ${student.last_name}`,
    };
    acc.push(option);
    return acc;
  }, []);
  return (
    <Select
      options={options}
      components={animatedComponents}
      styles={customStyles}
      isMulti={true}
      closeMenuOnSelect={false}
      onChange={(e) => {
        handleSelectedStudents(e.map((_) => _.value));
      }}
    />
  );
};

export default MultiselectMenu;
