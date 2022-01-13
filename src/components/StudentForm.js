import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampuses } from "../store/campuses";
import { createStudent } from "../store/students";

class StudentForm extends Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gpa: 3.9,
      campusId: 0,
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createStudent(this.state);
    this.props.history.push("/students");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  componentDidMount() {
    this.props.fetchCampuses();
  }

  render() {
    const { campuses } = this.props;
    const { firstName, lastName, email, gpa } = this.state;
    const { handleSubmit, handleChange } = this;
    return (
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-2xl"
        >
          <div className="flex justify-between gap-10">
            <div className="flex flex-col w-1/2">
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
            </div>
            <div className="flex flex-col w-1/2">
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
            Create
          </button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = ({ campuses }) => {
  return { campuses };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchCampuses: () => {
      dispatch(fetchCampuses());
    },
    createStudent: (student) => {
      dispatch(createStudent(student));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(StudentForm);
