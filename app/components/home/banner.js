import React  from 'react';
import Image from "next/image";
import { Input } from "antd";
import { VscSend } from "react-icons/vsc";
const Banner = ({hero_section,achievements}) => {
return (
        <div>
        <div className="">
        <div className="bg-[url('/banner.png')] bg-cover bg-no-repeat pt-[79px] relative lg:px-0 md:px-6 px-2  pb-[100px]  z-10">
          <div className="flex lg:flex-row flex-col-reverse 2xl:gap-x- xl:gap-x-[100px] lg:gap-x-[100px] items-start container">
            <div className="pt-[22px] lg:w-[50%]   w-full lg:pb-[100px] pb-[50px]">
              <Image
                src="/car_svg.png"
                className="h-[257px] md:w-[477px] w-full absolute lg:left-[300px] mt-[64px] object-fill md:block hidden "
                height={257}
                width={477}
              />
              <h2 className="xl:text-[61px] md:text-[38px] sm:text-start text-center text-[28px] text-white font-bold mb-[32px] capitatlize">
                {/* Get Your Best Car2Go Ride-Sharing Services */}
                {hero_section?.heading}
              </h2>
              <p className="text-white font-normal  w-full mb-[40px] sm:text-[16px] text-[12px]">
                {hero_section?.description}
                {/* Unlock a World of Convenience: Welcome to Car2Go Your Ultimate
                Ride-Sharing Destination! Seamlessly Connect with Reliable
                Drivers Enjoy Comfortable Journeys- One Ride at a Time. Unlock a
                World of Convenience: Welcome to Car2Go Your Ultimate
                Ride-Sharing Destination! Seamlessly Connect with Reliable
                Drivers{" "} */}
              </p>
              <div className="flex gap-x-[16px]">
                <Input
                  placeholder="Pickup location"
                  className="md:py-[12px] md:px-[20px] py-[10px] px-[8px]"
                  suffix={<VscSend />}
                />
                <Input
                  placeholder="Enter destination"
                  className="md:py-[12px] md:px-[20px] py-[10px] px-[8px]"
                />
              </div>
              <button className="text-white px-[24px] py-[16px] bg-[#186F65] sm:w-auto w-full capitalize mt-[16px] rounded  ">
                Book Ride
              </button>
            </div>
            <Image
              src={hero_section?.hero_section_image}
              alt="car"
              width={798}
              height={424}
              className="w-full lg:w-[50%]  lg:h-[424px] md:h-[300px] h-[250px] object-fill 2xl:me-[-300px] "
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-4 grid-cols-2 xl:gap-y-0 gap-y-[50px]  md:py-[50px] py-[50px] bg-white  rounded-lg shadow_custom2  mt-[-94px] relative z-30">
          <div className=" flex justify-between items-center ">
            <div className="  mx-auto text-center">
              <h1 className="text-[#292B49] md:text-[40px] text-[28px] font-medium ">
                {achievements?.app}k+
              </h1>
              <h6 className="font-normal text-[#292B49] md:text-[16px] text-[14px]">
                App Downloads
              </h6>
            </div>
            <div className="h-[46px] w-[2px] bg-[#292B49] xl:block hidden"></div>
          </div>
          <div className=" flex justify-between items-center  ">
            <div className="  mx-auto text-center">
              <h1 className="text-[#292B49] md:text-[40px] text-[28px] font-medium ">
              {achievements?.rider}k+
              </h1>
              <h6 className="font-normal text-[#292B49] md:text-[16px] text-[14px]">
                Active Rider
              </h6>
            </div>
            <div className="h-[46px] w-[2px] bg-[#292B49] xl:block hidden"></div>
          </div>
          <div className=" flex justify-between items-center  ">
            <div className="  mx-auto text-center">
              <h1 className="text-[#292B49]  font-medium md:text-[40px] text-[28px] ">
              {achievements?.user}k+
              </h1>
              <h6 className="font-normal text-[#292B49] md:text-[16px] text-[14px]">
                Active User
              </h6>
            </div>
            <div className="h-[46px] w-[2px] bg-[#292B49] xl:block hidden"></div>
          </div>
          <div className=" flex justify-between items-center ">
            <div className=" mx-auto text-center">
              <h1 className="text-[#292B49] md:text-[40px] text-[28px] font-medium ">
              {achievements?.trip}k+
              </h1>
              <h6 className="font-normal text-[#292B49] md:text-[16px] text-[14px]">
                Tripe Saved
              </h6>
            </div>
          </div>
        </div>
      </div> 
        </div>
    );
};

export default Banner;