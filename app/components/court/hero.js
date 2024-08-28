"use client";

import Image from "next/image";

const Hero = () => {
  return (
    <div className="relative  ">
      <div className="relative lg:h-[870px] sm:h-[600px] h-[700px]">
        <Image
          src="/court/bg.png"
          width={1920}
          height={870}
          alt="hero"
          className="w-full h-full object-fill"
        />
        <div className="w-full h-full bg-[rgba(28,28,31,0.7)] absolute top-0 left-0" />
      </div>
      <div className="container absolute -translate-x-1/2 left-1/2  lg:top-[164px] top-[50px]">
        <h5 className="header-5 text-white px-[10px] py-[8px] rounded-[4px] w-fit border border-[#B68C5A]">
          championing Justice...
        </h5>
        <h1 className="header-1 text-white mt-[40px] lg:w-1/2 w-full">
          defending your right delivering justice.
        </h1>
        <h6 className="header-6 mt-[40px] text-white lg:w-1/2 w-full">
          Committed to defending your rights and delivering justice with
          integrity, we work tirelessly to ensure your voice is heard
        </h6>
        <div className="flex gap-[10px] mt-[50px] items-center">
          <button className="cursor-pointer header-6 hover:bg-transparent duration-300 transition-all border border-[#B68C5A]   text-white md:px-[32px] px-[16px] py-[16px] bg-[#B68C5A] rounded-[4px]">
            Get Appoinment
          </button>
          <button className="cursor-pointer text-[16px] font-medium text-white md:px-[32px] px-[16px] py-[16px] border  hover:bg-[#B68C5A] duration-300 transition-all hover:border-[#B68C5A] rounded-[4px]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
