import Image from "next/image";
import home from "@/public/home.svg";
import careerOpportunities from "@/public/career-opportunities.svg";
import { useEffect, useRef, useState } from "react";
import dropdownImage from "@/public/dropdown.svg";
import missions from "@/public/missions.svg";
import blog from "@/public/blog.svg";
import partnerSchools from "@/public/partner-schools.svg";
import Link from "next/link";

import localFont from "next/font/local";
const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});

export function MobileNav() {
  const [phoneMenuClicked, setPhoneMenuClicked] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const handlePhoneMenuClicked = () => {
    if (!phoneMenuClicked) {
      setDropdown(false);
    }
    setPhoneMenuClicked(!phoneMenuClicked);
  };

  useEffect(() => {
    const handleMouseDown = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        e.target instanceof Node &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdown(false);
      }
    };

    document.addEventListener("mousedown", (e) => handleMouseDown(e));

    return () => {
      document.removeEventListener("mousedown", handleMouseDown);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 990) {
        setPhoneMenuClicked(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full gap-x-6 gap-y-6 justify-between ml-auto mr-auto items-center xd:flex hidden">
      <Link
        href="/"
        className="pl-0 float-left text-[#333] no-underline relative"
      >
        <Image
          src={home}
          alt="Codewars by Andela"
          className="h-[2.5rem] mt-0 mb-0 w-full inline-block align-middle"
        />
      </Link>

      <nav
        className={`${
          phoneMenuClicked ? "block" : "hidden"
        } transform translate-x-0 translate-y-0 h-screen border-t-[1px] border-[rgba(255,255,255,.1)] bg-[#16171b] pt-4 pb-8 pr-[2.5rem] pl-[2.5rem] flex-1 overflow-auto absolute top-[100%] left-0 right-0 min-w-[200px] float-right text-center`}
        style={{
          backgroundImage: "url(/background.png)",
          backgroundSize: "200px",
        }}
      >
        <div ref={dropdownRef}>
          <div className="text-[#a2a2a4] text-sm">
            <div
              className="w-full block text-left z-50 ml-auto mr-auto relative overflow-visible"
              onClick={() => setDropdown(!dropdown)}
              onMouseEnter={() => setDropdownHover(true)}
              onMouseLeave={() => setDropdownHover(false)}
            >
              <div
                className={`hover:text-white ease-in-out duration-200 items-center pt-3 pb-3 pl-0 flex gap-x-1 gap-y-1 pr-4 ${input_sans.className} font-normal`}
              >
                <div>For developers</div>
                <div className="mt-0 mb-0 mr-0 w-4 h-4 justify-center items-center flex">
                  <Image
                    src={dropdownImage}
                    alt=""
                    className={`tranform transition ease-out duration-200 ${
                      dropdown ? "rotate-180" : "rotate-0"
                    } ${dropdownHover ? "invert" : "invert-[63.9%]"}`}
                  />
                </div>
              </div>

              <nav
                className={`${
                  dropdown ? "block" : "hidden"
                } overflow-hidden static min-w-full bg-[#222326] text-white rounded-2xl`}
                style={{
                  backgroundImage: "url(/background.png)",
                  backgroundSize: "200px",
                }}
              >
                <div className="p-2 grid gap-y-0 gap-x-0 grid-rows-[max-content] grid-cols-[1fr] auto-rows-[max-content] auto-cols-[1fr]">
                  <Link
                    href="/"
                    className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                    onClick={() => setPhoneMenuClicked(false)}
                  >
                    <div>
                      <div className="w-5 h-5 justify-center items-center flex">
                        <Image
                          src={careerOpportunities}
                          alt=""
                          className="invert"
                        />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="font-bold">Career Opportunities</div>
                      <p className="text-sm opacity-60 mb-0 mt-0">
                        Find meaningful and exciting software development jobs
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                    onClick={() => setPhoneMenuClicked(false)}
                  >
                    <div>
                      <div className="w-5 h-5 justify-center items-center flex">
                        <Image src={blog} alt="" className="invert" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="font-bold">Blog</div>
                      <p className="text-sm opacity-60 mb-0 mt-0">
                        Deepen your knowledge with resources and insights from
                        Codewars team
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                    onClick={() => setPhoneMenuClicked(false)}
                  >
                    <div>
                      <div className="w-5 h-5 justify-center items-center flex">
                        <Image src={partnerSchools} alt="" className="invert" />
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start">
                      <div className="font-bold">Partner schools</div>
                      <p className="text-sm opacity-60 mb-0 mt-0">
                        Jumpstart your development with one of our bootcamp
                        partners
                      </p>
                    </div>
                  </Link>
                  <Link
                    href="/"
                    className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                    onClick={() => setPhoneMenuClicked(false)}
                  >
                    <div className="flex-none col-span-1">
                      <div className="flex w-5 h-5 justify-center items-center">
                        <Image src={missions} alt="" className="invert" />
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-start">
                      <div className="flex items-center gap-x-2 gap-y-2">
                        <div className="font-bold"> Missions </div>
                        <div className="bg-[#ff4d4d] text-[#16171b] rounded-[3rem] pl-2 pr-2 block font-medium text-[.75rem]">
                          Preview
                        </div>
                      </div>
                      <p className="text-sm opacity-60 mb-0 mt-0">
                        {" "}
                        Challenge yourself with coding events that go beyond
                        kata{" "}
                      </p>
                    </div>
                  </Link>
                </div>
              </nav>
            </div>
            <Link
              href="/"
              className={`hover:text-white w-auto font-normal py-3 px-0 ${input_sans.className} block relative align-top text-left ml-auto mr-auto`}
              onClick={() => setPhoneMenuClicked(false)}
            >
              Blog
            </Link>
            <Link
              href="/"
              className={`hover:text-white w-auto font-normal py-3 px-0 ${input_sans.className} block relative align-top text-left ml-auto mr-auto`}
              onClick={() => setPhoneMenuClicked(false)}
            >
              For Educators
            </Link>
            <Link
              href="/"
              className={`hover:text-white w-auto font-normal py-3 px-0 ${input_sans.className} block relative align-top text-left ml-auto mr-auto`}
              onClick={() => setPhoneMenuClicked(false)}
            >
              For Companies
            </Link>
          </div>
          <div className="flex flex-col items-stretch mt-6 ml-0 gap-y-4 gap-x-4">
            <Link
              onClick={() => setPhoneMenuClicked(false)}
              href="/"
              className={`shadow-inset-white text-white bg-[rgba(0,0,0,0)] p-[.5rem_1.25rem_.35rem] text-[.875rem] text-center tracking-[.04rem] rounded ${input_sans.className} font-normal inline-block hover:opacity-60 border-0 transition ease-in-out duration-200`}
            >
              Log in
            </Link>
            <Link
              onClick={() => setPhoneMenuClicked(false)}
              href="/"
              className={`shadow-inset-red text-white bg-[rgba(0,0,0,0)] p-[.5rem_1.25rem_.35rem] text-[.875rem] text-center tracking-[.04rem] rounded ${input_sans.className} font-normal inline-block hover:opacity-60 border-0 transition ease-in-out duration-200`}
            >
              Join
            </Link>
          </div>
        </div>
      </nav>

      <div
        className="xd:block float-right cursor-pointer text-[24px] relative"
        onClick={() => handlePhoneMenuClicked()}
      >
        <div
          className={`w-[48px] h-[48px] flex flex-col justify-center mr-[-.5rem] pb-0 pr-0`}
        >
          <div
            className={`transition ease-in-out delay-100 ${
              phoneMenuClicked && "transform translate-y-[8px] rotate-[-45deg]"
            } w-[24px] h-[2px] bg-white pb-0 pr-0`}
          ></div>
          <div
            className={`transition ease-in-out delay-300 flex ${
              phoneMenuClicked
                ? "transform scale-0 w-0 h-[2px]"
                : "w-[24px] h-[2px]"
            } bg-white justify-center items-center mt-[6px] mb-[6px] pb-0 pr-0`}
          >
            <div className={`w-[4px] h-0 pb-0 pr-0`}></div>
          </div>
          <div
            className={`transition ease-in-out delay-100 ${
              phoneMenuClicked && "transform translate-y-[-8px] rotate-45"
            } w-[24px] h-[2px] bg-white pb-0 pr-0`}
          ></div>
        </div>
      </div>
    </div>
  );
}
