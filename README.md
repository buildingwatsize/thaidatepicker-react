# thaidatepicker-react

[![NPM](https://img.shields.io/npm/v/thaidatepicker-react)](https://www.npmjs.com/package/thaidatepicker-react)
[![NPM](https://img.shields.io/badge/Watsize-Library-289548)](https://www.npmjs.com/package/thaidatepicker-react)
[![CodeQL](https://github.com/buildingwatsize/thaidatepicker-react/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/buildingwatsize/thaidatepicker-react/actions/workflows/github-code-scanning/codeql)
[![Downloads](https://img.shields.io/npm/dm/thaidatepicker-react.svg)](https://npmjs.org/package/thaidatepicker-react)

---

> ## 🎉 RELEASE v2 🎉
> 
> Thank you to everyone who used my little side project. I appreciate all you guys. Hope to keep it active.

---

## 📘 About

The thaidatepicker-react is a component for ReactJS that likes other DatePicker library but all we need is Buddhist Year (25XX – aka Thai Year) come with the right render day on "Leap" year (example: Sat, 29 Feb 2020 must be equal to Sat, 29 Feb 2563) so I wish this component will be a useful thing to you :D. Happy Coding.

## ⚙ Install

```bash
npm install thaidatepicker-react
# or just `yarn add thaidatepicker-react`
```

## 📌 Example Usage

```jsx
import React, { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("2024-02-29");
  const [selectedThaiDate, setSelectedThaiDate] = useState("2567-02-29");

  const handleDatePickerChange = (christDate, buddhistDate) => {
    console.log(christDate);
    console.log(buddhistDate);
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

  return (
    <>
      <ThaiDatePicker
        value={selectedDate}
        onChange={handleDatePickerChange}
      />
      <div>christDate: {selectedDate}</div>
      <div>thaiDate: {selectedThaiDate}</div>
    </>
  );
};

export default App;
```

## 📋 Properties

| **Property**             | **Description**                                                                                                                                                                                                                                          | **Type**                                                                                                                                                                                                                 | **Default**                                      | **Version** |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------|-------------|
| **children**             | the children element inside like {children} by default you don't need to defined as props.                                                                                                                                                               | _React.ReactNode \| null_                                                                                                                                                                                                | null                                             |             |
| **id**                   | #id for container element                                                                                                                                                                                                                                | _string_                                                                                                                                                                                                                 | "thdpk-container"                                |             |
| **value**                | A christ date value with fixed dayjs format (YYYY-MM-DD)                                                                                                                                                                                                 | _string_                                                                                                                                                                                                                 | ""                                               |             |
| **onChange**             | Handle function with maximum 2 parameters, `christDate` and `thaiDate`                                                                                                                                                                                   | _(christDate: string, thaiDate: string) => void_                                                                                                                                                                         | (_christDate: string, _thaiDate: string) => null |             |
| **disabled**             | Disabled property for input                                                                                                                                                                                                                              | _boolean_                                                                                                                                                                                                                | false                                            |             |
| **readOnly**             | ReadOnly property for input                                                                                                                                                                                                                              | _boolean_                                                                                                                                                                                                                | false                                            |             |
| **clearable**            | Clear the value (please note clearable will work smoothly with onChange props)                                                                                                                                                                           | _boolean_                                                                                                                                                                                                                | true                                             |             |
| **placeholder**          | Placeholder property for input                                                                                                                                                                                                                           | _string_                                                                                                                                                                                                                 | ""                                               |             |
| **header**               | An object for setting up header component. To change button icon use `prevButtonIcon` and `nextButtonIcon`. To change className of button and select use `prevButtonClassName`, `nextButtonClassName`, `monthSelectClassName`, and `yearSelectClassName` | _Object {  prevButtonIcon?: React.ReactNode; nextButtonIcon?: React.ReactNode;  prevButtonClassName?: string;  nextButtonClassName?: string;  monthSelectClassName?: string;  yearSelectClassName?: string; } \| null }_ | {}                                               |             |
| **yearBoundary**         | A config boundary ±Year (e.g. yearBoundary = 2; it means currentYear ± 2.)                                                                                                                                                                               | _number_                                                                                                                                                                                                                 | 99                                               |             |
| **inputProps**           | An override input properties.                                                                                                                                                                                                                            | _(any & { displayFormat?: string; }) \| null_                                                                                                                                                                            | null                                             |             |
| **reactDatePickerProps** | An override react-datepicker properties. See more (https://reactdatepicker.com/ or https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md)                                                                                        | _React.ComponentProps<typeof DatePicker>_                                                                                                                                                                                | {}                                               |             |
| **minDate**              | A config minimum selectable date. To use, you can provide the string like `2023-01-31`. (Note: It's will depend on yearBoundary too.)                                                                                                                    | _Date \| string_                                                                                                                                                                                                         | undefined                                        |             |
| **maxDate**              | A config maximum selectable date. To use, you can provide the string like `2023-12-31`. (Note: It's will depend on yearBoundary too.)                                                                                                                    | _Date \| string_                                                                                                                                                                                                         | undefined                                        |             |
| **highlightDates**       | A highlight selected date. To use, you can provide an array of Date like `[new Date()]`                                                                                                                                                                  | _(Date \| HighlightDate)[]_                                                                                                                                                                                              | GetHighlightByDate()                             |             |
| **customInput**          | A config for using custom input element. To use, you can provide a name of element like `Input`                                                                                                                                                          | _React.ComponentType<any> \| null_                                                                                                                                                                                       | null                                             |             |
| **noIntegratedStyle**    | A config for define to exclude integrated css `Note: if you using 2 components, which the first one contain noIntegratedStyle props but the second is not. It will import css and then it apply to them all`                                             | _boolean_                                                                                                                                                                                                                | false                                            | v2.0.0      |

## 🎩 Some Useful Tricks

1. To style dates outside the selected month, use the `.react-datepicker__day--outside-month` CSS class.

   ```css
   .react-datepicker__day--outside-month {
     color: #aaa;
   }
   ```

   > However, be aware that the appearance may resemble the 'disabled' attribute, which could affect the user experience

## 📝 Need More Example?

I made a couple difference stack demos. Try looking at the examples of "Vite" projects on [./example](./example).

- Document with Online Demo: [Demo](https://thaidatepicker-react-demo.vercel.app)
- or alternate example link: [CodeSandbox](https://codesandbox.io/s/thaidatepicker-react-demo-basic-1m33mx?file=/src/App.js)
- Bonus with NextJS: [CodeSandbox](https://codesandbox.io/s/thaidatepicker-react-demo-nextjs-jrsdep?file=/pages/index.js)

## Changelog

Please see more [CHANGELOG.md](CHANGELOG.md)

## License

MIT © [buildingwatsize](https://github.com/buildingwatsize)

## ⚒ Thanks a lot

- [react-datepicker](https://reactdatepicker.com/)
- [dayjs](https://github.com/iamkun/dayjs)
- [@patch-lee](https://github.com/patch-lee) – Contributor
