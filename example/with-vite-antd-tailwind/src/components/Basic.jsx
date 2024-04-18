import { Typography } from "antd";
import React, { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";
import { basicSrcCode } from "utils/constant";

const Basic = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [selectedThaiDate, setSelectedThaiDate] = useState();

  const handleDatePickerChange = (christDate, buddhistDate) => {
    console.log({ christDate, buddhistDate });
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

  return (
    <>
      <Typography.Title level={4}>Basic/Default View</Typography.Title>
      Let's try to change to be something! You can see what a magic on console
      too.
      <div className="w-80 m-auto">
        <div className="py-8 flex gap-2 flex-col">
          <div className="rounded-2xl p-4 border-2 border-red-500 border-dashed">
            Input
            <ThaiDatePicker
              value={selectedDate}
              onChange={handleDatePickerChange}
            />
          </div>
          <br />
          <div>
            christDate: <Typography.Text code>{selectedDate}</Typography.Text>
          </div>
          <div>
            buddhistDate:{" "}
            <Typography.Text code>{selectedThaiDate}</Typography.Text>
          </div>
        </div>
      </div>
      <Typography.Title level={4}>Source Code </Typography.Title>
      <Typography.Paragraph copyable={{ text: basicSrcCode }}>
        <pre>{basicSrcCode}</pre>
      </Typography.Paragraph>
    </>
  );
};

export default Basic;
