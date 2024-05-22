"use client";
import Link from "next/link";
import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import orangeRedGradient from "@/public/orange-red-gradient-bg.png";
import FloatingLangGrids from "@/src/app/components/header/FloatingLangGrids";
import { useState, MouseEvent } from "react";
const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});
const ibm_plex_sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300"] });

export default function Header() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <header className="relative block">
      <div className="h-[80vh] justify-center flex items-end">
        <div className="pl-10 pr-10">
          <div className="mr-auto ml-auto w-full max-w-[64rem]">
            <div className="pt-[6rem] pb-[6rem] leading-[1.5] xd:pt-[4rem] xd:pb-[4rem]">
              <div className="text-center">
                <h1
                  className={`text-white mt-0 mb-0 ${input_sans.className} text-[5rem] xd:text-[3.1rem] font-light leading-[1.1]`}
                >
                  <span className="bg-gradient-to-r from-[#f29871] to-[#ff4d4d] bg-clip-text text-transparent">
                    Achieve mastery
                  </span>
                  <br />
                  through challenge
                </h1>
                <div className="pt-0 pl-0 pr-0 pb-6"></div>
                <p
                  className={`text-[1.5rem] mb-0 mt-0 ${ibm_plex_sans.className}`}
                >
                  Improve your development skills by training with your peers on
                  code kata that continuously challenge and push your coding
                  practice.
                </p>
                <div className="pt-0 pl-0 pr-0 pb-8"></div>
                <div className="justify-center flex items-center gap-x-4 gap-y-4 flex-row flex-wrap">
                  <Link
                    href="/"
                    className={`px-8 pt-4 pb-[0.85rem] bg-[#ff4d4d] text-center tracking-[.04em] rounded ${input_sans.className} font-normal hover:opacity-50 transition-opacity duration-200 ease inline-block text-[#16171b]`}
                  >
                    {" "}
                    Get Started{" "}
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-[-1] mix-blend-hard-light absolute top-0 bottom-0 left-0 right-0">
              <Image
                src={orangeRedGradient}
                alt=""
                loading="lazy"
                className="w-full h-[150%] object-cover absolute top-0 bottom-0 left-0 right-0 inline-block"
              />
              <FloatingLangGrids />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
