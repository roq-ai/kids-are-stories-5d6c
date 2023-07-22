import * as yup from 'yup';

export const bookmarkValidationSchema = yup.object().shape({
  user_id: yup.string().nullable(),
  story_id: yup.string().nullable(),
});
