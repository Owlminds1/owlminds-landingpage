import React, { useState } from "react";
import LogoNav  from "@/assets/images/owlmindsLogoNew1.png";
import Image from "next/image";
import ForwardArrowIcon from "@/assets/icons/ForwardArrowIcon";

export default function Empower() {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleButtonClick = (date) => {
    setSelectedDate(date);
  };

  return (
    <>
      <div className="relative w-full sm:h-[1080px] h-[700px] bg-cover bg-center sm:bg-[url(../assets/images/empower.png)] bg-[url(../assets/images/empowerMob.png)]">
        {/* Logo positioned top-left */}
        <Image
          src={LogoNav}
          alt="Logo"
          width={200}
          height={80}
          className="absolute top-4 hidden sm:block left-4 z-10 !w-[200px]"
        />
        {/* Centered Text Container - Hidden on mobile, shown sm and up */}
        <div className="hidden sm:flex items-center justify-center h-full">
          <div className="text-center text-black max-w-3xl px-4">
            <p className="text-4xl sm:text-[54px] font-[500] pb-4 sm:pb-0 leading-12 sm:leading-[61px] text-white">
              From Ideas to Standing Ovations!
            </p>
            <p className="text-xl sm:text-[24px] leading-[30px] text-white">
            We prepare kids to pitch like pros—equipping them with the confidence, creativity, and strategy to raise investor funding, deliver a compelling investor pitch, and think like entrepreneurs!
            </p>
          </div>
        </div>
      </div>
      {/* Text Container for Mobile - Shown on mobile, hidden sm and up */}
      <div className="flex justify-center py-10 px-4 sm:hidden">
        <div className="text-center max-w-3xl">
            <p className="text-4xl font-[500] pb-4 leading-12 text-black">
              From Ideas to Standing Ovations!
            </p>
            <p className="text-xl leading-[30px] text-black">
            We prepare kids to pitch like pros—equipping them with the confidence, creativity, and strategy to raise investor funding, deliver a compelling investor pitch, and think like entrepreneurs!
            </p>
            <a
                href="/register"
                className="bg-[#7F00FF] text-white text-[16px] font-[700] leading-[24px] w-[80%] py-3 rounded-lg mt-4 text-center block mx-auto"
              >
                <span className="flex items-center justify-center">
                  Book a FREE Trial Class &nbsp;<ForwardArrowIcon color={"#fff"} height={14} width={24} className="pl-2" />
                </span>
              </a>
          </div>
      </div>
      <div
        className="w-full h-[700px] md:h-[459px] relative mb-24"
        style={{ background: "rgba(127, 0, 255, 1)" }}
      >
        <svg
          className="absolute top-0 left-0 w-full h-full"
          width="1440"
          height="459"
          viewBox="0 0 1440 459"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.43" clipPath="url(#clip0_454_2817)">
            <path
              d="M-901 635.633C-866.089 613.274 -831.248 590.81 -796.177 568.594C-621.566 457.725 -432.812 383.452 -228.194 351.532C-94.4636 330.684 40.0833 321.975 175.11 335.198C216.418 339.25 257.708 344.084 298.731 350.376C314.188 352.722 319.625 346.911 324.919 334.061C371.948 220.154 435.534 117.141 527.779 33.9451C617.838 -47.2599 723.408 -93.3273 845.092 -96.9885C936.235 -99.7256 1023.61 -78.2025 1106.05 -40.6304C1198.63 1.56274 1289.14 48.2347 1381.11 91.8497C1422.97 111.684 1466.15 128.729 1508.84 146.786C1515.23 149.488 1522.22 150.732 1530.55 153.131C1533.02 100.701 1540.46 51.3451 1560.33 4.93982C1605.68 -101.058 1676.06 -182.352 1788.82 -219.48C1842.71 -237.253 1897.82 -239.137 1952.49 -222.786C2064.92 -189.141 2118.59 -90.3408 2084.58 21.9136C2055.06 119.381 1986.3 181.657 1896.17 222.001C1819.61 256.268 1738.63 264.302 1655.7 256.055C1647.29 255.237 1638.87 254.597 1630.47 254.064C1628.78 253.957 1627.04 254.775 1620.96 256.179C1631.62 277.933 1640.51 299.35 1652.09 319.256C1714.49 426.818 1842.67 487.406 1965.57 471.322C2128.49 449.994 2264.51 375.489 2382.59 264.692C2501.62 153.06 2582.05 16.4924 2638.43 -135.396C2640.2 -140.372 2642.85 -145.082 2645.07 -149.934V38.3181C2627.66 67.0038 2610.76 96.0264 2592.75 124.321C2501.57 267.447 2384.06 382.812 2233.36 462.488C2140.64 511.506 2042.32 544.12 1936.93 546.501C1746.24 550.82 1592 432.274 1542.63 247.791C1540.98 241.606 1535.22 233.572 1529.68 231.795C1420.16 198.151 1319.87 144.085 1218.3 92.7209C1136.04 51.1321 1053.35 10.6804 962.815 -10.6827C809.79 -46.7975 677.996 -6.11499 565.16 100.026C488.373 172.255 435.748 261.298 394.6 357.539C393.653 360.589 392.981 363.717 392.593 366.887C429.299 378.28 465.738 388.41 501.361 400.869C633.172 446.99 751.142 515.239 843.227 622.428C920.459 712.342 963.738 815.603 954.127 935.979C943.094 1074.27 849.392 1173.3 718.771 1189.16C600.16 1203.57 500.72 1162.05 415.849 1082.36C328.188 1000.03 280.396 896.239 261.492 778.617C243.423 666.043 254.048 555.281 285.602 446.155C287.574 439.366 288.853 432.381 291.27 421.966C-150.73 357.699 -547.851 457.619 -900.875 729.724L-901 635.633ZM656.997 1118.53C728.064 1119.33 776.619 1103.69 811.815 1071.98C876.219 1013.91 890.859 939.409 878.032 857.6C864.635 772.29 821.285 702.158 761.198 641.943C656.179 536.673 525.612 479.337 384.26 442.263C368.963 438.264 362.94 441.481 358.712 456.481C330.996 554.233 317.049 652.962 331.919 754.535C345.973 850.509 381.044 937.082 447.03 1009.1C508.041 1075.78 582.359 1116.55 656.997 1118.53ZM1604.69 142.343C1605.31 174.743 1605.22 175.33 1628.69 178.866C1706.65 190.579 1783.69 188.695 1857.7 158.197C1924.54 130.648 1978.18 87.585 2007.73 19.692C2044.29 -64.3389 2006.96 -136 1917.68 -155.817C1874.38 -165.777 1828.97 -160.499 1789.11 -140.87C1671.05 -83.6409 1617.21 16.2965 1604.69 142.396V142.343Z"
              fill="#80C4E9"
            />
          </g>
          <defs>
            <clipPath id="clip0_454_2817">
              <rect
                width="3546"
                height="1426"
                fill="white"
                transform="matrix(-1 0 0 -1 2645 1192)"
              />
            </clipPath>
          </defs>
        </svg>

        {/* Text content positioned on the left side */}
        <div className="relative z-10 flex flex-col md:flex-row h-full">
          <div className="w-full md:w-1/2 flex items-center md:pl-16">
            <div className="text-white text-center md:text-left p-4">
              <h2 className="text-[36px] md:text-[54px] font-[500] leading-[40px] md:leading-[61px] mb-4 mt-10">
                Ready to Empower Your Child?
              </h2>
              <p className="text-[18px] md:text-[24px] font-[400] leading-[24px] md:leading-[30px] mb-6 max-w-lg">
                Sign up for a free personal trial class and experience the
                difference.
              </p>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end md:pr-16">
            <div
              className="bg-white rounded-[30px] shadow-lg p-6 mt-10 mx-auto"
              style={{ height: "372px", width: "100%", maxWidth: "364px" }}
            >
              <h3 className="text-lg font-semibold mb-4 text-black">
                Select date
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {[
                  "Tomorrow",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ].map((day, index) => (
                  <button
                    key={index}
                    className={`border rounded-lg p-2 text-black ${
                      selectedDate === day ? "bg-purple-200" : ""
                    }`}
                    style={{ borderColor: "rgba(217, 217, 217, 1)" }}
                    onClick={() => handleButtonClick(day)}
                  >
                    {day}
                    <br />
                    {index + 12} March
                  </button>
                ))}
              </div>
              <a
                href="/register"
                className="bg-[#7F00FF] text-white text-[16px] font-[700] leading-[24px] w-full py-2 rounded-lg mt-4 text-center block mx-auto"
              >
                Book a Free Class!
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
