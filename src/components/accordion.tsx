// components/Accordion.tsx
import { useState } from 'react';

type AccordionItem = {
  title: string;
  content: string;
};

type AccordionProps = {
  items: AccordionItem[];
};

const Accordion = ({ items }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div key={index} className="">
          <button
            className="flex items-center justify-between w-full ps-[20px] pb-[10px]  text-left  relative Syne-Regular sm:text-[24px] text-[20px] text-[#545454]"
            onClick={() => handleToggle(index)}
          >
            {item.title}
            <span className="absolute left-[0px] Syne-Regular text-[30px]">
              {activeIndex === index ? '-' : '+'}
            </span>
          </button>
          <div
            className={`overflow-hidden  ${
              activeIndex === index ? 'max-h-screen p-4 pb-0 pt-0' : 'max-h-0'
            }`}
          >
            <p className="text-gray-700 Syne-Regular sm:text-[15px] text-[14px] text-[#000]">{item.content}</p>
          
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
