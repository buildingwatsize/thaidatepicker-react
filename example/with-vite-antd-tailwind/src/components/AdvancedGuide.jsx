import { Input, Typography } from "antd";
import { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

import "./CustomThaiDatePicker.css";

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
  const [value, setValue] = useState("");
  return (
    <div>
      <Typography.Title level={4}>Example</Typography.Title>
      <p>Note: All values were linked</p>

      {/* // ## Guide 1 - Custom input ## // */}
      <RenderWithCode
        title="#1 Custom Input (with Ant Design Input)"
        code={`<ThaiDatePicker
  value={value}
  onChange={(christDate) => setValue(christDate)}
  customInput={Input}
  inputProps={{
    displayFormat: "D MMMM YYYY",
    className: "w-full"
  }}
/>`}
      >
        <ThaiDatePicker
          value={value}
          onChange={(christDate) => setValue(christDate)}
          customInput={Input}
          inputProps={{ displayFormat: "D MMMM YYYY", className: "w-full" }}
        />
      </RenderWithCode>

      {/* // ## Guide 2 - Another way custom input ## // */}
      <RenderWithCode
        title="#2 Another way to use custom input"
        description="(Note: the reactDatePickerProps will override any inputProps)"
        code={`<ThaiDatePicker
  value={value}
  onChange={(christDate) => setValue(christDate)}
  clearable={false}
  reactDatePickerProps={{
    customInput: <input className="w-full bg-blue-300" />, // <-- ✅ className can be used on this line
  }}
  inputProps={{
    className: "bg-red-300",                               // <-- ❌ this is not working anymore
  }}
/>`}
      >
        <ThaiDatePicker
          value={value}
          onChange={(christDate) => setValue(christDate)}
          clearable={false}
          reactDatePickerProps={{
            customInput: <input className="w-full bg-blue-300" />, // className can be used on this line
          }}
          inputProps={{
            className: "bg-red-300", // <-- ❌ this is not working anymore
          }}
        />
      </RenderWithCode>

      {/* // ## Guide 3 - Custom header of calendar ## // */}
      <RenderWithCode
        title="#3 Custom header of calendar (icons, className)"
        code={`<ThaiDatePicker
  value={value}
  onChange={(christDate) => setValue(christDate)}
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
          value={value}
          onChange={(christDate) => setValue(christDate)}
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
  value={value}
  onChange={(christDate) => setValue(christDate)}
  inputProps={{
    displayFormat: "D MMM YY",   // <-- ✅ using this instead!
    className: "w-full",
  }}
  dateFormat="yyyy_MM_dd"        // <-- ❌ this won't work anymore!
  reactDatePickerProps={{
    dateFormat: "yyyy MM dd",    // <-- ❌ and this won't work anymore too!
  }}
/>`}
      >
        <ThaiDatePicker
          value={value}
          onChange={(christDate) => setValue(christDate)}
          inputProps={{
            displayFormat: "D MMM YY", // <-- ✅ using this instead!
            className: "w-full",
          }}
          dateFormat="yyyy_MM_dd" // <-- ❌ this won't work anymore!
          reactDatePickerProps={{
            dateFormat: "yyyy MM dd", // <-- ❌ and this won't work anymore too!
          }}
        />
      </RenderWithCode>

      {/* // ## Guide 5 - Work with id - styling ## // */}
      <RenderWithCode
        title={"#5 Work with id - Styling"}
        description="(Note: I just styling input like an ant-design Input but changed a little bit color. See more `components/CustomThaiDatePicker.css`)"
        code={`<ThaiDatePicker
  id="custom-id"
  value={value}
  onChange={(christDate) => setValue(christDate)}
  placeholder="Custom Styling"
/>`}
      >
        <ThaiDatePicker
          id="custom-id"
          value={value}
          onChange={(christDate) => setValue(christDate)}
          placeholder="Custom Styling"
        />
      </RenderWithCode>

      {/* // ## Guide 6 - Disabled ## // */}
      <RenderWithCode
        title={"#6 Disabled"}
        code={`<ThaiDatePicker value={"2024-12-31"} disabled />`}
      >
        <ThaiDatePicker value={"2024-12-31"} disabled />
      </RenderWithCode>

      {/* // ## Guide 7 - ReadOnly ## // */}
      <RenderWithCode
        title={"#7 ReadOnly"}
        code={`<ThaiDatePicker value={"2024-12-31"} readOnly />`}
      >
        <ThaiDatePicker value={"2024-12-31"} readOnly />
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
