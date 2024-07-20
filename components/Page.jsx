import clsx from 'clsx';
import BackButton from './BackButton';

const Page = ({ children, className }) => {
  return (
    <div
      className={clsx(
        'min-h-mobPageHeight md:min-h-tabPageHeight overflow-y-auto pb-5 pt-16 relative bg-general-page',
        className
      )}
    >
      <BackButton />
      {children}
    </div>
  );
};

export default Page;
