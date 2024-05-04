"use client";

import Header from "@/app/components/dashboardLayout/header";
import Sidebar from "@/app/components/dashboardLayout/sidebar";
import { fetchUser } from "@/app/helpers/backend";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { BiCategory } from "react-icons/bi";
import { FaUsers } from "react-icons/fa6";
import { GrGallery } from "react-icons/gr";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import UserContext from "../../contexts/user";


// import MainLoader from "@/app/components/Common/loader";
const Layout = ({ children }) => {
  const router = useRouter();
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetchUser().then(({ error, data }) => {
      if (error === false && data.role === "admin") {
        // hideLoader();
        setUser(data);
      } else {
        router.push("/login");
      }
    });

  }, []);
  return (
    <div className="min-h-screen bg-gray-100">
      {!!user && (
        <>
          <UserContext.Provider value={user}>
            <Sidebar title="Car2Go" menu={menu} />
            <Header title="Car2Go" />
            <div className="content">
              <div className="p-4">{children}</div>
            </div>
          </UserContext.Provider>
        </>
      )}
    </div>
  );
};

export default Layout;

const menu = [
  {
    menu: "Menu",
  },
  {
    label:"Product",
    href:"/admin/product",
    icon: <BiCategory />,


  }
  // {
  //   label: "Dashboard",
  //   href: "/admin",
  //   icon: <MdOutlineSpaceDashboard />,
  // },
  // {
  //   label: "Users",
  //   href: "/admin/users",
  //   icon: <FaUsers />,
  // },
  // {
  //   label: "Gallery",
  //   href: "/admin/gallery",
  //   icon: <GrGallery />,
  // },
  // {
  //   menu: "Product",
  // },
  // {
  //   label: "Category",
  //   href: "/admin/product/category",
  //   icon: <BiCategory />,
  // },
  // {
  //   label: "Product List",
  //   href: "/admin/product/product-list",
  //   icon: <BiCategory />,
  // },


 
 
 

];
