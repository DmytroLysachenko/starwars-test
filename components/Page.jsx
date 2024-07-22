'use client';
import clsx from 'clsx';
import BackButton from './BackButton';
import { usePathname } from 'next/navigation';

// Page component for setting sizes of the page in such way that only page without navigation header is scrollable

const Page = ({ children, className }) => {
  // As props getting children - markup inside the page and additional classnames if have

  const path = usePathname();

  // usePathname hook used for not displaying back button on the home page

  return (
    <div
      className={clsx(
        'min-h-mobPageHeight md:min-h-tabPageHeight overflow-y-auto pb-5 pt-16 relative',
        className
      )}
    >
      {path !== '/' && <BackButton />}
      {children}
    </div>
  );
};

export default Page;
