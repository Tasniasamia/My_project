"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'
import { HiOutlineIdentification } from 'react-icons/hi';
import { RiLockPasswordLine } from 'react-icons/ri';

const ProfileBanner = ({ tab, setTab, info_link, pass_link }) => {
    const path = usePathname()
    const pathSplit = path.split('/')
    const pathName = pathSplit[pathSplit.length - 1]
    setTab(pathName)
    
    return (
        <div className='rounded-lg bg-white p-7 shadow-sm'>
            <div className='mt-5 mb-10 flex justify-center gap-10'>
                <Link href={info_link}>
                    <div onClick={() => setTab('profile')} className='group flex cursor-pointer items-center gap-x-4'>
                        <div className={`bg-[#DEDCDC] group-hover:bg-[#DAD4FF] ${tab === 'profile' && 'bg-[#DAD4FF]'} w-fit rounded-full p-3`}>
                            <HiOutlineIdentification size={36} />
                        </div>
                        <p className={`text-base font-medium text-content_tertiary group-hover:text-primary ${tab === 'profile' && '!text-primary'}`}>Basic Information</p>
                    </div>
                </Link>
                <Link href={pass_link}>
                    <div onClick={() => setTab('change-password')} className='group flex cursor-pointer items-center gap-x-4'>
                        <div className={`bg-[#DEDCDC] group-hover:bg-[#DAD4FF] ${tab === 'change-password' && 'bg-[#DAD4FF]'} w-fit rounded-full p-3`}>
                            <RiLockPasswordLine size={36} />
                        </div>
                        <p className={`text-base font-medium text-content_tertiary group-hover:text-primary ${tab === 'change-password' && '!text-primary'}`}>Change Password</p>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ProfileBanner