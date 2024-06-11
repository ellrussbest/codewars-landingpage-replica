"use client";
import localFont from "next/font/local";
import developer1 from "@/public/developer-1.jpeg";
import developer2 from "@/public/developer-2.jpeg";
import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const carouselArray = [
  {
    image: developer1,
    testimony:
      "Extremely well done and an excellent example of mastery learning.",
    name: "Ahmed Omran",
    username: "@this_ahmed",
  },
  {
    image: developer2,
    testimony: "Accidentally got addicted to codewars, oops.",
    name: "Kelly Williams",
    username: "Coder",
  },
];

const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});

export default function SectionFaq() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const intervalId = useRef<NodeJS.Timeout | undefined>(undefined);

  const startInterval = useCallback(() => {
    intervalId.current = setInterval(() => {
      setCurrentSlide((currentSlide) => {
        if (currentSlide === carouselArray.length - 1) return 0;
        else return currentSlide + 1;
      });
    }, 5000);
  }, []);

  const stopInterval = () => {
    if (intervalId.current) {
      clearInterval(intervalId.current);
    }
  };

  useEffect(() => {
    startInterval();
    return () => {
      stopInterval();
    };
  }, [startInterval]);

  return (
    <section className="block">
      <div className="pl-[2.5rem] pr-[2.5rem]">
        <div className="mr-[auto] ml-[auto] w-full max-w-[48rem]">
          <div className="pt-0 pb-12">
            <div className="text-center">
              <h2
                className={`mt-0 mb-0 ${input_sans.className} text-[3.625rem] xd:text-[2.4rem] font-light leading-[1.25]`}
              >
                What can I use Codewars for?
              </h2>
              <div className="pt-0 pl-0 pr-0 pb-6"></div>
              <p className="text-[1.5rem] mb-0 mt-0">
                From beginner to expert and beyond...
              </p>
            </div>
          </div>
        </div>

        <div className="mr-[auto] ml-[auto] w-full max-w-[80rem]">
          <div className="pt-0 pb-24 xd:pb-[4rem] leading-[1.5]">
            <div className="gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-[1fr_1fr_1fr_1fr_1fr_1fr] xd:grid-cols-[1fr] auto-cols-[1fr] grid">
              <div className="row-start-[span_1] col-start-[span_2] xd:col-start-[span_1] row-end-[span_1] col-end-[span_2] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem]">
                  <div className="p-2 bg-[#ff4d4d] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg inline-block">
                    <div className="w-[1.25rem] h-[1.25rem] flex flex-none justify-center items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M5.29889 6.86925C4.04365 7.91689 3.16523 9.14798 2.72134 9.85083C2.69189 9.89746 2.67129 9.93013 2.65407 9.95848C2.64271 9.97718 2.63522 9.99013 2.6302 9.99915C2.6302 9.99949 2.6302 9.99982 2.6302 10.0002C2.6302 10.0005 2.6302 10.0008 2.6302 10.0012C2.63522 10.0102 2.64272 10.0231 2.65407 10.0418C2.67129 10.0702 2.69189 10.1029 2.72134 10.1495C3.16523 10.8524 4.04365 12.0834 5.29889 13.1311C6.55217 14.1771 8.13088 15.0002 10.0003 15.0002C11.8698 15.0002 13.4485 14.1771 14.7018 13.1311C15.957 12.0834 16.8354 10.8523 17.2793 10.1495C17.3088 10.1029 17.3294 10.0702 17.3466 10.0418C17.3579 10.0231 17.3654 10.0102 17.3705 10.0012C17.3705 10.0008 17.3705 10.0005 17.3705 10.0002C17.3705 9.99983 17.3705 9.99949 17.3705 9.99915C17.3654 9.99013 17.3579 9.97719 17.3466 9.95848C17.3294 9.93013 17.3088 9.89746 17.2793 9.85083C16.8354 9.14798 15.957 7.91689 14.7018 6.86925C13.4485 5.82325 11.8698 5.00016 10.0003 5.00016C8.13088 5.00016 6.55217 5.82325 5.29889 6.86925ZM4.23095 5.58969C5.67145 4.38743 7.6156 3.3335 10.0003 3.3335C12.3851 3.3335 14.3292 4.38743 15.7697 5.58969C17.2082 6.79031 18.1945 8.17873 18.6885 8.96087C18.695 8.97121 18.7017 8.98175 18.7086 8.99253C18.8066 9.14681 18.9338 9.34713 18.9982 9.6278C19.0501 9.85443 19.0501 10.1459 18.9982 10.3725C18.9338 10.6532 18.8066 10.8535 18.7086 11.0078C18.7017 11.0186 18.695 11.0291 18.6885 11.0395C18.1945 11.8216 17.2082 13.21 15.7697 14.4106C14.3292 15.6129 12.3851 16.6668 10.0003 16.6668C7.6156 16.6668 5.67145 15.6129 4.23095 14.4106C2.79241 13.21 1.80613 11.8216 1.31217 11.0395C1.30565 11.0291 1.29895 11.0186 1.2921 11.0078C1.19409 10.8535 1.06682 10.6532 1.00249 10.3725C0.950545 10.1459 0.950545 9.85443 1.00249 9.6278C1.06682 9.34712 1.19409 9.14681 1.2921 8.99252C1.29895 8.98175 1.30565 8.9712 1.31217 8.96087C1.80613 8.17873 2.79241 6.79031 4.23095 5.58969ZM10.0003 8.3335C9.07985 8.3335 8.33366 9.07969 8.33366 10.0002C8.33366 10.9206 9.07985 11.6668 10.0003 11.6668C10.9208 11.6668 11.667 10.9206 11.667 10.0002C11.667 9.07969 10.9208 8.3335 10.0003 8.3335ZM6.66699 10.0002C6.66699 8.15921 8.15938 6.66683 10.0003 6.66683C11.8413 6.66683 13.3337 8.15921 13.3337 10.0002C13.3337 11.8411 11.8413 13.3335 10.0003 13.3335C8.15938 13.3335 6.66699 11.8411 6.66699 10.0002Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h3
                    className={`${input_sans.className} text-[1.375rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Get new perspectives
                  </h3>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="text-[1.25rem] mb-0 mt-0">
                    Solve challenges then view how others solved the same
                    challenge. Pickup new techniques from some of the most
                    skilled developers in the world.
                  </p>
                </div>
              </div>

              <div className="row-start-[span_1] col-start-[span_2] xd:col-start-[span_1] row-end-[span_1] col-end-[span_2] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem]">
                  <div className="p-2 bg-[#ff4d4d] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg inline-block">
                    <div className="w-[1.25rem] h-[1.25rem] flex flex-none justify-center items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.99996 0.833496C4.4602 0.833496 4.83329 1.20659 4.83329 1.66683V1.9975C5.43963 1.81074 6.25683 1.66683 7.33329 1.66683C8.7445 1.66683 9.91388 2.13473 10.9297 2.54119C10.9452 2.5474 10.9607 2.55359 10.9761 2.55977C12.0329 2.98246 12.9327 3.3335 14 3.3335C15.156 3.3335 15.8829 3.14114 16.2946 2.97643C16.5013 2.89378 16.6324 2.81659 16.7018 2.77033C16.7363 2.74729 16.7561 2.73157 16.7627 2.72616C17.0008 2.50237 17.3488 2.43793 17.6522 2.5636C17.9636 2.69258 18.1666 2.99644 18.1666 3.3335V12.5002C18.1666 12.7212 18.0788 12.9331 17.9225 13.0894L17.3333 12.5002C17.9225 13.0894 17.9221 13.0899 17.9217 13.0903L17.9208 13.0912L17.9189 13.093L17.915 13.0969L17.906 13.1056C17.8996 13.1117 17.8922 13.1186 17.8839 13.1261C17.8672 13.1413 17.8468 13.1591 17.8224 13.1792C17.7734 13.2195 17.7086 13.2689 17.6263 13.3237C17.4613 13.4337 17.2278 13.5649 16.9136 13.6906C16.2837 13.9425 15.3439 14.1668 14 14.1668C12.5888 14.1668 11.4194 13.6989 10.4036 13.2925L10.3571 13.2739C9.30039 12.8512 8.40054 12.5002 7.33329 12.5002C6.17722 12.5002 5.45039 12.6925 5.03862 12.8572C4.95931 12.8889 4.89113 12.9199 4.83329 12.9485L4.83329 18.3335C4.83329 18.7937 4.4602 19.1668 3.99996 19.1668C3.53972 19.1668 3.16663 18.7937 3.16663 18.3335L3.16663 12.501C3.16663 12.5004 3.16663 12.4999 3.16663 12.4993L3.16663 3.33385C3.16663 3.33361 3.16663 3.33338 3.16663 3.33314L3.16663 1.66683C3.16663 1.20659 3.53972 0.833496 3.99996 0.833496ZM4.83329 3.78187L4.83329 11.1642C5.43963 10.9774 6.25683 10.8335 7.33329 10.8335C8.7445 10.8335 9.91388 11.3014 10.9297 11.7079L10.9761 11.7264C12.0329 12.1491 12.9327 12.5002 14 12.5002C15.156 12.5002 15.8829 12.3078 16.2946 12.1431C16.3739 12.1114 16.4421 12.0805 16.5 12.0518V4.66949C15.8936 4.85625 15.0764 5.00016 14 5.00016C12.5888 5.00016 11.4194 4.53226 10.4036 4.1258C10.388 4.11959 10.3726 4.1134 10.3571 4.10723C9.30039 3.68453 8.40054 3.3335 7.33329 3.3335C6.17722 3.3335 5.45039 3.52585 5.03862 3.69056C4.95931 3.72228 4.89113 3.7532 4.83329 3.78187Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h3
                    className={`${input_sans.className} text-[1.375rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Learn new languages
                  </h3>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="text-[1.25rem] mb-0 mt-0">
                    Solve challenges in a language you are comfortable with,
                    then do it in a language you want to improve with. Level up
                    across different languages.
                  </p>
                </div>
              </div>
              <div className="row-start-[span_1] col-start-[span_2] xd:col-start-[span_1] row-end-[span_1] col-end-[span_2] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem]">
                  <div className="p-2 bg-[#ff4d4d] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg inline-block">
                    <div className="w-[1.25rem] h-[1.25rem] flex flex-none justify-center items-center">
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M9.00573 3.3335H11.6608C12.7249 3.33349 13.5726 3.33348 14.2598 3.38791C14.9646 3.44374 15.5677 3.56051 16.1278 3.83093C17.0348 4.26889 17.7884 4.97058 18.2898 5.84409C18.5995 6.38343 18.7589 6.9767 18.8648 7.67577C18.9681 8.3573 19.0285 9.20287 19.1043 10.2642L19.3118 13.1695C19.4468 15.0594 17.95 16.6668 16.0554 16.6668C15.0865 16.6668 14.1677 16.2365 13.5474 15.4921L13.2348 15.117C12.9303 14.7516 12.8387 14.6462 12.7429 14.5646C12.5154 14.3708 12.2399 14.2418 11.9454 14.191C11.8214 14.1697 11.6818 14.1668 11.2062 14.1668H9.46042C8.98477 14.1668 8.84522 14.1697 8.72118 14.191C8.42665 14.2418 8.1512 14.3708 7.92366 14.5646C7.82783 14.6462 7.73631 14.7516 7.4318 15.117L7.11917 15.4921C6.4989 16.2365 5.58006 16.6668 4.61117 16.6668C2.71653 16.6668 1.21979 15.0594 1.35478 13.1695L1.5623 10.2642C1.6381 9.20289 1.6985 8.3573 1.80175 7.67577C1.90765 6.9767 2.06709 6.38343 2.37672 5.84409C2.8782 4.97058 3.6318 4.26889 4.53881 3.83093C5.09884 3.56051 5.70196 3.44374 6.4068 3.38791C7.09396 3.33348 7.94171 3.33349 9.00573 3.3335ZM6.53841 5.04938C5.93493 5.09718 5.56197 5.18768 5.26352 5.33178C4.65885 5.62376 4.15645 6.09155 3.82213 6.67389C3.65713 6.96131 3.54029 7.32688 3.44961 7.92541C3.35741 8.53403 3.3011 9.31376 3.22224 10.4179L3.01721 13.2883C2.95113 14.2133 3.68377 15.0002 4.61117 15.0002C5.08543 15.0002 5.53519 14.7895 5.8388 14.4252L6.15143 14.05C6.16492 14.0338 6.17823 14.0178 6.19136 14.0021C6.43857 13.7052 6.6249 13.4815 6.84309 13.2957C7.29817 12.9081 7.84908 12.6501 8.43812 12.5486C8.72055 12.4999 9.01173 12.5 9.39806 12.5001C9.41857 12.5002 9.43936 12.5002 9.46042 12.5002H11.2062C11.2272 12.5002 11.248 12.5002 11.2685 12.5001C11.6548 12.5 11.946 12.4999 12.2284 12.5486C12.8175 12.6501 13.3684 12.9081 13.8235 13.2957C14.0417 13.4815 14.228 13.7052 14.4752 14.0021C14.4884 14.0179 14.5017 14.0338 14.5151 14.05L14.8278 14.4252C15.1314 14.7895 15.5811 15.0002 16.0554 15.0002C16.9828 15.0002 17.7154 14.2133 17.6494 13.2883L17.4443 10.4179C17.3655 9.31376 17.3092 8.53403 17.217 7.92542C17.1263 7.32688 17.0094 6.96131 16.8444 6.67389C16.5101 6.09155 16.0077 5.62376 15.403 5.33178C15.1046 5.18768 14.7316 5.09718 14.1282 5.04938C13.5145 5.00077 12.7328 5.00016 11.6258 5.00016H9.04075C7.93381 5.00016 7.15205 5.00077 6.53841 5.04938ZM6.99995 6.66683C7.46019 6.66683 7.83329 7.03993 7.83329 7.50016V8.3335H8.66662C9.12686 8.3335 9.49995 8.70659 9.49995 9.16683C9.49995 9.62707 9.12686 10.0002 8.66662 10.0002H7.83329V10.8335C7.83329 11.2937 7.46019 11.6668 6.99995 11.6668C6.53972 11.6668 6.16662 11.2937 6.16662 10.8335V10.0002H5.33329C4.87305 10.0002 4.49995 9.62707 4.49995 9.16683C4.49995 8.70659 4.87305 8.3335 5.33329 8.3335H6.16662V7.50016C6.16662 7.03993 6.53972 6.66683 6.99995 6.66683ZM14.5 8.3335C14.5 7.87326 14.873 7.50016 15.3333 7.50016H15.3416C15.8019 7.50016 16.175 7.87326 16.175 8.3335C16.175 8.79373 15.8019 9.16683 15.3416 9.16683H15.3333C14.873 9.16683 14.5 8.79373 14.5 8.3335ZM12 10.0002C12 9.53993 12.373 9.16683 12.8333 9.16683H12.8416C13.3019 9.16683 13.675 9.53993 13.675 10.0002C13.675 10.4604 13.3019 10.8335 12.8416 10.8335H12.8333C12.373 10.8335 12 10.4604 12 10.0002Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h3
                    className={`${input_sans.className} text-[1.375rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Compete with peers
                  </h3>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="text-[1.25rem] mb-0 mt-0">
                    Compete against your friends, colleagues, and the community
                    at large. Allow competition to motivate you towards
                    mastering your craft.
                  </p>
                </div>
              </div>

              {/** React Carousel */}
              <div className="row-start-[span_1] col-start-[span_6] xd:col-start-[span_1] row-end-[span_1] col-end-[span_6] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="row-start-[span_1] col-start-[span_1] row-end-[span_1] col-end-[span_1] h-[auto] bg-transparent text-center clear-both relative">
                  <div className="z-[1] h-full whitespace-nowrap block relative left-0 right-0 overflow-hidden">
                    {/* Carousel Object */}
                    {carouselArray.map((carouselObject, index) => (
                      <div
                        key={index}
                        className={`transform w-full h-full align-top whitespace-normal text-left inline-block relative transition-opacity duration-1000 ease-in-out ${
                          currentSlide === index
                            ? "opacity-100"
                            : "opacity-0 delay-[1500ms]"
                        }`}
                        style={{
                          transform: `translateX(${-100 * currentSlide}%)`,
                        }}
                      >
                        <div className="h-full items-center p-[4rem] pb-24 flex">
                          <div className="ml-auto mr-auto text-center w-full max-w-[48rem]">
                            <p
                              className={`${input_sans.className} xd:text-[1.9rem] text-[2.625rem] xs:text-[1.75rem] font-normal leading-[1.25]`}
                            >
                              {carouselObject.testimony}
                            </p>
                            <div className="pt-0 pl-0 pr-0 pb-8"></div>
                            <div
                              className="rounded-[50%] w-16 h-16 relative overflow-hidden ml-auto mr-auto"
                              style={{ filter: "saturate(0%)" }}
                            >
                              <Image
                                src={carouselObject.image}
                                alt={`Profile of ${carouselObject.name}`}
                                objectFit="cover"
                                className="w-16 h-16 rounded-[50%] max-w-[100%] inline-block align-middle border-0"
                                style={{ filter: "saturate(50%)" }}
                              />
                              <div className="bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] absolute top-0 bottom-0 left-0 right-0"></div>
                            </div>
                            <div className="pt-0 pl-0 pr-0 p-4"></div>
                            <p className="text-[1.25rem] xs:text-[1rem] font-bold mb-0 mt-0">
                              {carouselObject.name}
                            </p>
                            <p className="mt-0 mb-0">
                              <Link href="/">{carouselObject.username}</Link>
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Carousel Buttons */}
                    <div className="pt-0 pb-16 text-[.5rem] z-[2] text-center h-[40px] m-auto absolute top-auto bottom-0 left-0 right-0">
                      {carouselArray.map((_, index) => (
                        <div
                          onClick={() => {
                            stopInterval();
                            setCurrentSlide(index);
                            startInterval();
                          }}
                          key={index}
                          className={`ml-[3px] mr-[3px] rounded-full cursor-pointer w-[1em] h-[1em] m-[0_3px_.5em] inline-block relative transition-[background-color] duration-1000 ${
                            currentSlide === index
                              ? "bg-[#ffffff]"
                              : "bg-[rgba(255,255,255,.4)]"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row-start-[span_1] col-start-[span_3] xd:col-start-[span_1] row-end-[span_1] col-end-[span_3] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem]">
                  <div className="p-2 bg-[#ff4d4d] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg inline-block">
                    <div className="w-[1.25rem] h-[1.25rem] flex flex-none justify-center items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_443_1488)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 2.50016C5.85787 2.50016 2.50001 5.85803 2.50001 10.0002C2.50001 14.1423 5.85787 17.5002 10 17.5002C14.1421 17.5002 17.5 14.1423 17.5 10.0002C17.5 5.85803 14.1421 2.50016 10 2.50016ZM0.833344 10.0002C0.833344 4.93755 4.9374 0.833496 10 0.833496C15.0626 0.833496 19.1667 4.93755 19.1667 10.0002C19.1667 15.0628 15.0626 19.1668 10 19.1668C4.9374 19.1668 0.833344 15.0628 0.833344 10.0002ZM6.25001 7.50016C6.25001 6.80981 6.80965 6.25016 7.50001 6.25016C8.19037 6.25016 8.75001 6.80981 8.75001 7.50016C8.75001 8.19052 8.19037 8.75016 7.50001 8.75016C6.80965 8.75016 6.25001 8.19052 6.25001 7.50016ZM11.25 7.50016C11.25 6.80981 11.8097 6.25016 12.5 6.25016C13.1904 6.25016 13.75 6.80981 13.75 7.50016C13.75 8.19052 13.1904 8.75016 12.5 8.75016C11.8097 8.75016 11.25 8.19052 11.25 7.50016Z"
                            fill="white"
                          ></path>
                          <path
                            d="M7.33073 11.1634C7.05391 10.7982 6.53371 10.7249 6.16668 11.0002C5.79849 11.2763 5.72387 11.7986 6.00001 12.1668L6.00181 12.1692L6.0041 12.1722L6.0101 12.1801L6.02785 12.2028C6.04222 12.2209 6.06168 12.245 6.08614 12.2742C6.13501 12.3324 6.20418 12.4113 6.29288 12.5038C6.46961 12.6882 6.72787 12.9311 7.06195 13.1741C7.7269 13.6577 8.72873 14.1668 10 14.1668C11.2713 14.1668 12.2731 13.6577 12.9381 13.1741C13.2721 12.9311 13.5304 12.6882 13.7071 12.5038C13.7958 12.4113 13.865 12.3324 13.9139 12.2742C13.9383 12.245 13.9578 12.2209 13.9722 12.2028L13.9899 12.1801L13.9959 12.1722L13.9982 12.1692L13.9992 12.1679L14 12.1668C14.2762 11.7986 14.2015 11.2763 13.8333 11.0002C13.4663 10.7249 12.9461 10.7982 12.6693 11.1634L12.6654 11.1683C12.6605 11.1746 12.651 11.1863 12.6373 11.2027C12.6096 11.2356 12.5649 11.287 12.5038 11.3507C12.3811 11.4787 12.1966 11.6525 11.9578 11.8262C11.4769 12.1759 10.8121 12.5002 10 12.5002C9.18795 12.5002 8.52312 12.1759 8.04224 11.8262C7.8034 11.6525 7.61895 11.4787 7.4962 11.3507C7.43517 11.287 7.3904 11.2356 7.36277 11.2027C7.34898 11.1863 7.33955 11.1746 7.33459 11.1683L7.33073 11.1634Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_443_1488">
                            <rect
                              width="20"
                              height="20"
                              fill="currentcolor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h3
                    className={`${input_sans.className} text-[1.375rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Build self-confidence
                  </h3>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="text-[1.25rem] mb-0 mt-0">
                    Not sure if you are progressing well as a programmer? Push
                    yourself to your limits and show yourself what you are
                    really made of.
                  </p>
                </div>
              </div>
              <div className="row-start-[span_1] col-start-[span_3] xd:col-start-[span_1] row-end-[span_1] col-end-[span_3] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-2xl overflow-hidden">
                <div className="p-[4rem]">
                  <div className="p-2 bg-[#ff4d4d] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg inline-block">
                    <div className="w-[1.25rem] h-[1.25rem] flex flex-none justify-center items-center">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_443_1492)">
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M10 2.50016C5.8579 2.50016 2.50004 5.85803 2.50004 10.0002C2.50004 14.1423 5.8579 17.5002 10 17.5002C14.1422 17.5002 17.5 14.1423 17.5 10.0002C17.5 5.85803 14.1422 2.50016 10 2.50016ZM0.833374 10.0002C0.833374 4.93755 4.93743 0.833496 10 0.833496C15.0626 0.833496 19.1667 4.93755 19.1667 10.0002C19.1667 15.0628 15.0626 19.1668 10 19.1668C4.93743 19.1668 0.833374 15.0628 0.833374 10.0002ZM9.99673 6.43639C8.89961 5.65938 7.38948 5.5541 6.18983 6.5791C4.81128 7.75697 4.60629 9.75156 5.70212 11.1617C6.28193 11.9078 7.69038 13.2145 8.56941 14.01L8.58775 14.0266C8.72115 14.1474 8.85549 14.269 8.98013 14.3645C9.12118 14.4726 9.29349 14.5826 9.51387 14.6493C9.82522 14.7437 10.1691 14.7437 10.4805 14.6493C10.7009 14.5826 10.8732 14.4726 11.0142 14.3645C11.1389 14.269 11.2732 14.1474 11.4066 14.0266L11.425 14.01C12.304 13.2145 13.7124 11.9078 14.2923 11.1617C15.3807 9.76103 15.2122 7.74894 13.7959 6.57179C12.5878 5.56775 11.092 5.65965 9.99673 6.43639ZM9.36392 8.09843C8.77609 7.41121 7.90672 7.30434 7.27249 7.84623C6.56351 8.45201 6.4746 9.43958 7.01812 10.139C7.48833 10.744 8.76901 11.9429 9.68773 12.7742C9.84704 12.9184 9.9301 12.9927 9.99382 13.0415C9.99497 13.0424 9.99609 13.0433 9.99719 13.0441C9.99828 13.0433 9.9994 13.0424 10.0005 13.0415C10.0643 12.9927 10.1473 12.9184 10.3066 12.7742C11.2254 11.9429 12.506 10.744 12.9762 10.139C13.5271 9.43011 13.4377 8.44128 12.7305 7.85354C12.0698 7.30437 11.212 7.41856 10.6305 8.09843C10.4721 8.28352 10.2408 8.39008 9.99719 8.39008C9.75362 8.39008 9.52224 8.28352 9.36392 8.09843Z"
                            fill="white"
                          ></path>
                        </g>
                        <defs>
                          <clipPath id="clip0_443_1492">
                            <rect
                              width="20"
                              height="20"
                              fill="currentcolor"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h3
                    className={`${input_sans.className} text-[1.375rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Become a mentor
                  </h3>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="text-[1.25rem] mb-0 mt-0">
                    Lend your expertise to others, either indirectly by
                    contributing great solutions or directly by creating your
                    own kata and reviewing code.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
