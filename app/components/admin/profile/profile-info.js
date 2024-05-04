"use client"
import React, { useState } from 'react'
import { FiEdit } from 'react-icons/fi';
import AdminProfileEdit from './adminprofileEdit';
import AdminProfileInformation from './adminprofileInfo';
import { useFetch } from '@/app/helpers/hooks';
import { fetchUser } from '@/app/helpers/backend';

const ProfileInfo = ({ children }) => {
    const [edit, setEdit] = useState(false)
    const [user, getUser] = useFetch(fetchUser)

    return (
        <div className="">
            <div className=" rounded-t-lg bg-white p-7 shadow-sm mt-8">
                <div className='container mx-auto flex gap-3'>
                    <span
                        role="button"
                        onClick={() => setEdit(false)}
                        className={`font-semibold  cursor-pointer hover:text-primary ${!edit && 'text-primary'}`}>My Profile</span>
                    <span className="text-gray-500">|</span>
                    <a
                        role="button"
                        onClick={() => setEdit(true)}
                        className={`font-semibold uppercase flex hover:text-primary items-center ${edit && 'text-primary'}`}>
                        <FiEdit className="inline-block mr-1" />
                        Edit profile
                    </a>
                </div>
            </div>

            {
                edit ?
                    user?.role === 'admin' && <AdminProfileEdit setEdit={setEdit} getUser={getUser} user={user} ></AdminProfileEdit>
                    :
                    user?.role === 'admin' && <AdminProfileInformation></AdminProfileInformation>
            }

        </div>
    )
}

export default ProfileInfo