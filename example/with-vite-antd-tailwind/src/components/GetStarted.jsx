import { List, Table, Typography } from "antd";
import React from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

import { basicSrcCode, propsColumns, propsDataSource } from "../utils/constant";

const GetStarted = () => {
  const listItems = [
    {
      title: "Github:",
      content: (
        <a href="https://github.com/buildingwatsize/thaidatepicker-react">
          https://github.com/buildingwatsize/thaidatepicker-react
        </a>
      ),
    },
    {
      title: "Installation:",
      content: (
        <ul>
          <li>
            NPM:{" "}
            <Typography.Text code copyable>
              npm install --save thaidatepicker-react
            </Typography.Text>
          </li>
          <li>
            YARN:{" "}
            <Typography.Text code copyable>
              yarn add thaidatepicker-react
            </Typography.Text>
          </li>
        </ul>
      ),
    },
    {
      title: "Usage:",
      content: (
        <Typography.Paragraph copyable={{ text: basicSrcCode }}>
          <pre>{basicSrcCode}</pre>
        </Typography.Paragraph>
      ),
    },
    {
      title: "Example:",
      content: (
        <>
          <ThaiDatePicker
            className="w-full"
            reactDatePickerProps={{ popperClassName: "!z-10" }} // which used temporary for displaying over the Properties table
          />
          <span className="italic text-black/40">
            Note: just for showcase the calendar (unable to select)
          </span>
        </>
      ),
    },
    {
      title: "Properties",
      content: (
        <>
          <Table
            dataSource={propsDataSource}
            columns={propsColumns}
            pagination={{ pageSize: 100, hideOnSinglePage: true }}
          />
        </>
      ),
    },
  ];
  return (
    <>
      <Typography.Title level={4}>Get Started</Typography.Title>
      <List
        size="small"
        dataSource={listItems}
        renderItem={(item) => (
          <List.Item>
            <div className="w-full">
              <strong>{item.title}</strong>
              <div>{item.content}</div>
            </div>
          </List.Item>
        )}
        split={false}
      />
    </>
  );
};

export default GetStarted;
