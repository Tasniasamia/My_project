"use client";
import { Button, DatePicker, Form, Input, Radio, Select, Space } from "antd";
import React, { useContext, useState } from "react";
import FormSelect from "../../form/select";
import Link from "next/link";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import MultipleImageInput from "../../form/multiImage";
import TextEditor from "../../form/editor";
import { tabbar } from "@/app/contexts/tabContext";

const GeneralForm = () => {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [discount, setDiscount] = useState("");
  const [d_type, setD_type] = useState(null);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleFinish = (value) => {
    console.log(value);
  };
  const {tab,setTab}=useContext(tabbar)
  console.log("tab",tab);

  return (
    <div>
      <Form layout="vertical" onFinish={handleFinish}>
    <div className="grid lg:grid-cols-2 grid-cols-1  lg:gap-x-4">
          <Form.Item
            name="Product"
            label="Product Name"
            className="w-full"
            required
            rules={[
              {
                required: true,
                message: "Please input your product name!",
              },
            ]}
          >
            <Input placeholder="Product Name" className="p-2" />
          </Form.Item>
          <FormSelect
            label="Select Product Condition"
            name="product_conditon"
            initialValue=""
            required
            options={[
              {
                label: "New",
                value: "New",
              },
              {
                label: "Used",
                value: "Used",
              },
            ]}
          />
          <div className="relative md:py-0 py-2">
            <Form.Item
              name={`brand`}
              label={`Brand Name`}
              rules={[
                {
                  required: true,
                  message: "please select your brand",
                },
              ]}
            >
              <Select placeholder="Choose Brand">
                {" "}
                <Option value="1">GIBSON GIN</Option>
                <Option value="2">NASCO</Option>
                <Option value="3">BB</Option>
                <Option value="4">CHOCO TOGO</Option>
                <Option value="5">NASCO</Option>
                <Option value="6">Best Brand</Option>
                <Option value="7">Google</Option>
                <Option value="8">Apple</Option>
              </Select>
            </Form.Item>
            <div className="absolute md:top-0 md:my-0 right-0 bottom-0 ">
              <span>
                Add New Brand :{" "}
                <Link href="#" className="text-blue-600 underline">
                  click here
                </Link>
              </span>
            </div>
          </div>
          <Form.Item
            name="model"
            label="Product Model"
            required
            rules={[
              {
                required: true,
                message: "Please input your model!",
              },
            ]}
          >
            <Input placeholder="Product Model" className="p-2" />
          </Form.Item>
          <div className="lg:col-span-2  grid lg:grid-cols-3 grid-cols-1 gap-x-4">
            <Form.Item
              name={`category`}
              label={`Category`}
              rules={[
                {
                  required: true,
                  message: "please select your category",
                },
              ]}
            >
              <Select placeholder="Select Category">
                {" "}
                <Option value="1">GIBSON GIN</Option>
                <Option value="2">NASCO</Option>
                <Option value="3">BB</Option>
                <Option value="4">CHOCO TOGO</Option>
                <Option value="5">NASCO</Option>
                <Option value="6">Best Brand</Option>
                <Option value="7">Google</Option>
                <Option value="8">Apple</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={`subcategory`}
              label={`Sub Category`}
              rules={[
                {
                  required: true,
                  message: "please select your sub category",
                },
              ]}
            >
              <Select placeholder="Select Subcategory">
                {" "}
                <Option value="1">GIBSON GIN</Option>
                <Option value="2">NASCO</Option>
                <Option value="3">BB</Option>
                <Option value="4">CHOCO TOGO</Option>
                <Option value="5">NASCO</Option>
                <Option value="6">Best Brand</Option>
                <Option value="7">Google</Option>
                <Option value="8">Apple</Option>
              </Select>
            </Form.Item>
            <Form.Item
              name={`childcategory`}
              label={`Child Category`}
              rules={[
                {
                  required: true,
                  message: "please select your child category",
                },
              ]}
            >
              <Select placeholder="Select Child Category">
                {" "}
                <Option value="1">GIBSON GIN</Option>
                <Option value="2">NASCO</Option>
                <Option value="3">BB</Option>
                <Option value="4">CHOCO TOGO</Option>
                <Option value="5">NASCO</Option>
                <Option value="6">Best Brand</Option>
                <Option value="7">Google</Option>
                <Option value="8">Apple</Option>
              </Select>
            </Form.Item>
          </div>
          <Form.Item
            name={`unit`}
            label={`Product Unit`}
            rules={[
              {
                required: true,
                message: "please select your product unit",
              },
            ]}
          >
            <Select placeholder="Product Unit">
              {" "}
              <Option value="1">GIBSON GIN</Option>
              <Option value="2">NASCO</Option>
              <Option value="3">BB</Option>
              <Option value="4">CHOCO TOGO</Option>
              <Option value="5">NASCO</Option>
              <Option value="6">Best Brand</Option>
              <Option value="7">Google</Option>
              <Option value="8">Apple</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name={`metatag`}
            label={`Select meta tags`}
            rules={[
              {
                required: true,
                message: "please select your  tag",
              },
            ]}
          >
            <Select placeholder="Select tags or enter new keyword">
              {" "}
              <Option value="1">GIBSON GIN</Option>
              <Option value="2">NASCO</Option>
              <Option value="3">BB</Option>
              <Option value="4">CHOCO TOGO</Option>
              <Option value="5">NASCO</Option>
              <Option value="6">Best Brand</Option>
              <Option value="7">Google</Option>
              <Option value="8">Apple</Option>
            </Select>
          </Form.Item>
          <div className="font-bold pb-2 border-b-[1px] border-blue-600 lg:col-span-2  mb-6">
            Quantity
          </div>
          <Form.Item
            name="uq"
            label="Unit Quantity"
            required
            rules={[
              {
                required: true,
                message: "Please input your product unit quantity!",
              },
            ]}
          >
            <Input
              type="number"
              placeholder="Enter product unit quantity"
              className="p-2"
            />
          </Form.Item>
          <Form.Item
            name="sq"
            label="Stock Quantity"
            required
            rules={[
              {
                required: true,
                message: "Please input your product stock quantity!",
              },
            ]}
          >
            <Input
              type="number"
              placeholder="Enter product unit quantity"
              className="p-2"
            />
          </Form.Item>
          <Form.Item
            name="purchase"
            label="Minimum Purchase Quantity"
            type="number"
            required
            rules={[
              {
                required: true,
                message: "Please input your product minimum purchase quantity!",
              },
            ]}
          >
            <Input
              placeholder="Enter minimum purchase quantity"
              className="p-2"
            />
          </Form.Item>
          <Form.Item
            name="saq"
            label="Stock Alert Quantity"
            type="number"
            required
            rules={[
              {
                required: true,
                message: "Please input your stock alert quantity!",
              },
            ]}
          >
            <Input placeholder="Enter stock alert quantity" className="p-2" />
          </Form.Item>
          <div className="font-bold pb-2 border-b-[1px] border-blue-600 lg:col-span-2  mb-6">
            Price
          </div>
          <Form.Item
            name="price"
            label="Product Price"
            type="number"
            className="lg:col-span-2"
            required
            rules={[
              {
                required: true,
                message: "Please input your product price!",
              },
            ]}
          >
            <Input placeholder="Enter product price" className="p-2" />
          </Form.Item>
          <div className=" pb-2  lg:col-span-2  mb-4">
            Set Quantity Based Price (Optional)
          </div>
          <Form.List name="price_base">
            {(fields, { add, remove }) => (
              <>
                <Form.Item>
                  <Button
                    onClick={() => add()}
                    className=" px-6 rounded"
                    style={{ background: "#5664d2" }}
                  >
                    <BsPlusCircleDotted style={{ color: "white" }} size={20} />
                  </Button>
                </Form.Item>
                <div className="lg:col-span-2 ">
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      //   style={{
                      //     display: "grid",
                      //     gridTemplateColumns: "repeat(4, 1fr)", // Three columns
                      //     marginBottom: 8,
                      //   }}
                      align="baseline"
                    >
                      <div className="grid lg:grid-cols-4  grid-cols-2  gap-x-4">
                        <Form.Item
                          {...restField}
                          name={[name, "mx_quantity"]}
                          label="Maximum Quantity"
                          className="w-full"
                          required
                          rules={[
                            {
                              required: true,
                              message: "Please enter maximum quantity",
                            },
                          ]}
                        >
                          <Input placeholder="Maximum Quantity" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "mn_quantity"]}
                          label="Minimum Quantity"
                          rules={[
                            {
                              required: true,
                              message: "please enter minimum quantity",
                            },
                          ]}
                        >
                          <Input placeholder="Minimum Quantity" />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "p_price"]}
                          label="Product Price"
                          required
                          rules={[
                            {
                              required: true,
                              message: "Please enter product price",
                            },
                          ]}
                        >
                          <Input placeholder="Enter product price" />
                        </Form.Item>
                        <AiOutlineDelete
                          style={{ color: "red" }}
                          size={14}
                          onClick={() => remove(name)}
                        />
                      </div>
                    </Space>
                  ))}
                </div>
              </>
            )}
          </Form.List>
          <div className="font-bold pb-2 border-b-[1px] border-blue-600 lg:col-span-2  mb-6">
            Product Discount
          </div>
          <Form.Item
            name={`coupon`}
            label={`Add Coupons`}
            className="lg:col-span-2"
          >
            <Select placeholder="Coupon">
              {" "}
              <Option value="1">admin winter coupon - 10%</Option>
            </Select>
          </Form.Item>
          <Form.Item
            name="discount_value"
            label="Discount Value"
            className="w-full"
            required
            rules={[
              {
                required: true,
                message: "Please input your discount!",
              },
            ]}
          >
            <Input
              onChange={(e) => {
                console.log(e.target.value);
                setDiscount(e.target.value);
              }}
              placeholder="Enter discount value"
              className="p-2"
            />
          </Form.Item>
          <Form.Item
            name={`discount_type`}
            label={`Discount Type`}
            rules={[
              {
                required: true,
                message: "please select your  discount type",
              },
            ]}
          >
            <Select
              placeholder="Enter discount type"
              onChange={(value) => {
                console.log(value);
                setD_type(value);
              }}
            >
              {" "}
              <Option value="1">Percentage</Option>
              <Option value="2">Flat</Option>
            </Select>
          </Form.Item>
          <Form.Item name={`start_date`} label={`Discount Price Start Date`}>
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              disabled={!discount || !d_type}
            />
          </Form.Item>
          <Form.Item name={`end_date`} label={`Discount Price End Date`}>
            <DatePicker
              showTime
              format="YYYY-MM-DD HH:mm:ss"
              disabled={!discount || !d_type}
            />
          </Form.Item>
          <div className="font-bold pb-2 border-b-[1px] border-blue-600 lg:col-span-2  mb-6">
            Set Product Location
          </div>
          <Form.Item
            name="location"
            label="Please Select One"
            required
            rules={[
              {
                required: true,
                message: "Please select your location !",
              },
            ]}
          >
            <Radio.Group
              onChange={(e) => {
                console.log(e.target.value);
                setSelectedValue(e.target.value);
              }}
            >
              <Radio value="Store Location">Store Location</Radio>
              <Radio value="Relay Point Location">Relay Point Location</Radio>
            </Radio.Group>
          </Form.Item>
          {selectedValue === "Store Location" && (
            <Form.Item
              name={`store_location`}
              label={`Select Store Location`}
              className="lg:col-span-2 col-span-1"
              rules={[
                {
                  required: true,
                  message: "please select your store location",
                },
              ]}
            >
              <Select placeholder="Enter store location">
                {" "}
                <Option value="1">GIBSON GIN</Option>
                <Option value="2">NASCO</Option>
                <Option value="3">BB</Option>
                <Option value="4">CHOCO TOGO</Option>
                <Option value="5">NASCO</Option>
                <Option value="6">Best Brand</Option>
                <Option value="7">Google</Option>
                <Option value="8">Apple</Option>
              </Select>
            </Form.Item>
          )}
          {selectedValue === "Relay Point Location" && (
            <Form.Item
              name={`relay_point_location`}
              label={`Select Relay Point Location`}
              className="lg:col-span-2 col-span-1"
              rules={[
                {
                  required: true,
                  message: "please select your relay point location",
                },
              ]}
            >
              <Select placeholder="Enter relay point location">
                {" "}
                <Option value="1">GIBSON GIN</Option>
                <Option value="2">NASCO</Option>
                <Option value="3">BB</Option>
                <Option value="4">CHOCO TOGO</Option>
                <Option value="5">NASCO</Option>
                <Option value="6">Best Brand</Option>
                <Option value="7">Google</Option>
                <Option value="8">Apple</Option>
              </Select>
            </Form.Item>
          )}
        </div>
      

        <Form.Item>
          <button
            type="submit" // <-- Set type to "submit"
            className="bg-emerald-500 text-white px-[18px] py-2 rounded"
          >
            Submit
          </button>
        </Form.Item>
      </Form>
      <div className="flex justify-end">
      <div className="flex gap-x-4 items-center">
       {/* <button className="bg-purple-500 text-white h-12 w-24">Previous</button> */}
       <button className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"onClick={()=>{setTab('descriptions')}}>Next</button>
      </div>
      </div>
    </div>
  );
};

export default GeneralForm;
