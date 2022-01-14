import * as yup from "yup";

export const studentSchema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  gpa: yup.number().required(),
});
