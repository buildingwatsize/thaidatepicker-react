import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import { Input } from 'antd'
import LeftOutlined from '@ant-design/icons/LeftOutlined'
import RightOutlined from '@ant-design/icons/RightOutlined'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.module.css'

import dayjs from 'dayjs'
import th from './locale/th'

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

const shortMonths = [
  'ม.ค.',
  'ก.พ.',
  'มี.ค.',
  'เม.ย.',
  'พ.ค.',
  'มิ.ย.',
  'ก.ค.',
  'ส.ค.',
  'ก.ย.',
  'ต.ค.',
  'พ.ย.',
  'ธ.ค.'
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
    thaiDate = displayFormat
    const date = dayjs(value)
    const monthNo = date.month() // 0 - 11
    const thaiYear = date.year() + 543
    const thaiMonth = months[monthNo]
    const shortMonth = shortMonths[monthNo]
    const monthDate = date.date()
    const mCount = thaiDate.split('M').length - 1
    const monthDisplay = [
      monthNo + 1,
      `${monthNo + 1 > 10 ? '' : 0}${monthNo + 1}`,
      shortMonth,
      thaiMonth
    ]

    thaiDate = thaiDate.replace(/[yY]+/, thaiYear)
    thaiDate = thaiDate.replace('M'.repeat(mCount), monthDisplay[mCount - 1])
    thaiDate = thaiDate.replace(/[dD]+/, monthDate)
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
  const [value, setValue] = useState(
    props.value ? props.value : dayjs().format('YYYY-MM-DD')
  )
  const [selectedDate, setSelectedDate] = useState(new Date(value))
  const thisYear = dayjs().year()
  const years = range(thisYear - 50, thisYear + 50, 1)

  const highlightWithRanges = [
    {
      'react-datepicker__day--highlighted-today': [new Date()]
    }
  ]
  return (
    <DatePicker
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
      onChange={(date) => {
        const value = dayjs(date).isValid() ? dayjs(date) : null
        setSelectedDate(date)
        setValue(value ? value.format('YYYY-MM-DD') : '')
        const thaiDate = value
          ? `${value.year() + 543}${value.format('-MM-DD')}`
          : ''
        props.onChange(value ? value.format('YYYY-MM-DD') : '', thaiDate)
      }}
      highlightDates={highlightWithRanges}
      customInput={
        <CustomInputWrapper
          placeholderName={props.placeholder}
          displayFormat={props.displayFormat}
          style={props.inputStyle}
        />
      }
    />
  )
}
