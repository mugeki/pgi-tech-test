import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import BlogDetail from 'pages/BlogDetail';
import BlogForm from 'pages/BlogForm';
import BlogList from 'pages/BlogList';
import { useEffect } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

const router = createBrowserRouter([
  {
    path: '/',
    Component: BlogList,
  },
  {
    path: '/blog/:blogId',
    Component: BlogDetail,
  },
  {
    path: '/create-blog',
    Component: BlogForm,
  },
]);

const initialBlogs = [
  {
    id: 1,
    title: 'First Blog Post',
    authorName: 'Jane Doe',
    category: 'Technology',
    summary: 'A brief summary of the first blog post.',
    content:
      'This is the full content for the first blog post. It discusses the latest trends in web development, focusing on React and modern JavaScript frameworks.',
    createdDateISO: new Date().toISOString(),
  },
  {
    id: 2,
    title: 'Second Blog Post',
    authorName: 'John Smith',
    category: 'Travel',
    summary: 'Exploring the world one adventure at a time.',
    content:
      'The full content of the second blog post. It details a recent trip to the Swiss Alps, including tips on hiking trails and local cuisine.',
    createdDateISO: new Date().toISOString(),
  },
];

function App() {
  // Init first blogs data
  useEffect(() => {
    const storedBlogs = localStorage.getItem('blogs');
    if (!storedBlogs) {
      localStorage.setItem('blogs', JSON.stringify(initialBlogs));
    }
  }, []);

  return (
    <MantineProvider>
      <Notifications />
      <RouterProvider router={router} />
    </MantineProvider>
  );
}

export default App;
