"use client";
import React, { useState } from "react";
import { Button, Modal, Radio } from "antd";
import { FaUser } from "react-icons/fa";
import Image from "next/image";

const App = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const showModal = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="container cutom-modal">
      <Button type="primary" onClick={showModal}>
        Open Modal
      </Button>
      <Modal
        title="Nearest Rides"
        open={isModalOpen}
        onOk={() => {
          setIsModalOpen(false);
        }}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >

          <Radio className=" flex gap-x-2 mt-6 hover:rounded-lg w-full p-2 border-b hover:border-2 hover:border-black items-center">
            <div className="flex md:flex-row flex-col justify-between  md:gap-x-24 items-center w-full">
            <div className="flex gap-x-[16px] items-center">
              <Image
                  src='/car1.png'
                  alt="car"
                  width={54.13}
                  height={37.48}
                  className="w-[54.13px] h-[37.48px] "
                  style={{
                    filter: 'drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.25))' 
                  }}
                />
               <div>
                <div className="flex gap-x-1 items-center">
                    <h2 className="capitalize  font-bold">Uber Moto</h2>
                    <FaUser size={10}/>
                    <span className="text-[10px]">0</span>
                </div>
                <p className="text-[10px]">6 mins away</p>
                <p className="text-[12px]">Affordable, motorcycles rides</p>

               </div>
            </div>
            <div className="font-bold ">BDT 224.11</div>
            </div>
            </Radio>

      </Modal>
    </div>
  );
};
export default App;
