import React, { Component } from "react";
import { connect } from "react-redux";

import { createCampus, updateCampus } from "../store/campuses";
import { fetchSingleCampus } from "../store/currCampus";

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
    e.stopPropagation();
    e.preventDefault();
    if (this.props.operation === "edit") {
      this.props.updateCampus(this.props.match.params.campusId * 1, this.state);
    } else {
      this.props.createCampus(this.state);
      this.props.history.push("/campuses");
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  setEditState = () => {
    this.setState({
      name: this.props.currCampus.name,
      address: this.props.currCampus.address,
      description: this.props.currCampus.description,
    });
  };

  resetState = () => {
    this.setState({
      name: "",
      address: "",
      description: "",
    });
  };

  handleHitEnter = (e) => {
    if (e.key === "Enter") e.stopPropagation();
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleHitEnter, true);
    if (!this.props.currCampus.id && this.props.operation === "edit") {
      this.props.fetchSingleCampus(this.props.match.params.campusId * 1);
    }
    if (this.props.currCampus.id && this.props.operation === "edit")
      this.setEditState();
    else this.resetState();
  }

  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.currCampus.id &&
      prevProps.currCampus.id !== this.props.currCampus.id &&
      prevState.name !== this.props.currCampus.name &&
      this.props.operation === "edit"
    )
      this.setEditState();
  }

  render() {
    const { name, address, description } = this.state;
    const { handleSubmit, handleChange } = this;
    const { operation } = this.props;
    return (
      <div>
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col gap-3 max-w-2xl"
        >
          <div className="flex justify-between gap-10">
            <div className="flex flex-col w-full">
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
          <div className="flex flex-col w-full">
            <label
              htmlFor="students"
              className="text-lg font-bold tet-gray-700"
            >
              Students
            </label>
            <select className="form-multiselect block w-full mt-1" multiple>
              <option>Option 1</option>
              <option>Option 2</option>
              <option>Option 3</option>
              <option>Option 4</option>
              <option>Option 5</option>
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

const mapStateToProps = ({ currCampus }) => {
  return { currCampus };
};

const mapDispatchToProps = (dispatch, { history }) => {
  return {
    createCampus: (campus) => {
      dispatch(createCampus(campus));
    },
    updateCampus: (id, campus) => {
      dispatch(updateCampus(id, campus, history));
    },
    fetchSingleCampus: (id) => {
      dispatch(fetchSingleCampus(id));
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CampusForm);
