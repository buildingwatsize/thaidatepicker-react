import dayjs from "dayjs";
import React, { useState } from "react";
import { ThaiDatePicker, WatDatePicker } from "thaidatepicker-react";

const App = () => {
  const [selectedDate, setSelectedDate] = useState("2020-02-29"); // Showing date, represent the Leap Year
  const [selectedThaiDate, setSelectedThaiDate] = useState("2563-02-29");

  const handleWatDatePickerChange = (christDate, buddhistDate) => {
    console.log(christDate);
    console.log(buddhistDate);
    setSelectedDate(christDate);
    setSelectedThaiDate(buddhistDate);
  };

  return (
    <div
      style={{
        padding: "24px",
      }}
    >
      <h2>
        ThaiDatePicker with `Create React App` by{" "}
        <a href="https://github.com/buildingwatsize">buildingwatsize</a>
      </h2>
      <div
        style={{
          padding: 32,
          border: "2px solid #4ab19d",
          borderRadius: "16px",
          boxShadow: "1px 1px #cbcbcb",
        }}
      >
        <div>
          <code>Try it yourself!</code>
        </div>
        <ThaiDatePicker
          value={selectedDate}
          onChange={handleWatDatePickerChange}
          minDate={"2019-12-26"} // supported date as string, Date, dayjs or moment
          maxDate={new Date("2020-03-15")} // supported date as string, Date, dayjs or moment
        />
        <h2>
          Christ Date: <br />
          {selectedDate.toString()}
        </h2>
        <h2>
          Buddhist Date: <br />
          {selectedThaiDate.toString()}
        </h2>
        <small>
          Note: Component available name: <strong>ThaiDatePicker</strong> and{" "}
          <strong>WatDatePicker</strong>
        </small>
      </div>

      <br />
      <h2>Legacy Version - v0.x.x</h2>
      <h3>Example</h3>
      <div style={{ marginBottom: 24 }}>
        <WatDatePicker
          value={selectedDate}
          onChange={handleWatDatePickerChange}
          minDate={"2019-12-26"} // supported date as string, Date, dayjs or moment
          maxDate={new Date("2020-03-15")} // supported date as string, Date, dayjs or moment
        />
      </div>

      <hr />
      <h3>Update - v0.2.2</h3>
      <div>- Updated Dependencies - Fixed Bugs</div>

      <hr />
      <h3>Update - v0.2.1</h3>
      <div>- Updated Dependencies</div>

      <hr />
      <h3>Update - v0.2.0</h3>
      <div>- Updated Dependencies</div>

      <hr />
      <h3>Update - v0.1.5</h3>
      <div>- Updated Dependencies</div>
      <div>
        - Fixed bug "Form Submit" after click prev/next month button
        <form
          onSubmit={() => {
            console.log("This will not show.");
          }}
        >
          <WatDatePicker onChange={() => {}} />
        </form>
        (see more in source code, it will not trigger form submit function)
      </div>

      <hr />
      <h3>Update - v0.1.4</h3>
      <div>
        - Supported null value
        <WatDatePicker
          // value={selectedDate}
          onChange={() => {}}
        />
      </div>
      <br />
      <div>
        - Supported Customizable Year Boundary (e.g. ±1 Year)
        <WatDatePicker
          value={dayjs().date(25).month(11)}
          onChange={() => {}}
          yearBoundary={1}
        />
        * But it depends on minDate {`&`} maxDate
        <WatDatePicker
          value={dayjs()}
          onChange={() => {}}
          minDate={dayjs().add(-1, "month")}
          maxDate={dayjs()}
          yearBoundary={200} // NOT AFFECTED
        />
      </div>
      <br />
      <div>
        - Supported disabled {`&`} readOnly props
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <div>
            🚫 disabled flag
            <WatDatePicker value={"2019-02-29"} onChange={() => {}} disabled />
          </div>
          <div>
            🔒 readOnly flag
            <WatDatePicker value={"2019-02-29"} onChange={() => {}} readOnly />
          </div>
          <div>
            {`🚫 & 🔒 & clearable flag`}
            <WatDatePicker // supported alongside clearable flag
              value={"2019-02-29"}
              onChange={() => {}}
              disabled
              readOnly
              clearable={true}
            />
          </div>
        </div>
      </div>
      <br />
      <span style={{ color: "grey" }}>
        💡💡 NOTE: You have to calculate yearBoundary props w/ yourself if you
        set maxYear is lower than the current year. 💡💡
      </span>
      <br />

      <hr />
      <h3>Update - v0.1.3</h3>
      <div>
        - Supported Display Format
        <WatDatePicker
          // value={selectedDate}
          onChange={() => {}}
          displayFormat={"ddd, DD MMM YYYY"} // (using dayjs format)[https://day.js.org/docs/en/display/format]
        />
      </div>
      <br />
      <div>
        - Supported Customizing Input Style
        <WatDatePicker
          // value={selectedDate}
          onChange={() => {}}
          displayFormat={"ddd, DD MMMM YYYY"} // (using dayjs format)[https://day.js.org/docs/en/display/format]
          inputStyle={{
            width: "250px",
            backgroundColor: "#4ab19d",
            color: "whitesmoke",
          }} // style for input
        />
      </div>
      <br />
      <div>
        - Supported Input Clearable Button
        <WatDatePicker
          // value={selectedDate}
          maxDate={dayjs()}
          onChange={() => {}}
          clearable={true} // supported clearable button
        />
      </div>
      <br />
      <div>
        - Supported value as dayjs object (+3 day) [since v0.1.0]
        <WatDatePicker value={dayjs().add(3, "day")} onChange={() => {}} />
      </div>
      <br />
      <div>
        Let them mixed
        <WatDatePicker
          value={dayjs()}
          onChange={() => {}}
          displayFormat={"dd, DD MMMM YY"} // (using dayjs format)[https://day.js.org/docs/en/display/format]
          inputStyle={{ color: "red" }} // style for input
          clearable={true} // supported clearable button
          minDate={"2020-12-26"} // supported date as string
          maxDate={dayjs().add(20, "day")} // also supported dayjs or moment
        />
      </div>
      <br />
      <hr />
      <footer>Thanks @patch-lee for contributing</footer>
    </div>
  );
};

export default App;
