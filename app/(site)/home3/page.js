import { Input } from "antd";
import Image from "next/image";
import React from "react";
import { VscSend } from "react-icons/vsc";

const page = () => {
  return (
    <div className=" md:pt-[86.99px] pt-[40px] md:pb-[100px] pb-[50px] bg-[url('/bg.png')] bg-cover bg-no-repeat">
      <div className=" h-[634px] relative ">
        <div className="absolute sm:block hidden right-0 w-[50%] h-full img-shape">
        <Image
          src="/driver.png"
          width={1101}
          height={634}
          alt="banner"
          className=" w-full h-full"
        />
      <Image
          src="/frame.png"
          width={1101}
          height={634}
          alt="banner"
          className=" w-full h-full"
        />
        </div>
       

        <div className=" container  flex lg:flex-row flex-col items-center  justify-center ">
          <div className="sm:w-[50%] w-full    h-full">
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
          <div className="flex lg:h-[634px] md:h-[280px] sm:h-[260px] flex-col sm:justify-end justify-start xl:w-auto ">
          <div className="grid  grid-cols-3 sm:gap-x-0 gap-x-3 justify-items-center lg::justify-items-start  w-full  lg:z-40  lg:mb-[-37px] sm:gap-y-0 mt-4 gap-y-4">
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

// <div className="bg-[url('/banner.png')] bg-cover bg-no-repeat pt-[79px]    pb-[100px]  z-10 relative">
//     <div className="w-[60%] absolute right-0">
//         <div className="w-full relative">
//           <div className="md:max-w-full md:max-h-[634px] absolute  ">
//             <img src="man_bg.png" alt="bg" className="h-full w-auto" />
//           </div>
//           <div className="md:max-w-full md:max-h-[581px] absolute">
//             <img src="/man.png" className="w-auto h-full" alt="man" />
//           </div>
//           </div>
//         </div>
//  <div className="flex  container">
//         <div className="w-2/5 pt-[22px]  lg:pb-[100px] pb-[50px]">
//           <Image
//             src="/car_svg.png"
//             className="h-[257px] md:w-[477px] w-full absolute lg:left-[300px] mt-[64px] object-fill md:block hidden "
//              height={257}
//              width={477}
//            />
//            <h2 className="xl:text-[61px] md:text-[38px] sm:text-start text-center text-[28px] text-white font-bold mb-[32px] capitalize">
//       book your taxi from{" "}
//       <span className="ms-2 text-[#1F8A70]">anywhere today!</span>
//     </h2>
//     <p className="text-white font-normal  w-full mb-[40px] sm:text-[16px] text-[12px]">
//       A taxi is a motor vehicle designed primarily for the
//       transportation of passengers for a fare. It is often
//       characterized by its distinctive exterior markings,
//     </p>
//     <div className="flex gap-x-[16px]">
//       <Input
//         placeholder="Pickup location"
//         className="md:py-[12px] md:px-[20px] py-[10px] px-[8px]"
//         suffix={<VscSend />}
//       />
//       <Input
//         placeholder="Enter destination"
//         className="md:py-[12px] md:px-[20px] py-[10px] px-[8px]"
//       />
//     </div>
//     <button className="text-white px-[24px] py-[16px] bg-[#186F65] sm:w-auto w-full capitalize mt-[16px] rounded  ">
//            Book Ride
//          </button>
//        </div>
//     </div>
//    </div>
