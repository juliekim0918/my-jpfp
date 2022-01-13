import axios from "axios";

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

export const updateCampus = (id, campus) => {
  return async (dispatch) => {
    await axios.put(`/api/campuses/${id}`, campus);
    dispatch(fetchCampuses());
  };
};

export const deleteCampus = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/campuses/${id}`);
    dispatch(fetchCampuses());
  };
};

export const createCampus = ({ name, address, description }) => {
  return async (dispatch) => {
    await axios.post("/api/campuses", {
      name,
      address,
      description,
    });
    dispatch(fetchCampuses());
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
