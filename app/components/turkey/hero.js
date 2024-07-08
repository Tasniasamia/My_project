"use client";

import { Rate } from "antd";

const Hero = () => {
  return (
    <div className="container">
      <div className="bg-[url('/cont-bg.png')] no-repeat bg-cover center  lg:px-[12px] pt-[48px] rounded-[20px] my-5 grid lg:grid-cols-2 grid-cols-1 ">
        <div className="text-center lg:px-0 px-[12px]">
          <img
            src="/country-icon.png"
            alt="image"
            className="w-[58px] h-[58px] rounded-full my-2 mx-auto"
          />
          <h1 className="text-[24px] text-white">Prepaid Travel</h1>
          <h1 className="text-[40px] font-bold text-white pb-2">
            <span className="text-[#008E7C]">eSIM</span> For Turkey
          </h1>
          <div className="py-[24px] flex gap-2 justify-center flex-wrap">
            <img
              src="./a.png"
              alt="a"
              className="w-[25px] h-[25px] object-fill"
            />
            <img
              src="./playstore.png"
              alt="play"
              className="w-[25px] h-[25px] object-fill"
            />
            <Rate allowHalf defaultValue={4.5} />
            <span className="text-[16px] text-white">50,000+ Downloads</span>
          </div>
          <p className="text-white mb-10">
            Get the best eSIM for Turkey travel from eSIMCard. Enjoy seamless
            connectivity and affordable unlimited data plans. Stay connected
            wherever you go.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
