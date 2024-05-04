import Image from "next/image";
import React from "react";
import { GoPlus } from "react-icons/go";

const Solution = ({solution}) => {
 
  return (
    <div className="container">
      <div className="mt-[120px] mb-[120px]">
        <h1 className="text-[#0B204C] font-semibold text-[44px] text-center mb-[16px]">
          Our Solutions
        </h1>
        <p className="mb-[40px] text-[18px] font-normal text-center">
          Discover our innovative daily solution for real-world situations.
        </p>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-x-[24px] md:gap-y-0 gap-y-[24px]">
          {
            solution?.map((i,index)=>{
              return (
                <div className="group  md:max-w-[424px]"key={index}>
                <div className="relative shadow_custom3  z-10  rounded-t-none rounded-e-lg rounded-b-lg rounded-tr-lg group-hover:border-[#186F65] border  border-white transition-all duration-300 ease-in-out pe-[16px] ">
                  {/* image */}
                  <div className="flex items-center absolute top-0 left-0">
                    <div className="w-[34px] h-[77px] bg-[#186F65]"></div>
                    <Image
                      src={i?.image[0]?.url}
                      alt="car"
                      width={54.13}
                      height={37.48}
                      className="w-[54.13px] h-[37.48px] ms-[-31px]"
                    />
                  </div>
                  <div className="ps-[90px] py-[20px]">
                    <h3 className="text-[#0B204C] font-medium mb-[9px]">
                      {i?.title}
                    </h3>
                    <p className="text-[#888AA0] text-[14px] line-clamp-3 mb-[20px]">
                      {i?.description}
                    </p>
                  </div>
                </div>
                <div className="h-[40px] w-[40px] flex justify-center items-center bg-[#F4F3F3] ms-auto mt-[-20px] me-[16px] relative z-50 group-hover:text-white duration-300 transition-all ease-in-out group-hover:bg-[#186F65]">
                  <GoPlus
                    className="text-[#000000] group-hover:text-white duration-300 transition-all ease-in-out"
                    size={12.88}
                  />
                </div>
              </div>
              )
            })
          }
        
        </div>
      </div>
    </div>
  );
};

export default Solution;
