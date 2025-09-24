import { Stack } from '@mantine/core';
import { useBlogFormContext } from './FormContext';
import BlogCard from 'components/BlogCard';
import BlogDetail from 'pages/BlogDetail';

export default function Step4() {
  const form = useBlogFormContext();
  return (
    <>
      <Stack gap="xs" className="mb-5">
        <h2 className="text-xl font-semibold">Preview Card :</h2>
        <section className="grid grid-cols-4">
          <BlogCard
            title={form.values.title}
            authorName={form.values.author_name}
            category={form.values.category!}
            summary={form.values.summary}
            createdDateISO={new Date().toISOString()}
          />
        </section>
      </Stack>

      <Stack gap="xs">
        <h2 className="text-xl font-semibold">Preview Page :</h2>
        <BlogDetail
          className="min-h-screen rounded-md border"
          previewData={{
            title: form.values.title,
            authorName: form.values.author_name,
            category: form.values.category!,
            content: form.values.content,
            summary: form.values.summary,
            createdDateISO: new Date().toISOString(),
          }}
        />
      </Stack>
    </>
  );
}
