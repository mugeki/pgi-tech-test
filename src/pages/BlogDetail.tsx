import { Badge, Flex, Stack, Title } from '@mantine/core';
import ErrorNotFound from 'components/ErrorNotFound';
import Layout from 'components/Layout';
import dayjs from 'dayjs';
import { useParams } from 'react-router';
import blogsService from 'services/blogs';
import { Blog } from 'types/blog';
import { formatNewLines } from 'utils';

interface BlogDetailProps {
  previewData?: Blog;
  className?: string;
}
export default function BlogDetail({
  previewData,
  className,
}: BlogDetailProps) {
  const { blogId } = useParams();
  const { getBlogById } = blogsService();

  const blogData = previewData || getBlogById(+(blogId || 0));

  if (!blogData) {
    return <ErrorNotFound />;
  }

  const formattedSummary = formatNewLines(blogData.summary);
  const formattedContent = formatNewLines(blogData.content);

  return (
    <Layout className={className} withNavbar={!previewData}>
      <Title>{blogData.title}</Title>

      <Flex align="center" gap="sm" className="text-gray-500">
        <Badge color="pink">{blogData.category}</Badge>
        <span>&bull;</span>
        <p>{blogData.authorName}</p>
        <span>&bull;</span>
        <p>
          {dayjs(blogData.createdDateISO).format(
            'D MMMM YYYY, HH:mm'
          )}
        </p>
      </Flex>

      <Stack
        gap="sm"
        py="md"
        className="border-y text-sm text-gray-500"
      >
        <p className="font-semibold">Summary</p>
        <p>{formattedSummary}</p>
      </Stack>

      <p>{formattedContent}</p>
    </Layout>
  );
}
