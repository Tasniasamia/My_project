import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="gym my-10 xl:grid  xl:grid-cols-3 xl:grid-rows-4   gap-4">
        <div className="gym-1 md:col-span-2 md:row-span-1 ">
          <div className="text-[24px] sm:text-[30px] md:text-[48px] lg:text-[68px] font-bold relative w-fit">
            Build The Body of Your Dreams.
            <Image
              src="/Design BG.png"
              height={24}
              width={24}
              className="w-[24px] h-[24px] absolute left-[78%] top-[70%] z-10"
              alt="image"
            />
          </div>
          <button className="bg-primary text-white rounded-full font-semibold lg:py-[14px] py-[10px] xl:mt-[48px] lg:mt-[48px] lg:px-[32px] px-6 flex mt-[24px] justify-center items-center">
            Check The Schedule
          </button>
        </div>
        <div className="gym-2 bg-yellow-200 flex justify-center items-end md:row-span-2 ">
          <div className="md:w-[445.5px] md:h-[690.5px] flex flex-col items-end">
            <img src="/hero.png" alt="gym" className="h-full w-auto" />
          </div>
        </div>
        <div className="gym-3 md:row-span-2 mt-6 md:mt-[109px]">
          <img src="/mask.png" alt="mask" className="h-full w-auto md:max-w-[388.32px] md:max-h-[570px]" />
        </div>
        <div className="gym-4 capitalize md:mt-[100px] max-w-full md:max-w-[760px] text-start text-black1">
          <div className="md:max-w-[388px] md:max-h-[4px] mb-[25px]">
            <img src="/Line.png" className="w-auto h-full" alt="line" />
          </div>
          <div>
            Welcome to this comprehensive guide on the Apple Vision Pro
            features, where we delve deep into the innovative advancements of
            this groundbreaking technology. Apple has always been at the
            forefront of technological innovation, and the Vision Pro features
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
