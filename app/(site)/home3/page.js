import { Input } from "antd";
import Image from "next/image";
import React from "react";
import { VscSend } from "react-icons/vsc";

const page = () => {
  return (
    // <div className="relative h-[926px] w-full">
    //     <Image src='/banner.png' width={1000} height={500} alt="banner" className="absolute right-0 w-[60%]"/>
  
    <div className="bg-[url('/banner.png')] bg-cover bg-no-repeat pt-[79px]    pb-[100px]  z-10 relative">
        <div className="w-[60%] absolute right-0">
            <div className="w-full relative">
              <div className="md:max-w-full md:max-h-[634px] absolute  ">
                <img src="man_bg.png" alt="bg" className="h-full w-auto" />
              </div>
              <div className="md:max-w-full md:max-h-[581px] absolute">
                <img src="/man.png" className="w-auto h-full" alt="man" />
              </div>
              </div>
            </div>
     <div className="flex  container">
            <div className="w-2/5 pt-[22px]  lg:pb-[100px] pb-[50px]">
              <Image
                src="/car_svg.png"
                className="h-[257px] md:w-[477px] w-full absolute lg:left-[300px] mt-[64px] object-fill md:block hidden "
                 height={257}
                 width={477}
               />
               <h2 className="xl:text-[61px] md:text-[38px] sm:text-start text-center text-[28px] text-white font-bold mb-[32px] capitalize">
          book your taxi from{" "}
          <span className="ms-2 text-[#1F8A70]">anywhere today!</span>
        </h2>
        <p className="text-white font-normal  w-full mb-[40px] sm:text-[16px] text-[12px]">
          A taxi is a motor vehicle designed primarily for the
          transportation of passengers for a fare. It is often
          characterized by its distinctive exterior markings,
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
        </div>
       </div> 

      
// </div>  
  );
};

export default page;
