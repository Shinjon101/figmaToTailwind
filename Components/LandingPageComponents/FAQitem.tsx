import { useState } from "react";

interface FAQitemProp {
  question: string;
  answer: string;
}

const FAQitem = ({ question, answer }: FAQitemProp) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex flex-col">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex flex-row items-center gap-4 md:mx-20  cursor-pointer"
      >
        <img
          className="size-7 rounded-full"
          src="../../assets/icons/qMark.jpg"
        />
        <h1 className="text-white text-xl font-bold leading-loose">
          {question}
        </h1>
      </div>
      <div
        className={`overflow-hidden text-start transition-all duration-500 ease-in-out pl-30 mt-2 ${
          isOpen ? "max-h-[500px] opacity-100 " : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-lg tracking-normal leading-7 text-white opacity-65 mb-5 max-sm:text-base max-sm:leading-7">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default FAQitem;
