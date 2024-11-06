import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import { NavLink } from "react-router-dom";

function PreNav() {
  return (
    <>
      <nav className="py-4  bg-[#333333]  text-sm  xxxs:hidden xs:block ">
        <div className=" flex justify-center xxs:justify-between items-center mx-auto md:px-5 xl:px-28 container w-full ">
          <div className=" items-center px-2 flex justify-center  ">
            <LocationOnOutlinedIcon className="text-slate-500 "></LocationOnOutlinedIcon>
            <p className="text-slate-300 text-xs">
              Store Location: Lincoln- 344, Illinois, Chicago, USA
            </p>
          </div>
          <div className="flex justify-center   md:gap-2  ">
            <div className="flex">
              <div className=" text-slate-500 text-xs mx-2 hidden sm:block">
                <label htmlFor="lang-select">
                  <select
                    id="lang-select"
                    className=" bg-[#333333] text-[#B3B3B3] "
                  >
                    <option value="english">Eng</option>
                    <option value="nepali">Nep</option>
                    <option value="indian">Ind</option>
                  </select>
                </label>
              </div>
              <div className=" text-[#B3B3B3] text-xs mx-2 hidden sm:block ">
                <label htmlFor="curr-select">
                  <select id="curr-select" className=" bg-[#333333]">
                    <option value="usd">USD</option>
                    <option value="nep">NRP</option>
                    <option value="ind">INR</option>
                  </select>
                </label>
              </div>
            </div>
            <div className="flex flex-col gap-2 xxs:flex-row ">
              <div className=" text-xs mx-1 text-[#B3B3B3]">
                <NavLink
                  to="signin"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#B3B3B3]"
                  }
                >
                  Sign in
                </NavLink>
              </div>
              <div className=" text-xs mx-1 text-[#B3B3B3]">
                <NavLink
                  to="signup"
                  className={({ isActive }) =>
                    isActive ? "text-white" : "text-[#B3B3B3]"
                  }
                >
                  Sign up
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default PreNav;
