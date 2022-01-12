import axios from "axios";

const FETCH_STUDENTS = "FETCH_STUDENTS";

const _fetchStudents = (students) => {
  return {
    type: FETCH_STUDENTS,
    students,
  };
};

export const fetchStudents = () => {
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students");
    dispatch(_fetchStudents(students));
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/students/${id}`);
    dispatch(fetchStudents());
  };
};

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_STUDENTS:
      return action.students;
    default:
      return state;
  }
};
