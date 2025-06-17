"use client";
import React from "react";
import { Button, Checkbox, Form, Input } from "antd";
import { motion } from "framer-motion";
const NewsLetter = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log("Finish:", values);
  };
  return (
    <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.9,
        ease: [0, 0.71, 0.2, 1.01]
      }}
    className="container text-center xl:py-20 py-11">
      <h2 className="text-[40px] font-bold">
        Sign Up For <span className="text-[#062C57]">Our Newsletter</span>
      </h2>
      <p className="text-base font-normal xl:pt-8 pt-5 pb-[30pxpx]">
        It is a long established fact that a reader will be distracted by the
        readable content of a page when looking at its layout.
      </p>
      <div className="relative lg:py-12 py-5">
        <Form
          form={form}
          name="newsletter"
          layout="inline"
          onFinish={onFinish}
          className="bg-white box-shadow px-8 justify-between xl:flex-row flex-col xl:py-0 py-8 border-[0.5px] border-[#545454] greyBackgroundFields "
        >
          <Form.Item
            name="username"
            className="xl:w-1/3 w-full"
            rules={[{ required: true, message: "Please input your name!" }]}
          >
            <Input
              placeholder="Enter your name"
              className="border-[#7E7E7E69] xl:border-r-1 formInputBorder xl:border-y-0 border-t-0 border-b-1 border-l-0 rounded-none py-8 text-lg"
            />
          </Form.Item>
          <Form.Item
            className="xl:w-1/3 w-full"
            name="useremail"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="py-8 border-0 text-lg hover:border-0 focus-within:border-0 focus:border-0"
            />
          </Form.Item>
          <div className="xl:absolute relative bottom-0 left-0">
            {" "}
            <Checkbox className="text-[15px] text-[#333]  rounded-none items-start">
              By checking this box, you confirm that you have read and are
              agreeing to our terms of use regarding the storage of the data
              submitted through this form.
            </Checkbox>
          </div>
          <Form.Item shouldUpdate className="flex justify-center items-center">
            {() => (
              <motion.button
                type="primary"
                htmlType="submit"
                whileHover={{
                  scale:1.05,
                  transition:{duration:0.3,}
                }}
                className="bg-[#062C57] text-white min-w-[266px] min-h-[58px] rounded-none text-lg font-semibold capitalize"
              >
                subscribe
              </motion.button>
            )}
          </Form.Item>
        </Form>
      </div>
    </motion.div>
  );
};

export default NewsLetter;
