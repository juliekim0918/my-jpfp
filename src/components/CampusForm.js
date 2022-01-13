import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSingleStudent } from "../store/currStudent";
import { createCampus } from "../store/campuses";

class CampusForm extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      address: "",
      description: "",
    };
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCampus(this.state);
    this.props.history.push("/campuses");
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    const { name, address, description } = this.state;
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
                htmlFor="name"
                className="block text-lg font-bold text-gray-700"
              >
                Campus name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => handleChange(e)}
                className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label
              htmlFor="address"
              className="block text-lg font-bold text-gray-700"
            >
              Street address
            </label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => handleChange(e)}
              className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
            />
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="description"
              className="block text-lg font-bold text-gray-700"
            >
              Description
            </label>
            <textarea
              name="description"
              id="description"
              rows="5"
              value={description}
              onChange={(e) => handleChange(e)}
              className="mt-1 focus:ring-gold focus:border-gold block w-full border-gray-300 rounded-md"
            />
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

const mapStateToProps = ({ currStudent }) => {
  return { currStudent };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createCampus: (campus) => {
      dispatch(createCampus(campus));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
