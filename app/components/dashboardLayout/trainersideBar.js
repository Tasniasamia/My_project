"use client";
import { useUser } from "@/app/contexts/user";
import { CaretDownOutlined, } from "@ant-design/icons";
import { message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TrainerSidebar = ({  menu }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const { user, setUser,getUser } = useUser();
  const pathName = usePathname();
  const[loadingRequest,setLoadingRequest]=useState(false);
  useEffect(() => {
    const items = document.querySelectorAll(".menu > li");
    items.forEach((item) => {
      let link = item.querySelector("a");
      let submenu = item.querySelector(".submenu");
      if (!!link && !!submenu) {
        link.addEventListener("click", (e) => {
          e.preventDefault();
          link.classList.toggle("active");
          submenu.classList.toggle("active");
          submenu.style.maxHeight = submenu.classList.contains("active")
            ? submenu.scrollHeight + "px"
            : 0;
        });
      }
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    message.success("Logged out successfully");
    getUser();
    window.location.href = "/login";
  };


   
  //   // window.location.href = "/login";

  // };

  const clickRoute = () => {
    if (user?.role === "driver") {
      router.push("/profile/driver");
    } else {
      router.push("/profile/user");
    }
  };

  useEffect(() => {
    const items = document.querySelectorAll(".menu a");
    let activeItem;
    items.forEach((item) => {
      item.classList.remove("active");
      let itemParent = item.parentElement.parentElement;
      if (itemParent.classList.contains("submenu")) {
        itemParent.classList.remove("active");
        itemParent.style.maxHeight = 0;
        itemParent.parentElement.firstChild?.classList?.remove("active");
      }
      if (item.href === window.location.href) {
        activeItem = item;
      }
    });
    if (activeItem) {
      activeItem.classList.add("active");
      let itemParent = activeItem.parentElement.parentElement;
      if (itemParent.classList.contains("submenu")) {
        itemParent.classList.add("active");
        itemParent.style.maxHeight = itemParent.scrollHeight + "px";
        itemParent.parentElement.firstChild?.classList?.add("active");
      }
    }
  }, [pathName]);

  return (
    <div>
      <div className="xl:w-[324px] w-full  border border-[#EBEDF9] xl:mt-0 mt-[16px]">
        <div
          onClick={() => {
            window.document.querySelector(".sidebar").classList.toggle("open");
            window.document
              .querySelector(".sidebar-overlay")
              .classList.toggle("open");
          }}
          className="sidebar-overlay"
        />
        <aside className="trainer   !z-20 ">
          <div className="flex items-end xl:pb-0 md:pb-0 pb-3 justify-between">
            <div className="ps-[32px] pt-[40px]">
              <div className="relative max-h-[200px] max-w-[150px] ">
                <Image
                  src={user?.image ? user?.image : '/user1.jpeg'}
                  height={200}
                  width={200}
                  alt="profile"
                />
              </div>
              <h3 className="text-[18px] font-['Mulish'] font-bold uppercase mt-2 text-[#2B2B2B]">
                {user?.name}
              </h3>
            
            </div>
            <div onClick={() => setToggle(!toggle)} className="">
              <button className="bg-primary text-white flex items-center py-[12px] px-[28px] justify-between h-[40px] xl:hidden md:hidden btn relative z-50">
                Menu
                <CaretDownOutlined />
              </button>
            </div>
          </div>

          <div className={`flex flex-col  items-center mx-4 `}>
            <ul
              className={`menu mt-[40px] w-full h-auto border-0 border-x-2 border-[#EBEDF9] mb-[80px]  xl:block md:block ${
                toggle ? "block" : "hidden"
              } `}
            >
              {menu.map((item, index) => (
                <Link
                  key={index}
                  href={item?.href || "#"}
                  className={`${
                    pathName === item.href
                      ? "bg-primary text-white"
                      : "text-black "
                  } 
                    flex items-center gap-2 border-0 border-y-2  p-[12px] border-[#EBEDF9] ${
                      item?.onClick ? "mb-0 " : "mb-[16px] "
                    }`}
                  onClick={item?.onClick === "onClick" && handleLogout}
                >
                  {item.icon}
                  {item.label}
                </Link>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default TrainerSidebar;
