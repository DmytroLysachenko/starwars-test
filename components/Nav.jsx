'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Nav = () => {
  return (
    <nav className="flex-between w-full h-14 md:h-20 flex gap-5 justify-evenly shadow-md">
      <Link
        href={'/'}
        className="flex flex-col items-center justify-center "
      >
        <Image
          src={'/assets/images/starship2.png'}
          alt="Navigation starship"
          width={30}
          height={30}
          className="object-contain"
        />
        Home
      </Link>

      <Link
        href={'/heroes'}
        className="flex flex-col items-center justify-center "
      >
        <Image
          src={'/assets/images/jediLogo.png'}
          alt="Navigation starship"
          width={30}
          height={30}
          className="object-contain"
        />
        Heroes
      </Link>
    </nav>
  );
};
export default Nav;
