import React from "react";

const Boxpath = () => {
  return (
    <div className="container  ">
      <div className="grid  md:grid-cols-4 sm:grid-cols-4 grid-cols-2  2xl:w-full lg:w-[85%]  gap-y-2 sm:text-start text-center ">
        <div className=" max-h-[64px] text-white capitalize py-5 font-medium px-6 lg:text-[24px] text-sm bg-amber-600 box-shape flex justify-center items-center">
          Schedule Ride
        </div>
        <div className="  max-h-[64px] text-white capitalize py-5 font-medium px-6 lg:text-[24px] text-sm bg-amber-600 box-shape flex justify-center items-center">
          Share Drive
        </div>
        <div className="  max-h-[64px] text-white capitalize py-5 font-medium px-6 lg:text-[24px] text-sm bg-amber-600 box-shape flex justify-center items-center">
          Have A Driver
        </div>
        <div className="  max-h-[64px] text-white capitalize py-5 font-medium px-6 lg:text-[24px] text-sm bg-amber-600 box-shape flex justify-center items-center">
          Rate A Car
        </div>
      </div>
    </div>
  );
};

export default Boxpath;
