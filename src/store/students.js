import axios from "axios";
import toNumber from "lodash/toNumber";
import { fetchSingleCampus } from "./currCampus";
import { fetchSingleStudent } from "./currStudent";

const FETCH_STUDENTS = "FETCH_STUDENTS";

const _fetchStudents = (students) => {
  return {
    type: FETCH_STUDENTS,
    students,
  };
};

export const fetchStudents = (order) => {
  const params = order
    ? {
        params: {
          order,
        },
      }
    : "";
  return async (dispatch) => {
    const { data: students } = await axios.get("/api/students", params);
    dispatch(_fetchStudents(students));
  };
};

export const deleteStudent = (id) => {
  return async (dispatch) => {
    await axios.delete(`/api/students/${id}`);
    dispatch(fetchStudents());
  };
};

export const updateStudent = (
  id,
  { firstName, lastName, email, gpa, campusId },
  history
) => {
  campusId === 0 ? (campusId = null) : "";
  return async (dispatch) => {
    await axios.put(`/api/students/${id}`, {
      first_name: firstName,
      last_name: lastName,
      email,
      gpa,
      campusId,
    });
    dispatch(fetchSingleStudent(id));
    dispatch(fetchStudents());
    history.push(`/students/${id}`);
  };
};

export const unenrollStudent = (studentId, campusId) => {
  return async (dispatch) => {
    await axios.put(`/api/students/${studentId}`, { campusId: null });
    dispatch(fetchSingleCampus(campusId));
    dispatch(fetchStudents());
  };
};

export const createStudent = (
  { firstName, lastName, email, gpa, campusId },
  history
) => {
  campusId === 0 ? (campusId = null) : "";
  return async (dispatch) => {
    const { data: newStudent } = await axios.post("/api/students", {
      first_name: firstName,
      last_name: lastName,
      email,
      gpa: toNumber(gpa),
      campusId: campusId ? toNumber(campusId) : campusId,
    });
    dispatch(fetchStudents());
    history.push(`/students/${newStudent.id}`);
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
