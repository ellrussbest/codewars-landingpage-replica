import React from "react";

const FloatingLangGrids = () => {
  return (
    <div
      className="grid gap-x-0 gap-y-0 grid-rows-[auto] auto-cols-auto grid-cols-eight-auto items-center justify-items-center absolute top-0 bottom-0 left-0 right-0 overflow-hidden transform-none"
      style={{
        perspective: "350px",
        perspectiveOrigin: "50%",
      }}
    >
      {/* 1 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] rounded-2xl justify-center items-center flex border-[1px] border-solid border-[rgba(255,255,255,.1)] bg-[rgba(0,0,0,0)] "></div>
      </div>

      {/* 2 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] rounded-2xl justify-center items-center flex bg-[rgba(255,255,255,.05)]"></div>
      </div>

      {/* 3 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 float-none justify-center items-stretch flex text-[rgba(255,255,255,.6)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_23_1357)">
                <path
                  d="M0 0V24H24V0H0ZM13.0607 18.7179C13.0607 21.0536 11.6893 22.1196 9.69107 22.1196C7.88571 22.1196 6.84107 21.1875 6.30536 20.0571L8.14286 18.9482C8.49643 19.575 8.81786 20.1054 9.59464 20.1054C10.3339 20.1054 10.8054 19.8161 10.8054 18.6857V11.0196H13.0607V18.7179ZM18.3964 22.1196C16.3018 22.1196 14.9464 21.1232 14.2875 19.8161L16.125 18.7554C16.6071 19.5429 17.2393 20.1268 18.3482 20.1268C19.2804 20.1268 19.8804 19.6607 19.8804 19.0125C19.8804 18.2411 19.2696 17.9679 18.2357 17.5125L17.6732 17.2714C16.0446 16.5804 14.9679 15.7071 14.9679 13.8696C14.9679 12.1768 16.2589 10.8911 18.2679 10.8911C19.7036 10.8911 20.7321 11.3893 21.4714 12.6964L19.7143 13.8214C19.3286 13.1304 18.9107 12.8571 18.2625 12.8571C17.6036 12.8571 17.1857 13.275 17.1857 13.8214C17.1857 14.4964 17.6036 14.7696 18.5732 15.1929L19.1357 15.4339C21.0536 16.2536 22.1304 17.0946 22.1304 18.9804C22.1304 21.0054 20.5339 22.1196 18.3964 22.1196Z"
                  fill="currentcolor"
                ></path>
              </g>
            </svg>
          </div>
        </div>
      </div>

      {/* 4 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform bg-[rgba(255,255,255,.02)] w-[4rem] h-[4rem] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 5 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex flex-none justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                fill="currentcolor"
                d="M2 63.91v62.5h125v-125H2zm100.73-5a15.56 15.56 0 017.82 4.5 20.58 20.58 0 013 4c0 .16-5.4 3.81-8.69 5.85-.12.08-.6-.44-1.13-1.23a7.09 7.09 0 00-5.87-3.53c-3.79-.26-6.23 1.73-6.21 5a4.58 4.58 0 00.54 2.34c.83 1.73 2.38 2.76 7.24 4.86 8.95 3.85 12.78 6.39 15.16 10 2.66 4 3.25 10.46 1.45 15.24-2 5.2-6.9 8.73-13.83 9.9a38.32 38.32 0 01-9.52-.1A23 23 0 0180 109.19c-1.15-1.27-3.39-4.58-3.25-4.82a9.34 9.34 0 011.15-.73l4.6-2.64 3.59-2.08.75 1.11a16.78 16.78 0 004.74 4.54c4 2.1 9.46 1.81 12.16-.62a5.43 5.43 0 00.69-6.92c-1-1.39-3-2.56-8.59-5-6.45-2.78-9.23-4.5-11.77-7.24a16.48 16.48 0 01-3.43-6.25 25 25 0 01-.22-8c1.33-6.23 6-10.58 12.82-11.87a31.66 31.66 0 019.49.26zm-29.34 5.24v5.12H57.16v46.23H45.65V69.26H29.38v-5a49.19 49.19 0 01.14-5.16c.06-.08 10-.12 22-.1h21.81z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 6 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                d="M117.5 33.5l.3-.2c-.6-1.1-1.5-2.1-2.4-2.6L67.1 2.9c-.8-.5-1.9-.7-3.1-.7-1.2 0-2.3.3-3.1.7l-48 27.9c-1.7 1-2.9 3.5-2.9 5.4v55.7c0 1.1.2 2.3.9 3.4l-.2.1c.5.8 1.2 1.5 1.9 1.9l48.2 27.9c.8.5 1.9.7 3.1.7 1.2 0 2.3-.3 3.1-.7l48-27.9c1.7-1 2.9-3.5 2.9-5.4V36.1c.1-.8 0-1.7-.4-2.6zm-53.5 70c-21.8 0-39.5-17.7-39.5-39.5S42.2 24.5 64 24.5c14.7 0 27.5 8.1 34.3 20l-13 7.5C81.1 44.5 73.1 39.5 64 39.5c-13.5 0-24.5 11-24.5 24.5s11 24.5 24.5 24.5c9.1 0 17.1-5 21.3-12.4l12.9 7.6c-6.8 11.8-19.6 19.8-34.2 19.8zM115 62h-3.2l-.9 4h4.1v5h-5l-1.2 6h-4.9l1.2-6h-3.8l-1.2 6h-4.8l1.2-6H94v-5h3.5l.9-4H94v-5h5.3l1.2-6h4.9l-1.2 6h3.8l1.2-6h4.8l-1.2 6h2.2v5zm-12.7 4h3.8l.9-4h-3.8z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 7 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.02)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 8 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                d="M125.54 26.23a28.78 28.78 0 00-2.65-7.58 28.84 28.84 0 00-4.76-6.32 23.42 23.42 0 00-6.62-4.55 27.27 27.27 0 00-7.68-2.53c-2.65-.51-5.56-.51-8.21-.76H30.25a45.46 45.46 0 00-6.09.51 21.81 21.81 0 00-5.82 1.52c-.53.25-1.32.51-1.85.76a33.82 33.82 0 00-5 3.28c-.53.51-1.06.76-1.59 1.26a22.41 22.41 0 00-4.76 6.32 23.61 23.61 0 00-2.65 7.58 78.47 78.47 0 00-.79 7.83v60.39a39.32 39.32 0 00.79 7.83 28.78 28.78 0 002.65 7.58 28.84 28.84 0 004.76 6.32 23.42 23.42 0 006.62 4.55 27.27 27.27 0 007.68 2.53c2.65.51 5.56.51 8.21.76h63.22a45.08 45.08 0 008.21-.76 27.27 27.27 0 007.68-2.53 30.13 30.13 0 006.62-4.55 22.41 22.41 0 004.76-6.32 23.61 23.61 0 002.65-7.58 78.47 78.47 0 00.79-7.83V34.06a39.32 39.32 0 00-.8-7.83zm-18.79 75.54C101 91 90.37 94.33 85 96.5c-11.11 6.13-26.38 6.76-41.75.47A64.53 64.53 0 0113.84 73a50 50 0 0010.85 6.32c15.87 7.1 31.73 6.61 42.9 0-15.9-11.66-29.4-26.82-39.46-39.2a43.47 43.47 0 01-5.29-6.82c12.16 10.61 31.5 24 38.38 27.79a271.77 271.77 0 01-27-32.34 266.8 266.8 0 0044.47 34.87c.71.38 1.26.7 1.7 1a32.71 32.71 0 001.21-3.51c3.71-12.89-.53-27.54-9.79-39.67C93.25 33.81 106 57.05 100.66 76.51c-.14.53-.29 1-.45 1.55l.19.22c10.6 12.63 7.67 26.02 6.35 23.49z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 9 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.02)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 10 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M2.09177 10.2804C2.0462 10.2804 2.03495 10.2575 2.05764 10.2236L2.29633 9.91666C2.31883 9.88254 2.37583 9.85985 2.4212 9.85985H6.47814C6.5237 9.85985 6.53495 9.89398 6.51227 9.9281L6.31914 10.2236C6.29645 10.2575 6.23964 10.2917 6.20552 10.2917L2.09177 10.2804ZM0.375767 11.3257C0.330392 11.3257 0.318954 11.3032 0.341642 11.2689L0.580329 10.9622C0.603017 10.928 0.659829 10.9054 0.705392 10.9054H5.88714C5.93252 10.9054 5.95539 10.9395 5.94395 10.9736L5.85302 11.2462C5.84177 11.2918 5.7962 11.3145 5.75083 11.3145L0.375767 11.3257ZM3.12564 12.3712C3.08027 12.3712 3.06902 12.3371 3.0917 12.303L3.2507 12.0189C3.27358 11.9848 3.31895 11.9509 3.36452 11.9509H5.63702C5.68258 11.9509 5.70527 11.9848 5.70527 12.0304L5.68277 12.303C5.68277 12.3485 5.6372 12.3827 5.60308 12.3827L3.12564 12.3712ZM14.9213 10.0759C14.2052 10.2577 13.7166 10.394 13.0121 10.5757C12.8415 10.6213 12.8303 10.6325 12.6825 10.4621C12.5121 10.269 12.387 10.1439 12.1485 10.0303C11.4325 9.67816 10.7393 9.78035 10.0916 10.2009C9.31895 10.7008 8.92127 11.4394 8.93252 12.3598C8.94377 13.269 9.56889 14.019 10.4666 14.144C11.2393 14.2462 11.8871 13.9734 12.3985 13.394C12.5006 13.269 12.5916 13.1327 12.7052 12.9735H10.512C10.2735 12.9735 10.2167 12.8257 10.2962 12.6326C10.444 12.2803 10.7166 11.6895 10.8756 11.394C10.9099 11.3257 10.9894 11.2121 11.1598 11.2121H15.2961C15.2736 11.519 15.2736 11.8258 15.228 12.1327C15.103 12.9508 14.7962 13.7008 14.2961 14.3599C13.4779 15.4395 12.4099 16.1098 11.0575 16.2917C9.94389 16.4394 8.90983 16.2234 8.00083 15.5417C7.15989 14.9053 6.6827 14.0644 6.55764 13.019C6.40989 11.7804 6.77345 10.6667 7.52345 9.68941C8.33027 8.63266 9.39845 7.96216 10.7053 7.72348C11.7735 7.53035 12.7961 7.65541 13.7166 8.28035C14.3188 8.67804 14.7506 9.22348 15.0347 9.88254C15.103 9.98491 15.0576 10.0417 14.9211 10.0757L14.9213 10.0759Z"
                fill="currentcolor"
              ></path>
              <path
                d="M18.6826 16.3599C17.6485 16.3371 16.7052 16.0417 15.9098 15.3598C15.2393 14.7804 14.8189 14.0417 14.6826 13.1666C14.4781 11.8826 14.8302 10.7462 15.6031 9.73499C16.4326 8.64393 17.4325 8.0758 18.7849 7.83711C19.9439 7.63274 21.0349 7.74636 22.0234 8.41668C22.9212 9.03036 23.4779 9.85986 23.6256 10.9507C23.8187 12.4849 23.3757 13.7349 22.3187 14.8031C21.5687 15.5644 20.6483 16.0417 19.5916 16.2576C19.2848 16.3144 18.9779 16.3258 18.6826 16.3599ZM21.3871 11.769C21.3758 11.6212 21.3758 11.5076 21.3529 11.394C21.1486 10.269 20.1143 9.63261 19.0349 9.88274C17.9779 10.1212 17.2962 10.7917 17.0462 11.8599C16.8417 12.7462 17.2735 13.644 18.0916 14.0076C18.7167 14.2804 19.3416 14.2462 19.9439 13.9395C20.8416 13.4736 21.3302 12.7462 21.3871 11.769Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 11 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.02)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 12 */}
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                fill="currentcolor"
                d="M49.33 62h29.159C86.606 62 93 55.132 93 46.981V19.183c0-7.912-6.632-13.856-14.555-15.176-5.014-.835-10.195-1.215-15.187-1.191-4.99.023-9.612.448-13.805 1.191C37.098 6.188 35 10.758 35 19.183V30h29v4H23.776c-8.484 0-15.914 5.108-18.237 14.811-2.681 11.12-2.8 17.919 0 29.53C7.614 86.983 12.569 93 21.054 93H31V79.952C31 70.315 39.428 62 49.33 62zm-1.838-39.11c-3.026 0-5.478-2.479-5.478-5.545 0-3.079 2.451-5.581 5.478-5.581 3.015 0 5.479 2.502 5.479 5.581-.001 3.066-2.465 5.545-5.479 5.545zm74.789 25.921C120.183 40.363 116.178 34 107.682 34H97v12.981C97 57.031 88.206 65 78.489 65H49.33C41.342 65 35 72.326 35 80.326v27.8c0 7.91 6.745 12.564 14.462 14.834 9.242 2.717 17.994 3.208 29.051 0C85.862 120.831 93 116.549 93 108.126V97H64v-4h43.682c8.484 0 11.647-5.776 14.599-14.66 3.047-9.145 2.916-17.799 0-29.529zm-41.955 55.606c3.027 0 5.479 2.479 5.479 5.547 0 3.076-2.451 5.579-5.479 5.579-3.015 0-5.478-2.502-5.478-5.579 0-3.068 2.463-5.547 5.478-5.547z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 13 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.02)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 14 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] border-solid border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 15 */}
      <div>
        <div
          className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"
          style={{
            transformStyle: "preserve-3d",
            transform: "translate3d(0,0,3rem)",
          }}
        >
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                fill="currentcolor"
                d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 16 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] border-solid border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 17 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.02)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 18 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M21.6375 5.75623L12.5813 0.543726C12.4313 0.449976 12.225 0.412476 12 0.412476C11.775 0.412476 11.5688 0.468726 11.4188 0.543726L2.41875 5.77498C2.1 5.96248 1.875 6.43123 1.875 6.78748V17.2312C1.875 17.4254 1.90822 17.6527 2.03719 17.8507L2.00624 17.8687C2.09999 18.0187 2.23124 18.15 2.36249 18.225L11.4 23.4562C11.55 23.55 11.7562 23.5875 11.9812 23.5875C12.2062 23.5875 12.4125 23.5312 12.5625 23.4562L21.5625 18.225C21.8812 18.0375 22.1062 17.5687 22.1062 17.2125V6.76872C22.1062 6.61865 22.0914 6.45375 22.0222 6.30039L22.0875 6.26248C21.975 6.03748 21.8063 5.86873 21.6375 5.75623ZM15.9938 14.2687C15.2063 15.6562 13.7063 16.5937 12 16.5937C9.46875 16.5937 7.40625 14.5312 7.40625 12C7.40625 9.46872 9.46875 7.40622 12 7.40622C13.7063 7.40622 15.2063 8.34372 15.9938 9.74997L18.4313 8.34372C17.1562 6.11247 14.7563 4.59372 12 4.59372C7.9125 4.59372 4.59375 7.91247 4.59375 12C4.59375 16.0875 7.9125 19.4062 12 19.4062C14.7375 19.4062 17.1375 17.9062 18.4125 15.6937L15.9938 14.2687ZM15.3937 11.5875H16.3687V10.5937H17.1937V11.5875H18.1875V12.4125H17.1937V13.3875H16.3687V12.4125H15.3937V11.5875ZM18.8625 11.5875H19.8375V10.5937H20.6625V11.5875H21.6562V12.4125H20.6625V13.3875H19.8375V12.4125H18.8625V11.5875Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 19 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] border-solid border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 20 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.05)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 21 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 22 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.05)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 23 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 24 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 20.6625L5.64375 12.1875L0 3.73126H4.2375L9.88125 12.1875L4.2375 20.6438H0V20.6625Z"
                fill="currentcolor"
              ></path>
              <path
                d="M5.6438 20.6625L11.2875 12.1875L5.6438 3.73126H9.8813L21.1688 20.6625H16.95L13.4063 15.3563L9.8813 20.6438H5.6438V20.6625Z"
                fill="currentcolor"
              ></path>
              <path
                d="M19.2938 15.7125L17.4188 12.8812H24V15.7125H19.2938ZM16.4625 11.4937L14.5875 8.66248H24V11.4937H16.4625Z"
                fill="currentcolor"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 25 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 26 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.05)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 27 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.05)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 28 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-6rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.05)] border-solid border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 29 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1 opacity-[.31]">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                fill="currentcolor"
                d="M116.948 97.807c-6.863-.187-12.104.452-16.585 2.341-1.273.537-3.305.552-3.513 2.147.7.733.809 1.829 1.365 2.731 1.07 1.73 2.876 4.052 4.488 5.268 1.762 1.33 3.577 2.751 5.465 3.902 3.358 2.047 7.107 3.217 10.34 5.268 1.906 1.21 3.799 2.733 5.658 4.097.92.675 1.537 1.724 2.732 2.147v-.194c-.628-.8-.79-1.898-1.366-2.733l-2.537-2.537c-2.48-3.292-5.629-6.184-8.976-8.585-2.669-1.916-8.642-4.504-9.755-7.609l-.195-.195c1.892-.214 4.107-.898 5.854-1.367 2.934-.786 5.556-.583 8.585-1.365l4.097-1.171v-.78c-1.531-1.571-2.623-3.651-4.292-5.073-4.37-3.72-9.138-7.437-14.048-10.537-2.724-1.718-6.089-2.835-8.976-4.292-.971-.491-2.677-.746-3.318-1.562-1.517-1.932-2.342-4.382-3.511-6.633-2.449-4.717-4.854-9.868-7.024-14.831-1.48-3.384-2.447-6.72-4.293-9.756-8.86-14.567-18.396-23.358-33.169-32-3.144-1.838-6.929-2.563-10.929-3.513-2.145-.129-4.292-.26-6.438-.391-1.311-.546-2.673-2.149-3.902-2.927C17.811 4.565 5.257-2.16 1.633 6.682c-2.289 5.581 3.421 11.025 5.462 13.854 1.434 1.982 3.269 4.207 4.293 6.438.674 1.467.79 2.938 1.367 4.489 1.417 3.822 2.652 7.98 4.487 11.511.927 1.788 1.949 3.67 3.122 5.268.718.981 1.951 1.413 2.145 2.927-1.204 1.686-1.273 4.304-1.95 6.44-3.05 9.615-1.899 21.567 2.537 28.683 1.36 2.186 4.567 6.871 8.975 5.073 3.856-1.57 2.995-6.438 4.098-10.732.249-.973.096-1.689.585-2.341v.195l3.513 7.024c2.6 4.187 7.212 8.562 11.122 11.514 2.027 1.531 3.623 4.177 6.244 5.073v-.196h-.195c-.508-.791-1.303-1.119-1.951-1.755-1.527-1.497-3.225-3.358-4.487-5.073-3.556-4.827-6.698-10.11-9.561-15.609-1.368-2.627-2.557-5.523-3.709-8.196-.444-1.03-.438-2.589-1.364-3.122-1.263 1.958-3.122 3.542-4.098 5.854-1.561 3.696-1.762 8.204-2.341 12.878-.342.122-.19.038-.391.194-2.718-.655-3.672-3.452-4.683-5.853-2.554-6.07-3.029-15.842-.781-22.829.582-1.809 3.21-7.501 2.146-9.172-.508-1.666-2.184-2.63-3.121-3.903-1.161-1.574-2.319-3.646-3.124-5.464-2.09-4.731-3.066-10.044-5.267-14.828-1.053-2.287-2.832-4.602-4.293-6.634-1.617-2.253-3.429-3.912-4.683-6.635-.446-.968-1.051-2.518-.391-3.513.21-.671.508-.951 1.171-1.17 1.132-.873 4.284.29 5.462.779 3.129 1.3 5.741 2.538 8.392 4.294 1.271.844 2.559 2.475 4.097 2.927h1.756c2.747.631 5.824.195 8.391.975 4.536 1.378 8.601 3.523 12.292 5.854 11.246 7.102 20.442 17.21 26.732 29.269 1.012 1.942 1.45 3.794 2.341 5.854 1.798 4.153 4.063 8.426 5.852 12.488 1.786 4.052 3.526 8.141 6.05 11.513 1.327 1.772 6.451 2.723 8.781 3.708 1.632.689 4.307 1.409 5.854 2.34 2.953 1.782 5.815 3.903 8.586 5.855 1.383.975 5.64 3.116 5.852 4.879zM29.729 23.466c-1.431-.027-2.443.156-3.513.389v.195h.195c.683 1.402 1.888 2.306 2.731 3.513.65 1.367 1.301 2.732 1.952 4.097l.194-.193c1.209-.853 1.762-2.214 1.755-4.294-.484-.509-.555-1.147-.975-1.755-.556-.811-1.635-1.272-2.339-1.952z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 30 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] border-solid border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"></div>
      </div>

      {/* 31 */}
      <div
        className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1"
        style={{
          transformStyle: "preserve-3d",
          transform: "translate3d(0,0,-3rem)",
        }}
      >
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex">
          <div className="w-6 h-6 flex-none flex justify-center items-stretch text-[rgba(255,255,255,.6)]">
            <svg viewBox="0 0 128 128">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                fill="currentcolor"
                d="M35.971 111.33l81.958 11.188c-9.374-15.606-18.507-30.813-27.713-46.144L35.971 111.33zm89.71-86.383c-2.421 3.636-4.847 7.269-7.265 10.907a67619.72 67619.72 0 00-24.903 37.485c-.462.696-1.061 1.248-.41 2.321 8.016 13.237 15.969 26.513 23.942 39.777 1.258 2.095 2.53 4.182 4.157 6.192l4.834-96.58-.355-.102zM16.252 66.22c.375.355 1.311.562 1.747.347 7.689-3.779 15.427-7.474 22.948-11.564 2.453-1.333 4.339-3.723 6.452-5.661 6.997-6.417 13.983-12.847 20.966-19.278.427-.395.933-.777 1.188-1.275 2.508-4.902 4.973-9.829 7.525-14.898-3.043-1.144-5.928-2.263-8.849-3.281-.396-.138-1.02.136-1.449.375-6.761 3.777-13.649 7.353-20.195 11.472-3.275 2.061-5.943 5.098-8.843 7.743-4.674 4.266-9.342 8.542-13.948 12.882a24.011 24.011 0 00-3.288 3.854c-3.15 4.587-6.206 9.24-9.402 14.025 1.786 1.847 3.41 3.613 5.148 5.259zm28.102-6.271l-11.556 48.823 54.3-34.987-42.744-13.836zm76.631-34.846l-46.15 7.71 15.662 38.096c10.221-15.359 20.24-30.41 30.488-45.806zM44.996 56.644l41.892 13.6c-5.25-12.79-10.32-25.133-15.495-37.737L44.996 56.644zM16.831 75.643L2.169 110.691l27.925-.825-13.263-34.223zm13.593 26.096l.346-.076c3.353-13.941 6.754-27.786 10.177-42.272L18.544 71.035c3.819 9.926 7.891 20.397 11.88 30.704zm84.927-78.897c-4.459-1.181-8.918-2.366-13.379-3.539-6.412-1.686-12.829-3.351-19.237-5.052-.801-.213-1.38-.352-1.851.613-2.265 4.64-4.6 9.245-6.901 13.868-.071.143-.056.328-.111.687l41.47-6.285.009-.292zM89.482 12.288l36.343 10.054-6.005-17.11-30.285 6.715-.053.341zM33.505 114.007c-4.501-.519-9.122-.042-13.687.037-3.75.063-7.5.206-11.25.323-.386.012-.771.09-1.156.506 31.003 2.866 62.005 5.732 93.007 8.6l.063-.414-29.815-4.07c-12.384-1.691-24.747-3.551-37.162-4.982zM2.782 99.994c3.995-9.27 7.973-18.546 11.984-27.809.401-.929.37-1.56-.415-2.308-1.678-1.597-3.237-3.318-5.071-5.226-2.479 12.24-4.897 24.177-7.317 36.113l.271.127c.185-.297.411-.578.548-.897zm78.74-90.153c6.737-1.738 13.572-3.097 20.367-4.613.44-.099.87-.244 1.303-.368l-.067-.332-29.194 3.928c2.741 1.197 4.853 2.091 7.591 1.385z"
              ></path>
            </svg>
          </div>
        </div>
      </div>

      {/* 32 */}
      <div className="row-start-span-1 row-end-span-1 col-start-span-1 col-end-span-1">
        <div className="will-change-transform w-[4rem] h-[4rem] bg-[rgba(0,0,0,0)] border-solid border-[1px] border-[rgba(255,255,255,.1)] rounded-2xl justify-center items-center flex"></div>
      </div>
    </div>
  );
};

export default FloatingLangGrids;
