'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollUpButton from './ScrollUpButton';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

// Nav component for navigation all over the application. Part of app layout.

const Nav = () => {
  const [isVisibleScrollUp, setIsVisibleScrollUp] = useState(false);
  const path = usePathname();

  // isVisibleScrollUp state for creating functional scroll up button

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        setIsVisibleScrollUp(true);
      } else {
        setIsVisibleScrollUp(false);
      }
    });
  }, []);

  // Setting in useEffect hook eventListener for changing  isVisibleScrollUp state value after scrolling 200 px down to true for appearing of button
  // Dependencies array is empty to carry out callback one time only

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  // jumpToTop button for returning to the top of page

  return (
    <>
      <header className="bg-gradient-to-r from-black via-blue-900 to-black  shadow-lg  relative z-20 after:[''] after:bg-gradient-to-r after:from-black after:via-blue-900 after:to-black after:absolute after:-bottom-1 after:left-0 after:w-full after:h-4 after:blur-sm after:-z-10">
        <nav className="flex-between w-full h-14 md:h-20 flex gap-5 justify-evenly shadow-md ">
          <Link
            href={'/'}
            className={clsx(
              'flex flex-col items-center justify-center text-xs md:text-xl  transition-all',
              path === '/' ? 'text-violet-400' : 'hover:text-violet-200'
            )}
          >
            <span className=" block relative size-8 md:size-12 rounded-full border-solid border-2 border-black bg-white">
              <Image
                src={'/assets/images/starship2.png'}
                alt="Navigation starship"
                fill
                className="object-contain"
              />
            </span>
            Home
          </Link>

          <Link
            href={'/heroes'}
            className={clsx(
              'flex flex-col items-center justify-center text-xs md:text-xl  transition-all ',
              path.includes('/heroes')
                ? 'text-violet-400'
                : 'hover:text-violet-200'
            )}
          >
            <span className="block relative size-8 md:size-12 bg-white rounded-full ">
              <Image
                src={'/assets/images/jediLogo.png'}
                alt="Jedi logo"
                fill
                className="object-contain"
              />
            </span>
            Heroes
          </Link>
        </nav>
      </header>
      {isVisibleScrollUp && <ScrollUpButton jumpToTop={jumpToTop} />}
    </>
  );
};
export default Nav;
