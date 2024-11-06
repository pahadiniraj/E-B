import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

function CounterPage() {
  const [counterState, setCounterState] = useState(false);
  return (
    <div className="bg-black   w-full xxxs:hidden md:block">
      <div className=" xs:container xs:mx-auto  ">
        <div className="justify-center flex items-center h-[300px] xxxs:px-10 md:px-5 gap-5 ">
          {[
            {
              count: 37,
              discription: "Years of Hard Work",
              sign: "+",
            },
            {
              count: 500,
              discription: "Happy Customer",
              sign: "k+",
            },
            {
              count: 28,
              discription: "Qualified Team Member",
            },
            {
              count: 750,
              discription: "Monthly Orders",
              sign: "k+",
            },
          ].map((val, idx) => (
            <div
              key={idx}
              className="bg-slate-800 rounded flex flex-col justify-center items-center w-1/4 h-2/4 xs:h-2/4  p-3"
            >
              <ScrollTrigger onEnter={() => setCounterState(true)}>
                <h2 className=" text-green-500 xxxs:text-lg  xs:text-4xl">
                  {counterState && (
                    <CountUp start={0} end={val.count} duration={3.5}></CountUp>
                  )}

                  {val.sign}
                </h2>
              </ScrollTrigger>
              <p className="text-white xxxs:text-xxxs xs:text-xs text-center">
                {val.discription}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default CounterPage;
