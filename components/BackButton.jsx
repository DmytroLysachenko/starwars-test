'use client';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="flex justify-center items-center rounded-full p-2 size-8 bg-orange-400 opacity-70 fixed left-4 top-16 md:top-24"
      onClick={() => {
        router.back();
      }}
    >
      <FaArrowLeftLong
        color="white"
        className="w-5 h-5"
      />
    </button>
  );
};

export default BackButton;
