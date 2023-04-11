# thaidatepicker-react

[![NPM](https://img.shields.io/npm/v/thaidatepicker-react.svg)](https://www.npmjs.com/package/thaidatepicker-react)
[![NPM](https://img.shields.io/badge/Watsize-Library-289548)](https://www.npmjs.com/package/thaidatepicker-react)
[![CodeQL](https://github.com/buildingwatsize/thaidatepicker-react/actions/workflows/github-code-scanning/codeql/badge.svg?branch=main)](https://github.com/buildingwatsize/thaidatepicker-react/actions/workflows/github-code-scanning/codeql)
[![Downloads](https://img.shields.io/npm/dm/thaidatepicker-react.svg)](https://npmjs.org/package/thaidatepicker-react)

---

## 🎉 RELEASE v1.x.x 🎉

I just have my free time to develop and update the old library like this one. For everyone which waiting for an update. I have a good news to tell you about this library. It's standalone. I mean it can be import without any `css` files and also working with SSR like `nextJS`, which seriously about external css import. I hope this library will be useful for all you guy. Thanks.

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

| **Property**             | **Description**                                                                                                                                                                                                                                          | **Type**                                                                                                                                                                                                                                                                                                                   | **Default** | **Version** |
|--------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|-------------|-------------|
| **children**             | the children element inside like <ThaiDatePicker>{children}</ThaiDatePicker> by default you don't need to defined as props.                                                                                                                              | _any_                                                                                                                                                                                                                                                                                                                      | -           |             |
| **id**                   | #id for container element                                                                                                                                                                                                                                | _string_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **value**                | A christ date value with fixed dayjs format (YYYY-MM-DD)                                                                                                                                                                                                 | _string_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **onChange**             | Handle function with maximum 2 parameters, `christDate` and `thaiDate`                                                                                                                                                                                   | _function(christDate, thaiDate)_                                                                                                                                                                                                                                                                                           | -           |             |
| **disabled**             | Disabled property for input                                                                                                                                                                                                                              | _boolean_                                                                                                                                                                                                                                                                                                                  | false       |             |
| **readOnly**             | ReadOnly property for input                                                                                                                                                                                                                              | _boolean_                                                                                                                                                                                                                                                                                                                  | false       |             |
| **clearable**            | Clear the value (please note clearable will work smoothly with onChange props)                                                                                                                                                                           | _boolean_                                                                                                                                                                                                                                                                                                                  | true        |             |
| **placeholder**          | Placeholder property for input                                                                                                                                                                                                                           | _string_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **header**               | An object for setting up header component. To change button icon use `prevButtonIcon` and `nextButtonIcon`. To change className of button and select use `prevButtonClassName`, `nextButtonClassName`, `monthSelectClassName`, and `yearSelectClassName` | _Object { prevButtonIcon: type any \| default undefined, nextButtonIcon: type any \| default undefined, prevButtonClassName: type any \| default undefined, nextButtonClassName: type any \| default undefined, monthSelectClassName: type any \| default undefined, yearSelectClassName: type any \| default undefined }_ | {}          |             |
| **yearBoundary**         | A config boundary ±Year (e.g. yearBoundary = 2; it means currentYear ± 2.)                                                                                                                                                                               | _number_                                                                                                                                                                                                                                                                                                                   | 99          |             |
| **inputProps**           | An override input properties.                                                                                                                                                                                                                            | _Object_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **reactDatePickerProps** | An override react-datepicker properties. See more (https://reactdatepicker.com/ or https://github.com/Hacker0x01/react-datepicker/blob/master/docs/datepicker.md)                                                                                                                                                                         | _Object_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **minDate**              | A config minimum selectable date. To use, you can provide the string like `2023-01-31`. (Note: It's will depend on yearBoundary too.)                                                                                                                    | _string_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **maxDate**              | A config maximum selectable date. To use, you can provide the string like `2023-12-31`. (Note: It's will depend on yearBoundary too.)                                                                                                                    | _string_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **highlightDates**       | A highlight selected date. To use, you can provide an array of Date like `["new Date()"]`                                                                                                                                                                | _Date[]_                                                                                                                                                                                                                                                                                                                   | -           |             |
| **customInput**          | A config for using custom input element. To use, you can provide a name of element like `Input`                                                                                                                                                          | _any_                                                                                                                                                                                                                                                                                                                      | -           |             |

## 📝 Need More Example?

I created a few demo of difference stack. try to check it out on [./example](./example) which contains both "custom-react-app" and "vite" ecosystem.

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
