import axios from "axios";

const FETCH_SINGLE_CAMPUS = "FETCH_SINGLE_CAMPUS";

const _fetchSingleCampus = (campus) => {
  return {
    type: FETCH_SINGLE_CAMPUS,
    campus,
  };
};

export const fetchSingleCampus = (id) => {
  return async (dispatch) => {
    const { data: campus } = await axios.get(`/api/campuses/${id}`);
    dispatch(_fetchSingleCampus(campus));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_CAMPUS:
      return action.campus;

    default:
      return state;
  }
};
