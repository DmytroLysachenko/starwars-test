'use client';
import { FaArrowLeftLong } from 'react-icons/fa6';
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();
  return (
    <button
      type="button"
      className="flex justify-center items-center rounded-full p-2 w-10 bg-orange-400 absolute left-5 top-5"
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
