import * as Yup from "yup";

export const MovieValidation = Yup.object({
  title: Yup.string().required('Movie Title is required'),
  language: Yup.string().required('Language is required'),
  description: Yup.string().required('Movie Description is required'),
  trailer: Yup.string().url("Invalid URL").required("Trailer URL is required"),
  image: Yup.string().url("Invalid URL").required("Image URL is required"),
});
