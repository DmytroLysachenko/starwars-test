'use client';
import clsx from 'clsx';
import BackButton from './BackButton';
import { usePathname } from 'next/navigation';

const Page = ({ children, className }) => {
  const path = usePathname();

  return (
    <div
      className={clsx(
        'min-h-mobPageHeight md:min-h-tabPageHeight overflow-y-auto pb-5 pt-16 relative bg-general-page',
        className
      )}
    >
      {path !== '/' && <BackButton />}
      {children}
    </div>
  );
};

export default Page;
