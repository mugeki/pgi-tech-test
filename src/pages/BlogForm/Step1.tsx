import { TextInput } from '@mantine/core';
import { useBlogFormContext } from './FormContext';

export default function Step1() {
  const form = useBlogFormContext();

  return (
    <>
      <TextInput
        label="Blog Title"
        placeholder="Input your blog title"
        size="md"
        {...form.getInputProps('title')}
      />
      <TextInput
        label="Author Name"
        placeholder="Input author name"
        size="md"
        {...form.getInputProps('author_name')}
      />
    </>
  );
}
