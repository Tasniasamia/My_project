"use client"
import Banner from "@/app/components/home/banner";
import Download from "@/app/components/home/download";
import Service from "@/app/components/home/service";
import Solution from "@/app/components/home/solution";
import { fetchSinglePage } from "@/app/helpers/backend";
import { useFetch } from "@/app/helpers/hooks";
import React, { useEffect } from "react";

const Page = () => {
  const[data,getData,{loading}]=useFetch(fetchSinglePage,{});
  useEffect(()=>{
  getData({slug:"home"})
  },[data?._id])
  const jsonParseData = JSON.parse(data?.content || "{}");
  const {solution,hero_section,achievements,banner,used_content}=jsonParseData;
  console.log(jsonParseData);
  return (
    <div>
     <Banner achievements={achievements} hero_section={hero_section}/>
      <Solution solution={solution}/>
      <Download banner={banner}/>
      <Service used_content={used_content}/>
    </div>
  );
};

export default Page;
