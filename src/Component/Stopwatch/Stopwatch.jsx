import React from "react";

const Stopwatch = ({ timerDay, timerHours, timerMinutes, timerSeconds }) => {
  return (
    <div className="">
      <div className=" w-full flex justify-center items-center gap-2 ">
        <div className="border  bg-white flex flex-col items-center  rounded-lg p-1 md:p-3">
          <p className="text-normal text-[#00B207]">{timerDay}</p>{" "}
          <p className="text-xs text-[#618062]">DAYS</p>{" "}
        </div>
        :
        <div className="border  bg-white flex flex-col items-center  rounded-lg p-1 md:p-3">
          <p className="text-normal text-[#00B207]">{timerHours}</p>{" "}
          <p className="text-xs text-[#618062]">HOURS</p>{" "}
        </div>
        :
        <div className="border  bg-white flex flex-col items-center  rounded-lg p-1 md:p-3">
          <p className="text-normal text-[#00B207]">{timerMinutes}</p>{" "}
          <p className="text-xs text-[#618062]">MINS</p>{" "}
        </div>
        :
        <div className="border  bg-white flex flex-col items-center  rounded-lg p-1 md:p-3">
          <p className="text-normal text-[#00B207]">{timerSeconds}</p>{" "}
          <p className="text-xs text-[#618062]">SECS</p>{" "}
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;
