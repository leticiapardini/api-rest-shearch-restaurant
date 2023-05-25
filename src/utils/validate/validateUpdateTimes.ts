import * as yup from 'yup'

export const linkSchemaUpdateTimes = yup.object({
  body: yup.object({
    start_time: yup.string(),
    end_time: yup.string(),
    interval: yup.boolean(),
    start_time_interval: yup.string(),
    end_time_interval: yup.string(),
    dayWeek: yup.string(),
    restaurant_id: yup.string(),
  }),
  params: yup.object({
    id: yup.string().required('Id is required'),
  }),
});
