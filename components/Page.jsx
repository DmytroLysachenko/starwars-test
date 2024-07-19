const Page = ({ children, className }) => {
  return (
    <div
      className={
        'h-mobPageHeight md:h-tabPageHeight overflow-y-auto py-5 ' + className
      }
    >
      {children}
    </div>
  );
};

export default Page;
