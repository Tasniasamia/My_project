import { FaEye, FaPencilAlt, FaTimes, FaTrashAlt } from "react-icons/fa";
import { useActionConfirm } from "../../helpers/hooks";
import SearchInput from "../form/search";
import Pagination from "./pagination";
import { Loader } from "./loader";

import { Checkbox, Modal } from "antd";
import { useState } from "react";

const Table = ({
  columns,
  data,
  indexed,
  loading = false,
  noActions,
  actions,
  action,
  onView,
  onEdit,
  onDelete,
  onReload,
  pagination = false,
  shadow = true,
  title,
  noHeader = false,
  afterSearch,
  onSearchChange,
}) => {
  return (
    <>
      <div
        className={`w-full bg-gray-200 ${shadow ? "shadow-lg" : ""} rounded-sm mb-4 `}
      >
        {noHeader || (
          <header className="px-4 pt-3 pb-2 border-b border-gray-100 flex justify-between flex-wrap">
            {title ? (
              <>
                {typeof title === "string" ? (
                  <h4 className="text-base font-medium text-gray-700">
                    {title}
                  </h4>
                ) : (
                  title
                )}
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
        <div className="">
          <div className="overflow-x-auto ">
            <table className="px-[17px]  w-full max-w-[1112px] mx-auto bg-white">
              <thead className="text-xs font-semibold uppercase bg-gray-50 text-gray-500 ">
                <tr>
                  {indexed && (
                    <th className="whitespace-nowrap">
                      <div className="font-semibold text-left ps-[17px] pe-[17px] ">
                        <Checkbox />
                      </div>
                    </th>
                  )}
                  {columns?.map((column, index) => (
                    <th className=" whitespace-nowrap text-[#969BA0] text-left" key={index}>
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
                {loading ? (
                  <tr >
                    <td className="h-96 pb-16 border-2">
                      <div
                        style={{ height: 200 }}
                        className="absolute w-full flex justify-center"
                      >
                        <Loader />
                      </div>
                    </td>
                  </tr>
                ) : (
                  <>
                    {(pagination ? data?.docs : data)?.map((row, index) => (
                      <tr key={index} >
                        {indexed && (
                          <td className="whitespace-nowrap text-gray-500 ps-[17px] h-[107px] ">
                            <Checkbox />
                          </td>
                        )}
                        {columns?.map((column, index) => (
                          <td
                            className={` whitespace-nowrap text-gray-700  h-[107px]  ${column?.className || ""}`}
                            key={index}
                          >
                            {column.formatter
                              ? column.formatter(row[column.dataField], row)
                              : row[column.dataField] || "-"}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </>
                )}
              </tbody>
            </table>
          </div>
          {/* {pagination && (
                        <div className="pt-3 mt-3 border-t">
                            <Pagination
                                page={data?.page} total={data?.totalDocs}
                                onSizeChange={limit => onReload({ limit })} limit={data?.limit}
                                totalPages={data?.totalPages} onPageChange={page => onReload({ page })} />
                        </div>
                    )} */}
        </div>
      </div>
    </>
  );
};
export default Table;
