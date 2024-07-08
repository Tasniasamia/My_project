"use client";
import Carousel from "./carousel";

const Plan = () => {
  return (
    <div className="container">
      <h2 className="text-center text-[32px] font-bold pb-[12px]">
        Pick the Best eSIM Plans for Turkey Travel
      </h2>
      <div className="bg-white shadow rounded">
      <div className="mt-4 mb-5 md:mx-auto mx-[20px] md:max-w-[320px] max-w-full bg-[rgb(219,219,219)] bg-opacity-[1] rounded-b pb-2 py-2 flex flex-col justify-center items-center">
        <div className="border-b border-[#dee2e6]  pb-2 mx-auto">
          <button className="px-3 py-[10px]  border border-transparent hover:border-[#e9ecef] hover:text-black text-[rgb(0,0,0,0.55)] hover:text-[0,0,0,0.7] rounded-t duration-150 transition-all focus:rounded-[0.375rem] focus:text-white focus:bg-[#008E7C] focus:border-b-[#fff] focus:border-[#dee2e6]">
            Standard Plans
          </button>
          <button className="px-3 py-[10px]  border border-transparent hover:border-[#e9ecef] hover:text-black text-[rgb(0,0,0,0.55)] hover:text-[0,0,0,0.7] rounded-t duration-150 transition-all focus:rounded-[0.375rem] focus:text-white focus:bg-[#008E7C]  focus:border-b-[#fff] focus:border-[#dee2e6]">
            Unlimited Data
          </button>
        </div>
      </div>
      <Carousel/>
      </div>
    </div>
  );
};

export default Plan;
