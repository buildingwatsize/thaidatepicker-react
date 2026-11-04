import Holidays, { type HolidaysTypes } from "date-holidays";

export type ThaiHolidayType = HolidaysTypes.HolidayType;

/**
 * - `"all"`: every date stays selectable (holidays are only highlighted)
 * - `"exclude"`: Thai holidays are disabled
 * - `"only"`: only Thai holidays are selectable
 */
export type ThaiHolidaySelectable = "all" | "exclude" | "only";

export interface ThaiHolidayItem {
  /** Holiday date in `YYYY-MM-DD` (Thailand local date) */
  date: string;
  holidayName: string;
  type: ThaiHolidayType;
}

export interface ThaiHolidayOptions {
  /** holiday types to include, default `["public"]` */
  types?: ThaiHolidayType[];
  /** holiday name language (ISO 639-1), default `"th"` */
  language?: string;
}

const DEFAULT_TYPES: ThaiHolidayType[] = ["public"];
const DEFAULT_LANGUAGE = "th";

const yearCache = new Map<string, Map<string, ThaiHolidayItem[]>>();
let holidaysInstance: Holidays | null = null;

const getInstance = () => {
  holidaysInstance ??= new Holidays("TH");
  return holidaysInstance;
};

/**
 * Format a local Date as `YYYY-MM-DD`.
 */
export const ToDateKey = (date: Date) => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
};

const getYearMap = (year: number, options: ThaiHolidayOptions = {}) => {
  const types = options.types ?? DEFAULT_TYPES;
  const language = options.language ?? DEFAULT_LANGUAGE;
  const cacheKey = `${year}|${language}|${[...types].sort().join(",")}`;

  let yearMap = yearCache.get(cacheKey);
  if (!yearMap) {
    yearMap = new Map();
    for (const holiday of getInstance().getHolidays(year, language)) {
      if (!types.includes(holiday.type)) continue;
      const date = holiday.date.slice(0, 10);
      const item: ThaiHolidayItem = {
        date,
        holidayName: holiday.name,
        type: holiday.type,
      };
      yearMap.set(date, [...(yearMap.get(date) ?? []), item]);
    }
    yearCache.set(cacheKey, yearMap);
  }
  return yearMap;
};

/**
 * Get Thai holidays of the given years.
 */
export const GetThaiHolidays = (
  years: number | number[],
  options: ThaiHolidayOptions = {}
): ThaiHolidayItem[] =>
  (Array.isArray(years) ? years : [years]).flatMap((year) =>
    [...getYearMap(year, options).values()].flat()
  );

/**
 * Check whether a date is a Thai holiday.
 */
export const IsThaiHoliday = (date: Date, options: ThaiHolidayOptions = {}) =>
  getYearMap(date.getFullYear(), options).has(ToDateKey(date));
