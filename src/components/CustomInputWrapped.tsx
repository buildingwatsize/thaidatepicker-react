import dayjs from "dayjs";
import React, { useMemo } from "react";
import { ConvertToThaiYear } from "../utils";

export const CustomInputWrapped =
  (
    InputComponent?: React.ElementType | null,
    inputProps?: React.InputHTMLAttributes<HTMLInputElement>,
    displayFormat?: string
  ) =>
  ({ value, ref, ...props }: any) => {
    const thaiDate = useMemo(() => {
      if (value) {
        const date = dayjs(value);
        const thaiYear = ConvertToThaiYear(date.year());
        if (displayFormat) {
          let wrappedDisplayFormat = displayFormat
            .replace(/YYYY/, `${thaiYear}`)
            .replace(/YY/, `${thaiYear % 100}`);
          return `${date.format(wrappedDisplayFormat)}`;
        }
        return `${thaiYear}${date.format("-MM-DD")}`;
      }
      return "";
    }, [value]);

    if (InputComponent) {
      return (
        <InputComponent ref={ref} value={thaiDate} {...props} {...inputProps} />
      );
    }
    return (
      <input
        ref={ref}
        value={thaiDate}
        data-testid="thdpk-input"
        {...props}
        {...inputProps}
      />
    );
  };
