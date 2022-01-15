import React, { Component } from "react";
import { connect } from "react-redux";

import { fetchCampuses } from "../store/campuses";
import { createStudent, updateStudent } from "../store/students";
import { fetchSingleStudent } from "../store/currStudent";
import { studentSchema } from "../validations/StudentFormValidation";

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: 3.9,
      campusId: 0,
      errors: [],
    };
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await studentSchema.validate(this.state, { abortEarly: false });
      if (this.props.operation === "edit") {
        this.props.updateStudent(
          this.props.match.params.studentId * 1,
          this.state
        );
      } else {
        this.props.createStudent(this.state);
        this.props.history.push("/students");
      }
    } catch (error) {
      const errors = error.inner.reduce((acc, err) => {
        acc.push({ path: err.path, message: err.message });
        return acc;
      }, []);
      this.setState({ errors });
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setEditState = () => {
    this.setState({
      firstName: this.props.currStudent.first_name,
      lastName: this.props.currStudent.last_name,
      email: this.props.currStudent.email,
      gpa: this.props.currStudent.gpa,
      campusId: this.props.currStudent.campusId,
    });
  };

  resetState = () => {
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      gpa: 3.9,
      campusId: 0,
    });
  };

  componentDidMount() {
    this.props.fetchCampuses();
    if (this.props.operation === "create") this.resetState();
    else this.props.fetchSingleStudent(this.props.match.params.studentId * 1);
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.currStudent.id &&
      prevState.firstName !== this.props.currStudent.first_name &&
      this.state.firstName === "" &&
      this.props.operation === "edit"
    ) {
      this.setEditState();
    }
  }

  render() {
    const { campuses, operation } = this.props;
    const { firstName, lastName, email, gpa, campusId, errors } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-2xl"
        >
          <div className="flex flex-col justify-between gap-3 md:flex-row md:gap-10">
            <div className="flex flex-col md:w-1/2">
              <label
                htmlFor="firstName"
                className="block text-lg font-bold text-gray-700"
              >
                First name
              </label>
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={firstName}
                onChange={(e) => handleChange(e)}
                className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
              />
              {errors.find((e) => e.path === "firstName") ? (
                <span className="text-red-700">
                  {errors.find((e) => e.path === "firstName").message}
                </span>
              ) : (
                ""
              )}
            </div>
            <div className="flex flex-col md:w-1/2">
              <label
                htmlFor="lastName"
                className="block text-lg font-bold text-gray-700"
              >
                Last name
              </label>
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={lastName}
                onChange={(e) => handleChange(e)}
                className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
              />
              {errors.find((e) => e.path === "lastName") ? (
                <span className="text-red-700">
                  {errors.find((e) => e.path === "lastName").message}
                </span>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="email"
              className="block text-lg font-bold text-gray-700"
            >
              Email
            </label>
            <input
              type="text"
              name="email"
              id="email"
              value={email}
              onChange={(e) => handleChange(e)}
              className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
            />
            {errors.find((e) => e.path === "email") ? (
              <span className="text-red-700">
                {errors.find((e) => e.path === "email").message}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col w-1/3">
            <label
              htmlFor="gpa"
              className="block text-lg font-bold text-gray-700"
            >
              GPA
            </label>
            <input
              type="text"
              name="gpa"
              id="gpa"
              value={gpa}
              onChange={(e) => handleChange(e)}
              className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
            />
            {errors.find((e) => e.path === "gpa") ? (
              <span className="text-red-700">
                {errors.find((e) => e.path === "gpa").message}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="campusId"
              className="block text-lg font-bold text-gray-700"
            >
              Current enrollment
            </label>
            <select
              name="campusId"
              id="campusId"
              value={campusId || ""}
              onChange={(e) => handleChange(e)}
              className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
            >
              <option value="">Select a campus</option>
              {campuses.map((campus) => (
                <option key={campus.id} value={campus.id}>
                  {campus.name}
                </option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-1/3 bg-gold text-white rounded-md py-3 text-xl my-3 shadow-sm font-medium"
          >
            {operation === "edit" ? "Save" : "Create"}
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ campuses, currStudent }) => {
  return { campuses, currStudent };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },
    createStudent: (student) => {
      dispatch(createStudent(student, history));
    },
    updateStudent: (id, updatedInfo) => {
      dispatch(updateStudent(id, updatedInfo, history));
    },
    fetchSingleStudent: (id) => {
      dispatch(fetchSingleStudent(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
