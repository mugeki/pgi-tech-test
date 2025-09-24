import { createFormContext } from '@mantine/form';
import * as yup from 'yup';

export interface BlogFormValues {
  title: string;
  author_name: string;
  summary: string;
  category: string | null;
  content: string;
}

const step1Schema = yup.object({
  title: yup.string().required('Title is a required field'),
  author_name: yup
    .string()
    .required('Author name is a required field'),
});
const step2Schema = yup.object({
  summary: yup.string().required('Summary is a required field'),
  category: yup.string().required('Category is a required field'),
});
const step3Schema = yup.object({
  content: yup.string().required('Content is a required field'),
});

export type StepSchemas = {
  [key: number]: yup.ObjectSchema<yup.AnyObject>;
};
export const stepSchemas: StepSchemas = {
  1: step1Schema,
  2: step2Schema,
  3: step3Schema,
};

export const [BlogFormProvider, useBlogFormContext, useBlogForm] =
  createFormContext<BlogFormValues>();
