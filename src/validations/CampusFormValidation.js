import * as yup from "yup";

export const campusSchema = yup.object().shape({
  name: yup.string().required("Name is required"),
  address: yup.string().required("Address is required"),
  description: yup.string().required("Description is required"),
});
