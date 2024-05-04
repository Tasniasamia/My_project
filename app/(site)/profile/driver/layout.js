"use client";
import Banner from "@/app/components/common/banner";
import MainLoader from "@/app/components/common/loader";
import TrainerSidebar from "@/app/components/dashboardLayout/trainersideBar";
import UserContext from "@/app/contexts/user";
import { fetchUser } from "@/app/helpers/backend";
import Providers from "@/app/providers/userProvider";
import {
  LoginOutlined,
  SettingFilled
} from "@ant-design/icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCar } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";

const Layout = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
  useEffect(() => {
    fetchUser().then(({ error, data }) => {
      console.log("data", data);
      if (error === false) {
        setUser(data);
      } else {
        router.push("/login");
      }
    });
  }, []);

  if (!user) return <div className="min-h-screen bg-gray-100"><MainLoader /></div>

 
  return (
    <div className="min-h-screen bg-gray-100">
      <>
        <UserContext.Provider value={user}>
            <Providers>
              <div className="bg-white">
                <Banner path="My Account" />
                <div className="container"> 
                 <div className="xl:py-[150px]  py-[20px]   flex xl:flex-row flex-col  gap-x-[24px]">
                  <TrainerSidebar title="driver" menu={userMenu} />
                  <div className="xl:w-[872px] py-20 h-full w-full xl:border border-0  xl:border-1  xl:mt-0 md:pt-[40px] pt-[20px] mt-[20px]">
                    {children}
                  </div>
                  </div>
                </div>
              </div>
            </Providers>
        </UserContext.Provider>
      </>
    </div>
  );
};

export default Layout;

const userMenu = [
  {
    label: "Account Settings",
    href: "/profile/driver",
    icon: <SettingFilled />,
  },
 
  {
    label: "Change Password",
    icon: <RiLockPasswordLine />,
    href: "/profile/driver/change-password",
  },
  {
    label: "Vehicle",
    href: "/profile/driver/vehicle",
    icon: <FaCar />,
  },
  {
    label: "Sign out",
    icon: <LoginOutlined />,
    onClick: "onClick",
  },
];
