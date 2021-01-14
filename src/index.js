import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import { Input } from 'antd'
import LeftOutlined from '@ant-design/icons/LeftOutlined'
import RightOutlined from '@ant-design/icons/RightOutlined'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.module.css'

import dayjs, { isDayjs } from 'dayjs'
import th from './locale/th'
import 'dayjs/locale/th'
dayjs.locale('th')

registerLocale('th', th)
setDefaultLocale('th')

const months = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม'
]

const CustomInput = ({
  value,
  onClick,
  placeholderName,
  displayFormat,
  style
}) => {
  let thaiDate = ''
  if (value !== '') {
    const date = dayjs(value)
    const thaiYear = date.year() + 543
    const wrappedDisplayFormat = displayFormat
      ? displayFormat.replace(/YYYY/, thaiYear).replace(/YY/, thaiYear % 100)
      : null
    thaiDate =
      (wrappedDisplayFormat && `${date.format(wrappedDisplayFormat)}`) ||
      `${thaiYear}${date.format('-MM-DD')}`
  }
  return (
    <Input
      value={thaiDate}
      onClick={onClick}
      placeholder={placeholderName}
      style={style}
    />
  )
}

const CustomInputWrapper = React.forwardRef((props, ref) => (
  <div ref={ref}>
    <CustomInput {...props} />
  </div>
))

const headerStyle = {
  margin: 10,
  display: 'flex',
  justifyContent: 'space-between'
}

export const range = (startVal = 0, endVal = 0, increment = 0) => {
  let list = []
  if (increment <= 0) {
    return list
  }
  for (let index = startVal; index < endVal; index = index + increment) {
    list = [...list, index]
  }
  return list
}

export const WatDatePicker = (props) => {
  const [value, setValue] = useState(props.value ? props.value : null)
  const [selectedDate, setSelectedDate] = useState(
    value
      ? isDayjs(value)
        ? new Date(value.format('YYYY-MM-DD'))
        : new Date(value)
      : null
  )
  const thisYear = dayjs().year()
  const yearBoundary = props.yearBoundary ?? 50
  const years = range(thisYear - yearBoundary, thisYear + yearBoundary, 1)

  const highlightWithRanges = [
    {
      'react-datepicker__day--highlighted-today': [new Date()]
    }
  ]
  return (
    <DatePicker
      locale='th'
      renderCustomHeader={({
        date,
        changeYear,
        changeMonth,
        decreaseMonth,
        increaseMonth,
        prevMonthButtonDisabled,
        nextMonthButtonDisabled
      }) => (
        <div style={headerStyle}>
          <button
            className='borderless'
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <LeftOutlined />
          </button>

          <select
            className='borderless'
            value={months[dayjs(date).month()]}
            onChange={({ target: { value } }) =>
              changeMonth(months.indexOf(value))
            }
          >
            {months.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>

          <select
            className='borderless'
            value={dayjs(date).year()}
            onChange={({ target: { value } }) => changeYear(value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option + 543}
              </option>
            ))}
          </select>

          <button
            className='borderless'
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <RightOutlined />
          </button>
        </div>
      )}
      isClearable={props.clearable}
      minDate={props.minDate ? new Date(props.minDate) : null}
      maxDate={props.maxDate ? new Date(props.maxDate) : null}
      dateFormat={props.dateFormat ? props.dateFormat : 'yyyy-MM-dd'}
      selected={selectedDate}
      disabled={props.disabled}
      onChange={(date) => {
        setSelectedDate(date)
        const dayjsObj = dayjs(date).isValid() ? dayjs(date) : null
        setValue(dayjsObj ? dayjsObj.format('YYYY-MM-DD') : '')
        const thaiDate = dayjsObj
          ? `${dayjsObj.year() + 543}${dayjsObj.format('-MM-DD')}`
          : ''
        props.onChange(dayjsObj ? dayjsObj.format('YYYY-MM-DD') : '', thaiDate)
      }}
      highlightDates={highlightWithRanges}
      customInput={
        <CustomInputWrapper
          placeholderName={props.placeholder}
          displayFormat={props.displayFormat}
          style={props.inputStyle}
        />
      }
      {...props.datePickerProps}
    />
  )
}
