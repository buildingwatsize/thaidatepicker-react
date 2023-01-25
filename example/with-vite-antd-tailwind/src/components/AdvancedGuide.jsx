import { Input, Typography } from "antd";
import { ThaiDatePicker } from "thaidatepicker-react";

const RenderWithCode = ({ title, description, children, code }) => {
  return (
    <div className="border-2 border-purple-300 border-solid p-4 rounded-2xl mb-4">
      <div className="text-p mb-6">
        <div className="font-bold">{title}</div>
        {description && (
          <div className="italic text-small font-normal">{description}</div>
        )}
      </div>
      {children}
      <Typography.Paragraph copyable={{ text: code }} className="mt-6">
        <pre>{code}</pre>
      </Typography.Paragraph>
    </div>
  );
};

const AdvancedGuide = () => {
  return (
    <div>
      <Typography.Title level={4}>Example</Typography.Title>

      {/* // ## Guide 1 - Custom input ## // */}
      <RenderWithCode
        title="#1 Custom Input (with Ant Design Input)"
        code={`<ThaiDatePicker
  customInput={Input}
  inputProps={{
    displayFormat: "D MMMM YYYY",
    className: "w-full"
  }}
/>`}
      >
        <ThaiDatePicker
          customInput={Input}
          inputProps={{ displayFormat: "D MMMM YYYY", className: "w-full" }}
        />
      </RenderWithCode>

      {/* // ## Guide 2 - Another way custom input ## // */}
      <RenderWithCode
        title="#2 Another way to use custom input"
        description="(Note: the reactDatePickerProps will override any inputProps)"
        code={`<ThaiDatePicker
  clearable={false}
  reactDatePickerProps={{
    customInput: <input />
  }}
  inputProps={{
    className: "w-full bg-red-300"
  }}
/>`}
      >
        <ThaiDatePicker
          clearable={false}
          reactDatePickerProps={{
            customInput: <input />, // you need to place the `className` alongside the <input /> on this line
          }}
          inputProps={{
            className: "w-full bg-red-300",
          }}
        />
      </RenderWithCode>

      {/* // ## Guide 3 - Custom header of calendar ## // */}
      <RenderWithCode
        title="#3 Custom header of calendar (icons, className)"
        code={`<ThaiDatePicker
  value="2023-12-31"
  dateFormat={"yyyy MM dd"}
  inputProps={{
    displayFormat: "D MMMM YYYY",
    className: "w-full",
  }}
  header={{
    prevButtonIcon: "-",
    nextButtonIcon: "+",
    prevButtonClassName: "bg-red-400",
    nextButtonClassName: "bg-blue-400",
    monthSelectClassName: "text-red-800",
    yearSelectClassName: "text-green-800",
  }}
/>`}
      >
        <ThaiDatePicker
          value="2023-12-31"
          dateFormat={"yyyy MM dd"}
          inputProps={{
            displayFormat: "D MMMM YYYY",
            className: "w-full",
          }}
          header={{
            prevButtonIcon: "-",
            nextButtonIcon: "+",
            prevButtonClassName: "bg-red-400",
            nextButtonClassName: "bg-blue-400",
            monthSelectClassName: "text-red-800",
            yearSelectClassName: "text-green-800",
          }}
        />
      </RenderWithCode>

      {/* // ## Guide 4 - Date formatting ## // */}
      <RenderWithCode
        title="#4 Date display formatting"
        description="(Note: Please use `displayFormat` inside inputProps instead of
        `dateFormat` on react-datepicker)"
        code={`<ThaiDatePicker
  onChange={(christDate) => console.log(christDate)}
  inputProps={{
    displayFormat: "D MMM YY",
    className: "w-full",
  }}
/>`}
      >
        <ThaiDatePicker
          onChange={(christDate) => console.log(christDate)}
          inputProps={{
            displayFormat: "D MMM YY", // << using this instead!
            className: "w-full",
          }}
          dateFormat="yyyy_MM_dd" // this won't work anymore!
          reactDatePickerProps={{
            dateFormat: "yyyy MM dd", // and this won't work anymore too!
          }}
        />
      </RenderWithCode>

      {/* // ## Guide 5 - Work with id - styling ## // */}
      <RenderWithCode
        title={"#5 Work with id - Styling"}
        description="(Note: I just styling input like an ant-design Input but changed a little bit color. See more `ThaiDatepicker.css`)"
        code={`<ThaiDatePicker
  id="custom-id"
  onChange={(value) => {
    console.log(value);
  }}
/>`}
      >
        <ThaiDatePicker
          id="custom-id"
          onChange={(value) => {
            console.log(value);
          }}
          placeholder="Custom Styling"
        />
      </RenderWithCode>

      {/* // ## Guide 6 - Disabled ## // */}
      <RenderWithCode
        title={"#6 Disabled"}
        code={`<ThaiDatePicker value={"2023-12-31"} disabled />`}
      >
        <ThaiDatePicker value={"2023-12-31"} disabled />
      </RenderWithCode>

      {/* // ## Guide 7 - ReadOnly ## // */}
      <RenderWithCode
        title={"#7 ReadOnly"}
        code={`<ThaiDatePicker value={"2023-12-31"} readOnly />`}
      >
        <ThaiDatePicker value={"2023-12-31"} readOnly />
      </RenderWithCode>

      {/* // ## Guide X - TBD ## // */}
      <RenderWithCode
        title={"#X TBD"}
        description="Open for PR"
        code={`// Your code here`}
      >
        // Your code here
      </RenderWithCode>
    </div>
  );
};

export default AdvancedGuide;
