import { Input } from "antd";
import Image from "next/image";
import React from "react";
import { VscSend } from "react-icons/vsc";

const page = () => {
  return (
    <div className=" md:pt-[86.99px] pt-[40px] md:pb-[100px] pb-[50px] bg-[url('/bg.png')] bg-cover bg-no-repeat">
      <div className=" h-[634px] relative ">
        <Image
          src="/driver.png"
          width={1101}
          height={634}
          alt="banner"
          className="absolute sm:block hidden right-0 w-[50%] h-full img-shape "
        />
          <div className=" container  lg:items-center  flex lg:flex-row flex-col  justify-center ">
          <div className=" sm:w-[50%] w-full h-full">
            <div className="xl:text-[61px] text-[30px] text-white font-bold sm:mb-[32px] mb-[16px] capitalize">
              <h2>book your taxi from </h2>
              <h2 className=" text-[#1F8A70]"> anywhere today!</h2>
            </div>
            <p className="text-white font-normal  w-full sm:mb-[40px] mb-[20px] sm:text-[16px] text-[10px] ">
              A taxi is a motor vehicle designed primarily for the
              transportation of passengers for a fare. It is often characterized
              by its distinctive exterior markings,
            </p>
            <div className="flex  sm:flex-row flex-col gap-y-[16px] gap-x-[16px] ">
              <Input
                placeholder="Pickup location"
                className="sm:py-[12px] sm:px-[20px] py-2 px-2 text-[#2B2B2B]"
                suffix={<VscSend style={{ color: "#40A2E3" }} />}
              />
              <Input
                placeholder="Enter destination"
                className="md:py-[12px] md:px-[20px] py-2 px-2 text-[#2B2B2B]"
              />
            </div>
            <button className="text-white sm:px-[24px] px-2 py-2 sm:py-[16px] bg-[#186F65] sm:w-auto w-full capitalize mt-[16px] rounded md:text-[16px] text-[14px] ">
              Book Ride
            </button>
          </div>
          <div className="flex lg:h-[634px] md:h-[280px] sm:h-[260px] flex-col sm:justify-end justify-start xl:w-auto w-full ">
            <div className="grid  grid-cols-3 sm:gap-x-0 gap-x-3 justify-items-center   w-full  lg:z-40  lg:mb-[-37px] sm:gap-y-0 mt-4 gap-y-4">
              <div className="sm:w-[209px] w-full  sm:h-[74px] bg-[#1F8A70] text-white text-center flex flex-col items-center img-shape2">
                <h3 className="font-medium text-[24px]">8k+</h3>
                <h6 className="font-normal text-[#DEDEDE]">App Downloads</h6>
              </div>
              <div className="sm:w-[209px] w-full  sm:h-[74px] bg-[#1F8A70] text-white text-center flex flex-col items-center img-shape2">
                <h3 className="font-medium text-[24px]">8k+</h3>
                <h6 className="font-normal text-[#DEDEDE]">Active Rider</h6>
              </div>
              <div className="sm:w-[209px] w-full  sm:h-[74px] bg-[#1F8A70] text-white text-center flex flex-col items-center img-shape2">
                <h3 className="font-medium text-[24px]">8k+</h3>
                <h6 className="font-normal text-[#DEDEDE]">Active User</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;

