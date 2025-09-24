import { Button, Flex, Title } from '@mantine/core';
import BlogCard from 'components/BlogCard';
import Layout from 'components/Layout';
import { Link } from 'react-router';
import blogsService from 'services/blogs';

export default function BlogList() {
  const { getAllBlogs } = blogsService();
  const blogs = getAllBlogs();

  return (
    <Layout>
      <Flex justify="space-between">
        <Title>Blog List</Title>

        <Link to="/create-blog">
          <Button>Create Blog</Button>
        </Link>
      </Flex>

      <section className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-4">
        {blogs.length ? (
          blogs.map((blog) => (
            <BlogCard
              key={`blog-${blog.id}`}
              id={blog.id}
              title={blog.title}
              authorName={blog.authorName}
              category={blog.category}
              summary={blog.summary}
              createdDateISO={blog.createdDateISO}
            />
          ))
        ) : (
          <i className="text-gray-400">No blog yet.</i>
        )}
      </section>
    </Layout>
  );
}
