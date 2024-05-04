import Image from "next/image";
import React from "react";

const Download = ({banner}) => {
  return (
    <div className="mb-[120px] mt-[331px]">
      <div className="container relative">
        <div className="  xl:px-[241px] md:px-5 px-3 lg:pb-[76px] pb-[40px] pt-[108px] shadow-custom rounded-tl-2xl rounded-br-2xl border bg-white">
          <h1 className="mt-[21px] text-[#0B204C] md:text-[32px] text-[21px] font-medium text-center md:max-w-[715px] mx-auto capitalize">
           {banner?.heading}
          </h1>
          <p className="mt-[20px] text-[#919BB3] font-medium md:mb-[46px] mb-[20px] text-center capitalize sm:text-[16px] text-[14px] md:max-w-[646px] mx-auto">
           {banner?.description_1}
          </p>
          <div className="flex flex-row  lg:gap-x-[100px] sm:gap-x-[50px] gap-x-[12px] md:gap-y-0 gap-y-[20px] sm:justify-center  md:items-center items-start md:ms-0 ms-3">
            <div className=" md:max-w-[368px] ">
              <h3 className="text-[18px] font-normal mb-[12px] md:text-center">
                User App
              </h3>
              <div className="flex lg:flex-row flex-col gap-y-[12px] gap-x-[12px]  ">
                <Image
                  src="/apple_store.png"
                  height={52}
                  width={178}
                  className="sm:w-[178px]  md:h-[52px] w-[150px] object-fill"
                  alt="app store"
                />
                <Image
                  src="/google_play.png"
                  height={52}
                  width={178}
                  className="sm:w-[178px]  md:h-[52px] w-[150px] object-fill"
                  alt="app store"
                />
              </div>
            </div>
            <div className=" md:max-w-[368px]">
              <h3 className="text-[18px] font-normal mb-[12px] md:text-center">
                Driver App
              </h3>
              <div className="flex lg:flex-row flex-col gap-y-[12px] gap-x-[12px] ">
                <Image
                  src="/apple_store.png"
                  height={52}
                  width={178}
                  className="sm:w-[178px]  md:h-[52px] w-[150px] object-fill"
                  alt="app store"
                />
                <Image
                  src="/google_play.png"
                  height={52}
                  width={178}
                  className="sm:w-[178px]  md:h-[52px] w-[150px] object-fill"
                  alt="app store"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center ">
         <div className="md:max-w-[624]  md:max-h-[298px] absolute md:top-[-211px] sm:top-[-100px] top-[-50px]">
            <img
              src="/white_car.png"
              alt="earning"
              className="md:w-auto sm:w-[424px] w-[250px] h-full object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
