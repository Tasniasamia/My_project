"use client";
import Description from "@/app/components/admin/product/description";
import Feature from "@/app/components/admin/product/feature";
import GeneralForm from "@/app/components/admin/product/generalForm";
import Image from "@/app/components/admin/product/image";
import Shipping from "@/app/components/admin/product/shipping";
import Status from "@/app/components/admin/product/status";
import { tabbar } from "@/app/contexts/tabContext";
import { Card } from "antd";
import React, { useContext, useState } from "react";
const page = () => {
  const tags = [
    "General",
    "Descriptions",
    "Product Features",
    "Status",
    "Images",
    "Shipping Information",
  ];
  const {tab,setTab}=useContext(tabbar)
  // const [tag, setTag] = useState(tab);
// console.log("tab",tag,tab);
  return (
    <div className="bg-white p-6">
      {/* tags */}
      <div className="lg:flex w-full justify-center border-b-2 mb-4">
        <div className="lg:flex  mx-auto gap-x-8">
          {tags.map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => {
                  setTab(i.toLowerCase());
                }}
                className={`pb-2 duration-500 transition-all ease-in-out   ${i.toLowerCase() === tab ? "border-b-4 text-blue-600 border-blue-600" : "text-black"}`}
              >
                {i}
              </div>
            );
          })}
        </div>
      </div>
      <Card>
        {tab === "general" && <GeneralForm />}
        {tab === "descriptions" && <Description />}
        {tab === "images" && <Image />}
        {tab === "status" && <Status />}
        {tab === "shipping information" && <Shipping />}
        {tab === "product features" && <Feature />}
      </Card>
     
    </div>
  );
};

export default page;
