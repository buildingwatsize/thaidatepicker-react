import dayjs from "dayjs";
import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";
import React, { useMemo, useRef, useState } from "react";
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

const ReactDatePicker =
  (DatePicker as unknown as { default: typeof DatePicker }).default ??
  DatePicker;

export interface HighlightDate {
  [className: string]: Date[];
}
export interface ThaiDatePickerProps {
  children?: React.ReactNode | null;
  clearable?: boolean;
  customInput?: React.ElementType<any> | null;
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
  noIntegratedStyle?: boolean;
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
  highlightDates: GetHighlightByDate(),
  id: "thdpk-container",
  inputProps: null,
  maxDate: undefined,
  minDate: undefined,
  noIntegratedStyle: false,
  onChange: (_christDate: string, _thaiDate: string) => null,
  placeholder: "",
  reactDatePickerProps: {},
  readOnly: false,
  value: "",
  yearBoundary: 99,
};

export const ThaiDatePicker = ({
  children = defaultProps.children,
  clearable = defaultProps.clearable,
  customInput = defaultProps.customInput,
  disabled = defaultProps.disabled,
  header = defaultProps.header,
  highlightDates = defaultProps.highlightDates,
  id = defaultProps.id,
  inputProps = defaultProps.inputProps,
  maxDate = defaultProps.maxDate,
  minDate = defaultProps.minDate,
  noIntegratedStyle = defaultProps.noIntegratedStyle,
  onChange = defaultProps.onChange,
  placeholder = defaultProps.placeholder,
  reactDatePickerProps = defaultProps.reactDatePickerProps,
  readOnly = defaultProps.readOnly,
  value = defaultProps.value,
  yearBoundary = defaultProps.yearBoundary,
}: ThaiDatePickerProps) => {
  const isClearable = !(disabled || readOnly) && (clearable ?? true);
  const {
    prevButtonIcon,
    nextButtonIcon,
    prevButtonClassName,
    nextButtonClassName,
    monthSelectClassName,
    yearSelectClassName,
  } = header ?? {};

  const datePickerRef = useRef(null);
  useStylesheet(datePickerRef, !noIntegratedStyle);

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(
    value ? dayjs(value) : null
  );

  const valueAsDate = useMemo(() => {
    if (value) {
      return new Date(value);
    } else if (value === "") {
      return null;
    }
    return selectedDate ? new Date(selectedDate.toDate()) : null;
  }, [value, selectedDate]);
  const minDateAsDate = useMemo(
    () => (minDate ? new Date(minDate) : undefined),
    [minDate]
  );
  const maxDateAsDate = useMemo(
    () => (maxDate ? new Date(maxDate) : undefined),
    [maxDate]
  );
  const YearOptions = useMemo(
    () => yearGenerator.Generate(yearBoundary, minDateAsDate, maxDateAsDate),
    [yearBoundary, minDateAsDate, maxDateAsDate]
  );
  const CustomInput = useMemo(() => {
    const { displayFormat, style, ...remainInputProps } = inputProps ?? {};
    return CustomInputWrapped(
      customInput,
      {
        ...remainInputProps,
        style: { width: "100%", ...style },
      },
      displayFormat
    );
  }, [customInput, inputProps]);

  const handleChange = (date: any) => {
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
  };

  return (
    <div id={id} ref={datePickerRef}>
      <ReactDatePicker
        locale={locale}
        minDate={minDateAsDate}
        maxDate={maxDateAsDate}
        isClearable={isClearable}
        disabled={disabled}
        readOnly={readOnly}
        placeholderText={placeholder}
        highlightDates={highlightDates}
        customInput={React.createElement(CustomInput)}
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
      </ReactDatePicker>
    </div>
  );
};
