import axios from "axios";

const FETCH_SINGLE_STUDENT = "FETCH_SINGLE_STUDENT";
const _fetchSingleStudent = (student) => {
  return {
    type: FETCH_SINGLE_STUDENT,
    student,
  };
};

export const fetchSingleStudent = (id) => {
  return async (dispatch) => {
    const { data: student } = await axios.get(`/api/students/${id}`);
    dispatch(_fetchSingleStudent(student));
  };
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SINGLE_STUDENT:
      return action.student;

    default:
      return state;
  }
};
