import Boxpath from "@/app/components/common/boxpath";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="">
        <div className="bg-[url('/black.png')] h-auto ">
          <div className="">
            <div className="flex justify-between lg:flex-row flex-col relative">
              <div className="flex items-center justify-center lg:w-[804px]">
                <div className="flex flex-col items-center justify-center lg:mt-0 mt-8 h-auto lg:pl-[19rem] p-6">
                  <h2 className="header_2 text-white">
                    Competitive rates, safety time!
                  </h2>
                  <p className="text-white mt-8">
                    OneRide is a Professional Rideshare Platform. Here we will
                    provide you only interesting content, which you will like.
                  </p>
                </div>
              </div>
             <div className="flex items-center lg:mt-0 mt-4">
                <img src="/car.png" width={860} alt="hero" />
              </div>
              <div className="absolute lg:bottom-[32px] bottom-0  mx-auto w-full">
                <Boxpath />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
