import React from 'react';
import { ThreeCircles } from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className="flex w-full h-full items-center justify-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
