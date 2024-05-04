"use client";
import { Rate } from "antd";
import React from "react";
import { foodData } from "@/app/data";
import image from "../../../public/food.png";
import Table from "@/app/components/common/mytable";
import deleteImage from "../../../public/delete.png";
import editImage from "../../../public/edit.png";
import shareImage from "../../../public/share.png";
import Image from "next/image";
import Card from "@/app/components/dishes/card";

const page = () => {
  const columns = [
    {
      dataField: "image",
      text: "Photo",
      className: "w-[99px] text-center flex justify-center items-center",
      formatter: (_, d) => (
        <Image
          src={d.image || image}
          alt="food"
          width={75}
          height={75}
          className="rounded h-[75px] w-[75px] object-fill"
        />
      ),
    },
    {
      dataField: "location",
      text: "Name " + "" + " | Location",
      className: "w-[379px] ",
      formatter: (_, d) => (
        <div className="">
          <h3 className="mb-[8px] text-[#0F0F0F] text-[18px] font-bold">
            {d?.name}
          </h3>
          <h4 className="text-[#F8991F] text-[14px]">{d?.location}</h4>
        </div>
      ),
    },
    {
      dataField: "date",
      text: "Date",
      className: "w-[200px] text-center",
      formatter: (_, d) => (
        <div className="text-[#969BA0] text-[14px]">
          <div className="">{d?.date}</div>
          <div className="">{d?.time}</div>
        </div>
      ),
    },
    {
      dataField: "rating",
      text: "Review",
      className: "w-[126px] text-center",
      formatter: (_, d) => (
        <div>
          <Rate disabled value={d?.rating} />
          <h3 className="text-[14px] text-[#969BA0] mt-[8px]">{d?.rating}{"  "}Reviews</h3>
        </div>
      ),
    },
    {
      text: "Action",
      dataField: "no_actions",
      className: "w-[254px] text-center ",
      formatter: (noActions, data) => {
        return (
          <div className="flex justify-center gap-x-[10px]  ">
            <button className="text-[14px] h-[44px] w-[44px] flex justify-center items-center border-[#F8991F] text-[#F8991F] border-[1px] rounded">
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
        );
      },
    },
  ];
  return (
    <div className="max-w-[1320px] mx-auto lg:px-0 p-2  py-20 bg-gray-200 table_checked">
      <Table data={foodData} indexed columns={columns} />
      <Card/>
    </div>
  );
};

export default page;
