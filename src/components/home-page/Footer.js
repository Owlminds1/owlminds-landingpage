import React from "react";
import Image from "next/image";
import FooterIcon from "@/assets/images/design_asylum.png";
import Logo from "@/assets/images/owlmindsLogoNew.png";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import FacebookIcon from "@/assets/icons/FacebookIcon";
import LinkedInIcon from "@/assets/icons/LinkedInIcon";
import TwitterIcon from "@/assets/icons/TwitterIcon";
import YoutubeIcon from "@/assets/icons/YoutubeIcon";

export default function Footer() {
  // Try multiple approaches to get the image

  return (
    <div className="w-full relative pt-12 pb-4 sm:pt-0 sm:pb-0 bg-[rgba(127,0,255,1)]">
      <div className="bg-white mx-7.5 h-auto md:h-[264px] rounded-[30px] relative sm:top-15 z-[100] px-8 py-4 sm:px-4 sm:py-4 flex flex-col md:flex-row items-center justify-between">
        {/* Logo - centered on mobile, left on desktop */}
        <div className="flex items-start sm:items-center sm:justify-center w-full md:w-auto mb-6 sm:ml-4 md:mb-0">
        <Image src={Logo} width={270} height={100} />
        </div>

        {/* Links - stacked on mobile, side by side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-[80px] w-full md:w-auto mb-6 md:mb-0 md:ml-6">
          {/* First Column */}
          <div className="text-gray-700 font-medium flex flex-col gap-4 items-start md:items-start">
            <a href="/curriculum" className="hover:text-gray-600">
              Curriculum +Pricing
            </a>
            <a href="/faqs" className="hover:text-gray-600">
              FAQs
            </a>
            <a href="/contact" className="hover:text-gray-600">
              Contact Us
            </a>
          </div>

          {/* Second Column */}
          <div className="text-gray-700 font-medium flex flex-col gap-4 items-start md:items-start">
            <a href="/blog" className="hover:text-gray-600">
              Blogs
            </a>
            <a href="/terms" className="hover:text-gray-600">
              Terms & Conditions
            </a>
            <a href="/privacy" className="hover:text-gray-600">
              Privacy
            </a>
          </div>

          {/* Third Column - Social Media */}
          <div className="flex flex-col gap-4 items-start md:items-start mt-6 md:mt-0">
            <h3 className="text-gray-700 font-medium">Find us here</h3>
            <div className="flex gap-4 justify-center md:justify-start">
            <a
                href="https://www.youtube.com/@owlmindsofficial"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YoutubeIcon />
              </a>
              <a
                href="https://www.x.com/OwlMindsPvtLtd"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/owlminds/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <LinkedInIcon />
              </a>
              <a
                href=" https://www.instagram.com/owlmindsofficial/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/OwlMinds/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-2 sm:mt-24 relative z-50 px-7.5 py-2.5 text-white flex flex-col items-center md:items-start md:flex-row md:justify-between bg-transparent md:bg-transparent">
        <div className="text-center md:text-left">
          <p className="text-white text-sm md:text-lg mb-2 md:mb-0 flex flex-wrap justify-center md:justify-start">
            <a href="/terms" className="mr-2 no-underline">
              Terms & Conditions
            </a>
            <span className="md:mx-3 inline">|</span>
            <a href="/disclaimer" className="mx-2 no-underline">
              Disclaimer
            </a>
            <span className="md:mx-3 inline">|</span>
            <a href="/privacy" className="mx-2 no-underline">
              Privacy Policy
            </a>
            <span className="md:mx-3 inline">|</span>
            <a href="/sitemap" className="mx-2 no-underline">
              Sitemap
            </a>
          </p>
          <p className="text-white text-sm md:text-lg mt-2">
            COPYRIGHT © 2025. ALL RIGHTS RESERVED.
          </p>
        </div>
        {/* <div className="flex justify-center md:justify-start">
          <Image src={FooterIcon} width={150} height={20} />
        </div> */}
      </div>
      {/* <div className=""> */}
      <svg
        className="absolute top-0 left-0 w-full h-full"
        viewBox="0 0 1440 487"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0_350_697)">
          <path
            d="M-857 550.929C-825.958 530.24 -794.979 509.454 -763.794 488.897C-608.535 386.31 -440.701 317.584 -258.76 288.048C-139.852 268.758 -20.2163 260.699 99.8457 272.934C136.575 276.684 173.289 281.157 209.766 286.979C223.51 289.149 228.344 283.772 233.052 271.882C274.868 166.483 331.407 71.1645 413.429 -5.81689C493.507 -80.9563 587.376 -123.583 695.574 -126.971C776.616 -129.503 854.309 -109.588 927.61 -74.822C1009.93 -35.7804 1090.4 7.40552 1172.19 47.7627C1209.41 66.1158 1247.8 81.8873 1285.76 98.5959C1291.45 101.096 1297.65 102.247 1305.06 104.467C1307.26 55.9525 1313.88 10.2836 1331.54 -32.6556C1371.87 -130.736 1434.45 -205.958 1534.71 -240.313C1582.63 -256.758 1631.63 -258.501 1680.24 -243.371C1780.21 -212.24 1827.93 -120.819 1797.7 -16.9497C1771.44 73.2374 1710.3 130.862 1630.16 168.193C1562.09 199.9 1490.08 207.333 1416.34 199.703C1408.87 198.946 1401.38 198.354 1393.91 197.861C1392.41 197.762 1390.86 198.518 1385.46 199.818C1394.94 219.947 1402.83 239.764 1413.13 258.183C1468.62 357.711 1582.6 413.774 1691.87 398.891C1836.73 379.156 1957.68 310.216 2062.67 207.695C2168.51 104.401 2240.03 -21.9659 2290.16 -162.509C2291.74 -167.114 2294.09 -171.472 2296.06 -175.962V-1.77051C2280.58 24.7726 2265.56 51.6274 2249.54 77.8086C2168.47 210.244 2063.98 316.992 1929.98 390.717C1847.54 436.074 1760.11 466.251 1666.4 468.455C1496.85 472.451 1359.71 362.76 1315.81 192.056C1314.34 186.333 1309.22 178.899 1304.29 177.255C1206.91 146.124 1117.73 96.0963 1027.42 48.5688C954.276 10.0864 880.754 -27.3438 800.25 -47.1112C664.185 -80.5284 546.998 -42.8846 446.667 55.3278C378.39 122.162 331.597 204.554 295.01 293.607C294.168 296.429 293.571 299.323 293.225 302.257C325.863 312.798 358.264 322.172 389.938 333.701C507.141 376.377 612.037 439.528 693.916 538.71C762.588 621.908 801.071 717.456 792.525 828.841C782.714 956.804 699.397 1048.44 583.253 1063.11C477.788 1076.44 389.369 1038.03 313.904 964.286C235.958 888.111 193.463 792.069 176.654 683.233C160.588 579.067 170.035 476.579 198.092 375.604C199.845 369.321 200.983 362.859 203.131 353.221C-189.882 293.755 -542.99 386.211 -856.889 637.992L-857 550.929ZM528.326 997.753C591.516 998.493 634.69 984.021 665.985 954.682C723.252 900.955 736.269 832.015 724.863 756.317C712.952 677.378 674.406 612.485 620.978 556.767C527.599 459.361 411.502 406.307 285.816 372.002C272.214 368.302 266.859 371.279 263.099 385.159C238.455 475.609 226.053 566.964 239.276 660.95C251.772 749.755 282.956 829.861 341.629 896.498C395.878 958.202 461.96 995.927 528.326 997.753ZM1370.99 94.4846C1371.54 124.465 1371.46 125.007 1392.33 128.28C1461.65 139.117 1530.15 137.374 1595.96 109.154C1655.39 83.6633 1703.08 43.8165 1729.36 -19.0052C1761.87 -96.7595 1728.68 -163.068 1649.29 -181.405C1610.79 -190.621 1570.41 -185.737 1534.97 -167.574C1429.99 -114.62 1382.12 -22.1472 1370.99 94.5335V94.4846Z"
            fill="url(#paint0_linear_350_697)"
          />
          <path
            d="M-857 550.929C-825.958 530.24 -794.979 509.454 -763.794 488.897C-608.535 386.31 -440.701 317.584 -258.76 288.048C-139.852 268.758 -20.2163 260.699 99.8457 272.934C136.575 276.684 173.289 281.157 209.766 286.979C223.51 289.149 228.344 283.772 233.052 271.882C274.868 166.483 331.407 71.1645 413.429 -5.81689C493.507 -80.9563 587.376 -123.583 695.574 -126.971C776.616 -129.503 854.309 -109.588 927.61 -74.822C1009.93 -35.7804 1090.4 7.40552 1172.19 47.7627C1209.41 66.1158 1247.8 81.8873 1285.76 98.5959C1291.45 101.096 1297.65 102.247 1305.06 104.467C1307.26 55.9525 1313.88 10.2836 1331.54 -32.6556C1371.87 -130.736 1434.45 -205.958 1534.71 -240.313C1582.63 -256.758 1631.63 -258.501 1680.24 -243.371C1780.21 -212.24 1827.93 -120.819 1797.7 -16.9497C1771.44 73.2374 1710.3 130.862 1630.16 168.193C1562.09 199.9 1490.08 207.333 1416.34 199.703C1408.87 198.946 1401.38 198.354 1393.91 197.861C1392.41 197.762 1390.86 198.518 1385.46 199.818C1394.94 219.947 1402.83 239.764 1413.13 258.183C1468.62 357.711 1582.6 413.774 1691.87 398.891C1836.73 379.156 1957.68 310.216 2062.67 207.695C2168.51 104.401 2240.03 -21.9659 2290.16 -162.509C2291.74 -167.114 2294.09 -171.472 2296.06 -175.962V-1.77051C2280.58 24.7726 2265.56 51.6274 2249.54 77.8086C2168.47 210.244 2063.98 316.992 1929.98 390.717C1847.54 436.074 1760.11 466.251 1666.4 468.455C1496.85 472.451 1359.71 362.76 1315.81 192.056C1314.34 186.333 1309.22 178.899 1304.29 177.255C1206.91 146.124 1117.73 96.0963 1027.42 48.5688C954.276 10.0864 880.754 -27.3438 800.25 -47.1112C664.185 -80.5284 546.998 -42.8846 446.667 55.3278C378.39 122.162 331.597 204.554 295.01 293.607C294.168 296.429 293.571 299.323 293.225 302.257C325.863 312.798 358.264 322.172 389.938 333.701C507.141 376.377 612.037 439.528 693.916 538.71C762.588 621.908 801.071 717.456 792.525 828.841C782.714 956.804 699.397 1048.44 583.253 1063.11C477.788 1076.44 389.369 1038.03 313.904 964.286C235.958 888.111 193.463 792.069 176.654 683.233C160.588 579.067 170.035 476.579 198.092 375.604C199.845 369.321 200.983 362.859 203.131 353.221C-189.882 293.755 -542.99 386.211 -856.889 637.992L-857 550.929ZM528.326 997.753C591.516 998.493 634.69 984.021 665.985 954.682C723.252 900.955 736.269 832.015 724.863 756.317C712.952 677.378 674.406 612.485 620.978 556.767C527.599 459.361 411.502 406.307 285.816 372.002C272.214 368.302 266.859 371.279 263.099 385.159C238.455 475.609 226.053 566.964 239.276 660.95C251.772 749.755 282.956 829.861 341.629 896.498C395.878 958.202 461.96 995.927 528.326 997.753ZM1370.99 94.4846C1371.54 124.465 1371.46 125.007 1392.33 128.28C1461.65 139.117 1530.15 137.374 1595.96 109.154C1655.39 83.6633 1703.08 43.8165 1729.36 -19.0052C1761.87 -96.7595 1728.68 -163.068 1649.29 -181.405C1610.79 -190.621 1570.41 -185.737 1534.97 -167.574C1429.99 -114.62 1382.12 -22.1472 1370.99 94.5335V94.4846Z"
            fill="url(#paint1_linear_350_697)"
          />
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_350_697"
            x1="2296.06"
            y1="405.985"
            x2="-857"
            y2="405.985"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.0481643" stop-color="#7F00FF" />
            <stop offset="1" stop-color="#FF7F3E" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_350_697"
            x1="2296.06"
            y1="405.985"
            x2="-857"
            y2="405.985"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#FF7F3E" />
            <stop offset="0.951836" stop-color="#7F00FF" />
          </linearGradient>
          <clipPath id="clip0_350_697">
            <rect
              width="3153"
              height="1319.49"
              fill="white"
              transform="matrix(-1 0 0 -1 2296 1065.74)"
            />
          </clipPath>
        </defs>
      </svg>
      {/* </div> */}
    </div>
  );
}
