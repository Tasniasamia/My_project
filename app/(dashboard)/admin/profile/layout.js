"use client"
import ProfileBanner from '@/app/components/admin/profile/profilebanner'
import React, { useState } from 'react'

const Layout = ({ children }) => {
    const [tab, setTab] = useState('profile')
    return (
        <div>
            <ProfileBanner tab={tab} setTab={setTab} info_link={'/admin/profile'} pass_link={'/admin/profile/change-password'}></ProfileBanner>
            <div className='mt-8'>{children}</div>
        </div>
    )
}

export default Layout