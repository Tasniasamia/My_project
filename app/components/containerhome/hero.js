"use client";

import { Select } from "antd";
import { FaLocationDot } from "react-icons/fa6";

const Hero = () => {
const handleChange = (value) => {
console.log(`selected ${value}`);
}
  return (
    <div className="relative h-[486px] mb-10">
      <div className="lg:block hidden z-0 relative">
        <div className="">
          <img
            src="/container/world.png"
            alt="world"
            className="w-[529px] h-[486px] absolute right-0 top-[0px] object-fill"
          />
        </div>
        <div className="">
          <img
            src="/container/ship.png"
            alt="shipping"
            className="absolute left-0 top-[39px]  w-[339px] h-[307]  object-fill"
          />
        </div>
      </div>
      <div className="z-10 relative container flex flex-col  justify-center items-center h-full">
        {/* <div> */}
        <h1 className="text-[48px] font-bold text-center text-[#000C37] capitalize font-['Montserrat'] mb-[50px]">
          Find the best the Freight Quote
        </h1>
    <div className=" w-full bg-red-300 p-[6px]">
    <Select
    defaultValue="lucy"
    // menuItemSelectedIcon={<FaLocationDot/>}
    suffixIcon={<FaLocationDot className="text-[24px] flex justify-start"/>}
    style={{
      width: 257,
      height:60,
    }}
    onChange={handleChange}
    options={[
      {
        label: <span>manager</span>,
        title: 'manager',
        options: [
          {
            label: <span>Jack</span>,
            value: 'Jack',
          },
          {
            label: <span>Lucy</span>,
            value: 'Lucy',
          },
        ],
      }
    
    ]}
  />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
