"use client";
import { useState } from "react";
import { ScheduleData } from "./scheduledata";

const Schedule = () => {
    const [category, setCategory] = useState("all");

  const allWorkouts = ScheduleData.schedule.flatMap(
    (category) => category.workouts
  );
  const filterbyCategory = ScheduleData?.schedule?.filter((i) => i?.category === category)?.flatMap((i) => i?.workouts); 


  console.log("allWorkouts", allWorkouts);
  console.log("filterbyCategoy",filterbyCategory);
  console.log("category",  !!category);

  return (
    <div className="container overflow-y-auto max-w-full">
      <div className="py-[150px]">
        <h1 className="text-center text-[#2B2B2B] md:text-[48px] text-[32px] font-bold capitalize font-[Mulish] mb-[60px]">
          Join Our Class
        </h1>
        <div className="flex md:gap-[60px] gap-[20px] flex-wrap mx-auto md:justify-center mb-[40px]">
          <div
            className={`px-[30px] py-[12px] cursor-pointer duration-300 transition-all capitalize ${
              category === "all" ? "bg-[#FF0000] text-white" : "bg-white text-black"
            }`} 
            onClick={() => setCategory('all')}
          >
            All Events
          </div>
          {ScheduleData.schedule.map((schedule, index) => (
            <div
              key={index}
              className={`px-[30px] py-[12px] cursor-pointer duration-300 transition-all capitalize ${
                category === schedule?.category ? "bg-[#FF0000] text-white" : "bg-white text-black"
              }`} 
              onClick={() => setCategory(schedule?.category)}
            >
              {schedule?.category}
            </div>
          ))}
        </div>
        <table className="w-full text-center table-auto max-w-full">
          <thead className="border">
            <tr className="border bg-[#f0f0f0] text-[#827F7F]">
              <th className="w-[180px] h-[80px]">Time</th>
              <th className="w-[180px] h-[80px]">Monday</th>
              <th className="w-[180px] h-[80px]">Tuesday</th>
              <th className="w-[180px] h-[80px]">Wednesday</th>
              <th className="w-[180px] h-[80px]">Thursday</th>
              <th className="w-[180px] h-[80px]">Friday</th>
              <th className="w-[180px] h-[80px]">Saturday</th>
              <th className="w-[180px] h-[80px]">Sunday</th>
            </tr>
          </thead>
          <tbody>
            {(category === "all" ?allWorkouts:filterbyCategory)?.map((workout, index) => (
              <tr key={index} className="border">
                <td className="w-[180px] h-[80px] border-r bg-[#FF0000] text-white">
                  {workout?.time}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Monday}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Tuesday}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Wednesday}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Thursday}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Friday}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Saturday}
                </td>
                <td className="w-[180px] h-[80px] border-r hover:bg-[#FF0000] hover:text-white duration-300 transition-all  capitalize cursor-pointer">
                  {workout?.Sunday}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule;
