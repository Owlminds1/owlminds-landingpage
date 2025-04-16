import Image from "next/image";
import PriceCard4 from "@/assets/images/Card_4.png";
import PriceCard5 from "@/assets/images/Card_8.png";
import { pricingCardData } from "@/constants/data";
import Link from "next/link";

export default function PricingCard() {
  return (
    <>
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-6 sm:mb-10 px-4 sm:px-2 text-black">
      <div className="mb-8 sm:ml-11">
        <p className="text-xl text-center sm:text-left pb-4">
          Smart plans for every need
        </p>
        <h2 className="text-4xl sm:text-5xl font-medium text-center sm:text-left">
          OwlMinds Pricing
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-8 sm:gap-y-0">
        {pricingCardData.map((priceCard, index) => (
          <div
            key={priceCard.id}
            className={`col-span-1 ${
              priceCard.id === "3"
                ? "sm:transform sm:scale-100"
                :
              priceCard.id === "1" ?
              "sm:transform sm:scale-80"
              :
              priceCard.id === "2" ?
                 "sm:transform sm:scale-90"
                 : ""
            }  
            ${index === 0 ? 'sm:ml-2' : ''}
            ${index === 1 ? 'sm:mr-12' : ''}  
            ${index === 2 ? 'sm:mr-4' : ''}`}
          >
            <div className={`relative ${index === 0 ? "sm:h-150 h-130" :  index === 1 ? "sm:h-170 h-150" :""}`}>
              <Image
                src={priceCard.active ? PriceCard4 : PriceCard5}
                alt={"price-card-1"}
                className={`
                  ${
                    priceCard.active
                      ? "w-full h-[45rem]"
                      : "w-full h-full"
                  }`}
              />
              <div
                className={`absolute top-6 left-4 sm:px-3 px-1 py-1 rounded-lg sm:text-3xl text-xl ${
                  priceCard.active ? "text-white" : "text-black"
                } font-bold`}
              >
                {priceCard.type}
                 <span className="font-normal sm:text-lg  text-sm ml-2">{priceCard.classType}</span>
                 <span className="font-normal-700 text-sm text-[#F04438] bg-white float-right sm:p-2 p-1 rounded-[30px] mt-1">{priceCard.ClassLeft}</span>
                <div className={`flex items-end mt-5 ${priceCard.active ? "" : "sm:py-6 py-1"}`}>
                  <p
                    className={`text-xl font-[400] mr-4 pb-1 line-through ${
                      priceCard.active ? "text-white" : "text-[#242424]"
                    } `}
                  >
                    {priceCard.inCorrectPrice}
                  </p>
                  <div
                    className={`text-5xl font-bold ${
                      priceCard.active ? "text-white" : "text-black"
                    }`}
                  >
                    {priceCard.correctPrice}
                    {/* /
                    <span className={`text-xl font-bold mr-2`}>class</span> */}
                  </div>
                </div>
                <div
                  className={`text-xl font-normal my-6 ${
                    priceCard.active ? "text-white" : "text-black"
                  }`}
                >
                  {priceCard.desc}
                </div>
                
                <div className={`flex flex-col items-start ${priceCard.active ? "sm:gap-2 gap-4 mt-[2rem]" : "gap-6 mt-[3rem]"} `}>
                  {priceCard.priceItems.map((item) => (
                    <div key={item.id} className="flex items-center gap-x-4">
                      {!priceCard.active ?<svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1199_9671)">
                        <g clip-path="url(#clip1_1199_9671)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.847656 12.1647C0.847656 8.98207 2.11194 5.92983 4.36238 3.67939C6.61281 1.42895 9.66506 0.164673 12.8477 0.164673C16.0303 0.164673 19.0825 1.42895 21.3329 3.67939C23.5834 5.92983 24.8477 8.98207 24.8477 12.1647C24.8477 15.3473 23.5834 18.3995 21.3329 20.65C19.0825 22.9004 16.0303 24.1647 12.8477 24.1647C9.66506 24.1647 6.61281 22.9004 4.36238 20.65C2.11194 18.3995 0.847656 15.3473 0.847656 12.1647ZM12.1629 17.3007L19.0717 8.66387L17.8237 7.66547L11.9325 15.0271L7.75966 11.5503L6.73566 12.7791L12.1629 17.3007Z" fill="#7F00FF"/>
                        </g>
                        </g>
                        <defs>
                        <clipPath id="clip0_1199_9671">
                        <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.495605 0.166138)"/>
                        </clipPath>
                        <clipPath id="clip1_1199_9671">
                        <rect width="24" height="24" fill="white" transform="translate(0.847656 0.164673)"/>
                        </clipPath>
                        </defs>
                        </svg>
                        :
                        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_1199_9707)">
                          <g clip-path="url(#clip1_1199_9707)">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M1.00342 12.089C1.00342 8.90639 2.2677 5.85414 4.51814 3.60371C6.76857 1.35327 9.82082 0.0889893 13.0034 0.0889893C16.186 0.0889893 19.2383 1.35327 21.4887 3.60371C23.7391 5.85414 25.0034 8.90639 25.0034 12.089C25.0034 15.2716 23.7391 18.3238 21.4887 20.5743C19.2383 22.8247 16.186 24.089 13.0034 24.089C9.82082 24.089 6.76857 22.8247 4.51814 20.5743C2.2677 18.3238 1.00342 15.2716 1.00342 12.089ZM12.3186 17.225L19.2274 8.58819L17.9794 7.58979L12.0882 14.9514L7.91542 11.4746L6.89142 12.7034L12.3186 17.225Z" fill="white"/>
                          </g>
                          </g>
                          <defs>
                          <clipPath id="clip0_1199_9707">
                          <rect width="24.6424" height="24.6424" fill="white" transform="translate(0.651367 0.0904541)"/>
                          </clipPath>
                          <clipPath id="clip1_1199_9707">
                          <rect width="24" height="24" fill="white" transform="translate(1.00342 0.0889893)"/>
                          </clipPath>
                          </defs>
                          </svg>
                        }


                      <span
                        className={`${
                          priceCard.active ? "text-white" : "text-black"
                        } sm:text-xl text-lg font-[500]`}
                      >
                        {item.title}
                      </span>
                      <br/>
                    </div>
                  ))}
                </div>

                {/* <a href="#" className="block">
                  <button className="sm:mt-[12rem] mt-[8rem] w-full sm:ml-[9px] ml-3 bg-purple-700 text-white py-3 px-4 sm:py-[13px] sm:px-[105px] rounded-lg font-semibold transition-colors">
                    Join Now!!
                  </button>
                </a> */}
              </div>
              <div className="absolute w-full bottom-10 px-6">
                <div className="flex justify-center items-center">
                <Link href="/register">
                  <button
                    className={`w-full font-semibold text-xl rounded-lg sm:px-30 sm:py-4 px-25 py-3 ${
                      priceCard.active
                        ? "bg-white text-black"
                        : "bg-[#7F00FF] text-white"
                    }`}
                  >
                    Enroll Now!!
                  </button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="text-center p-4 mt-4">
        <p className="font-bold text-purple-700 text-[24px]">100% Risk-Free – Unused Classes? Money-Back Guarantee!</p>
        <p className="text-black text-[15px]">We believe in delivering value. If your child has unused classes, we’ll refund the amount for those sessions—no questions asked!</p>
    </div>
    </>
  );
}
