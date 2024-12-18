import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { NavLink } from "react-router-dom";

function MainNav() {
  return (
    <nav className=" mx-auto flex justify-between py-4 px-2 w-full text-sm">
      <div className=" container w-full flex flex-col justify-between items-center  mx-auto xl:px-28 xs:flex xs:flex-row  md:px-5 ">
        <div className="flex flex-col xs:w-full md:w-4/6  justify-between   xs:flex xs:flex-row gap-3">
          <NavLink to="/">
            <div className="flex gap-2 items-center justify-center ">
              <span className="mt-1  ">
                <svg
                  width="32"
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
              <span className="xs:text-3xl text-2xl font-semibold ">
                Ecobazar
              </span>
            </div>
          </NavLink>
          <div>
            <span className="flex justify-center ">
              <span className=" p-2 border-solid border-x border-y rounded-s border-slate-300  ">
                <SearchRoundedIcon></SearchRoundedIcon>
                <input
                  type="search"
                  placeholder="Search"
                  className=" focus:outline-none w-2/4  "
                />
              </span>
              <button className=" bg-[#00B207] text-white p-2 rounded-e  hover:bg-green-600 active:bg-green-600 ">
                Search
              </button>
            </span>
          </div>
        </div>

        <div className="md:block hidden">
          <span className="flex gap-2">
            <svg
              className="mt-2"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1432 17.1137C11.5885 20.0696 13.9841 22.4549 16.9462 23.8875C17.1631 23.9902 17.403 24.0346 17.6423 24.0163C17.8816 23.998 18.112 23.9175 18.3107 23.783L22.6733 20.8755C22.8659 20.7469 23.0877 20.6683 23.3184 20.6469C23.5491 20.6255 23.7815 20.6619 23.9946 20.7529L32.1551 24.2513C32.4323 24.369 32.6638 24.5736 32.8146 24.8343C32.9654 25.095 33.0275 25.3976 32.9914 25.6966C32.7331 27.7148 31.7481 29.5696 30.2209 30.9139C28.6937 32.2582 26.7288 32.9999 24.6942 33C18.4101 33 12.3834 30.5037 7.93988 26.0601C3.49635 21.6166 1 15.5899 1 9.30578C1.00019 7.27133 1.74188 5.30669 3.08622 3.77969C4.43056 2.25268 6.28537 1.26801 8.3034 1.01001C8.6024 0.973955 8.90502 1.03601 9.16569 1.18684C9.42637 1.33766 9.63099 1.56909 9.74875 1.84628L13.2499 10.0138C13.34 10.2249 13.3765 10.4549 13.3563 10.6834C13.3362 10.912 13.2599 11.132 13.1342 11.324L10.2352 15.7534C10.1036 15.9529 10.026 16.183 10.0098 16.4214C9.99372 16.6598 10.0397 16.8984 10.1432 17.1137V17.1137Z"
                stroke="#1A1A1A"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="  ">
              <p className="text-slate-400 text-xs">Customer Service</p>
              <p className="font-semibold">(219) 555-0114</p>
            </span>
          </span>
        </div>
      </div>
    </nav>
  );
}
export default MainNav;
