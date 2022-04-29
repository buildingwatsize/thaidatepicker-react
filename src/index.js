import React, { useState } from 'react'
import DatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker'
import { Input } from 'antd'
import LeftOutlined from '@ant-design/icons/LeftOutlined'
import RightOutlined from '@ant-design/icons/RightOutlined'

import 'react-datepicker/dist/react-datepicker.css'
import './styles.module.css'

import dayjs from 'dayjs'
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
  disabled,
  readOnly,
  style,
  props
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
      disabled={disabled}
      readOnly={readOnly}
      {...props}
    />
  )
}

const InputWrapper = (props, ref) => (
  <div ref={ref}>
    <CustomInput {...props} />
  </div>
)
const CustomInputWrapper = React.forwardRef(InputWrapper)

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
  for (let index = startVal; index <= endVal; index = index + increment) {
    list = [...list, index]
  }
  return list
}

export const WatDatePicker = (props) => {
  const [value, setValue] = useState(props.value ? props.value : null)
  const [selectedDate, setSelectedDate] = useState(
    value ? new Date(value) : null
  )

  const yearBoundary = props.yearBoundary ?? 99
  const thisYear = dayjs().year()
  const minYear = props.minDate
    ? dayjs(props.minDate).year()
    : thisYear - yearBoundary
  const maxYear = props.maxDate
    ? dayjs(props.maxDate).year()
    : thisYear + yearBoundary
  const years = range(minYear, maxYear, 1)

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
            type='button'
            onClick={decreaseMonth}
            disabled={prevMonthButtonDisabled}
          >
            <LeftOutlined />
          </button>

          <select
            className='borderless'
            value={months[dayjs(date).month()]}
            onChange={({ target }) => changeMonth(months.indexOf(target.value))}
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
            onChange={({ target }) => changeYear(target.value)}
          >
            {years.map((option) => (
              <option key={option} value={option}>
                {option + 543}
              </option>
            ))}
          </select>

          <button
            className='borderless'
            type='button'
            onClick={increaseMonth}
            disabled={nextMonthButtonDisabled}
          >
            <RightOutlined />
          </button>
        </div>
      )}
      minDate={props.minDate ? new Date(props.minDate) : null}
      maxDate={props.maxDate ? new Date(props.maxDate) : null}
      dateFormat={props.dateFormat ? props.dateFormat : 'yyyy-MM-dd'}
      selected={selectedDate}
      isClearable={
        !(props.disabled || props.readOnly) && (props.clearable ?? true)
      }
      disabled={props.disabled}
      readOnly={props.readOnly}
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
          {...props.inputProps}
        />
      }
      {...props.reactDatePickerProps}
    />
  )
}
