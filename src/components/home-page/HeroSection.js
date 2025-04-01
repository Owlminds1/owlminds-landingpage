import Image from "next/image";
import HeroCreatorImage from "@/assets/images/Hero_Banner.png";
import HeroCreatorImageMob from "@/assets/images/Hero_Banner_mob.png";
import HeroCalenderImage from "@/assets/images/calender_frame.png";
import HeroCurriculumImage from "@/assets/images/medal.png";
import AboutUsIcon from "@/assets/images/about_us_icon.png";
import Calender from "@/assets/images/Calendar-3.png";

export default function HeroSection() {
  return (
    <div className="max-w-3xl md:max-w-5xl lg:max-w-7xl mx-auto mb-16 sm:mb-44 px-4 sm:px-2 text-black">
      <div className="grid grid-col-1 sm:grid-cols-9 sm:grid-rows-9 gap-y-5 sm:gap-y-0 sm:gap-x-2 mb-20 sm:mb-16">
        <div className="col-span-1 sm:col-span-6 sm:row-span-9 relative rounded-2xl">
          {/* Creator */}
          <div className="relative">
            <div className="absolute md:top-35 top-10 sm:left-6 left-4 p-2 bg-opacity-75 rounded z-10 text-black md:text-[90px] text-[45px] font-bold leading-[40px] md:leading-[80px] text-center md:text-left">
              CREATORS
              <br />
              FOR Life
              <div className="md:text-[32px] text-[20px] font-medium leading-[30px] mt-4 text-center md:text-left">
                Help your child unlock their{" "}
                <span className="hidden md:inline">
                  <br />
                </span>
                potential.
              </div>
            </div>
            <Image
              src={HeroCreatorImageMob}
              alt="Creator-Image"
              layout="responsive"
              objectFit="contain"
              className="sm:hidden "
            />
            <Image
              src={HeroCreatorImage}
              alt="Creator-Image"
              objectFit="contain"
              className="hidden sm:block"
            />
          </div>
        </div>

        {/* Calender */}
        <div className="col-span-1 sm:col-span-3 sm:row-span-6 sm:col-start-7">
          <div className="relative">
            <div className="absolute md:top-6 top-7 sm:left-4 text-center sm:text-left w-full md:text-3xl text-3xl p-2 text-white bg-opacity-75 rounded z-10 leading-8 md:leading-8">
              <p className="w-full sm:w-1/2">Book a Trial Class</p>
            </div>
            <Image
              src={HeroCalenderImage}
              alt="Hero-Calender-Image"
              objectFit="contain"
            />

            <Image
              src={Calender}
              className="absolute w-[190px] sm:h-[250px] sm:w-[230px] top-[57%] sm:top-[60%] left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            />

            <div>
              <button className="absolute rounded-md -bottom-2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#7f00ff] px-3 py-1 text-xs text-white">
                Book a FREE Trial Class
              </button>
            </div>
          </div>
        </div>

        {/* Badge UI */}
        <div className="col-span-1 sm:col-span-3 sm:row-span-3 sm:col-start-7 sm:row-start-7">
          <div className="relative">
            <div className="absolute top-0 sm:top-2 left-4 px-2 py-4 sm:py-2 text-white md:text-[28px] text-[24px] font-bold bg-opacity-75 rounded z-10 md:leading-[40px] leading-[30px]">
              <span className="font-[500] md:font-[500]">
                Develop <span className="font-[700]">Leadership</span>
              </span>
              <div className="font-[700] md:font-[700]">
                & Critical Thinking
              </div>
              <div className="font-[500] md:font-[500]">Skills</div>
              <a href="/" download>
                <button className="bg-white text-black px-4 py-2 rounded-xl font-[400] text-xl mt-4 sm:mt-2 flex items-center gap-2 cursor-pointer">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <mask
                      id="mask0_454_3011"
                      style={{ maskType: "alpha" }}
                      maskUnits="userSpaceOnUse"
                      x="0"
                      y="0"
                      width="24"
                      height="24"
                    >
                      <rect width="24" height="24" fill="black" />
                    </mask>
                    <g mask="url(#mask0_454_3011)">
                      <path
                        d="M12 15.8209L7 11.3122L8.4 10.0046L11 12.3492V5H13V12.3492L15.6 10.0046L17 11.3122L12 15.8209ZM6 19.4278C5.45 19.4278 4.97917 19.2512 4.5875 18.898C4.19583 18.5449 4 18.1203 4 17.6243V14.9191H6V17.6243H18V14.9191H20V17.6243C20 18.1203 19.8042 18.5449 19.4125 18.898C19.0208 19.2512 18.55 19.4278 18 19.4278H6Z"
                        fill="#292929"
                      />
                    </g>
                  </svg>
                  Download Curriculum
                </button>
              </a>
            </div>
            <Image
              src={HeroCurriculumImage}
              alt="Curriculum-Image"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <div className="flex flex-col sm:flex-row items-start gap-x-60">
        <div className="w-full mb-4 sm:mb-0 flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-start">
          <div className="h-12 w-12 sm:h-20 sm:w-20 ">
            <Image src={AboutUsIcon} />
          </div>
          <h2 className="uppercase text-3xl md:text-5xl font-medium sm:pl-8 -mt-4 sm:mt-0">
            About OwlMinds
          </h2>
        </div>
        <p className="text-base sm:text-2xl max-w-2xl text-center sm:text-left">
          Unlock your child’s potential with a curriculum built on 15
          Officer-Like Qualities like{" "}
          <b>reasoning, resilience, and decision-making</b>—through personalized
          classes in leadership, entrepreneurship, and technology."
        </p>
      </div>
    </div>
  );
}
