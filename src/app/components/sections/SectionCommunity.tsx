import localFont from "next/font/local";
import { IBM_Plex_Sans } from "next/font/google";
import Image from "next/image";
import communityGlobe from "@/public/communityGlobe.png";
import codeSnippet from "@/public/codeSnippet.png";

const input_sans = localFont({
  src: "../../../../public/Input Sans/InputSans-Regular.ttf",
});
const ibm_plex_sans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["300"] });

export default function SectionCommunity() {
  return (
    <section className="block">
      <div className="pl-[2.5rem] pr-[2.5rem]">
        <div className="w-full max-w-[56rem] ml-[auto] mr-[auto]">
          <div className="pt-0 pb-12">
            <div className="text-center">
              <h2
                className={`mt-0 mb-0 ${input_sans.className} text-[3.625rem] xd:text-[2.4rem] font-light leading-[1.25]`}
              >
                An engaged software development community
              </h2>
              <div className="pt-0 pl-0 pr-0 pb-6"></div>
              <p
                className={`${ibm_plex_sans.className} text-[1.5rem] mb-0 mt-0`}
              >
                Codewars is a collective effort by its users. They are
                creators—authoring kata to teach various techniques, solving
                kata with solutions that enlighten others, and commenting with
                constructive feedback.
              </p>
            </div>
          </div>
        </div>

        <div className="mr-[auto] ml-[auto] w-[100%] max-w-[80rem]">
          <div className="pt-0 pb-[6rem] xd:pb-[4rem] leading-[1.5]">
            <div className="gap-x-6 gap-y-6 grid-rows-[auto] grid-cols-[1fr_1fr_1fr_1fr_1fr] xd:grid-cols-[1fr] auto-cols-[1fr] grid">
              <div className="row-start-[span_1] col-start-[span_5] xd:col-start-[span_1] row-end-[span_1] col-end-[span_5] xd:col-end-[span_1] bg-hero-pattern_2 bg-[position:0_0,0_0] bg-[size:200px,auto] gap-x-[2rem] xd:gap-x-[4rem] gap-y-[2rem] xd:gap-y-[4rem] grid-rows-[auto] grid-cols-[1fr_1fr_1fr] xd:grid-cols-[1fr] auto-cols-[1fr] p-[4rem] grid bg-[#222326] rounded-2xl overflow-hidden">
                <div className="text-center">
                  <p
                    className={`${input_sans.className} text-[5rem] xd:text-[3.1rem] font-light leading-[1.1]`}
                  >
                    75K+
                  </p>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="mb-0 mt-0">
                    Community members added every month
                  </p>
                </div>
                <div className="text-center">
                  <p
                    className={`${input_sans.className} text-[5rem] xd:text-[3.1rem] font-light leading-[1.1]`}
                  >
                    1M+
                  </p>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="mb-0 mt-0">Kata completed every month</p>
                </div>
                <div className="text-center">
                  <p
                    className={`${input_sans.className} text-[5rem] xd:text-[3.1rem] font-light leading-[1.1]`}
                  >
                    12K+
                  </p>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p className="mb-0 mt-0">Kata created by our community</p>
                </div>
              </div>

              <div className="row-start-[span_1] col-start-[span_3] xd:col-start-[span_1] row-end-[span_1] col-end-[span_3] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg overflow-hidden">
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
                          d="M7.69007 4.09715C4.89549 5.62444 3 8.59086 3 12C3 12.7443 3.09034 13.4674 3.26066 14.1591L4.09499 13.6775C4.40506 13.4985 4.76894 13.4363 5.12086 13.5022L8.2807 14.0935L8.26877 11.4089C8.26758 11.1408 8.33829 10.8772 8.47352 10.6457L9.33701 11.15L9.36074 11.1639M9.33701 11.15L8.47352 10.6457L10.2064 7.67891L7.69007 4.09715M3.96621 16.0612C5.45042 18.9914 8.49065 21 12 21C12.1512 21 12.3015 20.9963 12.4508 20.9889C13.0024 20.9618 13.4716 21.3869 13.4988 21.9385C13.526 22.4902 13.1008 22.9593 12.5492 22.9865C12.3672 22.9955 12.1841 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C14.9935 1 17.7077 2.19573 19.691 4.13561C19.6974 4.14172 19.7037 4.14792 19.71 4.15421C21.7406 6.14993 23 8.92789 23 12C23 12.1844 22.9954 12.3675 22.9864 12.5492C22.9598 13.0908 22.5062 13.5125 21.9641 13.4997L21.9876 12.5C21.9641 13.4997 21.9643 13.4997 21.9641 13.4997L21.9595 13.4996L21.9511 13.4994L21.9232 13.4985C21.8997 13.4977 21.8667 13.4964 21.825 13.4944C21.7416 13.4905 21.6231 13.4839 21.4761 13.4729C21.1827 13.4511 20.7726 13.4116 20.2999 13.3409C19.3714 13.202 18.1294 12.9326 17.0531 12.3945C16.6256 12.1808 16.1402 11.7478 15.7446 11.2299C15.3366 10.6959 14.9484 9.97402 14.8234 9.12873C14.6947 8.25829 14.854 7.30431 15.4756 6.38179C15.8823 5.77807 16.4693 5.2134 17.256 4.69337C15.7772 3.62776 13.9619 3 12 3C11.1661 3 10.3587 3.11342 9.5923 3.32567L12.0274 6.79174C12.3645 7.27168 12.3911 7.90411 12.0952 8.41058L10.2694 11.5365L10.2834 14.6896C10.2876 15.6314 9.43309 16.3439 8.50744 16.1707L4.93473 15.5021L3.96621 16.0612ZM18.7926 6.09549C17.9219 6.5933 17.4169 7.0798 17.1342 7.49933C16.8026 7.99147 16.7431 8.43892 16.8019 8.83611C16.8644 9.25844 17.07 9.67037 17.3338 10.0157C17.6101 10.3773 17.8747 10.5693 17.9474 10.6056C18.7481 11.0059 19.7498 11.2364 20.5957 11.3629C20.7306 11.3831 20.8597 11.4003 20.9813 11.4151C20.8511 9.38523 20.0479 7.53844 18.7926 6.09549ZM12.8839 12.8839C13.1622 12.6056 13.5777 12.5164 13.9457 12.656L22.2944 15.8228C22.6799 15.969 22.9361 16.3367 22.9398 16.7489C22.9434 17.1611 22.6937 17.5333 22.311 17.6863L19.007 19.007L17.6863 22.311C17.5333 22.6937 17.1611 22.9434 16.7489 22.9398C16.3367 22.9361 15.969 22.6799 15.8228 22.2944L12.656 13.9457C12.5164 13.5777 12.6056 13.1622 12.8839 12.8839ZM15.3141 15.3141L16.7822 19.1845L17.3091 17.8665C17.4107 17.6122 17.6122 17.4107 17.8665 17.3091L19.1845 16.7822L15.3141 15.3141Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h2
                    className={`${input_sans.className} text-[1.875rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Tap into the collective wisdom
                  </h2>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p
                    className={`text-[1.25rem] mb-0 mt-0 ${ibm_plex_sans.className}`}
                  >
                    Compare your solution with others after each kata for
                    greater understanding. Discuss kata, best practices, and
                    innovative techniques with the community. Have your mind
                    blown by how different other solutions can be from your own.
                  </p>
                </div>
                <div className="items-end pb-0 w-full justify-between p-[4rem] flex">
                  <div className="w-full relative overflow-hidden">
                    <Image src={communityGlobe} alt="" loading="lazy" />
                    <div className="bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] absolute top-0 bottom-0 left-0 right-0"></div>
                  </div>
                </div>
              </div>

              <div className="row-start-[span_1] col-start-[span_2] xd:col-start-[span_1] row-end-[span_1] col-end-[span_2] xd:col-end-[span_1] gap-x-0 gap-y-0 grid-rows-[auto] grid-cols-[1fr] auto-cols-[1fr] grid-flow-row content-between grid bg-[#222326] bg-[url(/background.png)] bg-[position:0_0] bg-[size:200px] rounded-lg overflow-hidden">
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
                          d="M13 3.01991C12.8143 3.00299 12.5391 3.00006 12.0118 3.00006H8.8C7.94342 3.00006 7.36113 3.00084 6.91104 3.03761C6.47262 3.07343 6.24842 3.13836 6.09202 3.21805C5.7157 3.4098 5.40973 3.71576 5.21799 4.09208C5.1383 4.24848 5.07337 4.47269 5.03755 4.9111C5.00078 5.36119 5 5.94348 5 6.80006V17.2001C5 18.0566 5.00078 18.6389 5.03755 19.089C5.07337 19.5274 5.1383 19.7516 5.21799 19.908C5.40973 20.2844 5.7157 20.5903 6.09202 20.7821C6.24842 20.8618 6.47262 20.9267 6.91104 20.9625C7.36113 20.9993 7.94342 21.0001 8.8 21.0001H15.2C16.0566 21.0001 16.6389 20.9993 17.089 20.9625C17.5274 20.9267 17.7516 20.8618 17.908 20.7821C18.2843 20.5903 18.5903 20.2844 18.782 19.908C18.8617 19.7516 18.9266 19.5274 18.9624 19.089C18.9992 18.6389 19 18.0566 19 17.2001V9.98829C19 9.46099 18.9971 9.18583 18.9802 9.00013L15.5681 9.00014C15.3157 9.00017 15.0699 9.0002 14.8618 8.98319C14.6332 8.96451 14.3634 8.92044 14.092 8.78215C13.7157 8.5904 13.4097 8.28444 13.218 7.90812C13.0797 7.63669 13.0356 7.36696 13.0169 7.13836C12.9999 6.9302 13 6.6844 13 6.43202L13 3.01991ZM14.3936 1.35003C14.1677 1.24877 13.9326 1.16854 13.6911 1.11058C13.2284 0.9995 12.7487 0.999729 12.1137 1.00003C12.0801 1.00005 12.0462 1.00006 12.0118 1.00006L8.7587 1.00006C7.95373 1.00005 7.28937 1.00004 6.74817 1.04426C6.18608 1.09018 5.66937 1.18875 5.18404 1.43604C4.43139 1.81953 3.81947 2.43145 3.43597 3.1841C3.18868 3.66944 3.09012 4.18614 3.04419 4.74824C2.99998 5.28943 2.99999 5.95379 3 6.75876V17.2414C2.99999 18.0463 2.99998 18.7107 3.04419 19.2519C3.09012 19.814 3.18868 20.3307 3.43597 20.816C3.81947 21.5687 4.43139 22.1806 5.18404 22.5641C5.66937 22.8114 6.18608 22.9099 6.74817 22.9559C7.28936 23.0001 7.95372 23.0001 8.75868 23.0001H15.2413C16.0463 23.0001 16.7106 23.0001 17.2518 22.9559C17.8139 22.9099 18.3306 22.8114 18.816 22.5641C19.5686 22.1806 20.1805 21.5687 20.564 20.816C20.8113 20.3307 20.9099 19.814 20.9558 19.2519C21 18.7107 21 18.0463 21 17.2414V9.98829C21 9.95389 21 9.91994 21 9.88642C21.0003 9.25142 21.0006 8.77162 20.8895 8.30892C20.8317 8.06819 20.7518 7.83372 20.6509 7.60843C20.6447 7.59375 20.6381 7.57925 20.6311 7.56494C20.5658 7.42355 20.4922 7.28589 20.4106 7.15271C20.1619 6.74698 19.8225 6.40788 19.3733 5.95907C19.3496 5.93539 19.3255 5.91139 19.3012 5.88707L16.113 2.69884C16.0887 2.67452 16.0647 2.6505 16.041 2.62678C15.5922 2.17756 15.2531 1.83813 14.8474 1.5895C14.7136 1.50756 14.5754 1.43367 14.4334 1.36814C14.4203 1.36182 14.407 1.35578 14.3936 1.35003ZM15 4.41428V6.40014C15 6.69666 15.0008 6.85892 15.0103 6.9755C15.0107 6.98014 15.0111 6.98454 15.0114 6.98869C15.0156 6.98907 15.02 6.98945 15.0246 6.98983C15.1412 6.99936 15.3035 7.00013 15.6 7.00013H17.5859L15 4.41428ZM10.7071 11.793C11.0976 12.1835 11.0976 12.8166 10.7071 13.2072L8.91421 15.0001L10.7071 16.793C11.0976 17.1835 11.0976 17.8166 10.7071 18.2072C10.3166 18.5977 9.68342 18.5977 9.29289 18.2072L6.79289 15.7072C6.40237 15.3166 6.40237 14.6835 6.79289 14.293L9.29289 11.793C9.68342 11.4024 10.3166 11.4024 10.7071 11.793ZM13.2929 13.2072C12.9024 12.8166 12.9024 12.1835 13.2929 11.793C13.6834 11.4024 14.3166 11.4024 14.7071 11.793L17.2071 14.293C17.5976 14.6835 17.5976 15.3166 17.2071 15.7072L14.7071 18.2072C14.3166 18.5977 13.6834 18.5977 13.2929 18.2072C12.9024 17.8166 12.9024 17.1835 13.2929 16.793L15.0858 15.0001L13.2929 13.2072Z"
                          fill="currentcolor"
                        ></path>
                      </svg>
                    </div>
                  </div>

                  <div className="pt-0 pl-0 pr-0 pb-6"></div>
                  <h2
                    className={`${input_sans.className} text-[1.875rem] font-normal leading-[1.25] mt-0 mb-0`}
                  >
                    Create your own kata
                  </h2>
                  <div className="pt-0 pl-0 pr-0 pb-4"></div>
                  <p
                    className={`text-[1.25rem] mb-0 mt-0 ${ibm_plex_sans.className}`}
                  >
                    Author kata that focus on your interests and train specific
                    skill sets. Challenge the community with your insight and
                    code understanding. Create everything from common developer
                    interview questions to challenges that push the limits of
                    your creativity. Gain honor within the coding dojo.
                  </p>
                </div>
                <div className="row-start-[span_1] col-start-[span_1] row-end-[span_1] col-end-[span_1] pt-0 w-full justify-between items-center p-[4rem] flex">
                  <div className="w-full rounded-lg relative overflow-hidden">
                    <Image src={codeSnippet} alt="" loading="lazy" />
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
