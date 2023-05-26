import * as yup from 'yup'

export const linkSchemaUpdateRestaurant = yup.object({
  body: yup.object({
    name: yup.string(),
    street: yup.string(),
    city: yup.string(),
    type: yup.string(),
    password: yup.string().required("password is required"),
    cellphone: yup.string(),
    socialMidea: yup.string(),
    number: yup.number(),
  }),
  params: yup.object({
    id: yup.string().required('Id is required'),
  }),
});
