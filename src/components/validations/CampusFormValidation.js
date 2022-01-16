import * as yup from "yup";

export const campusSchema = yup.object().shape({
  name: yup.string("Name is not valid").required("Name is required"),
  address: yup.string("Address is not valid").required("Address is required"),
  description: yup
    .string("Description is not valid")
    .required("Description is required"),
});
