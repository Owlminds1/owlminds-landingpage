import { useState } from "react";
import { faqData } from "../../constants/data";

export default function FAQ() {
  const [activeId, setActiveId] = useState(null);

  const toggleAccordion = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div
      className="max-w-3xl md:max-w-4xl lg:max-w-6xl mx-auto py-8 px-4 sm:px-2"
      style={{ marginBottom: "30px" }}
    >
      <h1 className="text-2xl md:text-4xl lg:text-[54px] font-medium mb-4 md:mb-8 text-center text-black">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((item) => (
          <div key={item.id} className="border-b border-black">
            <button
              className="w-full flex justify-between items-center py-3 md:py-4 text-left"
              onClick={() => toggleAccordion(item.id)}
            >
              <div className="flex gap-2 md:gap-4">
                <span className="text-black font-small text-base md:text-xl lg:text-[24px]">
                  {item.id}
                </span>
                <span className="text-black font-small text-base md:text-xl lg:text-[24px]">
                  {item.question}
                </span>
              </div>
              <span className="text-2xl md:text-3xl lg:text-4xl text-black font-small">
                {activeId === item.id ? "−" : "+"}
              </span>
            </button>
            {activeId === item.id && (
              <div className="pb-3 md:pb-4 px-4 md:px-8 text-black font-medium text-sm md:text-base">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
