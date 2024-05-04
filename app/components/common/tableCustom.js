import React from "react";
import SearchInput from "../form/search";
import image from "../../../public/food.png";
import deleteImage from "../../../public/delete.png";
import editImage from "../../../public/edit.png";
import shareImage from "../../../public/share.png";
import Image from "next/image";
import { Checkbox, Rate } from "antd";
import Card from "../dishes/card";
const TableCustom = ({
  data,
  title,
  columns,
  shadow,
  afterSearch,
  pagination,
  noHeader,
  action,
}) => {
  return (
    <div
      className={`w-full bg-gray-200 ${shadow ? "shadow-lg" : ""} rounded-sm mb-4 `}
    >
      {noHeader || (
        <header className="px-4 pt-3 pb-2 border-b border-gray-100 flex justify-between flex-wrap">
          {title ? (
            <>
              <h4 className="text-base font-medium text-gray-700">{title}</h4>
            </>
          ) : (
            <div className="flex flex-wrap">
              <SearchInput
                className="w-44"
                onChange={(e) => {
                  onReload({ search: e.target.value || undefined, page: 1 });
                  onSearchChange && onSearchChange(e.target.value || "");
                }}
              />
              {afterSearch}
            </div>
          )}
          {action}
        </header>
      )}
      <div className="md:block hidden">
        <div className="overflow-x-auto ">
          <table className="px-[17px]  w-full max-w-[1112px] mx-auto bg-white ">
            <thead className="text-xs font-semibold uppercase bg-gray-50 text-gray-500 ">
              <tr>
                <th className="whitespace-nowrap">
                  <div className="font-semibold text-left ps-[17px] pe-[17px] ">
                    <Checkbox />
                  </div>
                </th>
                {columns?.map((column, index) => (
                  <th
                    className=" whitespace-nowrap text-[#969BA0] text-left "
                    key={index}
                  >
                    <div
                      className={`font-semibold ${column?.className || ""} ${columns.lastIndexOf(index) && "pe-[17px]"}`}
                    >
                      {column.text}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="text-sm divide-y divide-gray-100  px-[17px] rounded">
              {
                <>
                  {(pagination ? data?.docs : data)?.map((i, index) => (
                    <tr key={index}>
                      <td className="md:whitespace-nowrap md:text-gray-500 md:ps-[17px] md:h-[107px]  whitespace-nowrap text-gray-700  h-[107px] ">
                        <Checkbox />
                      </td>
                      <td className="md:w-[99px] md:text-center md:flex md:justify-center md:items-center  whitespace-nowrap text-gray-700  h-[107px] ">
                        {" "}
                        <Image
                          src={i.image || image}
                          alt="food"
                          width={75}
                          height={75}
                          className="rounded h-[75px] w-[75px] object-fill"
                        />
                      </td>
                      <td className="md:w-[379px]  whitespace-nowrap text-gray-700  h-[107px] ">
                        <div className="">
                          <h3 className="md:mb-[8px] md:text-[#0F0F0F] md:text-[18px] md:font-bold">
                            {i?.name}
                          </h3>
                          <h4 className="text-[#F8991F] text-[14px]">
                            {i?.location}
                          </h4>
                        </div>
                      </td>
                      <td className="md:w-[200px] md:text-center  whitespace-nowrap text-gray-700  h-[107px] ">
                        <div className="md:text-[#969BA0] md:text-[14px]">
                          <div className="">{i?.date}</div>
                          <div className="">{i?.time}</div>
                        </div>
                      </td>
                      <td className="w-[126px] text-center  whitespace-nowrap text-gray-700  h-[107px] ">
                        <div>
                          <Rate disabled value={i?.rating} />
                          <h3 className="text-[14px] text-[#969BA0] mt-[8px]">
                            {i?.rating}
                            {"  "}Reviews
                          </h3>
                        </div>
                      </td>
                      <td className="w-[254px] text-center  whitespace-nowrap text-gray-700  h-[107px] ">
                        <div className="flex justify-center gap-x-[10px]  ">
                          <button className="text-[14px] h-[44px] w-[44px] flex justify-center items-center border-[#F8991F] text-[#F8991F] border-[1px] rounded">
                            Stats
                          </button>
                          <button title="View">
                            <Image
                              src={shareImage}
                              height={44}
                              width={44}
                              className="h-[44px] w-[44px]"
                            />
                          </button>

                          <button title="Edit">
                            <Image
                              src={editImage}
                              height={44}
                              width={44}
                              className="h-[44px] w-[44px]"
                            />
                          </button>

                          <button title="Delete">
                            <Image
                              src={deleteImage}
                              height={44}
                              width={44}
                              className="h-[44px] w-[44px]"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </>
              }
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:hidden block">
        <Card data={data}/>
        <table className="table2">
          <tr>
            <th rowSpan="5" className="w-[50px] h-[269px]">Name</th>
            <th>Age</th>
            <td>Jill</td>
            <td>Smith</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Jill</td>
            <td>Smith</td>
            <td>43</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>57</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>57</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>43</td>
          </tr>
          <tr>
            <td>Eve</td>
            <td>Jackson</td>
            <td>57</td>
            <td>Jill</td>
            <td>Smith</td>
            <td>43</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default TableCustom;
