'use client';

import { Drawer } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";

const Navbar = () => {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };
      return (
        <div className='border-b pb-[39px] pt-[41px] border-[#2b2b2b] border-opacity-[10%]'>
        <div  className='container flex justify-between items-center '>
            <div className='md:max-h-[40px] md:max-w-[224px]'>
                <img src='/container/c-logo.png' alt='logo' />
            </div>
            <div className='font-medium lg:flex hidden gap-x-[40px] items-center '>
                <Link
                    href='/containerhome'
                    className={`${pathname === '/containerhome' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Home
                </Link>
                <Link
                    href='/booking-requests'
                    className={`${pathname === '/booking-requests' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Booking Requests
                </Link>
                <Link
                    href='/Quote-requests'
                    className={`${pathname === '/' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Quote Requests
                </Link>
                <Link
                    href='/blog'
                    className={`${pathname === '/blog' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Blog
                </Link>
                <button className='border border-[#0088FF] text-[#2b2b2b] px-[40px] py-[17px] rounded-[40px]'>
                Login / Sign In
                </button>
            </div>
            <div className='lg:hidden'>
                <button onClick={showDrawer}>
                    <IoIosMenu className='text-3xl'/>
                </button>
            </div>
        </div>
        {/* Responsive Drawer */}
        <Drawer title="Book Container" placement='left'  open={open} className='relative' closeIcon={false}>
        <IoMdClose className='text-2xl absolute top-[14px] right-[10px]'onClick={onClose}/>
        <div className='font-medium flex  flex-col gap-y-[10px] '>
                <Link
                    href='/containerhome'
                    className={`${pathname === '/containerhome' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Home
                </Link>
                <Link
                    href='/booking-requests'
                    className={`${pathname === '/booking-requests' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Booking Requests
                </Link>
                <Link
                    href='/Quote-requests'
                    className={`${pathname === '/' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Quote Requests
                </Link>
                <Link
                    href='/blog'
                    className={`${pathname === '/blog' ? 'text-[#0088FF]' : 'text-[#2B2B2B]'}`}
                >
                    Blog
                </Link>
                <button className='border border-[#0088FF] text-[#2b2b2b] px-[40px] py-[17px] rounded-[40px]'>
                Login / Sign In
                </button>
            </div>
        </Drawer>
        </div>
   
    );
};

export default Navbar;
