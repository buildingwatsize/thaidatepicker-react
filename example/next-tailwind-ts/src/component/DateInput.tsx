"use client";
import { useCallback, useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

type Props = {};

const DateInput = (props: Props) => {
  const [selectedDate, setSelectedDate] = useState<string>("2024-02-29"); // Showing date, represent the Leap Year
  const [selectedThaiDate, setSelectedThaiDate] =
    useState<string>("2567-02-29");

  const handleChangeDatePickerCustom = useCallback(
    (christDate: string, buddhistDate: string) => {
      console.log(christDate);
      console.log(buddhistDate);
      setSelectedDate(christDate);
      setSelectedThaiDate(buddhistDate);
    },
    [],
  );

  return (
    <>
      <div className="pb-2">
        <div className="grid grid-cols-2">
          christDate value:{" "}
          <strong className="text-right">{selectedDate}</strong>
        </div>
        <div className="grid grid-cols-2">
          buddhistDate value:{" "}
          <strong className="text-right">{selectedThaiDate}</strong>
        </div>
      </div>
      <ThaiDatePicker
        value={selectedDate}
        onChange={handleChangeDatePickerCustom}
      />
    </>
  );
};

export default DateInput;
