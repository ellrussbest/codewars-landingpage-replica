"use client";
import { WebNav } from "./WebNav";
import { MobileNav } from "./MobileNav";

export default function Navbar() {
  return (
    <>
      <div className="w-full bg-[#0a0a0c] fixed top-0 z-50">
        <div
          className="w-full bg-[rgba(22,23,27,.8)]  min-h-[4.5rem] pr-[2.5rem] pl-[2.5rem] items-center mt-0 flex shadow-xs static bg-pos-0_0 backdrop-filter backdrop-blur-[40px] top-0 bottom-auto left-0 right-0"
          style={{
            backgroundImage: "url(/background.png)",
            backgroundSize: "200px",
          }}
        >
          <WebNav />
          <MobileNav />
        </div>
        <div className="w-full hidden absolute top-[100%] left-0 right-0 overflow-hidden"></div>
      </div>
    </>
  );
}
