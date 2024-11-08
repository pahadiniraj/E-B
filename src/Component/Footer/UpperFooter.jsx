function UpperFooter() {
  return (
    <footer className="w-full bg-slate-100 md:py-8 py-3 ">
      <div className="px-10 md:container md:mx-auto">
        <div className="flex flex-col   w-full items-center md:flex-row  md:gap-3 md:justify-between   ">
          <div className="flex gap-2 items-center   ">
            <span>
              <svg
                width="20"
                height="31"
                viewBox="0 0 32 31"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M31.2749 3.8428C27.4022 3.8428 21.9311 4.16683 19.1352 6.96126C17.9247 8.17176 17.3202 10.1451 17.4771 12.3787C17.4975 12.6737 17.6937 12.925 17.9756 13.0181C18.256 13.1096 18.5641 13.0239 18.7559 12.7987C20.3108 10.9691 22.2435 9.5029 24.5046 8.44062C24.6964 8.34907 24.9231 8.34178 25.1295 8.41446C25.3111 8.47985 25.4535 8.60335 25.5276 8.76179C25.6816 9.08732 25.6322 9.51598 25.1207 9.75718C25.0917 9.77169 25.0655 9.79063 25.0365 9.8037C25.0263 9.80806 25.0147 9.80663 25.006 9.81099C19.4346 12.4296 16.6954 16.9983 15.4514 21.6964C14.5446 15.814 12.6294 12.3511 10.8202 10.2251C9.51095 8.52787 8.22341 7.62832 7.47943 7.11976C7.34136 7.02528 6.92435 6.74049 6.7514 6.56754C6.46803 6.28417 6.46803 5.8235 6.7514 5.54013C7.03477 5.2582 7.49687 5.2582 7.81218 5.57208C7.88923 5.6404 8.01272 5.72759 8.16966 5.83222L8.29902 5.91941C9.35108 6.64015 11.31 7.97851 13.0479 10.8601C13.2034 11.1173 13.5042 11.2554 13.7963 11.2002C14.0928 11.1479 14.3252 10.9197 14.3834 10.6247C14.7627 8.68768 14.5927 5.81328 12.8649 4.0855C10.069 1.2925 4.59789 0.968468 0.726671 0.968468C0.32553 0.9684 0 1.29393 0 1.695C0 5.56765 0.324032 11.0388 3.11846 13.8347C4.28387 15.0001 6.08147 15.5233 7.86736 15.5233C9.32486 15.5233 10.7533 15.1585 11.8476 14.5264C13.3399 17.6187 14.5316 22.2383 14.5316 29.305C14.5316 29.7061 14.8571 30.0316 15.2582 30.0316C15.6592 30.0316 15.9848 29.7061 15.9848 29.305C15.9848 25.3626 16.6605 20.6311 19.173 16.7366C20.18 17.7205 21.9137 18.3439 23.8347 18.402C23.9306 18.4049 24.0251 18.4063 24.1195 18.4063C26.0711 18.4063 27.796 17.7946 28.8815 16.7076C31.6773 13.9117 31.9999 8.44055 31.9999 4.56783C32.0015 4.16683 31.6774 3.8428 31.2749 3.8428Z"
                  fill="#00B307"
                />
              </svg>
            </span>
            <span className=" text-2xl font-semibold">Ecobazar</span>
          </div>
          <div className=" text-center  md:text-start flex-col items-center mb-4 md:mb-0  ">
            <p className="font-semibold text-medium  ">
              Subcribe our Newsletter
            </p>
            <p className="font-light text-xxs text-center ">
              Pellentesque eu nibh eget mauris congue mattis matti.
            </p>
          </div>
          <div className="flex justify-center items-center relative  w-full md:w-2/5">
            <div className="w-full">
              <input
                type="text"
                placeholder="Your Email address"
                className="p-3 rounded-3xl  border-none focus:outline-none text-xs w-full "
              />
            </div>
            <div className="absolute right-0">
              <button className="bg-[#00B207] p-3 rounded-3xl relative text-xs text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default UpperFooter;
