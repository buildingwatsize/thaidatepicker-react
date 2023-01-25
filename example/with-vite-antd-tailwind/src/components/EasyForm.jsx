import { Button, Form, Input, Typography } from "antd";
import React, { useCallback } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

import "./CustomThaiDatePicker.css";

const EasyForm = () => {
  const handleValuesChange = useCallback((values) => {
    console.log(values);
  }, []);
  const handleFinish = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <div>
      <Typography.Title level={4}>
        Ant Design Form with thai-datepicker
      </Typography.Title>
      <Form
        name="EasyForm"
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 20,
        }}
        onValuesChange={handleValuesChange}
        onFinish={handleFinish}
        // initialValues={{ date_of_birth: "2023-01-31" }}
      >
        <Typography.Title level={5}>Information</Typography.Title>
        <Form.Item label="First Name" name="first_name">
          <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="last_name" className="">
          <Input />
        </Form.Item>

        <Form.Item label="Date of birth" name="date_of_birth">
          <ThaiDatePicker placeholder="I'm here 👋" customInput={Input} />
        </Form.Item>

        <Typography.Title level={5}>Address</Typography.Title>
        <Form.Item label="Address" name="address">
          <Input />
        </Form.Item>
        <Form.Item label="Zipcode" name="zipcode">
          <Input />
        </Form.Item>

        <Form.Item
          wrapperCol={{
            offset: 4,
            span: 20,
          }}
        >
          <Button
            type="primary"
            htmlType="submit"
            onClick={() => alert("You can see form result on console")}
          >
            Submit
          </Button>
          <Button type="secondary" htmlType="reset">
            Clear
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default EasyForm;
