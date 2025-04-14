import { Swiper, SwiperSlide } from "swiper/react";
// import { Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

//import "@/styles/globals.css";

import { Autoplay, Parallax, Pagination, Navigation } from "swiper/modules";
import { testimonialData } from "@/constants/data";
import Image from "next/image";
import StarIcon from "@/assets/icons/StartIcon";
import CommaIcon from "@/assets/images/CommaIcon-2.png";
import { useRef, useState } from "react";
import { ChevronIcon } from "@/assets/icons/ForwardArrowIcon";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isLastSlide, setIsLastSlide] = useState(false);
  const [isFirstSlide, setIsFirstSlide] = useState(false);
  const swiperRef = useRef(null);
  const handleSlideChange = (swiper) => {
    const activeSlideIndex = swiper.activeIndex;
    setActiveIndex(activeSlideIndex);

    // Check if we've reached the First slide
    if (activeSlideIndex === 0) {
      setIsFirstSlide(false);
    } else {
      setIsFirstSlide(true);
    }

    // Check if we've reached the last slide
    if (activeSlideIndex === testimonialData.length - 1) {
      setIsLastSlide(true);
    } else {
      setIsLastSlide(false);
    }
  };
  return (
    <div className="max-w-3xl md:max-w-4xl lg:max-w-7xl mx-auto mb-16 sm:mb-44 px-4 sm:px-2 text-black">
      <div className="w-full flex-col items-center justify-center mb-8 sm:mb-0">
        <p className="text-base sm:text-xl text-center">See the Impact</p>
        <div className="flex justify-center">
          <h2 className="text-3xl md:text-4xl lg:text-[54px] sm:w-1/2 text-center">
          Voices of OwlMinds: Students, Parents & Experts
          </h2>
        </div>
      </div>

      {/* SWIPER */}
      <div className="testimonial-swiper ml-0 sm:ml-16">
        <Swiper
          ref={swiperRef}
          modules={[Autoplay]} // Add the Autoplay module
          spaceBetween={50}
          slidesPerView={1}
          autoplay={{
            delay: 3000, // Set autoplay interval to 3 seconds
            disableOnInteraction: false, // Keep autoplay running even when interacting
          }}
          onSlideChange={handleSlideChange}
        >
          {testimonialData.map((slide) => (
            <SwiperSlide className="">
              <div className="flex flex-col sm:flex-row sm:items-center sm:px-4 sm:py-8">
                <div className="">
                  <Image
                    src={slide.image}
                    alt={slide.name}
                    // className="absolute h-full w-full object-cover"
                  />
                </div>
                <div className="sm:absolute w-full sm:w-3xl sm:left-[360px] text-black p-12 bg-[#FFFAF2] rounded-2xl">
                  <div className="absolute top-[52%] sm:-top-4 right-8 sm:right-8">
                    <Image src={CommaIcon} height={60} width={60} />
                  </div>
                  <div className="flex gap-2 mb-4">
                    {[1, 2, 3, 4, 5].map((_, i) => (
                      <div key={i}>
                        <StarIcon />
                      </div>
                    ))}
                  </div>
                  <p className="text-lg text-gray-600">{slide.desc}</p>
                  <h2 className="text-2xl font-semibold text-gray-800 mt-4">
                    {slide.name}
                  </h2>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="absolute w-full left-0 right-0 px-2 flex justify-center gap-4 mt-4">
          <button
            onClick={() => swiperRef.current.swiper.slidePrev()} // Go to the previous slide
            className={`text-white ${
              isFirstSlide ? "bg-purple-700" : "bg-purple-200"
            } p-2 rounded-sm rotate-180`}
          >
            <ChevronIcon />
          </button>
          <button
            onClick={() => swiperRef.current.swiper.slideNext()} // Go to the next slide
            className={`text-white ${
              isLastSlide ? "bg-purple-200" : "bg-purple-700"
            } p-2 rounded-sm`}
          >
            <ChevronIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
