"use client"

import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { SkeletonTheme } from "react-loading-skeleton";
import UserContext from "../contexts/user";
import { fetchSiteSettings, fetchUser } from "../helpers/backend";
import EnvContext from "../contexts/envContext";
import { useFetch } from "../helpers/hooks";

const Providers = ({ children }) => {
    const [active, setActive] = useState('dashboard')
    const [user, setUser] = useState({});
    const router = useRouter();
    useEffect(() => {
        getUser();
    }, [user?._id])

    const getUser = async () => {
        const { data, error } = await fetchUser();
        if (error === false) {
            setUser(data);
        } else {
            setUser({});
        }
    };

    // const [settings, getSettings] = useFetch(fetchSiteSettings)

    return (
        // <EnvContext.Provider value={settings}>
            <UserContext.Provider value={{ user, setUser, getUser }}>
                <SkeletonTheme color="#0F172A" highlightColor="#444">
                    {children}
                </SkeletonTheme>
            </UserContext.Provider>
        // </EnvContext.Provider>
    )
}

export default Providers;