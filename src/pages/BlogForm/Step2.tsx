import { Select, Textarea } from '@mantine/core';
import { useBlogFormContext } from './FormContext';

const CATEGORY_ITEMS = ['Tech', 'Lifestyle', 'Business'];

export default function Step2() {
  const form = useBlogFormContext();

  return (
    <>
      <Select
        label="Category"
        placeholder="Select category"
        data={CATEGORY_ITEMS}
        size="md"
        {...form.getInputProps('category')}
      />
      <Textarea
        label="Blog Summary"
        placeholder="Write a brief intro to your blog"
        size="md"
        rows={5}
        resize="vertical"
        {...form.getInputProps('summary')}
      />
    </>
  );
}
