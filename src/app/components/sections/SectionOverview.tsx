import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import Link from "next/link";
import Image from "next/image";

import noisyImage from "@/public/noisyImage.png";
import runningTests from "@/public/running-tests.jpg";
import ranks from "@/public/ranks.png";

const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});
const ibm_plex_sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300"] });

export default function SectionOverview() {
  return (
    <section className="block">
      <div className="pl-[2.5rem] pr-[2.5rem]">
        <div className="mr-auto ml-auto w-full max-w-[80rem]">
          <div className="pt-0 pb-[6rem] leading-[1.5] xd:pb-[4rem]">
            <div className="grid gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-[1fr_1fr_1fr_1fr_1fr] xd:grid-cols-[1fr]">
              <div className="bg-[#222326] bg-hero-pattern bg-[size:200px,auto] bg-[position:0_0,0_0] overflow-hidden rounded-2xl grid row-start-span-1 row-end-span-1 col-start-span-5 col-end-span-5 xd:col-start-[span_1] xd:col-end-[span_1] xd:grid-cols-[1fr] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr_1fr] auto-cols-[1fr]">
                <div className="p-[4rem]">
                  <div className="bg-[#ff4d4d] bg-[position:0,0] bg-[size:200px] rounded-lg p-4 inline-block bg-[url(/background.png)]">
                    <div className="w-6 h-6 flex flex-none justify-center items-stretch">
                      <svg
                        width="30px"
                        height="26px"
                        viewBox="0 0 480 374"
                        version="1.1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g
                          id="Page-1"
                          stroke="none"
                          strokeWidth="1"
                          fill="none"
                          fillRule="evenodd"
                        >
                          <g
                            id="noun-code-2821480"
                            transform="translate(0.805394, 0.426000)"
                            fill="#FFFFFF"
                            fillRule="nonzero"
                          >
                            <path
                              d="M147.244606,2.84217094e-14 C181.623606,2.84217094e-14 181.623606,52.273 147.244606,52.273 C133.717606,52.273 120.224606,57.1402 120.224606,72.679 L120.224606,146.652 C120.224606,157.082 114.107406,166.09 105.271606,170.285 L77.4866063,186.57 L107.263606,204.023 C115.509706,208.8628 120.122606,217.562 120.126606,226.492 L120.224262,300.465 C120.224262,316.008 133.716262,320.863 147.244262,320.863 C181.623262,320.863 181.623262,373.14 147.244262,373.14 C104.451262,373.14 67.9472623,345.355 67.9472623,300.464 L67.9472623,241.351 L13.1702623,209.226 C-4.04073767,199.4955 -4.62273767,174.351 12.8382323,164.105 L67.9472323,131.796 L67.9472323,72.679 C67.9472323,27.781 104.451232,2.84217094e-14 147.244232,2.84217094e-14 L147.244606,2.84217094e-14 Z M331.134606,2.84217094e-14 C296.755606,2.84217094e-14 296.755606,52.273 331.134606,52.273 C344.661606,52.273 358.161606,57.1402 358.161606,72.679 L358.161606,146.652 C358.161606,157.082 364.278806,166.09 373.114606,170.285 L400.895606,186.57 L371.125606,204.023 C362.871706,208.8628 358.266606,217.562 358.262606,226.492 L358.164949,300.465 C358.164949,316.008 344.664949,320.863 331.137949,320.863 C296.758949,320.863 296.758949,373.14 331.137949,373.14 C373.938949,373.14 410.434949,345.355 410.434949,300.464 L410.434949,241.351 L465.219949,209.226 C482.422949,199.4955 483.020949,174.351 465.551979,164.105 L410.434979,131.796 L410.434979,72.679 C410.434979,27.781 373.938979,2.84217094e-14 331.137979,2.84217094e-14 L331.134606,2.84217094e-14 Z"
                              id="Shape"
                            ></path>
                          </g>
                        </g>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"> </div>
                  <h2
                    className={`${input_sans.className} font-normal leading-[1.25] text-[1.875rem] xd:text-[1.6rem]`}
                  >
                    {" "}
                    Sharpen your coding skills{" "}
                  </h2>
                  <div className="pt-0 pl-0 pr-0 pb-4"> </div>
                  <p
                    className={`text-[1.25rem] mb-0 mt-0 leading-[1.5] ${ibm_plex_sans.className}`}
                  >
                    Challenge yourself on small coding exercises called
                    &quot;kata&quot;. Each kata is crafted by the community to
                    help you strengthen different coding techniques. Master your
                    current language of choice, or quickly pick up any of the
                    55+ programming languages supported.
                  </p>
                  <div className="pt-0 pl-0 pr-0 pb-6"> </div>
                  <Link
                    className={`text-white bg-[rgba(0,0,0,0)] shadow-inset-white p-[.5rem_1.25rem_.35rem] text-[.875] text-center tracking-[.04em] rounded ${input_sans.className} font-normal hover:opacity-50 transition-opacity duration-200 ease-in-out`}
                    href="/"
                  >
                    Join the Dojo
                  </Link>
                </div>

                <div className="col-start-[span_1] col-end-[span_1] row-start-[span_1] row-end-[span_1] pr-0 w-full justify-between items-center p-[4rem] flex">
                  <div className="w-full relative overflow-hidden">
                    <Image src={noisyImage} alt="" />
                    <div className="bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] absolute top-0 bottom-0 left-0 right-0"></div>
                  </div>
                </div>
              </div>

              <div className="row-start-[span_1] col-start-[span_2] xd:col-start-[span_1] row-end-[span_1] col-end-[span_2] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row grid content-between bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem]">
                  <div className="bg-[#454549] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg p-4 inline-block">
                    <div className="w-6 h-6 flex flex-none justify-center items-stretch">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.86924 2.08198C10.1617 1.42403 10.8141 1 11.5342 1C13.4483 1 15 2.55171 15 4.46584V8H18.5032C20.9547 8 22.8294 10.1852 22.4567 12.6082L21.3797 19.6082C21.0795 21.5596 19.4005 23 17.4262 23H4C2.34315 23 1 21.6569 1 20V13C1 11.3431 2.34315 10 4 10H6.35013L9.86924 2.08198ZM8 21H17.4262C18.4134 21 19.2529 20.2798 19.403 19.3041L20.4799 12.3041C20.6663 11.0926 19.7289 10 18.5032 10H15C13.8954 10 13 9.10457 13 8V4.46584C13 3.69457 12.4043 3.06242 11.6479 3.00435L8.17775 10.8123C8.1277 10.9249 8.06805 11.0313 8 11.1306V21ZM6 12V21H4C3.44772 21 3 20.5523 3 20V13C3 12.4477 3.44772 12 4 12H6Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>

                  <h2
                    className={`${input_sans.className} text-[1.875rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    {" "}
                    Get instant feedback{" "}
                  </h2>

                  <div className="pt-0 pl-0 pr-0 pb-4"></div>

                  <p
                    className={`${ibm_plex_sans.className} text-[1.25rem] mb-0 mt-0`}
                  >
                    Solve kata with your coding style right in the browser and
                    use test cases (TDD) to check it as you progress. Retrain
                    with new, creative, and optimized approaches. Find all of
                    the bugs in your programming practice.
                  </p>
                </div>

                <div className="row-start-[span_1] col-start-[span_1] row-end-[span_1] col-end-[span_1] pt-0 w-full justify-between items-center p-[4rem] flex">
                  <div className="rounded-lg w-full relative overflow-hidden">
                    <Image
                      src={runningTests}
                      alt=""
                      loading="lazy"
                      className="brightness-[155%] object-cover max-w-[100%] inline-block align-middle border-0 w-[100%] h-[100%]"
                    />
                    <div className="bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] absolute top-0 bottom-0 left-0 right-0"></div>
                  </div>
                </div>
              </div>

              <div className="row-start-[span_1] col-start-[span_3] xd:col-start-[span_1] row-end-[span_1] col-end-[span_3] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem] ">
                  <div className="bg-[#454549] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg p-4 inline-block">
                    <div className="w-6 h-6 flex flex-none justify-center items-stretch">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M7.16147 1H16.8386C17.3657 0.999983 17.8205 0.999967 18.195 1.03057C18.5904 1.06287 18.9836 1.13419 19.362 1.32698C19.9265 1.6146 20.3854 2.07354 20.673 2.63803C20.8658 3.01641 20.9371 3.40963 20.9694 3.80497C21 4.17954 21 4.6343 21 5.16144V5.8775C21 5.90121 21 5.92472 21.0001 5.94804C21.0003 6.29465 21.0006 6.6004 20.9388 6.90157C20.8844 7.16636 20.7945 7.42259 20.6716 7.6633C20.5317 7.93709 20.3405 8.17569 20.1237 8.44619C20.1092 8.46438 20.0945 8.48272 20.0797 8.50122L16.4767 13.0049C18.583 15.3608 18.505 18.9803 16.2427 21.2426C13.8995 23.5858 10.1005 23.5858 7.75737 21.2426C5.49504 18.9803 5.41702 15.3608 7.52329 13.0049L3.92036 8.50122C3.90556 8.48271 3.89086 8.46437 3.87627 8.44617C3.65953 8.17568 3.46834 7.93708 3.32847 7.6633C3.20549 7.42258 3.11561 7.16636 3.06127 6.90157C2.99946 6.6004 2.9997 6.29465 2.99998 5.94804C2.99999 5.92471 3.00001 5.90121 3.00001 5.8775L3.00001 5.16146C2.99999 4.63431 2.99998 4.17955 3.03058 3.80497C3.06288 3.40963 3.1342 3.01641 3.32699 2.63803C3.61461 2.07354 4.07355 1.6146 4.63804 1.32698C5.01642 1.13419 5.40964 1.06287 5.80498 1.03057C6.17956 0.999967 6.63432 0.999983 7.16147 1ZM9.08416 11.7544C9.43451 11.5594 9.80026 11.4022 10.1754 11.2828L5.00149 4.63064C5.00012 4.79568 5.00001 4.98343 5.00001 5.2V5.8775C5.00001 6.3336 5.00473 6.42298 5.02043 6.49948C5.03854 6.58775 5.0685 6.67315 5.1095 6.75339C5.14503 6.82294 5.19718 6.89568 5.4821 7.25183L9.08416 11.7544ZM6.273 3.00781L12.0001 10.3712L17.727 3.00781C17.488 3.00036 17.191 3 16.8 3H7.20001C6.80907 3 6.51206 3.00036 6.273 3.00781ZM18.9985 4.63067L13.8247 11.2829C14.1998 11.4023 14.5655 11.5594 14.9159 11.7544L18.5179 7.25183C18.8028 6.89568 18.855 6.82294 18.8905 6.75339C18.9315 6.67315 18.9615 6.58775 18.9796 6.49948C18.9953 6.42298 19 6.3336 19 5.8775V5.2C19 4.98344 18.9999 4.7957 18.9985 4.63067ZM14.8284 19.8284C16.3905 18.2663 16.3905 15.7337 14.8284 14.1716C13.2663 12.6095 10.7337 12.6095 9.17158 14.1716C7.60949 15.7337 7.60949 18.2663 9.17158 19.8284C10.7337 21.3905 13.2664 21.3905 14.8284 19.8284Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>

                  <h2
                    className={`${input_sans.className} text-[1.875rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Earn ranks and honors
                  </h2>

                  <div className="pt-0 pl-0 pr-0 pb-4"></div>

                  <p
                    className={`text-[1.25rem] mb-0 mt-0 ${ibm_plex_sans.className}`}
                  >
                    Kata code challenges are ranked from beginner to expert
                    level. As you complete higher-ranked kata, you level up your
                    profile and push your software development skills to your
                    highest potential.
                  </p>
                </div>

                <div className="p-0 w-full justify-between items-center flex">
                  <div className="w-full relative overflow-hidden">
                    <Image
                      src={ranks}
                      alt=""
                      loading="lazy"
                      className="w-full h-full max-w-[100%] inline-block border-0"
                    />
                    <div className="bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] absolute top-0 bottom-0 left-0 right-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
