import React from "react";
// import { foodData } from "@/app/data";
import { Checkbox, Rate } from "antd";
import Image from "next/image";
import deleteImage from "../../../public/delete.png";
import editImage from "../../../public/edit.png";
import shareImage from "../../../public/share.png";
const Card = ({data}) => {
  return (
    <div className="grid grid-cols-1 md:hidden w-full">
      {data?.map((i, index) => {
        return (
          <div key={index} className=" py-[16px] pe-[12px] ps-[16px] bg-white flex items-center gap-x-[17px] mb-[6px] ">
            <div>
              <Checkbox />
            </div>
            <div>
            <div className="flex items-center ">
              <Image
                src={i?.image}
                height={75}
                width={75}
                className="h-[75px] w-[75px] object-fill rounded me-[12px]"
              />
              <div className="flex-col space-y-[10px]">
                <h3 className="text-[18px] text-[#0F0F0F] ">{i?.name}</h3>
                <h6 className="text-[14px] text-[#969BA0] w-[172px] underline ">{i?.location}</h6>
                <h6 className="text-[14px] text-[#969BA0] "><span className="me-1">{i?.date}</span><span>{i?.time}</span></h6>
                <div>
                <div className="flex items-center gap-x-[4px]">
                <Rate disabled value={i?.rating} />
                <span>{i.rating}</span>
                </div>
                <h3 className="text-[14px] text-[#969BA0] mt-[4px] mb-[6px]">{i?.rating}{"  "}Reviews</h3>
                </div>

              </div>
            </div>
            <div className="flex  gap-x-[10px] ps-[2px] pt-[16px]">
            <button className="text-[14px] h-[44px] w-[44px]  flex justify-center items-center border-[#F8991F] text-[#F8991F] border-[1px] rounded">
              Stats
            </button>
            <button title="View">
              <Image
                src={shareImage}
                height={44}
                width={44}
                className="h-[44px] w-[44px]"
              />
            </button>

            <button title="Edit">
              <Image
                src={editImage}
                height={44}
                width={44}
                className="h-[44px] w-[44px]"
              />
            </button>

            <button title="Delete">
              <Image
                src={deleteImage}
                height={44}
                width={44}
                className="h-[44px] w-[44px]"
              />
            </button>
            </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
