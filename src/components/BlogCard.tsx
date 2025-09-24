import { Badge, Card } from '@mantine/core';
import dayjs from 'dayjs';
import { Link } from 'react-router';
import { Blog } from 'types/blog';
import { formatNewLines } from 'utils';

interface BlogCardProps extends Omit<Blog, 'content'> {
  id?: number;
}
export default function BlogCard({
  id,
  title,
  authorName,
  category,
  summary,
  createdDateISO,
}: BlogCardProps) {
  const formattedSummary = formatNewLines(summary);

  const renderContent = () => (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      className="h-fit gap-3"
    >
      <Badge color="pink">{category}</Badge>

      <p className="font-semibold">{title}</p>

      <p className="text-sm text-gray-400">{formattedSummary}</p>

      <section className="mt-auto flex flex-col text-sm">
        <p>{authorName}</p>
        <p className="text-gray-400">
          {dayjs(createdDateISO).format('D MMMM YYYY, HH:mm')}
        </p>
      </section>
    </Card>
  );

  if (id) {
    return (
      <Link to={`/blog/${id}`} className="h-fit">
        {renderContent()}
      </Link>
    );
  }
  return renderContent();
}
