import {
  Button,
  Card,
  Checkbox,
  Form,
  Input,
  Modal,
  Select,
  Space,
} from "antd";
import React, { useContext, useState } from "react";
import { BsPlusCircleDotted } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";
import { tabbar } from "@/app/contexts/tabContext";
import Sketch from "@uiw/react-color-sketch";

const Feature = () => {
  const { tab, setTab } = useContext(tabbar);
  const [colors, setColor] = useState(false);
  const [modal, setModal] = useState(false);
  const [hex, setHex] = useState("#fff");
  const [keys, setKey] = useState(null);
  const [data, setData] = useState(null);
  console.log("subopt", data);
  console.log(keys);
  // const [disableAlpha, setDisableAlpha] = useState(false);
  console.log("color", hex);
  return (
    <div>
      <Form
        layout="vertical"
        onFinish={(value) => {
          console.log(value);
        }}
        // className="grid lg:grid-cols-2 grid-cols-1 gap-x-4"
      >
        <div className="font-bold pb-2 text-[18px] lg:col-span-2  mb-6">
          Add Attributes
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 ">
          {/* <Form.List name="specfic">
          {(fields, { add, remove }) => (
            <>
              <div className="grid grid-cols-1 ">
                {fields.map(({ key, name, ...restField }) => (
                  <Space key={key} align="baseline"style={{display:"block"}}>
                    <div className="">
                      <div className="">
                 
         
                      <Form.Item
              {...restField}
              name={[name, "attribute"]}
              className="lg:col-span-2 col-span-1"
              rules={[
                {
                  required: true,
                  message: "please select your attribute",
                },
              ]}
            >
              <Select placeholder="Selcet An Attribute">
                {" "}
                <Option value="1">pointure</Option>
                <Option value="2">coulur</Option>
                <Option value="3">size</Option>
                <Option value="4">volume</Option>
                <Option value="5">stockage</Option>
                <Option value="6">ram</Option>
                <Option value="7">puissance</Option>
              </Select>
                     </Form.Item>
                     </div>
    <div className="">
      <Form.List name="options">
      {(fields, { add, remove }) => (
        <>
          {fields.map(({ key, name, ...restField }) => (
            <Space
              key={key}
              style={{
                display: 'flex',
                marginBottom: 8,
              }}
              align="baseline"
            >
                  <Form.Item
              {...restField}
             name={[name, "option_label"]}
              className="lg:col-span-2 col-span-1"
              rules={[
                {
                  required: true,
                  message: "please select your option",
                },
              ]}
            >
              <Select placeholder="Options Label">
                {" "}
                <Option value="1">pointure</Option>
                <Option value="2">coulur</Option>
                <Option value="3">size</Option>
                <Option value="4">volume</Option>
                <Option value="5">stockage</Option>
                <Option value="6">ram</Option>
                <Option value="7">puissance</Option>
              </Select>
                     </Form.Item>
              {
                colors && 
                <Form.Item
                {...restField}
                name={[name, 'color']}
                className={`bg-[${hex}]`}
                rules={[
                  {
                    required: true,
                    message: 'please select the color',
                  },
                ]}
                // className="h-full"
              >
                <Button  style={{ backgroundColor: hex }}  onClick={()=>{setModal(true)}}>Select Color</Button>
              </Form.Item>
              }
              
              <Form.Item
                {...restField}
                name={[name, 'option_price']}
                rules={[
                  {
                    required: true,
                    message: 'please input your option price',
                  },
                ]}
              >
                <Input placeholder="Option Price"className="py-2" />
              </Form.Item>
              <AiOutlineDelete onClick={() => remove(name)} />
            </Space>
          ))}
          
          <Form.Item  {...restField} name={[name, "add_property"]}>
            <Button type="dashed" onClick={() => add()} block icon={<BsPlusCircleDotted />}>
              Add Property
            </Button>
          </Form.Item>
          <Form.Item {...restField} name={[name, "color"]}>
          <Checkbox
        onChange={(e) => setColor(e.target.checked)}
      >
      Color
      </Checkbox>
          </Form.Item>
        </>
      )}
      
      </Form.List>
      </div>
                      <div className="col-span-1  mt-2">
                      <AiOutlineDelete
                        size={18}
                        style={{ color: "red" }}
                        onClick={() => remove(name)}
                      />
                    </div>
                    </div>
                  </Space>
                ))}
              </div>
              <Form.Item>
                <Button
                  onClick={() => add()}
                  className=" px-6 rounded"
                  style={{ background: "#5664d2" }}
                >
                  <BsPlusCircleDotted style={{ color: "white" }} size={20} />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
        */}
          <Form.List name="items">
            {(fields, { add, remove }) => (
              <div
                style={{
                  display: "flex",
                  rowGap: 16,
                  flexDirection: "column",
                }}
              >
                {fields.map((field) => (
                  <Card
                    size="small"
                    title={`Item ${field.name + 1}`}
                    key={field.key}
                    extra={
                      <AiOutlineDelete
                        onClick={() => {
                          remove(field.name);
                        }}
                      />
                    }
                  >
                    <Form.Item
                      name={[name, "attribute"]}
                      className="lg:col-span-2 col-span-1"
                      rules={[
                        {
                          required: true,
                          message: "please select your attribute",
                        },
                      ]}
                    >
                      <Select placeholder="Selcet An Attribute">
                        {" "}
                        <Option value="1">pointure</Option>
                        <Option value="2">coulur</Option>
                        <Option value="3">size</Option>
                        <Option value="4">volume</Option>
                        <Option value="5">stockage</Option>
                        <Option value="6">ram</Option>
                        <Option value="7">puissance</Option>
                      </Select>
                    </Form.Item>

                    {/* Nest Form.List */}
                    <Form.Item label="List">
                      <Form.List name={[field.name, "list"]}>
                        {(subFields, subOpt) => (
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "column",
                              rowGap: 16,
                            }}
                          >
                            {subFields.map((subField) => (
                              <Space key={subField.key}>
                                {/* <Form.Item noStyle name={[subField.name, 'first']}>
                              <Input placeholder="first" />
                            </Form.Item>
                            <Form.Item noStyle name={[subField.name, 'second']}>
                              <Input placeholder="second" />
                            </Form.Item> */}
                                <Form.Item
                                  // {...restField}
                                  name={[subField.name, "Option_label"]}
                                  className="lg:col-span-2 col-span-1"
                                  rules={[
                                    {
                                      required: true,
                                      message: "please select your option",
                                    },
                                  ]}
                                >
                                  <Select placeholder="Options Label">
                                    {" "}
                                    <Option value="1">pointure</Option>
                                    <Option value="2">coulur</Option>
                                    <Option value="3">size</Option>
                                    <Option value="4">volume</Option>
                                    <Option value="5">stockage</Option>
                                    <Option value="6">ram</Option>
                                    <Option value="7">puissance</Option>
                                  </Select>
                                </Form.Item>
                                {colors && (
                                  <Form.Item
                                    // {...restField}
                                    name={[subField.name, "color"]}
                                    className={`bg-[${hex}]`}
                                    rules={[
                                      {
                                        required: true,
                                        message: "please select the color",
                                      },
                                    ]}
                                    // className="h-full"
                                  >
                                    {
                                      <Button
                                        style={{ backgroundColor: hex }}
                                        onClick={() => {
                                          setModal(true);
                                        }}
                                      >
                                        Select Color
                                      </Button>
                                    }
                                  </Form.Item>
                                )}

                                <Form.Item
                                  // {...restField}
                                  name={[subField.name, "option_price"]}
                                  rules={[
                                    {
                                      required: true,
                                      message: "please input your option price",
                                    },
                                  ]}
                                >
                                  <Input
                                    placeholder="Option Price"
                                    className="py-2"
                                  />
                                </Form.Item>
                                <AiOutlineDelete
                                  onClick={() => {
                                    subOpt.remove(subField.name);
                                  }}
                                />
                              </Space>
                            ))}
                            {/* <Button type="dashed" onClick={() => subOpt.add()} block>
                          + Add Sub Item
                        </Button> */}
                            <Form.Item
                              // {...restField}
                              name={[name, "add_property"]}
                            >
                              <Button
                                type="dashed"
                                onClick={() => {
                                 subOpt.add() 
                                  setKey(subOpt)// Remove the spread operator here
                                }}
                                block
                                // icon={<BsPlusCircleDotted />}
                              >
                                Add Property
                              </Button>
                            </Form.Item>
                            <Form.Item
                              // {...restField}
                              name={[name, "color"]}
                            >
                              <Checkbox
                                onChange={(e) => {
                                  setColor(e.target.checked);
                                 
                                }}
                                onClick={()=>{subOpt.remove()}}
                              >
                                Color
                              </Checkbox>
                            </Form.Item>
                          </div>
                        )}
                      </Form.List>
                    </Form.Item>
                  </Card>
                ))}

                <Button type="dashed" onClick={() => add()} block>
                  + Add Item
                </Button>
              </div>
            )}
          </Form.List>
        </div>
        <div className="font-bold pb-2 text-[18px] lg:col-span-2  mb-6">
          Product Specifications{" "}
        </div>
        <Form.Item
          name="description"
          label="Description"
          rules={[
            {
              required: true,
              message: "Please input description",
            },
          ]}
        >
          <Input.TextArea showCount maxLength={100} />
        </Form.Item>
        <Form.List name="specfic">
          {(fields, { add, remove }) => (
            <>
              <div className="grid grid-cols-1 ">
                {fields.map(({ key, name, ...restField }) => (
                  <Space
                    key={key}
                    align="baseline"
                    style={{ display: "block" }}
                  >
                    <div className="grid grid-cols-12 gap-x-2  align-self-center  w-full">
                      <div className="col-span-6">
                        <Form.Item
                          {...restField}
                          name={[name, "specific_name"]}
                          rules={[
                            {
                              required: true,
                              message: "please enter specific name",
                            },
                          ]}
                        >
                          <Input placeholder="Enter the product specific name" />
                        </Form.Item>
                      </div>
                      <div className="col-span-5">
                        <Form.Item
                          {...restField}
                          name={[name, "specific_value"]}
                          required
                          rules={[
                            {
                              required: true,
                              message: "Please enter product specific value",
                            },
                          ]}
                        >
                          <Input placeholder="Enter the product specific name" />
                        </Form.Item>
                      </div>
                      <div className="col-span-1  mt-2">
                        <AiOutlineDelete
                          size={18}
                          style={{ color: "red" }}
                          onClick={() => remove(name)}
                        />
                      </div>
                    </div>
                  </Space>
                ))}
              </div>
              <Form.Item>
                <Button
                  onClick={() => add()}
                  className=" px-6 rounded"
                  style={{ background: "#5664d2" }}
                >
                  <BsPlusCircleDotted style={{ color: "white" }} size={20} />
                </Button>
              </Form.Item>
            </>
          )}
        </Form.List>
      </Form>
      <div className="flex justify-end">
        <div className="flex gap-x-4 items-center">
          <button
            className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"
            onClick={() => {
              setTab("descriptions");
            }}
          >
            Previous
          </button>
          <button
            className="bg-[#5664d2] text-white px-[12px] py-[7.52px] rounded"
            onClick={() => {
              setTab("status");
            }}
          >
            Next
          </button>
        </div>
      </div>
      <Modal
        title="Select Color"
        open={modal}
        onCancel={() => {
          setModal(false);
        }}
        onOk={() => {
          setModal(false);
        }}
      >
        <Sketch
          style={{ marginLeft: 20 }}
          color={hex}
          onChange={(color) => {
            setHex(color.hex);
          }}
        />
      </Modal>
    </div>
  );
};

export default Feature;
