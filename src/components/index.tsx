import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import React, { useCallback, useMemo, useRef, useState } from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import th from "../config/locale/th";
import { useStylesheet } from "../hooks/useStylesheet";
import { ConvertToThaiYear, GetHighlightByDate } from "../utils";
import YearListGenerator from "../utils/YearListGenerator";
import { CustomHeader } from "./CustomHeader";
import { CustomInputWrapped } from "./CustomInputWrapped";

const locale = "th";
registerLocale(locale, th);
setDefaultLocale(locale);

dayjs.locale(locale);
dayjs.extend(buddhistEra);

const yearGenerator = new YearListGenerator(dayjs);

export interface HighlightDate {
  [className: string]: Date[];
}
export interface ThaiDatePickerProps {
  children?: React.ReactNode;
  clearable?: boolean;
  customInput?: React.ComponentType<any>;
  disabled?: boolean;
  header?: {
    prevButtonIcon?: React.ReactNode;
    nextButtonIcon?: React.ReactNode;
    prevButtonClassName?: string;
    nextButtonClassName?: string;
    monthSelectClassName?: string;
    yearSelectClassName?: string;
  } | null;
  highlightDates?: (Date | HighlightDate)[];
  id?: string;
  inputProps?:
    | (any & {
        displayFormat?: string;
      })
    | null;
  maxDate?: Date | string;
  minDate?: Date | string;
  onChange?: (christDate: string, thaiDate: string) => void;
  placeholder?: string;
  reactDatePickerProps?: React.ComponentProps<typeof DatePicker>;
  readOnly?: boolean;
  value?: string;
  yearBoundary?: number;
}

const defaultProps = {
  children: null,
  clearable: true,
  customInput: null,
  disabled: false,
  header: null,
  highlightDates: null,
  id: "thdpk-container",
  inputProps: null,
  maxDate: undefined,
  minDate: undefined,
  onChange: (_christDate: string, _thaiDate: string) => null,
  placeholder: "",
  reactDatePickerProps: {},
  readOnly: false,
  value: "",
  yearBoundary: 99,
};

export const ThaiDatePicker = ({
  children = defaultProps.children,
  id = defaultProps.id,
  value = defaultProps.value,
  onChange = defaultProps.onChange,
  disabled = defaultProps.disabled,
  readOnly = defaultProps.readOnly,
  clearable = defaultProps.clearable,
  placeholder = defaultProps.placeholder,
  header = defaultProps.header,
  yearBoundary = defaultProps.yearBoundary,
  inputProps = defaultProps.inputProps,
  reactDatePickerProps = defaultProps.reactDatePickerProps,
  ...restProps
}: ThaiDatePickerProps) => {
  const datePickerRef = useRef(null);
  useStylesheet(datePickerRef);

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    value ? dayjs(value) : null
  );
  const minDate = restProps.minDate ? new Date(restProps.minDate) : undefined;
  const maxDate = restProps.maxDate ? new Date(restProps.maxDate) : undefined;
  const isClearable = !(disabled || readOnly) && (clearable ?? true);
  const highlightDates = restProps.highlightDates ?? GetHighlightByDate();
  const CustomInput = useMemo(() => {
    const { displayFormat, ...realProps } = inputProps ?? {};
    return CustomInputWrapped(
      restProps.customInput,
      {
        ...realProps,
        style: { width: "100%", ...realProps?.style },
      },
      displayFormat
    );
  }, [restProps.customInput, JSON.stringify(inputProps)]);

  const {
    prevButtonIcon,
    nextButtonIcon,
    prevButtonClassName,
    nextButtonClassName,
    monthSelectClassName,
    yearSelectClassName,
  } = header ?? {};

  const handleChange = useCallback((date: any) => {
    const dayjsObj = dayjs(date);
    if (dayjsObj.isValid()) {
      setSelectedDate(dayjsObj);
      let christDate = dayjsObj.format("YYYY-MM-DD");
      let thaiDate = `${ConvertToThaiYear(dayjsObj.year())}${dayjsObj.format(
        "-MM-DD"
      )}`;
      onChange?.(christDate, thaiDate);
      return;
    }
    onChange?.("", "");
  }, []);

  const valueAsDate = useMemo(() => {
    if (value) {
      return new Date(value);
    } else if (value === "") {
      return null;
    }
    return selectedDate ? new Date(selectedDate.toDate()) : null;
  }, [value, selectedDate]);

  const YearOptions = useMemo(
    () => yearGenerator.Generate(yearBoundary, minDate, maxDate),
    [yearBoundary, minDate, maxDate]
  );

  return (
    <div id={id ?? ""} ref={datePickerRef}>
      <DatePicker
        locale={locale}
        minDate={minDate}
        maxDate={maxDate}
        isClearable={isClearable}
        disabled={disabled}
        readOnly={readOnly}
        placeholderText={placeholder}
        highlightDates={highlightDates}
        customInput={<CustomInput />}
        selected={valueAsDate}
        onChange={handleChange}
        renderCustomHeader={CustomHeader(
          prevButtonIcon,
          nextButtonIcon,
          prevButtonClassName,
          nextButtonClassName,
          monthSelectClassName,
          yearSelectClassName,
          YearOptions
        )}
        {...reactDatePickerProps}
      >
        {children}
      </DatePicker>
    </div>
  );
};
