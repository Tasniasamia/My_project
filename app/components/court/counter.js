"use client";

import Image from "next/image";

const Counter = () => {
  return (
    <div className="bg-[#0C0C15] py-[60px]">
      <div className="container grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-0 gap-[20px]">
        <div className="flex gap-[30px] items-center lg:border-r border-white border-opacity-[0.2] justify-center">
          <Image
            src="/court/icon.png"
            width={56}
            height={56}
            alt="hero"
            className="h-[56px] w-[56px] object-fill"
          />
          <div className="flex flex-col gap-[16px]">
          <h2 className="header-2-bold text-white">162</h2>
          <h4 className="header-4 text-white">successful case</h4>
          </div>
        </div>
        <div className="flex gap-[30px] items-center lg:border-r border-white border-opacity-[0.2]  justify-center">
          <Image
            src="/court/icon2.png"
            width={56}
            height={56}
            alt="hero"
            className="h-[56px] w-[56px] object-fill"
          />
          <div className="flex flex-col gap-[16px]">
          <h2 className="header-2-bold text-white">162</h2>
          <h4 className="header-4 text-white">successful case</h4>
          </div>
        </div>
        <div className="flex gap-[30px] items-center lg:border-r border-white border-opacity-[0.2]  justify-center">
          <Image
            src="/court/icon.png"
            width={56}
            height={56}
            alt="hero"
            className="h-[56px] w-[56px] object-fill"
          />
          <div className="flex flex-col gap-[16px]">
          <h2 className="header-2-bold text-white">162</h2>
          <h4 className="header-4 text-white">successful case</h4>
          </div>
        </div>
        <div className="flex gap-[30px] items-center justify-center  ">
          <Image
            src="/court/icon.png"
            width={56}
            height={56}
            alt="hero"
            className="h-[56px] w-[56px] object-fill"
          />
          <div className="flex flex-col gap-[16px]">
          <h2 className="header-2-bold text-white">162</h2>
          <h4 className="header-4 text-white">successful case</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;
