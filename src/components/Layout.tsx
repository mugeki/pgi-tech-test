import { ReactNode } from 'react';
import { classNames } from 'utils';
import Navbar from './Navbar';

interface LayoutProps {
  children: ReactNode;
  className?: string;
  withNavbar?: boolean;
}
export default function Layout({
  children,
  className,
  withNavbar = true,
}: LayoutProps) {
  return (
    <div>
      {withNavbar && <Navbar />}
      <div
        className={classNames(
          'flex flex-col gap-5 pt-24 p-10',
          className
        )}
      >
        {children}
      </div>
    </div>
  );
}
