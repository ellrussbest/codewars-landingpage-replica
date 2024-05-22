"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import home from "@/public/home.svg";
import dropdownImage from "@/public/dropdown.svg";
import careerOpportunities from "@/public/career-opportunities.svg";
import blog from "@/public/blog.svg";
import partnerSchools from "@/public/partner-schools.svg";
import missions from "@/public/missions.svg";

import localFont from "next/font/local";
const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});

export function WebNav() {
  const [dropdown, setDropdown] = useState(false);
  const [dropdownHover, setDropdownHover] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const forDevelopersNav = useRef<HTMLElement | null>(null);

  const handleClickDropdown = () => {
    setDropdown(!dropdown);
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
      if (window.innerWidth < 990) {
        setDropdown(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="w-full h-full gap-x-6 gap-y-6 justify-between ml-auto mr-auto flex items-center xd:hidden">
      <Link
        href="/"
        className="pl-0 float-left text-[#333] no-underline relative"
      >
        <Image
          src={home}
          alt="Codewars by Andela"
          className="h-[2.5rem] mt-0 mb-0 max-w-[100%] inline-block align-middle"
          loading="lazy"
        />
      </Link>

      <nav className="flex flex-1 justify-between items-center static float-right">
        <div className="text-[#a2a2a4] *:text-sm flex">
          <div ref={dropdownRef}>
            <Link
              href="/"
              className={`hover:text-white py-2 px-4 ${input_sans.className} font-normal flex justify-center items-center gap-1 transition ease-in-out duration-200`}
              onClick={() => handleClickDropdown()}
              onMouseEnter={() => setDropdownHover(true)}
              onMouseLeave={() => setDropdownHover(false)}
            >
              <div>For Developers</div>
              <div className="w-4 h-4 justify-center items-center flex">
                <Image
                  src={dropdownImage}
                  alt=""
                  width="24"
                  height="24"
                  className={`tranform transition ease-out duration-200 ${
                    dropdown ? "rotate-180" : "rotate-0"
                  } ${dropdownHover ? "invert" : "invert-[63.9%]"}`}
                />
              </div>
            </Link>

            <nav
              ref={forDevelopersNav}
              className={`transform ${
                dropdown ? "block" : "hidden"
              } w-[20rem] bg-[#222326] text-white font-light absolute p-4 text-left text-sm text-inherit rounded-2xl z-10 shadow mt-2 leading-[1.5]`}
              style={{
                backgroundImage: "url(/background.png)",
                backgroundSize: "200px",
              }}
            >
              <div className="grid gap-y-0 gap-x-0 grid-rows-[max-content] grid-cols-[1fr] auto-rows-max auto-cols-fr">
                <Link
                  href="/"
                  className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                  onClick={() => setDropdown(false)}
                >
                  <div className="flex-none col-span-1">
                    <div className="flex w-5 h-5 justify-center items-center">
                      <Image
                        src={careerOpportunities}
                        alt=""
                        className="invert"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <div className="font-bold"> Career opportunities </div>
                    <p className="text-sm opacity-60 mb-0 mt-0">
                      {" "}
                      Find meaningful and exciting software development jobs
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                  onClick={() => setDropdown(false)}
                >
                  <div className="flex-none col-span-1">
                    <div className="flex w-5 h-5 justify-center items-center">
                      <Image src={blog} alt="" className="invert" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <div className="font-bold"> Blog </div>
                    <p className="text-sm opacity-60 mb-0 mt-0">
                      {" "}
                      Deepen your knowledge with resources and insights from the
                      Codewars team
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                  onClick={() => setDropdown(false)}
                >
                  <div className="flex-none col-span-1">
                    <div className="flex w-5 h-5 justify-center items-center">
                      <Image src={partnerSchools} alt="" className="invert" />
                    </div>
                  </div>

                  <div className="flex flex-col justify-center items-start">
                    <div className="font-bold"> Partner schools </div>
                    <p className="text-sm opacity-60 mb-0 mt-0">
                      {" "}
                      Jumpstart your development career with one of our bootcamp
                      partners{" "}
                    </p>
                  </div>
                </Link>

                <Link
                  href="/"
                  className="grid gap-x-3 gap-y-0 rounded-lg grid-rows-[auto] grid-cols-max-content-fr auto-cols-fr items-start p-4 max-w-full hover:bg-[rgba(255,255,255,.05)]"
                  onClick={() => setDropdown(false)}
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
                      Challenge yourself with coding events that go beyond kata{" "}
                    </p>
                  </div>
                </Link>
              </div>
            </nav>
          </div>

          <Link
            href="/"
            className={`hover:text-white py-2 px-4 ${input_sans.className} font-normal transition ease-in-out duration-200`}
          >
            {" "}
            Blog{" "}
          </Link>
          <Link
            href="/"
            className={`hover:text-white py-2 px-4 ${input_sans.className} font-normal transition ease-in-out duration-200`}
          >
            {" "}
            For Educators{" "}
          </Link>
          <Link
            href="/"
            className={`hover:text-white py-2 px-4 ${input_sans.className} font-normal transition ease-in-out duration-200`}
          >
            {" "}
            For Companies{" "}
          </Link>
        </div>

        <div className="gap-y-4 gap-x-4 items-center ml-4 flex">
          <Link
            href="/"
            className={`shadow-inset-white text-white bg-[rgba(0,0,0,0)] p-[.5rem_1.25rem_.35rem] text-[.875rem] text-center tracking-[.04rem] rounded ${input_sans.className} font-normal inline-block hover:opacity-60 border-0 transition ease-in-out duration-200`}
          >
            Log in
          </Link>
          <Link
            href="/"
            className={`shadow-inset-red text-white bg-[rgba(0,0,0,0)] p-[.5rem_1.25rem_.35rem] text-[.875rem] text-center tracking-[.04rem] rounded ${input_sans.className} font-normal inline-block hover:opacity-60 border-0 transition ease-in-out duration-200`}
          >
            Join
          </Link>
        </div>
      </nav>
    </div>
  );
}
