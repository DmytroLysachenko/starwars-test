'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Nav = () => {
  return (
    <nav className="flex-between w-full h-14 md:h-20 flex gap-5 justify-evenly">
      <Link href={'/'}>
        <Image
          src={'/assets/images/starship2.png'}
          alt="Navigation starship"
          width={50}
          height={50}
          className="object-contain"
        />
        Home
      </Link>

      <Link href={'/heroes'}>
        <Image
          src={'/assets/images/jediLogo.png'}
          alt="Navigation starship"
          width={50}
          height={50}
          className="object-contain"
        />
        Heroes
      </Link>
    </nav>
  );
};
export default Nav;
