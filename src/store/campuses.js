import axios from "axios";
import { enrollStudents, fetchSingleCampus } from "./currCampus";
import { fetchStudents } from "./students";

const FETCH_CAMPUSES = "FETCH_CAMPUSES";

const _fetchCampuses = (campuses) => {
  return {
    type: FETCH_CAMPUSES,
    campuses,
  };
};

export const fetchCampuses = () => {
  return async (dispatch) => {
    const { data: campuses } = await axios.get("/api/campuses");
    dispatch(_fetchCampuses(campuses));
  };
};

export const updateCampus = (
  campusId,
  { name, address, description, selectedStudents },
  history
) => {
  return async (dispatch) => {
    if (!selectedStudents.length) {
      await axios.put(`/api/campuses/${campusId}`, {
        name,
        address,
        description,
      });
      dispatch(fetchSingleCampus(campusId));
    } else {
      dispatch(enrollStudents(campusId, selectedStudents));
    }

    dispatch(fetchStudents());
  };
};

export const deleteCampus = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/campuses/${id}`);
    dispatch(fetchCampuses());
  };
};

export const createCampus = ({
  name,
  address,
  description,
  selectedStudents,
}) => {
  return async (dispatch) => {
    const { data: newCampus } = await axios.post("/api/campuses", {
      name,
      address,
      description,
    });
    dispatch(enrollStudents(newCampus.id, selectedStudents));
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};
