import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, test, vi } from "vitest";
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
      const inputElement = screen.queryByTestId(
        "thdpk-input"
      ) as HTMLInputElement;
      expect(inputElement?.value).toBe(tc.thaiDateOutput);
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
    const inputElement = screen.queryByTestId(
      "thdpk-input"
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("31 01 2566");
  });
  test("should be have value showing format as inputProps.displayFormat (DD M YY)", () => {
    render(
      <ThaiDatePicker
        value={"2000-01-02"}
        inputProps={{ displayFormat: "DD M YY" }}
      />
    );
    const inputElement = screen.queryByTestId(
      "thdpk-input"
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("02 1 43");
  });
  test("should be changeable value", () => {
    const mockOnChange = vi.fn();
    render(<ThaiDatePicker />);
    const inputElement = screen.queryByTestId(
      "thdpk-input"
    ) as HTMLInputElement;
    inputElement.addEventListener("change", mockOnChange);

    fireEvent.change(inputElement, { target: { value: "2023-12-31" } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(inputElement.value).toBe("2566-12-31");

    fireEvent.change(inputElement, { target: { value: "1999-12-30" } });
    expect(inputElement.value).toBe("2542-12-30");
  });
  test("should be have customize an input", () => {
    let interceptInputValue = "";
    const FakeInput = ({
      value,
      onChange,
    }: {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }) => {
      interceptInputValue = value;
      return (
        <input data-testid="thdpk-input" value={value} onChange={onChange} />
      );
    };
    render(<ThaiDatePicker value={"2023-01-31"} customInput={FakeInput} />);
    const inputElement = screen.queryByTestId(
      "thdpk-input"
    ) as HTMLInputElement;
    expect(inputElement.value).toBe("2566-01-31");

    expect(interceptInputValue).toBe(inputElement.value);
  });

  describe("thaiHolidays", () => {
    const open = () => {
      fireEvent.click(screen.getByTestId("thdpk-input"));
    };
    const day = (n: number) =>
      document.querySelector(
        `.react-datepicker__day--0${String(n).padStart(2, "0")}:not(.react-datepicker__day--outside-month)`
      ) as HTMLElement;

    test("should not mark holidays by default", () => {
      render(<ThaiDatePicker value="2026-04-01" />);
      open();
      expect(day(13)).not.toHaveClass("react-datepicker__day--holidays");
      expect(day(13)).not.toHaveAttribute("aria-disabled", "true");
    });

    test("should highlight holidays", () => {
      render(<ThaiDatePicker value="2026-04-01" thaiHolidays={{}} />);
      open();
      expect(day(13)).toHaveClass("react-datepicker__day--holidays");
      expect(day(13).textContent).toContain("วันสงกรานต์");
      expect(day(20)).not.toHaveClass("react-datepicker__day--holidays");
    });

    test("should not highlight when highlight is false", () => {
      render(
        <ThaiDatePicker
          value="2026-04-01"
          thaiHolidays={{ highlight: false, selectable: "exclude" }}
        />
      );
      open();
      expect(day(13)).not.toHaveClass("react-datepicker__day--holidays");
      expect(day(13)).toHaveAttribute("aria-disabled", "true");
    });

    test("should disable holidays when selectable is exclude", () => {
      render(
        <ThaiDatePicker
          value="2026-04-01"
          thaiHolidays={{ selectable: "exclude" }}
        />
      );
      open();
      expect(day(13)).toHaveAttribute("aria-disabled", "true");
      expect(day(20)).toHaveAttribute("aria-disabled", "false");
    });

    test("should enable only holidays when selectable is only", () => {
      render(
        <ThaiDatePicker value="2026-04-01" thaiHolidays={{ selectable: "only" }} />
      );
      open();
      expect(day(13)).toHaveAttribute("aria-disabled", "false");
      expect(day(20)).toHaveAttribute("aria-disabled", "true");
    });

    test("should combine with reactDatePickerProps.filterDate", () => {
      render(
        <ThaiDatePicker
          value="2026-04-01"
          thaiHolidays={{ selectable: "only" }}
          reactDatePickerProps={{
            filterDate: (d: Date) => d.getDate() !== 14,
          }}
        />
      );
      open();
      expect(day(13)).toHaveAttribute("aria-disabled", "false");
      expect(day(14)).toHaveAttribute("aria-disabled", "true");
    });

    test("should load holidays of the year navigated to", () => {
      render(<ThaiDatePicker value="2026-12-01" thaiHolidays={{}} />);
      open();
      for (let i = 0; i < 25; i++) {
        fireEvent.click(document.querySelector(".tdpk-header-next-btn")!);
      }
      // now January 2029
      expect(day(1)).toHaveClass("react-datepicker__day--holidays");
    });
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
//   test("should be have value showing format as inputProps.displayFormat (DD MM YYYY)", () => {
//     render(
//       <WatDatePicker
//         value={"2023-01-31"}
//         inputProps={{ displayFormat: "DD MM YYYY" }}
//       />
//     );
//     const inputElement = screen.queryByTestId(
//       "thdpk-input"
//     ) as HTMLInputElement;
//     expect(inputElement.value).toBe("31 01 2566");
//   });
// });
