import * as yup from 'yup'

export const linkSchemaCreateTimes = yup.object({
  body: yup.object({
    start_time: yup.string().required("Start time is required"),
    end_time: yup.string().required("End time is required"),
    interval: yup.boolean().required("Interval is required"),
    start_time_interval: yup.string(),
    end_time_interval: yup.string(),
    dayWeek: yup.string().required("Day week is required"),
    restaurant_id: yup.string().required("Restaurant is required"),
  })
});

