import { describe, it, expect } from 'vitest';
import { generateRecurringDates } from "../utils/recurrenceUtils";

describe("generateRecurringDates", () => {
  it("generates daily recurring dates correctly", () => {
    const result = generateRecurringDates({
      frequency: "daily",
      interval: 2,
      startDate: "2025-07-01",
      endDate: "2025-07-07",
    });

    expect(result).toEqual([
      "01-07-2025 - Tuesday",
      "03-07-2025 - Thursday",
      "05-07-2025 - Saturday",
      "07-07-2025 - Monday",
    ]);
  });

  it("generates weekly recurring dates correctly", () => {
    const result = generateRecurringDates({
      frequency: "weekly",
      interval: 1,
      startDate: "2025-07-01",
      endDate: "2025-07-22",
    });

    expect(result).toEqual([
      "01-07-2025 - Tuesday",
      "08-07-2025 - Tuesday",
      "15-07-2025 - Tuesday",
      "22-07-2025 - Tuesday",
    ]);
  });

  it("generates monthly dates with custom pattern: second Tuesday", () => {
    const result = generateRecurringDates({
      startDate: "2025-07-01",
      endDate: "2025-10-31",
      customPattern: "the second tuesday of every month",
    });

    expect(result).toEqual([
      "08-07-2025 - Tuesday",
      "12-08-2025 - Tuesday",
      "09-09-2025 - Tuesday",
      "14-10-2025 - Tuesday",
    ]);
  });

  it("generates monthly dates with custom pattern: last Friday", () => {
    const result = generateRecurringDates({
      startDate: "2025-07-01",
      endDate: "2025-09-30",
      customPattern: "last friday of every month",
    });

    expect(result).toEqual([
      "25-07-2025 - Friday",
      "30-08-2025 - Friday",
      "27-09-2025 - Friday",
    ]);
  });
});