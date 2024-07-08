"use client";
import CountrySelector from "@/app/components/common/countryselector";

const page = () => {
    return (
        <div className="container">
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-6 lg:gap-y-0 gap-y-6 my-6">
            <div className="flex h-fit gap-x-[16.42px]">
            <div className="md:max-w-[336px] md:max-h-[406px]">
            <img src="/1.png" alt="" className="w-auto h-full" />
            </div>
            <div  className=" flex justify-between items-center"style={{writingMode:"vertical-rl"}}>
            <h1 className="capitalize font-normal text-[#0B204C]">FITNESS TRAINER</h1>
            <div className="w-[1px] h-[205px] bg-red-400">
            </div>
            </div>
            </div>
            <div className="flex h-fit gap-x-[16.42px]">
            <div className="md:max-w-[336px] md:max-h-[406px]">
            <img src="/1.png" alt="" className="w-auto h-full" />
            </div>
            <div  className=" flex justify-between items-center"style={{writingMode:"vertical-rl"}}>
            <h1 className="capitalize font-normal text-[#0B204C]">FITNESS TRAINER</h1>
            <div className="w-[1px] h-[205px] bg-red-400">
            </div>
            </div>
            </div>
            <div className="flex h-fit gap-x-[16.42px]">
            <div className="md:max-w-[336px] md:max-h-[406px]">
            <img src="/1.png" alt="" className="w-auto h-full" />
            </div>
            <div  className=" flex justify-between items-center"style={{writingMode:"vertical-rl"}}>
            <h1 className="capitalize font-normal text-[#0B204C]">FITNESS TRAINER</h1>
            <div className="w-[1px] h-[205px] bg-red-400">
            </div>
            </div>
            </div>
            </div>
            <CountrySelector/>
            <div className="flex flex-col justify-center items-center my-8 gap-y-4">
                <button className="btn1">Button-1</button>
                <button className="btn2">Button-2</button>
                <button className="btn3">Button-3</button>

            </div>
            <h3 className="font-bold text-3xl gradient-txt">CSS GRADIENT</h3>
           </div>
    );
};

export default page;