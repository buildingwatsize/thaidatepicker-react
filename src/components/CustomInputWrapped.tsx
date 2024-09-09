import dayjs from "dayjs";
import React, { forwardRef, useMemo } from "react";
import { ConvertToThaiYear } from "../utils";

export const CustomInputWrapped = (
  InputComponent?: React.ComponentType<any> | null,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>,
  displayFormat?: string
) =>
  forwardRef<HTMLDivElement, any>(({ value, ...props }: any, ref) => {
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
    return (
      <div ref={ref}>
        {InputComponent ? (
          <InputComponent
            value={thaiDate}
            // data-testid="thdpk-input" // in case of component can be forwarded `data-testid` props
            {...props}
            {...inputProps}
          />
        ) : (
          <input
            value={thaiDate}
            data-testid="thdpk-input"
            {...props}
            {...inputProps}
          />
        )}
      </div>
    );
  });
