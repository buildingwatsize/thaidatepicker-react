import dayjs from "dayjs";
import PropTypes from "prop-types";
import React, {
  forwardRef,
  useCallback,
  useMemo,
  useRef,
  useState,
} from "react";
import DatePicker, { registerLocale, setDefaultLocale } from "react-datepicker";

import CustomHeader from "./components/CustomHeader";
import th from "./config/locale/th";
import { useStylesheet } from "./hooks/useStylesheet";
import { ConvertToThaiYear, GetHighlightByDate } from "./utils";
import YearListGenerator from "./utils/YearListGenerator";

const ReactDatePicker = DatePicker.default ?? DatePicker;

const locale = "th";
registerLocale(locale, th);
setDefaultLocale(locale);

import "dayjs/locale/th";
import buddhistEra from "dayjs/plugin/buddhistEra";

dayjs.locale(locale);
dayjs.extend(buddhistEra);

const yearGenerator = new YearListGenerator(dayjs);

const CustomInputWrapped = (Input, { displayFormat, ...restInputProps }) =>
  forwardRef(({ value, ...props }, ref) => {
    const thaiDate = useMemo(() => {
      if (value) {
        const date = dayjs(value);
        const thaiYear = ConvertToThaiYear(date.year());
        if (displayFormat) {
          let wrappedDisplayFormat = displayFormat
            .replace(/YYYY/, thaiYear)
            .replace(/YY/, thaiYear % 100);
          return `${date.format(wrappedDisplayFormat)}`;
        }
        return `${thaiYear}${date.format("-MM-DD")}`;
      }
      return "";
    }, [value]);
    return (
      <div ref={ref}>
        {Input ? (
          <Input
            value={thaiDate}
            data-testid="thdpk-input"
            {...props}
            {...restInputProps}
          />
        ) : (
          <input
            value={thaiDate}
            data-testid="thdpk-input"
            {...props}
            {...restInputProps}
          />
        )}
      </div>
    );
  });

export const ThaiDatePicker = (props) => {
  const datePickerRef = useRef(null);
  useStylesheet(datePickerRef);
  const {
    children,
    id,
    value,
    onChange,
    disabled,
    readOnly,
    clearable,
    placeholder,
    header,
    yearBoundary,
    inputProps,
    reactDatePickerProps,
    ...restProps
  } = props;

  // react-datepicker need input as type Date
  const [selectedDate, setSelectedDate] = useState(
    value ? new Date(value) : null
  );
  const minDate = restProps.minDate ? new Date(restProps.minDate) : null;
  const maxDate = restProps.maxDate ? new Date(restProps.maxDate) : null;
  const isClearable = !(disabled || readOnly) && (clearable ?? true);
  const highlightDates = restProps.highlightDates ?? GetHighlightByDate();
  const CustomInput = useMemo(
    () =>
      CustomInputWrapped(
        restProps.customInput,
        inputProps ?? { style: { width: "100%" } }
      ), // if customInput is null will be use default input
    [restProps.customInput, JSON.stringify(inputProps)]
  );

  const {
    prevButtonIcon,
    nextButtonIcon,
    prevButtonClassName,
    nextButtonClassName,
    monthSelectClassName,
    yearSelectClassName,
  } = header ?? {};

  const handleChange = useCallback((date) => {
    const dayjsObj = dayjs(date);
    if (dayjsObj.isValid()) {
      setSelectedDate(date);
      let christDate = dayjsObj.format("YYYY-MM-DD");
      let thaiDate = `${ConvertToThaiYear(dayjsObj.year())}${dayjsObj.format(
        "-MM-DD"
      )}`;
      onChange?.(christDate, thaiDate);
      return;
    }
    onChange?.("", "");
  }, []);

  // Keep sync update between value on props and selectedDate on react-datepicker
  // avoid to use `useEffect` cause re-render expensive
  const valueAsDate = useMemo(() => {
    if (value) {
      return new Date(value);
    } else if (value === "") {
      return null;
    }
    return selectedDate;
  }, [value, selectedDate]);

  const YearOptions = useMemo(
    () => yearGenerator.Generate(yearBoundary, minDate, maxDate),
    [yearBoundary, minDate, maxDate]
  );

  return (
    <div id={id ?? ""} ref={datePickerRef}>
      <ReactDatePicker
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
      </ReactDatePicker>
    </div>
  );
};

ThaiDatePicker.defaultProps = {
  children: null,
  clearable: true,
  customInput: null,
  disabled: false,
  header: null,
  highlightDates: null,
  id: null,
  inputProps: null,
  maxDate: null,
  minDate: null,
  onChange: (_christDate, _thaiDate) => null,
  placeholder: "",
  reactDatePickerProps: null,
  readOnly: false,
  value: "",
  yearBoundary: 99,
};
ThaiDatePicker.propTypes = {
  children: PropTypes.any,
  clearable: PropTypes.bool,
  customInput: PropTypes.any,
  disabled: PropTypes.bool,
  header: PropTypes.any,
  highlightDates: PropTypes.any,
  id: PropTypes.string,
  inputProps: PropTypes.any,
  maxDate: PropTypes.any,
  minDate: PropTypes.any,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  reactDatePickerProps: PropTypes.any,
  readOnly: PropTypes.bool,
  value: PropTypes.string,
  yearBoundary: PropTypes.number,
};

export const WatDatePicker = ThaiDatePicker; // just like previous version (you can keep using my nickname as the component name :D)
