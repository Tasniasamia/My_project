"use client";
import React, { useState } from 'react';

const Card = ({ item, index,selectedIndex, setSelectedIndex }) => {

    return (
        <div className='group p-3' onClick={() => setSelectedIndex(index)} >
        <div className={`p-3 relative border ${selectedIndex === index ? 'border-emerald-500' : 'border-[#e2e2e2]'} rounded md:w-[214.4px] w-full`}>
        <input type='radio' checked={selectedIndex === index ? true : false} readOnly />
        <div className='px-[16px] space-y-3'>
        <div>
        <h1 className='text-[22px] font-bold text-[#827E7E]'>{item?.name}</h1>
        <span className='text-[13px] text-[#827E7E]'>{item?.description}</span>
        </div>
        <div>
        <h1 className='text-[22px] font-bold text-[#827E7E]'>${item?.price}<span className='font-normal text-[13px]'>usd</span></h1>
                        <span className='text-[13px] text-[#827E7E]'>{item?.country}</span>
                    </div>
                    <p className='text-[13px] font-bold text-[#827E7E] pb-3'>More Details...</p>
                </div>
            </div> 
        </div>
    );
};

export default Card;
