import React, { useState } from 'react'
import dayjs from 'dayjs'
import { WatDatePicker } from 'thaidatepicker-react'

import styles from './App.module.css'

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
    <div className={styles.paddingDocument}>
      <h2>Example ThaiDatePicker by <a href="https://github.com/buildingwatsize">buildingwatsize</a></h2>
      <div><code>Try it yourself!</code></div>
      <WatDatePicker
        value={selectedDate}
        onChange={handleWatDatePickerChange}
        dateFormat={"yyyy-MM-dd"} // (using date-fns format)[https://date-fns.org/v2.12.0/docs/format]
        minDate={"2020-04-26"} // supported date as string
        maxDate={dayjs().add(20, "day")} // also supported dayjs or moment
      />
      <h2>Christ Date: <br />{selectedDate.toString()}</h2>
      <h2>Buddhist Date: <br />{selectedThaiDate.toString()}</h2>
    </div>
  )
}

export default App
