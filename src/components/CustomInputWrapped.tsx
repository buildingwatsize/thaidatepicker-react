import dayjs from "dayjs";
import React, { ForwardedRef, forwardRef, RefObject, useMemo } from "react";
import { ConvertToThaiYear } from "../utils";

const isReact19OrNewer =
  parseInt(`${React.version}.`.split(".").at(0) ?? "", 10) >= 19;

const componentWithRefBinding = (
  combinedProps: any,
  ref: RefObject<any> | ForwardedRef<HTMLInputElement>,
  InputComponent?: React.ElementType | null
) => {
  const { _displayFormat, value, onChange, ...props } = combinedProps;
  const thaiDate = useMemo(() => {
    if (value) {
      const date = dayjs(value);
      const thaiYear = ConvertToThaiYear(date.year());
      if (_displayFormat) {
        let wrappedDisplayFormat = _displayFormat
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
      <InputComponent
        ref={ref}
        value={thaiDate}
        onChange={onChange}
        {...props}
      />
    );
  }
  return (
    <input
      ref={ref}
      value={thaiDate}
      data-testid="thdpk-input"
      onChange={onChange}
      {...props}
    />
  );
};
export const CustomInputWrapped = (
  InputComponent?: React.ElementType | null,
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>,
  displayFormat?: string
) => {
  if (isReact19OrNewer) {
    return ({ ref, ...props }: any) =>
      componentWithRefBinding(
        { ...props, ...inputProps, _displayFormat: displayFormat },
        ref,
        InputComponent
      );
  }
  return forwardRef<HTMLInputElement, any>((props, ref) =>
    componentWithRefBinding(
      { ...props, ...inputProps, _displayFormat: displayFormat },
      ref,
      InputComponent
    )
  );
};
