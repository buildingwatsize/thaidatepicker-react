import { fireEvent, render, screen } from "@testing-library/react";
import { ThaiDatePicker } from ".";

describe("ThaiDatePicker", () => {
  test("should be truthy", () => {
    expect(ThaiDatePicker).toBeTruthy();
  });
  test("should be visible", () => {
    let view = render(<ThaiDatePicker />);
    expect(view).not.toBeNull();
  });
  test("should be render with input inside", () => {
    render(<ThaiDatePicker />);
    const inputElement = screen.queryByTestId("thdpk-input");
    expect(inputElement).toBeInTheDocument();
  });
  test("should be render with minDate, maxDate props", () => {
    render(<ThaiDatePicker minDate={new Date()} maxDate={new Date()} />);
    const inputElement = screen.queryByTestId("thdpk-input");
    expect(inputElement).toBeInTheDocument();
  });
  test("should have value as ThaiDate format", () => {
    [
      {
        christDateInput: "1980-08-11",
        thaiDateOutput: "2523-08-11",
      },
      {
        christDateInput: "2030-12-31",
        thaiDateOutput: "2573-12-31",
      },
      {
        christDateInput: "2525-01-31",
        thaiDateOutput: "3068-01-31",
      },
      {
        christDateInput: "",
        thaiDateOutput: "",
      },
    ].forEach((tc) => {
      const { unmount } = render(<ThaiDatePicker value={tc.christDateInput} />);
      const inputElement = screen.queryByTestId("thdpk-input");
      expect(inputElement.value).toBe(tc.thaiDateOutput);
      unmount();
    });
  });
  test("should be have value showing format as inputProps.displayFormat (DD MM YYYY)", () => {
    render(
      <ThaiDatePicker
        value={"2023-01-31"}
        inputProps={{ displayFormat: "DD MM YYYY" }}
      />
    );
    const inputElement = screen.queryByTestId("thdpk-input");
    expect(inputElement.value).toBe("31 01 2566");
  });
  test("should be have value showing format as inputProps.displayFormat (DD M YY)", () => {
    render(
      <ThaiDatePicker
        value={"2000-01-02"}
        inputProps={{ displayFormat: "DD M YY" }}
      />
    );
    const inputElement = screen.queryByTestId("thdpk-input");
    expect(inputElement.value).toBe("02 1 43");
  });
  test("should be changeable value", () => {
    const mockOnChange = jest.fn();
    render(<ThaiDatePicker onChange={mockOnChange} />);
    const inputElement = screen.queryByTestId("thdpk-input");

    fireEvent.change(inputElement, { target: { value: "2023-12-31" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith("2023-12-31", "2566-12-31");

    fireEvent.change(inputElement, { target: { value: "" } });
    expect(mockOnChange).toHaveBeenCalledTimes(2);
    expect(mockOnChange).toHaveBeenCalledWith("", "");
  });
  test("should be have customize an input", () => {
    let interceptInputValue = "";
    const fakeInput = (props) => {
      interceptInputValue = props.value;
      return <input {...props} />;
    };
    render(<ThaiDatePicker value={"2023-01-31"} customInput={fakeInput} />);
    const inputElement = screen.queryByTestId("thdpk-input");
    expect(inputElement.value).toBe("2566-01-31");

    expect(interceptInputValue).toBe(inputElement.value);
  });
});

// describe("WatDatePicker (Legacy name compatibility)", () => {
//   test("WatDatePicker to be truthy", () => {
//     expect(WatDatePicker).toBeTruthy();
//   });
//   test("WatDatePicker can be render with input inside", () => {
//     render(<WatDatePicker />);
//     const inputElement = screen.queryByTestId("thdpk-input");
//     expect(inputElement).toBeInTheDocument();
//   });
// });
