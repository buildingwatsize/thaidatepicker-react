import React, { useState } from 'react'
import dayjs from 'dayjs'
import { WatDatePicker } from 'thaidatepicker-react'

import styles from './App.module.css'
import './OverrideCSS.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState('2020-01-10')
  const [selectedThaiDate, setSelectedThaiDate] = useState(null)

  const handleWatDatePickerChange = (christDate, buddhistDate) => {
    console.log(christDate)
    console.log(buddhistDate);
    setSelectedDate(christDate)
    setSelectedThaiDate(buddhistDate)
  }

  return (
    <div className={styles.paddingDocument}>
      <h2>Example React Component – ThaiDatePicker by <a href="https://github.com/buildingwatsize">buildingwatsize</a></h2>
      <div><code>Try it yourself!</code></div>
      <WatDatePicker
        value={selectedDate}
        onChange={handleWatDatePickerChange}
        dateFormat={"yyyy-MM-dd"} // (using date-fns format)[https://date-fns.org/v2.12.0/docs/format]
        minDate={"2020-12-26"} // supported date as string
        maxDate={dayjs().add(20, "day")} // also supported dayjs or moment
      />
      <h2>
        Christ Date: <br />
        {selectedDate?.toString() ?? null}
      </h2>
      <h2>
        Buddhist Date: <br />
        {selectedThaiDate?.toString() ?? null}
      </h2>

      <hr />
      <h3>Update - v0.1.3</h3>
      <div>
        - Supported Display Format
        <WatDatePicker
          // value={selectedDate}
          onChange={() => { }}
          displayFormat={"ddd, DD MMM YYYY"} // (using dayjs format)[https://day.js.org/docs/en/display/format]
        />
      </div>
      <br />
      <div>
        - Supported Customizing Input Style
        <WatDatePicker
          // value={selectedDate}
          onChange={() => { }}
          displayFormat={"ddd, DD MMMM YYYY"} // (using dayjs format)[https://day.js.org/docs/en/display/format]
          inputStyle={{ width: '250px', backgroundColor: "#4ab19d", color: "whitesmoke" }} // style for input
        />
      </div>
      <br />
      <div>
        - Supported Input Clearable Button
        <WatDatePicker
          // value={selectedDate}
          onChange={() => { }}
          clearable={true} // supported clearable button
        />
      </div>
      <br />
      <div>
        Let them mixed
        <WatDatePicker
          // value={selectedDate}
          onChange={() => { }}
          displayFormat={"dd, DD MMMM YY"} // (using dayjs format)[https://day.js.org/docs/en/display/format]
          inputStyle={{ color: "red" }} // style for input
          clearable={true} // supported clearable button
          minDate={"2020-12-26"} // supported date as string
          maxDate={dayjs().add(20, "day")} // also supported dayjs or moment
        />
      </div>
      <br />
      <hr />
      <footer>Thanks @patch-lee for contributing</footer>
    </div>
  )
}

export default App
