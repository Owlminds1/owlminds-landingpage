import React from "react";

const items = [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }];

export default function Stepper({ formpage }) {
  // console.log(formpage, "page no");
  return (
    <div className="lg:px-32 md:px-32 px-0 z-[9999] mx-0 mt-16 mb-16">
      <div className="relative w-full h-[2px] flex mx-auto my-0">
        <div
          className="bg-[#6653e2] transition duration-500 ease-in-out absolute top-0 left-0 h-full w-full"
          style={{
            width:
              formpage === 0
                ? "22%"
                : formpage === 1
                ? "50%"
                : formpage === 2
                ? "80%"
                : "100%",
          }}
        ></div>
        <div className="w-full h-px bg-[#e9ecf1] transition duration-500 ease-in-out absolute top-0 left-0"></div>
      </div>
      <ul className="w-full flex justify-between mt-[-20px] mb-0 mx-auto">
        {items.map((i) => (
          <li key={i.id}>
            <span
              className={`w-[40px] h-[40px] text-xs flex justify-center items-center rounded-full p-[5px] ${
                formpage >= i.id - 1
                  ? "bg-[#6653e2] text-white"
                  : "bg-white text-black border border-[#e9ecf1]"
              }  relative`}
            >
              {i.id}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
