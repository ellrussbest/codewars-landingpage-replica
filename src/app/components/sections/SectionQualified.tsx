import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import qualifiedByAndela from "@/public/qualifiedByAndela.svg";
import Link from "next/link";

const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});
const ibm_plex_sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300"] });

export default function SectionQualified() {
  return (
    <section className="block">
      <div className="pl-[2.5rem] pr-[2.5rem]">
        <div className="mr-[auto] ml-[auto] w-full max-w-[80rem]">
          <div className="bg-hero-pattern_3 bg-[position:0_0,0_0] bg-[size:200px,auto] bg-[#222326] rounded-2xl overflow-hidden">
            <div className="p-[4rem]">
              <div className="ml-[auto] mr-[auto] text-center w-full max-w-[48rem]">
                <h6
                  className={`tracking-[.2em] uppercase mt-0 mb-0 ${input_sans.className} text-[1rem] font-medium leading-[1.25]`}
                >
                  codewars IS&nbsp;BUILT ON
                </h6>
                <div className="pt-0 pl-0 pr-0 pb-[2rem]"></div>
                <Image
                  src={qualifiedByAndela}
                  alt=""
                  className="max-w-[100%] inline-block align-middle border-0"
                />
                <div className="pt-0 pl-0 pr-0 pb-[2rem]"></div>
                <p className="text-[1.25rem] mb-0 mt-0">
                  The world&apos;s most advanced coding assessment platform for
                  organizations looking to scale their hiring, upskilling, and
                  certification programs.
                </p>
                <div className="pt-0 pl-0 pr-0 pb-[2rem]"></div>
                <Link
                  href="/"
                  className={`${input_sans.className} bg-[#3cb652] text-[#16171b] text-center tracking-[.04em] rounded p-[.75rem_1.5rem_.6rem] font-normal hover:opacity-50 transition-opacity duration-200 ease-in-out border-0 inline-block`}
                >
                  {" "}
                  Learn more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
