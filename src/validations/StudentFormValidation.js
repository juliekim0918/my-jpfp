import * as yup from "yup";

export const studentSchema = yup.object().shape({
  firstName: yup
    .string("Not a valid first name")
    .required("First name is required"),
  lastName: yup
    .string("Not a valid last name")
    .required("Last name is required"),
  email: yup.string().email("Not a valid email").required("Email is required"),
  gpa: yup.number("Not a valid GPA").required("GPA is required"),
});
