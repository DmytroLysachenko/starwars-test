'use client';
import { FaArrowLeft } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

// Client side BackButton component created for navigating to previous page

const BackButton = () => {

// For returning used Next.js Navigation hook - useRouter and method back()

  const router = useRouter();

// Arrow icon from react-icons library

  return (
    <button
      type="button"
      className="fixed flex justify-center items-center top-16 md:top-24 left-4 size-8 md:size-10 rounded-full p-1  bg-orange-400 bg-opacity-70 z-30"
      onClick={() => {
        router.back();
      }}
    >
      <FaArrowLeft
        className="size-4 md:size-6"
        color="white"
      />
    </button>
  );
};

export default BackButton;
