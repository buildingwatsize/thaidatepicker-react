import dayjs from "dayjs";
import React, { PropsWithChildren } from "react";
import { type ReactDatePickerCustomHeaderProps } from "react-datepicker";

import { THAI_MONTH_LIST } from "../config/constants";
import { cn, ConvertToThaiYear } from "../utils";
import NavigateButton from "./NavigateButton";
import NavigateSelect from "./NavigateSelect";

export const HeaderContainer: React.FC<PropsWithChildren> = ({
  className = "",
  children,
}: PropsWithChildren<{ className?: string }>) => (
  <div className={cn("tdpk-header", className)}>{children}</div>
);

export const CustomHeader = (
  prevButtonIcon: React.ReactNode = "<",
  nextButtonIcon: React.ReactNode = ">",
  prevButtonClassName: string = "",
  nextButtonClassName: string = "",
  monthSelectClassName: string = "",
  yearSelectClassName: string = "",
  yearOptions: Array<number> = []
) => {
  return ({
    date,
    changeYear,
    changeMonth,
    decreaseMonth,
    increaseMonth,
    prevMonthButtonDisabled,
    nextMonthButtonDisabled,
  }: ReactDatePickerCustomHeaderProps) => {
    return (
      <HeaderContainer>
        <NavigateButton
          className={cn("tdpk-header-prev-btn", prevButtonClassName)}
          disabled={prevMonthButtonDisabled}
          onClick={decreaseMonth}
        >
          {prevButtonIcon}
        </NavigateButton>

        <NavigateSelect
          className={cn("tdpk-header-select-month", monthSelectClassName)}
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
          className={cn("tdpk-header-select-year", yearSelectClassName)}
          value={dayjs(date).year()}
          onChange={({ target }) => changeYear(Number(target.value))}
        >
          {yearOptions.map((option) => (
            <option key={`${option}`} value={`${option}`}>
              {ConvertToThaiYear(option)}
            </option>
          ))}
        </NavigateSelect>

        <NavigateButton
          className={cn("tdpk-header-next-btn", nextButtonClassName)}
          disabled={nextMonthButtonDisabled}
          onClick={increaseMonth}
        >
          {nextButtonIcon}
        </NavigateButton>
      </HeaderContainer>
    );
  };
};
