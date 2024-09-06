import dayjs from "dayjs";
import MockDate from "mockdate";

import YearListGenerator from "./YearListGenerator";

describe("Test utils/YearListGenerator", () => {
  beforeEach(() => {
    MockDate.set(new Date("2023-12-31"));
  });

  afterEach(() => {
    MockDate.reset();
  });

  // RangeMaker
  [
    {
      input: {
        startVal: 1,
        endVal: 100,
        increment: 10,
      },
      expected: {
        return: [1, 11, 21, 31, 41, 51, 61, 71, 81, 91],
        length: 10,
      },
    },
    {
      input: {
        startVal: 99,
        endVal: 105,
        increment: 2,
      },
      expected: {
        return: [99, 101, 103, 105],
        length: 4,
      },
    },
    {
      input: {
        startVal: 0,
        endVal: 1,
        increment: -10,
      },
      expected: {
        return: [],
        length: 0,
      },
    },
    {
      input: {
        startVal: 100,
        endVal: 1,
        increment: 0,
      },
      expected: {
        return: [],
        length: 0,
      },
    },
    {
      input: {
        startVal: 100,
        endVal: -100,
        increment: 1,
      },
      expected: {
        return: [],
        length: 0,
      },
    },
  ].forEach((tc) => {
    test(`RangeMaker should be have length = ${
      tc.expected.length
    } and return = ${tc.expected.return} when input ${JSON.stringify(
      tc.input
    )}`, () => {
      const generator = new YearListGenerator();
      const range = generator.RangeMaker(...Object.values(tc.input));
      expect(JSON.stringify(range)).toBe(JSON.stringify(tc.expected.return));
      expect(range.length).toBe(tc.expected.length);
    });
  });

  // RangeMakerNoArgs
  test(`RangeMakerNoArgs should be not to throw any error`, () => {
    expect(() => {
      const generator = new YearListGenerator();
      const result = generator.RangeMaker();
      expect(result.length).toBe(0);
    }).not.toThrow();
  });

  // Generate
  [
    {
      input: {
        scope: 5,
        minDate: "",
        maxDate: "",
      },
      expected: {
        return: [
          2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
        ],
        length: 11,
      },
      mock: {
        yearFn: 2023,
      },
    },
    {
      input: {
        scope: 1,
        minDate: "",
        maxDate: "",
      },
      expected: {
        return: [2022, 2023, 2024],
        length: 3, // current + (past_1y) + (future_1y) = 3
      },
    },
    {
      input: {
        scope: 0,
        minDate: "",
        maxDate: "",
      },
      expected: {
        return: [2023],
        length: 1, // current + (past_0y) + (future_0y) = 1
      },
    },
    {
      input: {
        scope: -1,
        minDate: "",
        maxDate: "",
      },
      expected: {
        return: [],
        length: 0, // stuck on requirement of RangeMaker (which return [])
      },
    },
    {
      input: {
        scope: 0,
        minDate: false,
        maxDate: false,
      },
      expected: {
        return: [2023],
        length: 1, // just 1 (current)
      },
    },
    {
      input: {
        scope: 0,
        minDate: "2025-12-31",
        maxDate: false,
      },
      expected: {
        return: [],
        length: 0, // over current year
      },
    },
    {
      input: {
        scope: 0,
        minDate: false,
        maxDate: "2025-12-31",
      },
      expected: {
        return: [2023, 2024, 2025],
        length: 3, // current + increment diff 2 year = 3
      },
    },
    {
      input: {},
      expected: {
        return: [
          1924, 1925, 1926, 1927, 1928, 1929, 1930, 1931, 1932, 1933, 1934,
          1935, 1936, 1937, 1938, 1939, 1940, 1941, 1942, 1943, 1944, 1945,
          1946, 1947, 1948, 1949, 1950, 1951, 1952, 1953, 1954, 1955, 1956,
          1957, 1958, 1959, 1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967,
          1968, 1969, 1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978,
          1979, 1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
          1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000,
          2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011,
          2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022,
          2023, 2024, 2025, 2026, 2027, 2028, 2029, 2030, 2031, 2032, 2033,
          2034, 2035, 2036, 2037, 2038, 2039, 2040, 2041, 2042, 2043, 2044,
          2045, 2046, 2047, 2048, 2049, 2050, 2051, 2052, 2053, 2054, 2055,
          2056, 2057, 2058, 2059, 2060, 2061, 2062, 2063, 2064, 2065, 2066,
          2067, 2068, 2069, 2070, 2071, 2072, 2073, 2074, 2075, 2076, 2077,
          2078, 2079, 2080, 2081, 2082, 2083, 2084, 2085, 2086, 2087, 2088,
          2089, 2090, 2091, 2092, 2093, 2094, 2095, 2096, 2097, 2098, 2099,
          2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108, 2109, 2110,
          2111, 2112, 2113, 2114, 2115, 2116, 2117, 2118, 2119, 2120, 2121,
          2122,
        ],
        length: 199, // current + (past_99y) + (future_99y) = 199
      },
    },
  ].forEach((tc) => {
    test(`Generate should be have length = ${tc.expected.length} and return = ${
      tc.expected.return
    } when input ${JSON.stringify(tc.input)}`, () => {
      const generator = new YearListGenerator(dayjs);
      const result = generator.Generate(...Object.values(tc.input));
      expect(JSON.stringify(result)).toBe(JSON.stringify(tc.expected.return));
      expect(result.length).toBe(tc.expected.length);
    });
  });

  // Generate with not defined dateLibrary
  test(`GenerateNoDateLib should be throw error TypeError`, () => {
    expect(() => {
      const generator = new YearListGenerator();
      generator.Generate();
    }).toThrow(TypeError);
  });
});
