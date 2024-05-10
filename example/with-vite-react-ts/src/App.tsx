import { useState } from "react";
import { ThaiDatePicker } from "thaidatepicker-react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("2024-02-29");
  const [selectedThaiDate, setSelectedThaiDate] = useState("2567-02-29");

  const handleDatePickerChange = (christDate: string, buddhistDate: string) => {
    console.log(christDate);
    console.log(buddhistDate);
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

  return (
    <>
      <ThaiDatePicker value={selectedDate} onChange={handleDatePickerChange} />
      <div>christDate: {selectedDate}</div>
      <div>thaiDate: {selectedThaiDate}</div>
    </>
  );
};

export default App;
