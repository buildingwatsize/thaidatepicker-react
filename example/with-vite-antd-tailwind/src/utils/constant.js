export const propsDataSource = [
  {
    key: "1",
    property: "children",
    description:
      "the children element inside like <ThaiDatePicker>{children}</ThaiDatePicker> by default you don't need to defined as props.",
    type: "any",
    default: "-",
    version: "",
  },
  {
    key: "2",
    property: "id",
    description: "#id for container element",
    type: "string",
    default: "-",
    version: "",
  },
  {
    key: "3",
    property: "value",
    description: "A christ date value with fixed dayjs format (YYYY-MM-DD)",
    type: "string",
    default: "-",
    version: "",
  },
  {
    key: "4",
    property: "onChange",
    description:
      "Handle function with maximum 2 parameters, `christDate` and `thaiDate`",
    type: "function(christDate, thaiDate)",
    default: "-",
    version: "",
  },
  {
    key: "5",
    property: "disabled",
    description: "Disabled property for input",
    type: "boolean",
    default: "false",
    version: "",
  },
  {
    key: "6",
    property: "readOnly",
    description: "ReadOnly property for input",
    type: "boolean",
    default: "false",
    version: "",
  },
  {
    key: "7",
    property: "clearable",
    description:
      "Clear the value (please note clearable will work smoothly with onChange props)",
    type: "boolean",
    default: "true",
    version: "",
  },
  {
    key: "8",
    property: "placeholder",
    description: "Placeholder property for input",
    type: "string",
    default: "-",
    version: "",
  },
  {
    key: "9",
    property: "header",
    description: `
      An object for setting up header component.
      To change button icon use \`prevButtonIcon\` and \`nextButtonIcon\`.
      To change className of button and select use \`prevButtonClassName\`, \`nextButtonClassName\`, \`monthSelectClassName\`, and \`yearSelectClassName\`
    `,
    type: `Object {
      prevButtonIcon: type any | default undefined,
      nextButtonIcon: type any | default undefined,
      prevButtonClassName: type any | default undefined,
      nextButtonClassName: type any | default undefined,
      monthSelectClassName: type any | default undefined,
      yearSelectClassName: type any | default undefined
    }`,
    default: "{}",
    version: "",
  },
  {
    key: "10",
    property: "yearBoundary",
    description:
      "A config boundary ±Year (e.g. yearBoundary = 2; it means currentYear ± 2.)",
    type: "number",
    default: 99,
    version: "",
  },
  {
    key: "11",
    property: "inputProps",
    description: "An override input properties.",
    type: "Object",
    default: "-",
    version: "",
  },
  {
    key: "12",
    property: "reactDatePickerProps",
    description:
      "An override react-datepicker properties. See more (https://reactdatepicker.com/ or https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md)",
    type: "Object",
    default: "-",
    version: "",
  },
  {
    key: "13",
    property: "minDate",
    description:
      "A config minimum selectable date. To use, you can provide the string like `2023-01-31`. (Note: It's will depend on yearBoundary too.)",
    type: "string",
    default: "-",
    version: "",
  },
  {
    key: "14",
    property: "maxDate",
    description:
      "A config maximum selectable date. To use, you can provide the string like `2023-12-31`. (Note: It's will depend on yearBoundary too.)",
    type: "string",
    default: "-",
    version: "",
  },
  {
    key: "15",
    property: "highlightDates",
    description:
      'A highlight selected date. To use, you can provide an array of Date like `["new Date()"]`',
    type: "Date[]",
    default: "-",
    version: "",
  },
  {
    key: "16",
    property: "customInput",
    description:
      "A config for using custom input element. To use, you can provide a name of element like `Input`",
    type: "any",
    default: "-",
    version: "",
  },
];
export const propsColumns = [
  {
    title: "Property",
    dataIndex: "property",
    key: "property",
    className: "font-bold",
    fixed: "left",
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Type",
    dataIndex: "type",
    key: "type",
    className: "text-purple-600",
  },
  {
    title: "Default",
    dataIndex: "default",
    key: "default",
  },
  {
    title: "Version",
    dataIndex: "version",
    key: "version",
  },
];
export const basicSrcCode = `import React, { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState();
  // const [selectedThaiDate, setSelectedThaiDate] = useState();
  
  const handleDatePickerChange = (christDate, buddhistDate) => {
    console.log({ christDate, buddhistDate });
    setSelectedDate(christDate);
    // setSelectedThaiDate(buddhistDate);
  };
  
  return (
    <div>
      <ThaiDatePicker value={selectedDate} onChange={handleDatePickerChange} />
    </div>
    );
  };
  
  export default App;`;

export const easySrcCode = `<ThaiDatePicker
  placeholder="I'm here 👋"
  customInput={Input}
  inputProps={{
    displayFormat: "D MMMM YYYY", // also works with "D MMMM BBBB"
  }}
/>`;
