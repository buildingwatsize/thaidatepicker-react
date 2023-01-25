import { ConvertToThaiYear, GetHighlightByDate } from ".";

describe("Test utils/ConvertToThaiYear", () => {
  [
    {
      input: 2023,
      expected: 2566,
    },
    {
      input: 1999,
      expected: 2542,
    },
  ].forEach((tc) => {
    test(`should be ${tc.expected} when input ${tc.input}`, () => {
      const actual = ConvertToThaiYear(tc.input);
      expect(actual).toBe(tc.expected);
    });
  });
});

describe("Test utils/GetHighlightByDate", () => {
  const inputDate = new Date();
  [
    {
      input: inputDate,
      expected: [
        {
          "react-datepicker__day--highlighted-today": [inputDate],
        },
      ],
    },
    {
      input: new Date("2023-12-31"),
      expected: [
        {
          "react-datepicker__day--highlighted-today": [new Date("2023-12-31")],
        },
      ],
    },
  ].forEach((tc) => {
    test(`should be ${tc.expected} when input ${tc.input}`, () => {
      const actual = GetHighlightByDate(tc.input);
      expect(actual).toMatchObject(tc.expected);
    });
  });

  test(`should be got 1 elem when input undefined`, () => {
    const actual = GetHighlightByDate();
    expect(actual.length).toBe(1);
  });
});
