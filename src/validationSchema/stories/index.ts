import * as yup from 'yup';

export const storyValidationSchema = yup.object().shape({
  title: yup.string().required(),
  content: yup.string().required(),
  genre: yup.string().required(),
  organization_id: yup.string().nullable(),
});
