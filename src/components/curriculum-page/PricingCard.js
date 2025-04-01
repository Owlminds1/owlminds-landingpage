import Image from "next/image";
import PriceCard4 from "@/assets/images/Card_4.png";
import PriceCard5 from "@/assets/images/Card_8.png";
import { pricingCardData } from "@/constants/data";

export default function PricingCard() {
  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-16 sm:mb-44 px-4 sm:px-2 text-black">
      <div className="mb-8">
        <p className="text-xl text-center sm:text-left pb-4">
          Smart plans for every need
        </p>
        <h2 className="text-4xl sm:text-5xl font-medium text-center sm:text-left">
          Owl Minds Pricing
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0 sm:gap-x-8">
        {pricingCardData.map((priceCard) => (
          <div
            key={priceCard.id}
            className={`col-span-1 ${
              priceCard.active
                ? "sm:transform sm:scale-105"
                : "sm:transform sm:scale-95"
            }  `}
          >
            <div className="relative">
              <Image
                src={priceCard.active ? PriceCard4 : PriceCard5}
                alt={"price-card-1"}
                className="w-full h-full"
              />
              <div
                className={`absolute top-6 left-4 px-3 py-1 rounded-lg text-3xl ${
                  priceCard.active ? "text-white" : "text-black"
                } font-bold`}
              >
                {priceCard.type}
                <div
                  className={`text-xl font-normal ${
                    priceCard.active ? "text-white" : "text-black"
                  }`}
                >
                  Lorem ipsum dolor sit amet, <br /> consectetur adipiscing
                  elit. Curabitur
                </div>
                <div className="flex items-end mt-5">
                  <p
                    className={`text-xl font-[400] mr-4 pb-1 line-through ${
                      priceCard.active ? "text-white" : "text-[#242424]"
                    } `}
                  >
                    ₹16000
                  </p>
                  <div
                    className={`text-5xl font-bold ${
                      priceCard.active ? "text-white" : "text-black"
                    }`}
                  >
                    ₹12000/
                    <span className={`text-xl font-bold mr-2`}>class</span>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-2 mt-[3rem]">
                  {priceCard.priceItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-x-4">
                      <svg
                        width="25"
                        height="26"
                        viewBox="0 0 25 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_566_2300)">
                          <path
                            d="M6.01587 12.9051L10.7548 17.644L20.2326 8.16614"
                            stroke={priceCard.active ? "#fff" : "#242424"}
                            stroke-width="1.89557"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_566_2300">
                            <rect
                              width="24.6424"
                              height="24.6424"
                              fill="white"
                              transform="translate(0.329102 0.583862)"
                            />
                          </clipPath>
                        </defs>
                      </svg>

                      <span
                        className={`${
                          priceCard.active ? "text-white" : "text-black"
                        } text-sm`}
                      >
                        {item.title}
                      </span>
                    </div>
                  ))}
                </div>

                {/* <a href="#" className="block">
                  <button className="sm:mt-[12rem] mt-[8rem] w-full sm:ml-[9px] ml-3 bg-purple-700 text-white py-3 px-4 sm:py-[13px] sm:px-[105px] rounded-lg font-semibold transition-colors">
                    Join Now!!
                  </button>
                </a> */}
              </div>
              <div className="absolute w-full bottom-20 px-6">
                <div className="flex justify-center items-center">
                  <button
                    className={`w-full font-semibold rounded-lg px-6 py-3 ${
                      priceCard.active
                        ? "bg-white text-black"
                        : "bg-purple-700 text-white"
                    }`}
                  >
                    Join Now!!
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
