import { Textarea } from '@mantine/core';
import { useBlogFormContext } from './FormContext';

export default function Step3() {
  const form = useBlogFormContext();

  return (
    <Textarea
      label="Content"
      placeholder="Write your blog content"
      size="md"
      rows={10}
      resize="vertical"
      {...form.getInputProps('content')}
    />
  );
}
