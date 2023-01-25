/**
 * Convert christ year to buddhist year (+543)
 */
export const ConvertToThaiYear = (christYear) => {
  return christYear + 543;
};

/**
 * Get highlighted list by date
 */
export const GetHighlightByDate = (date = new Date()) => [
  {
    "react-datepicker__day--highlighted-today": [date],
  },
];
