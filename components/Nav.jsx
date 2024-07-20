'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import ScrollUpButton from './ScrollUpButton';

const Nav = () => {
  const [isVisibleScrollUp, setIsVisibleScrollUp] = useState(false);

  useEffect(() => {
    console.log(window.scrollY);
    window.addEventListener('scroll', () => {
      console.log(window);
      if (window.scrollY > 200) {
        setIsVisibleScrollUp(true);
      } else {
        setIsVisibleScrollUp(false);
      }
    });
  });

  const jumpToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <header className="bg-gradient-to-r from-black via-blue-900 to-black  shadow-lg  relative z-20 after:[''] after:bg-gradient-to-r after:from-black after:via-blue-900 after:to-black after:absolute after:-bottom-1 after:left-0 after:w-full after:h-4 after:blur-sm after:-z-10">
        <nav className="flex-between w-full h-14 md:h-20 flex gap-5 justify-evenly shadow-md ">
          <Link
            href={'/'}
            className="flex flex-col items-center justify-center text-xs md:text-xl hover:text-blue-300"
          >
            <div className="relative size-8 md:size-12 rounded-full border-solid border-2 border-black bg-white">
              <Image
                src={'/assets/images/starship2.png'}
                alt="Navigation starship"
                fill
                className="object-contain"
              />
            </div>
            Home
          </Link>

          <Link
            href={'/heroes'}
            className="flex flex-col items-center justify-center text-xs md:text-xl hover:text-blue-300"
          >
            <div className="relative size-8 md:size-12">
              <Image
                src={'/assets/images/jediLogo.png'}
                alt="Navigation starship"
                fill
                className="object-contain"
              />
            </div>
            Heroes
          </Link>
        </nav>
      </header>
      {isVisibleScrollUp && <ScrollUpButton jumpToTop={jumpToTop} />}
    </>
  );
};
export default Nav;
