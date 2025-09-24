import { Blog } from 'types/blog';

export default function blogsService() {
  const storedBlogs = localStorage.getItem('blogs');
  const blogs: Blog[] = storedBlogs ? JSON.parse(storedBlogs) : [];

  const getAllBlogs = () => blogs;

  const getBlogById = (blogId: number) =>
    blogs.find((blog) => blog.id === blogId);

  const createBlog = async (
    payload: Omit<Blog, 'id' | 'createdDateISO'>
  ) => {
    const lastId = blogs.length ? blogs[blogs.length - 1].id! : 0;
    const newBlog: Blog = {
      ...payload,
      id: lastId + 1,
      createdDateISO: new Date().toISOString(),
    };
    const newBlogs = [...blogs, newBlog];
    localStorage.setItem('blogs', JSON.stringify(newBlogs));
  };

  return { getAllBlogs, getBlogById, createBlog };
}
