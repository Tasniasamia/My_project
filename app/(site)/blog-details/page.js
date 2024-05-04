import SearchInput from "@/app/components/form/search";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLinkedinIn, FaFacebookF, FaXTwitter } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";

const page = () => {
  return (
    <div className="container">
      <h1 className="mb-[100px]">This is banner</h1>
      <div className="grid lg:grid-cols-3 grid-cols-1 mb-[249px] gap-x-[24px] gap-y-[30px]">
        <div className="lg:col-span-2 col-span-1">
          <div className="md:max-w-[984px] md:max-h-[476px] custom-rounded2">
            <img
              src="/blog3.png"
              alt="blog"
              className="w-auto h-full object-fit"
            />
          </div>
          <div className="mt-[16px] flex items-center gap-x-[20px]">
            <div className="flex items-center gap-x-[8px]">
              <FaRegCalendarAlt size={24} className="text-[#186F65]" />
              <p className="font-normal md:text-[16px] ">27 march, 2024</p>
            </div>
            <div className="flex items-center gap-x-[8px]">
              <img
                src="/user.png"
                className="h-[36px] w-[36px] rounded-full"
                alt="user"
              />
              <p className="font-normal md:text-[16px] capitalize ">By admin</p>
            </div>
          </div>
          <h2 className="mt-[24px] text-[28px] font-medium">
            we have been serving you, we need you now
          </h2>
          <p className="mt-[24px] text-[#888AA0] font-normal">
            Ride-sharing, also known as carpooling or ridesharing, refers to the
            arrangement where individuals share a single ride or vehicle to
            reach a common destination. This practice has gained immense
            popularity in recent years due to its various benefits, including
            cost savings, reduced traffic congestion, environmental
            sustainability, and social interaction. Ride-sharing, also known as
            carpooling or ridesharing, refers to the arrangement where
            individuals share{" "}
          </p>
          <p className="mt-[20px] text-[#888AA0] font-normal">
            Ride-sharing, also known as carpooling or ridesharing, refers to the
            arrangement where individuals share a single ride or vehicle to
            reach a common destination. This practice has gained immense
            popularity in recent years due
          </p>
          <p className="mt-[30px] text-[#888AA0] font-normal">
            Ride-sharing, also known as carpooling or ridesharing, refers to the
            arrangement where individuals share a single ride or vehicle to
            reach a common destination. This practice has gained immense
            popularity in recent years due to its various benefits, including
            cost savings, reduced traffic congestion, environmental
            sustainability, and social
          </p>
          <div className="flex sm:gap-x-[32px] gap-x-[10px] mt-[40px]">
            <div className="md:max-w-[476px] md:max-h-[275px]">
              <img
                src="/blog1.png"
                alt="blog"
                className="w-auto h-full object-fit"
              />
            </div>
            <div className="md:max-w-[476px] md:max-h-[275px]">
              <img
                src="/blog2.png"
                alt="blog"
                className="w-auto h-full object-fit"
              />
            </div>
          </div>
          <p className=" text-[#888AA0] font-normal mt-[24px] pb-[28px] border-b-[1px] border-[#0000001A]">
            Ride-sharing, also known as carpooling or ridesharing, refers to the
            arrangement where individuals share a single ride or vehicle to
            reach a common destination. This practice has gained immense
            popularity in recent years due to its various benefits, including
            cost savings, reduced traffic congestion, environmental
            sustainability, and social interaction.
          </p>
          <div className="flex justify-end mt-[24px]">
            <div className="flex gap-x-[12px] items-center ">
              <h2 className="text-[20px] text-[#888AA0]">Share Now:</h2>
              <FaFacebookF size={24} className="text-[#888AA0]" />
              <FaXTwitter size={24} className="text-[#888AA0]" />
              <FaLinkedinIn size={24} className="text-[#888AA0]" />
            </div>
          </div>
        </div>
        <div className="col-span-1">
          {/* search input */}
          <div className={`relative mr-2  p-[20px] bg-[#F5F5F5] rounded-md`}>
            <div className="flex relative">
              <input
                className={`form-input h-[44px] ps-[12px] focus:border-none focus:outline-none bg-white flex justify-between items-center text-[#828282] w-full cursor-pointer rounded"`}
                placeholder="Search..."
              />
              <div className="h-[44px] w-[44px] flex justify-center items-center bg-[#186F65] rounded absolute right-0">
                <FiSearch className=" text-white" size={15} />
              </div>
            </div>
          </div>
          <div className="mt-[24px] rounded-md bg-[#F5F5F5] pt-[20px] pb-[10px]">
            <h1 className="text-[20px] font-normal text-[#292B49] ps-[20px] border-s-2 border-[#186F65] mb-[10px] ] ">
              Category
            </h1>
            <div className="py-[10px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex justify-between mx-[20px]">
              <h6 className="capitalize">Travel</h6>
              <h6>(10)</h6>
            </div>
            <div className="py-[10px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex justify-between mx-[20px]">
              <h6 className="capitalize">life style</h6>
              <h6>(12)</h6>
            </div>
            <div className="py-[10px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex justify-between mx-[20px]">
              <h6 className="capitalize">Travel</h6>
              <h6>(10)</h6>
            </div>
            <div className="py-[10px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex justify-between mx-[20px]">
              <h6 className="capitalize">Camping</h6>
              <h6>(20)</h6>
            </div>
            <div className="py-[10px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex justify-between mx-[20px]">
              <h6 className="capitalize">life style</h6>
              <h6>(12)</h6>
            </div>
          </div>
          <div className="mt-[24px] rounded-md bg-[#F5F5F5] pt-[20px] pb-[10px]">
            <h1 className="text-[20px] font-normal text-[#292B49] ps-[20px] border-s-2 border-[#186F65] mb-[10px] ] ">
              Popular Post
            </h1>
            <div className="py-[16px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex items-center gap-x-[12px] mx-[20px]">
              <div className="md:max-h-[71px] md:max-w-[71px]">
                <img
                  src="/post1.png"
                  className="w-auto h-full object-fit"
                  alt="post"
                />
              </div>
              <div>
                <h6 className="font-normal text-[14px] text-[#292B49]">
                  we have been serving you, we need you now
                </h6>
                <h6 className="text-[12px] font-normal text-[#888AA0] mt-[8px]">
                  27 march, 2024
                </h6>
              </div>
            </div>
            <div className="py-[16px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex items-center gap-x-[12px] mx-[20px]">
              <div className="md:max-h-[71px] md:max-w-[71px]">
                <img
                  src="/post2.png"
                  className="w-auto h-full object-fit"
                  alt="post"
                />
              </div>
              <div>
                <h6 className="font-normal text-[14px] text-[#292B49]">
                  we have been serving you, we need you now
                </h6>
                <h6 className="text-[12px] font-normal text-[#888AA0] mt-[8px]">
                  27 march, 2024
                </h6>
              </div>
            </div>
            <div className="py-[16px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex items-center gap-x-[12px] mx-[20px]">
              <div className="md:max-h-[71px] md:max-w-[71px]">
                <img
                  src="/post3.png"
                  className="w-auto h-full object-fit"
                  alt="post"
                />
              </div>
              <div>
                <h6 className="font-normal text-[14px] text-[#292B49]">
                  we have been serving you, we need you now
                </h6>
                <h6 className="text-[12px] font-normal text-[#888AA0] mt-[8px]">
                  27 march, 2024
                </h6>
              </div>
            </div>
            <div className="py-[16px] border-t-[1px] bg-[#F5F5F5] text-[#888AA0] flex items-center gap-x-[12px] mx-[20px]">
              <div className="md:max-h-[71px] md:max-w-[71px]">
                <img
                  src="/post4.png"
                  className="w-auto h-full object-fit"
                  alt="post"
                />
              </div>
              <div>
                <h6 className="font-normal text-[14px] text-[#292B49]">
                  we have been serving you, we need you now
                </h6>
                <h6 className="text-[12px] font-normal text-[#888AA0] mt-[8px]">
                  27 march, 2024
                </h6>
              </div>
            </div>
          </div>
          <div className="mt-[24px] rounded-md bg-[#F5F5F5] pt-[20px] pb-[10px]">
            <h1 className="text-[20px] font-normal text-[#292B49] ps-[20px] border-s-2 border-[#186F65] mb-[10px] ] ">
              Tag
            </h1>
            <div className="pt-[10px] flex flex-wrap gap-[12px]  border-t-[1px] border-[#0000001A] mx-[20px]">
              <button className="text-[#888AA0] bg-white px-[13px] py-[5px] font-normal capitalize">
                travel
              </button>
              <button className="text-[#888AA0] bg-white px-[13px] py-[5px] font-normal capitalize">
                life style
              </button>
              <button className="text-[#888AA0] bg-white px-[13px] py-[5px] font-normal capitalize">
                travel
              </button>
              <button className="text-[#888AA0] bg-white px-[13px] py-[5px] font-normal capitalize">
                camping
              </button>
              <button className="text-[#888AA0] bg-white px-[13px] py-[5px] font-normal capitalize">
                life style
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
