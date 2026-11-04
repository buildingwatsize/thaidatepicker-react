import { describe, expect, test } from "vitest";
import { GetThaiHolidays, IsThaiHoliday, ToDateKey } from "./ThaiHolidays";

describe("Test utils/ThaiHolidays", () => {
  test("ToDateKey formats local date as YYYY-MM-DD", () => {
    expect(ToDateKey(new Date(2026, 0, 5))).toBe("2026-01-05");
  });

  test("GetThaiHolidays returns public holidays with Thai names", () => {
    const holidays = GetThaiHolidays(2026);
    const songkran = holidays.find((h) => h.date === "2026-04-13");
    expect(songkran?.holidayName).toBe("วันสงกรานต์");
    expect(holidays.every((h) => h.type === "public")).toBe(true);
  });

  test("GetThaiHolidays supports multiple years and language", () => {
    const holidays = GetThaiHolidays([2025, 2026], { language: "en" });
    expect(holidays.some((h) => h.date.startsWith("2025-"))).toBe(true);
    expect(holidays.some((h) => h.date.startsWith("2026-"))).toBe(true);
    expect(holidays.find((h) => h.date === "2026-01-01")?.holidayName).toMatch(
      /New Year/
    );
  });

  test("IsThaiHoliday", () => {
    expect(IsThaiHoliday(new Date(2026, 3, 13))).toBe(true);
    expect(IsThaiHoliday(new Date(2026, 3, 20))).toBe(false);
  });
});
