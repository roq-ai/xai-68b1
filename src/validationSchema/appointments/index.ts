import * as yup from 'yup';

export const appointmentValidationSchema = yup.object().shape({
  date: yup.date().required(),
  time: yup.date().required(),
  user_id: yup.string().nullable(),
  doctor_id: yup.string().nullable(),
  service_id: yup.string().nullable(),
});
