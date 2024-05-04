"use client";
import TableCustom from "@/app/components/common/tableCustom";
import SearchInput from "@/app/components/form/search";
import { foodData } from "@/app/data";
const Page = () => {
  const columns = [
    {
      text: "Photo",
      className: "w-[99px] text-center flex justify-center items-center",

    },
    {
      text: "Name " + "" + " | Location",
      className: "w-[379px] ",

    },
    {
      text: "Date",
      className: "w-[200px] text-center",

    },
    {
      text: "Review",
      className: "w-[126px] text-center",

    },
    {
      text: "Action",
      className: "w-[254px] text-center ",

    },
  ];
  return (
  <div className="max-w-[1320px] mx-auto lg:px-0 p-2  py-20 bg-gray-200 table_checked">
    <TableCustom title="Places" data={foodData} columns={columns} />;
  </div>
)};

export default Page;
