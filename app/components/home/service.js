import Image from "next/image";
import React from "react";

const Service = ({ used_content }) => {
  return (
    <div className="sm:mb-[120px] mb-[250px]">
      {/* title */}
      <div className="flex justify-center gap-x-[32px] items-center ">
        <div className="w-[26px] h-[0px] border-[5px] border-[#186F65]"></div>
        <h1 className="text-[32px] font-medium text-black">Why Usd</h1>
        <div className="w-[26px] h-[0px] border-[5px] border-[#186F65]"></div>
      </div>
      <div className="">
        <div className="container  mt-[40px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-x-[24px] md:gap-y-[73px] sm:gap-y-[100px] gap-y-[160px]">
            {used_content?.map((i, index) => {
              return (
                <div className=" relative md:h-[274px]" key={index}>
                  <div className="md:max-w-[424px]  absolute w-full h-auto md:h-[274px] custom-rounded2 bg-white px-[20px] pb-[40px] shadow_custom2 mt-[83px] !z-50  ">
                    <div className="flex flex-col items-center justify-center p-4 relative z-40">
                      <h3 className="text-[#0B204C] font-normal text-center lg:max-w-[312px] text-[24px] mt-[28px] mb-[26px] capitalize">
                        {i?.label}
                      </h3>
                      <p className="text-[#888AA0] font-normal text-center">
                        {i?.description}
                      </p>
                    </div>
                  </div>
                  <div className="relative top-[2rem]  h-[200px] flex justify-center ">
                    <div className=" absolute  bg-red-300  z-10 rounded-full shadow_custom2 h-[97.59px] w-[100px] shadow-xl"></div>
                    <div className="bg-white h-[97.59px] w-[100px] rounded-full absolute  z-50   flex justify-center items-center">
                      <img
                        src={i?.image[0]?.url}
                        className=" w-[50px] h-[50px]   "
                        alt="image"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
