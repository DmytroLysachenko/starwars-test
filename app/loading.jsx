'use client';

import Page from '@components/Page';
import { ThreeCircles } from 'react-loader-spinner';

const Fallback = () => {
  return (
    <Page className="flex justify-center items-center">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#4fa94d"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </Page>
  );
};

export default Fallback;
