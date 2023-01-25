import dayjs from "dayjs";
import React from "react";

import NavigateButton from "./NavigateButton";
import NavigateSelect from "./NavigateSelect";

import { THAI_MONTH_LIST } from "../config/constants";
import { ConvertToThaiYear } from "../utils";

const HeaderContainer = ({ children }) => (
  <div
    style={{
      margin: 10,
      display: "flex",
      justifyContent: "space-evenly",
    }}
  >
    {children}
  </div>
);

const CustomHeader = (
  prevButtonIcon,
  nextButtonIcon,
  prevButtonClassName,
  nextButtonClassName,
  monthSelectClassName,
  yearSelectClassName,
  yearOptions = []
) => {
  return ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }) => {
    return (
      <HeaderContainer>
        <NavigateButton
          className={prevButtonClassName}
          disabled={prevMonthButtonDisabled}
          onClick={decreaseMonth}
        >
          {prevButtonIcon ? prevButtonIcon : "<"}
        </NavigateButton>

        <NavigateSelect
          className={monthSelectClassName}
          value={THAI_MONTH_LIST[dayjs(date).month()]}
          onChange={({ target }) =>
            changeMonth(THAI_MONTH_LIST.indexOf(target.value))
          }
        >
          {THAI_MONTH_LIST.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </NavigateSelect>

        <NavigateSelect
          className={yearSelectClassName}
          value={dayjs(date).year()}
          onChange={({ target }) => changeYear(target.value)}
        >
          {yearOptions.map((option) => (
            <option key={option} value={option}>
              {ConvertToThaiYear(option)}
            </option>
          ))}
        </NavigateSelect>

        <NavigateButton
          className={nextButtonClassName}
          disabled={nextMonthButtonDisabled}
          onClick={increaseMonth}
        >
          {nextButtonIcon ? nextButtonIcon : ">"}
        </NavigateButton>
      </HeaderContainer>
    );
  };
};

export default CustomHeader;
