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

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CAMPUSES:
      return action.campuses;
    default:
      return state;
  }
};
