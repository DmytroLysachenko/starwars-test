import BackButton from './BackButton';

const Page = ({ children, className }) => {
  return (
    <div
      className={
        'h-mobPageHeight md:h-tabPageHeight overflow-y-auto pb-5 pt-16 relative ' +
        className
      }
    >
      <BackButton />
      {children}
    </div>
  );
};

export default Page;
