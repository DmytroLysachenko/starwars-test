'use client';

import Page from '@components/Page';

// Client side Error component showing error message

const Error = ({ error, reset }) => {
  return (
    <Page className={'flex h-full flex-col justify-center items-center gap-10'}>
      <h2 className="text-center text-xl md:text-3xl">Something went wrong!</h2>
      <p className="text-red-300">{error.message}</p>
      <button
        className="block w-[200px] md:w-[200px] mx-auto p-3 md:p-5 md:text-xl rounded-xl bg-blue-800 bg-opacity-70 font-bold"
        onClick={() => reset()}
      >
        Try again
      </button>
    </Page>
  );
};

export default Error;
