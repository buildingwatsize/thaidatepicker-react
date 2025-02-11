import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Convert christ year to buddhist year (+543)
 */
export const ConvertToThaiYear = (christYear: number) => {
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

/**
 * Merge and deduplicate classnames using tailwind-merge and clsx.
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
