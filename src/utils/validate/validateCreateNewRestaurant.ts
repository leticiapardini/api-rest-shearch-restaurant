import * as yup from 'yup'

export const linkSchemaCreateRestaurant = yup.object({
  body: yup.object({
    name: yup.string().required("Name is required"),
    street: yup.string().required("Street is required"),
    city: yup.string().required("City is required"),
    type: yup.string().required("Type is required"),
    password: yup.string().required("password is required"),
    cellphone: yup.string().required("Type is required"),
    socialMidea: yup.string().required("Type is required"),
    number: yup.number().required("Type is required"),
  })
});

