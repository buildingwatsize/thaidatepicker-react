# thaidatepicker-react

[![NPM](https://img.shields.io/npm/v/thaidatepicker-react.svg)](https://www.npmjs.com/package/thaidatepicker-react) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) [![NPM](https://img.shields.io/badge/BAAC-Library-289548)](https://www.npmjs.com/package/thaidatepicker-react)

## 📘 About

Thaidatepicker-react is a component for ReactJS that likes other DatePicker, but all we need is Buddhist Year (25XX – aka Thai Year) come with the right render day (example: Sat, 29 Feb 2020 must be equal to Sat, 29 Feb 2563) so I wish this component will be a useful thing to you :D. Happy Coding.

## 📋 Features

- `minDate` The minimum date that can be selected, possible value "2020-02-29", dayjs and also Moment.
- `maxDate` The maximum date that can be selected, possible value "2020-02-29", dayjs and also Moment.
- `value` The default value, possible value "2020-02-29", dayjs and also Moment.
- `onChange` The handler function, this function returns a couple of value (ChristDate, BuddhistDate)
- `displayFormat` The value's display format on Input, possible value "DD [M, MM, MMM or MMMM] YYYY".
- `clearable` To user clear the selected value, possible value true, false
- `dateFormat` The format of value, possible value is "yyyy-MM-dd" please see more at [date-fns](https://date-fns.org/v2.12.0/docs/format)

## ⚙ Install

```bash
npm install --save thaidatepicker-react
# or just `yarn add thaidatepicker-react`
```

## 📌 Usage

```jsx
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { WatDatePicker } from 'thaidatepicker-react'

const App = () => {
  const [selectedDate, setSelectedDate] = useState("2020-04-27")
  const [selectedThaiDate, setSelectedThaiDate] = useState("2563-04-27")

  const handleWatDatePickerChange = (christDate, buddhistDate) => {
    console.log(christDate)
    console.log(buddhistDate);
    setSelectedDate(christDate)
    setSelectedThaiDate(buddhistDate)
  }

  return (
    <>
      <WatDatePicker
        value={selectedDate}
        onChange={handleWatDatePickerChange}
        dateFormat={'yyyy-MM-dd'} // [using date-fns format](https://date-fns.org/v2.12.0/docs/format)
        displayFormat={'DD MMMM YYYY'} // or YYYY-MM-DD
        clearable={true} // true | false
        minDate={'2020-04-26'} // supported date as string
        maxDate={dayjs().add(20, 'day')} // also supported dayjs or moment
      />
    </>
  )
}

export default App
```

## 📝 Example

Please go to `example` directory or click to [App.js](./example/src/App.js)

- Online Demo: [Demo](https://buildingwatsize.github.io/thaidatepicker-react)

## License

MIT © [buildingwatsize](https://github.com/buildingwatsize)

## ⚒ Thanks a lot

- [date-fns](https://date-fns.org/)
- [react-datepicker](https://reactdatepicker.com/)
- [ant-design](https://ant.design/)
- [dayjs](https://github.com/iamkun/dayjs)
