import { Button } from '@mantine/core';
import Layout from './Layout';
import { Link } from 'react-router';

export default function ErrorNotFound() {
  return (
    <Layout className="h-screen items-center justify-center">
      <p className="text-2xl font-semibold">404 Not Found</p>
      <Link to="/">
        <Button>Go back</Button>
      </Link>
    </Layout>
  );
}
