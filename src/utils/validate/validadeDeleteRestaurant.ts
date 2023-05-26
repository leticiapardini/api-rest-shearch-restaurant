import * as yup from "yup";

export const linkSchemaDeleteRestaurant = yup.object({
  body: yup.object({
    password: yup.string().required("password is required"),
  }),
  params: yup.object({
    id: yup.string().required("Id is required"),
  }),
});
