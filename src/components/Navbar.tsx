import { Link, useLocation } from 'react-router';

export default function Navbar() {
  const { pathname } = useLocation();

  const getClassName = (path: string): string => {
    if (path === pathname) {
      return 'text-blue-500';
    }
    return '';
  };

  return (
    <header className="fixed top-0 z-10 w-full bg-white p-5 font-semibold text-gray-500 shadow">
      <Link to="/" className={getClassName('/')}>
        Home
      </Link>
    </header>
  );
}
