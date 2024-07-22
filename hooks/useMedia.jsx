import { useMediaQuery } from 'react-responsive';

// Custom hook useMedia created with react-responsive library for determining from which device application is opened
export const useMedia = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });
  return {
    isDesktop,
    isTablet,
    isMobile,
  };
};
