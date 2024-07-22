import { FaArrowUp } from 'react-icons/fa';

// Scroll up button

const ScrollUpButton = ({ jumpToTop }) => {
  // As prop getting jumpToTop function to set it onClick

  return (
    <button
      className="fixed flex justify-center items-center bottom-3 right-3 size-8 md:size-10 rounded-full p-1  bg-orange-400 bg-opacity-70 z-30"
      onClick={(event) => {
        jumpToTop();
      }}
    >
      <FaArrowUp
        className="size-4 md:size-6"
        color="white"
      />
    </button>
  );
};

export default ScrollUpButton;
