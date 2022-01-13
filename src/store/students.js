import axios from "axios";
import toNumber from "lodash/toNumber";

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

export const updateStudent = (id, student) => {
  return async (dispatch) => {
    await axios.put(`/api/students/${id}`, student);
    dispatch(fetchStudents());
  };
};

export const createStudent = ({
  firstName,
  lastName,
  email,
  gpa,
  campusId,
  history,
}) => {
  return async (dispatch) => {
    campusId === 0 ? (campusId = null) : "";
    await axios.post("/api/students", {
      first_name: firstName,
      last_name: lastName,
      email,
      gpa: toNumber(gpa),
      campusId: campusId ? toNumber(campusId) : campusId,
    });
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
