import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import CalendarIcon from "@/assets/icons/CalenderIcon";
import LogoNav  from "@/assets/images/owlmindsLogoNew.png";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="pt-5 pb-2">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:pl-3 lg:pr-0">
        <div className="relative flex h-16 items-center justify-between">
          {/* Logo and Links Section */}
          <div className="flex flex-1 items-center justify-start sm:items-stretch sm:justify-between">
            <div className="flex shrink-0 items-center pl-4 sm:pl-0">
              <Link href="/">
                <Image
                  src={LogoNav}
                  alt="Logo"
                  width={200}
                  height={140}
                  className="block sm:hidden"
                />
                <Image
                  src={LogoNav}
                  alt="Logo"
                  width={260}
                  height={120}
                  className="sm:block hidden"
                />
              </Link>
            </div>
            <div className="hidden sm:ml-6 sm:block sm:my-auto">
              <div className="flex space-x-4">
                <a
                  href="/curriculum"
                  className={`rounded-md px-3 py-1 text-lg relative ${
                    router.pathname === "/curriculum"
                      ? "font-bold text-black"
                      : "text-black hover:text-purple-700"
                  }`}
                >
                  Curriculum+Pricing
                  {router.pathname === "/curriculum" && (
                    <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[30px] h-[2px] bg-purple-700"></span>
                  )}
                </a>
                {/* <a
                  href="#"
                  className="rounded-md px-3 py-2 text-lg text-black hover:text-purple-700"
                >
                  FAQs
                </a> */}
              </div>
            </div>
            <div className="hidden sm:ml-0 sm:block sm:my-auto">
              <Link href="/register">
                <button className="bg-[#7F00FF] cursor-pointer flex items-center justify-center px-10 sm:px-24 py-4 rounded-3xl">
                  <CalendarIcon width={12} height={16} />
                  <p className="text-white pl-2 pt-[2px] text-xl font-semibold">
                    Book a FREE Trial Class
                  </p>
                </button>
              </Link>
            </div>
          </div>

          {/* Hamburger Toggle Button (Visible only on mobile) */}
          <div className="sm:hidden flex items-center pr-2">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isOpen ? "true" : "false"}
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} size-9`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} size-9`}
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Right-side icons (Visible on desktop only) */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {/* Your other icons */}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isOpen ? "block h-screen" : "hidden"} sm:hidden`}
        id="mobile-menu h-full"
      >
        <div className="space-y-1 px-2 pt-8 pb-3">
          <a
            href="/curriculum"
            className={`block rounded-md px-3 py-1 text-xl sm:text-5xl relative ${
              router.pathname === "/curriculum"
                ? "font-bold text-black"
                : "text-black hover:text-purple-700"
            }`}
          >
            Curriculum+Pricing
          </a>
          {/* <a
            href="#"
            className="block rounded-md px-3 mt-4 py-2 text-xl text-black hover:text-purple-700"
          >
            FAQs
          </a> */}

          <div className="mt-4 bg-amber-100 block sm:ml-6 sm:hidden sm:my-auto">
            <Link href="/register">
              <button className="bg-[#7F00FF] cursor-pointer w-full flex items-center justify-center px-10 py-3 rounded-xl">
                <CalendarIcon width={12} height={16} />
                <p className="text-white pl-2 pt-[2px]">
                  Book a Free Trial Classes
                </p>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
