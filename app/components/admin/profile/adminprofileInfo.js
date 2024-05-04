import { fetchUser } from '@/app/helpers/backend'
import { useFetch } from '@/app/helpers/hooks'
import React from 'react'

const AdminProfileInformation = () => {
    const [user, getUser] = useFetch(fetchUser)

    return (
        <div className='rounded-b-lg bg-white p-7 shadow-sm'>
            <div className='container mx-auto'>
                <div className="flex flex-col items-center gap-1 my-3">
                    <img src={user?.image} alt="" className="w-32 h-32 rounded-full border border-primary" />
                </div>


                <div className="flex flex-col md:flex-row justify-between w-[400px] md:w-full  mt-5 sm:space-y-0 space-y-4">
                    <div className="flex flex-col gap-y-4">
                        <div className="flex flex-col">
                            <p className="text-sm text-gray-700">Name</p>
                            <p className="font-semibold">{user?.name}</p>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        <p className="text-sm text-gray-700">Email</p>
                        <div className="flex gap-x-1 items-center">
                            <p className="font-semibold">{user?.email}</p>

                        </div>
                    </div>
                    <div className="flex flex-col">
                        <p className="text-sm text-gray-700">Phone</p>
                        <div className="flex gap-x-2 items-center">
                            <p className="font-semibold">{user?.phone}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminProfileInformation