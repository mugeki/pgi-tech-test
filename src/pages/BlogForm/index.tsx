import { Button, Group, Progress, Title } from '@mantine/core';
import Layout from 'components/Layout';
import {
  BlogFormProvider,
  BlogFormValues,
  StepSchemas,
  stepSchemas,
  useBlogForm,
} from './FormContext';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import blogsService from 'services/blogs';
import { notifications } from '@mantine/notifications';
import { yupResolver } from 'mantine-form-yup-resolver';
import { FormErrors } from '@mantine/form';

export default function BlogForm() {
  const navigate = useNavigate();
  const [step, setStep] = useState<keyof StepSchemas>(1);

  const form = useBlogForm({
    initialValues: {
      // Step 1
      title: '',
      author_name: '',

      // Step 2
      summary: '',
      category: null,

      // Step 3
      content: '',
    },
    validate: yupResolver(stepSchemas[step]) as unknown as (
      values: BlogFormValues
    ) => FormErrors,
    validateInputOnChange: true,
    validateInputOnBlur: true,
  });

  const { createBlog } = blogsService();

  const handleSubmit = async () => {
    createBlog({
      title: form.values.title,
      authorName: form.values.author_name,
      category: form.values.category!,
      content: form.values.content,
      summary: form.values.summary,
    }).then(() => {
      notifications.show({
        title: 'Blog successfully created!',
        message: 'Your blog can now be seen in blog list page',
        color: 'green',
        position: 'bottom-left',
        autoClose: 5000,
      });
      navigate('/');
    });
  };

  const handleClickBack = () => {
    if (step !== 1) {
      setStep((prev) => prev - 1);
    } else {
      navigate('/');
    }
  };

  const handleClickNext = () => {
    if (step !== 4) {
      setStep((prev) => prev + 1);
    } else {
      handleSubmit();
    }
  };

  return (
    <Layout className="pb-32">
      <Title>Create Blog</Title>

      <BlogFormProvider form={form}>
        <form className="flex flex-col gap-5">
          {step === 1 && <Step1 />}
          {step === 2 && <Step2 />}
          {step === 3 && <Step3 />}
          {step === 4 && <Step4 />}
        </form>
      </BlogFormProvider>

      <footer className="fixed -inset-x-0 bottom-0 flex w-full justify-between border-t bg-white p-5">
        <Button variant="outline" onClick={handleClickBack}>
          Back
        </Button>

        <Group grow gap={5} className="w-1/4">
          <Progress size="lg" value={step >= 1 ? 100 : 0} />
          <Progress size="lg" value={step >= 2 ? 100 : 0} />
          <Progress size="lg" value={step >= 3 ? 100 : 0} />
          <Progress size="lg" value={step >= 4 ? 100 : 0} />
        </Group>

        <Button
          onClick={handleClickNext}
          className="!w-[100px]"
          disabled={!form.isValid()}
        >
          {step === 4 ? 'Submit' : 'Next'}
        </Button>
      </footer>
    </Layout>
  );
}
