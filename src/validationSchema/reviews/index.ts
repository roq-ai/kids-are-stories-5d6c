import * as yup from 'yup';

export const reviewValidationSchema = yup.object().shape({
  content: yup.string().required(),
  user_id: yup.string().nullable(),
  story_id: yup.string().nullable(),
});
