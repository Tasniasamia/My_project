"use client";
import { useUser } from "@/app/contexts/user";
import { Drawer, Dropdown, Menu, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { BsShop } from "react-icons/bs";
import { FaBars, FaServicestack, FaUser } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { IoMdClose, IoMdInformationCircle } from "react-icons/io";
import { MdContactPhone } from "react-icons/md";

const Header = () => {
  const { push } = useRouter();
  const pathname = usePathname();
  const [toggle, setToggle] = useState(false);
  const { user, getUser } = useUser();
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  

  const handleLogOut = () => {
    localStorage.removeItem("token");
    ([]);
    message.success("Logout Successfully");
    push("/");
    getUser();
  };

  const menu = (
    <Menu className="mt-4" style={{ width: "150px" }}>
      {(user && user?.role === "user") || user?.role === "driver" ? (
        <div>
          <Menu.Item key="0">
            {user && user?.role === "user" ? (
              <Link href="/profile/user"> Profile</Link>
            ) : (
              <Link href="/profile/driver"> Profile</Link>
            )}
          </Menu.Item>

          <Menu.Item key="2">
            <p onClick={handleLogOut}>Logout</p>
          </Menu.Item>
        </div>
      ) : (
        <div>
          <Menu.Item key="4">
            <Link href="/admin/profile"> Dashboard</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <p onClick={handleLogOut}>Logout</p>
          </Menu.Item>
        </div>
      )}
    </Menu>
  );

  const LoginMenu = (
    <Menu style={{ width: "fit-content" }}>
      <Menu.Item key="1">
        <Link href="/login">Login</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link href="/signup">SignUp</Link>
      </Menu.Item>
    </Menu>
  );

  const items = [
    {
      label: (
        <Link
          onClick={onClose}
          href="/"
          className="flex gap-2 items-center hover:!text-primary cursor-pointer"
        >
          <IoMdInformationCircle className="" />
          <span className="">Home</span>
        </Link>
      ),
      key: "1",
    },
    {
      label: (
        <Link
          onClick={onClose}
          href="/about"
          className="flex gap-2 items-center hover:!text-primary cursor-pointer"
        >
          <IoMdInformationCircle className="" />
          <span className="">About</span>
        </Link>
      ),
      key: "2",
    },
    {
      label: (
        <Link
          onClick={onClose}
          href="/service"
          className="flex gap-2 items-center hover:!text-primary cursor-pointer"
        >
          <FaServicestack className="" />
          <span className="">Service</span>
        </Link>
      ),
      key: "3",
    },

    {
      label: (
        <Link
          onClick={onClose}
          href="/shop"
          className="flex gap-2 items-center hover:!text-primary cursor-pointer"
        >
          <BsShop className="" />
          <span className="">Shop</span>
        </Link>
      ),
      key: "5",
    },

    {
      label: (
        <div className="flex">
          <Link
            onClick={onClose}
            href="/contact"
            className="flex gap-2 items-center hover:!text-primary cursor-pointer"
          >
            <MdContactPhone className="" />
            <span className="">Contact</span>
          </Link>
        </div>
      ),
      key: "6",
    },
    {
      label: (
        <Link
          onClick={onClose}
          href="/contact"
          className="flex gap-2 items-center hover:!text-primary cursor-pointer"
        >
          <BsShop className="" />
          <span className="">Contact</span>
        </Link>
      ),
      key: "7",
    },
  ];

  return (
    <div>
      <div className="container relative z-40 ">
        <nav className="flex justify-between py-4  items-center relative z-0">
          <div className="flex gap-1 cursor-pointer" onClick={() => push("/")}>
           <div className="text-primary text-3xl font-bold font-['Nico Moji'] uppercase leading-loose">
              Car2Go
            </div>
          </div>
          <div className="lg:block hidden">
            <ul className="list-style-none flex gap-x-[44px] items-center">
              <li>
                <Link
                  href="/"
                  className={`flex gap-2 items-center hover:text-primary text-black1 `}
                >
                  <span>Home</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={`flex gap-2 items-center hover:text-primary text-black1 `}
                >
                  <span>About</span>{" "}
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className={`flex gap-2 items-center hover:text-primary text-black1 `}
                >
                  <span>Service</span>{" "}
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className={`flex gap-2 items-center hover:text-primary text-black1 y`}
                >
                  <span>Shop</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
          <div className="lg:hidden flex justify-end gap-x-10">
            <div className="flex gap-2 items-center">
              {/* after login */}
              {user?._id ? (
                <Dropdown
                  overlay={menu}
                  placement="bottomRight"
                  className="cursor-pointer"
                >
                  <span
                    className={`flex gap-2 items-center hover:text-primary text-black1 `}
                  >
                    <div>
                      <Image
                        src={user?.image ? user?.image : "/user1.jpeg"}
                        alt={user?.name}
                        height={24}
                        width={24}
                        className="h-[24px] w-[24px] rounded-full"
                      />
                    </div>
                  </span>
                </Dropdown>
              ) : (
                <Dropdown
                  overlay={LoginMenu}
                  placement="bottomRight"
                  className="cursor-pointer"
                >
                  <span
                    className={`flex gap-2 items-center text-black1 hover:text-primary`}
                  >
                    <div className="flex items-center gap-x-1">
                      <FaUser className="lg:text-2xl text-xl" />
                    </div>
                  </span>
                </Dropdown>
              )}

              <div className="">
                <FaBars
                  onClick={showDrawer}
                  className="text-xl lg:hidden text-textGray cursor-pointer"
                />
              </div>
            </div>
          </div>
          <div className="lg:flex justify-between items-center gap-x-4 hidden">
            <ul className="'list-style-none flex xl:gap-x-[44px] lg:gap-x-8 items-center">
              <li>
                {user?._id ? (
                  <Dropdown
                    overlay={menu}
                    placement="bottomRight"
                    className="cursor-pointer"
                  >
                    <span className="flex gap-2 items-center hover:text-primary text-black1 hover ">
                      <Image
                        src={user?.image || "/user1.jpeg"}
                        alt={user?.name}
                        height={24}
                        width={24}
                        className="h-[24px] w-[24px] rounded-full"
                      />
                    </span>
                  </Dropdown>
                ) : (
                  <Dropdown
                    overlay={LoginMenu}
                    placement="bottomRight"
                    className="cursor-pointer"
                  >
                    <span className="flex gap-2 items-center hover:text-primary text-black1 hover ">
                      <FaUser />
                      <FaPlus className="" style={{ fontSize: "12px" }} />
                    </span>
                  </Dropdown>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </div>
      {/* mobile screen */}
      <Drawer
        closeIcon={false}
        placement={"left"}
        onClose={onClose}
        open={open}
        className="lg:!hidden !text-white !bg-black"
      >
        <div className="w-full flex flex-col gap-5 pb-2 border-b border-gray-600 ">
          <div className=" w-full flex items-center justify-between ">
            <div className="text-red-600 text-3xl font-normal font-['Nico Moji'] uppercase leading-loose">
              Car2Go
            </div>
            <IoMdClose onClick={onClose} className="text-2xl cursor-pointer" />
          </div>
        </div>
        <div className="mt-2 flex flex-col text-xl  lg:gap-8 gap-4 mobile-menu">
          <Menu style={{ width: "100% " }} mode="vertical" items={items} />
        </div>
      </Drawer>
    </div>
  );
};

export default Header;
