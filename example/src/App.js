import React, { useState } from 'react'
import dayjs from 'dayjs'
import { WatDatePicker } from 'thaidatepicker-react'

import styles from './App.module.css'
import './OverrideCSS.css'

const App = () => {
  const [selectedDate, setSelectedDate] = useState("2021-01-11")
  const [selectedThaiDate, setSelectedThaiDate] = useState("2564-01-11")

  const handleWatDatePickerChange = (christDate, buddhistDate) => {
    console.log(christDate)
    console.log(buddhistDate);
    setSelectedDate(christDate)
    setSelectedThaiDate(buddhistDate)
  }

  return (
    <div className={styles.paddingDocument}>
      <h2>Example ThaiDatePicker by <a href="https://github.com/buildingwatsize">buildingwatsize</a></h2>
      <div><code>Try it yourself!</code></div>
      <WatDatePicker
        value={selectedDate}
        onChange={handleWatDatePickerChange}
        dateFormat={"yyyy-MM-dd"} // (using date-fns format)[https://date-fns.org/v2.12.0/docs/format]
        displayFormat={"DD-MMMM-YYYY"}
        inputStyle={{ width: '100%', padding: 5 }} // Style for input
        clearable={true}
        minDate={"2020-12-26"} // supported date as string
        maxDate={dayjs().add(20, "day")} // also supported dayjs or moment
      />
      <h2>Christ Date: <br />{selectedDate.toString()}</h2>
      <h2>Buddhist Date: <br />{selectedThaiDate.toString()}</h2>
    </div>
  )
}

export default App
