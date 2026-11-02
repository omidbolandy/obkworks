import assert from "node:assert/strict";
import test from "node:test";
import holidays from "./holidays.json" with { type: "json" };

function isValidGregorianDate(value) {
  if (!/^\d{4}-\d{2}-\d{2}$/.test(value)) return false;
  const [year, month, day] = value.split("-").map(Number);
  const date = new Date(year, month - 1, day);
  return (
    date.getFullYear() === year &&
    date.getMonth() === month - 1 &&
    date.getDate() === day
  );
}

test("holiday records have supported calendars, scopes, and valid month-days", () => {
  const allowedCalendars = new Set(["gregorian", "jalali", "islamic"]);
  const allowedScopes = new Set(["iran", "global"]);

  for (const holiday of holidays) {
    assert.ok(allowedCalendars.has(holiday.calendar), holiday.name);
    assert.ok(allowedScopes.has(holiday.scope), holiday.name);
    assert.match(holiday.date, /^(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/, holiday.name);
    assert.ok(holiday.nameFa, `Missing Persian name for ${holiday.name}`);
    assert.ok(holiday.reasonFa, `Missing Persian description for ${holiday.name}`);
  }
});

test("the published 1405 official calendar covers every Iranian lunar holiday", () => {
  const lunarIranianHolidays = holidays.filter(
    (holiday) => holiday.calendar === "islamic" && holiday.scope === "iran"
  );

  assert.ok(lunarIranianHolidays.length > 0);
  for (const holiday of lunarIranianHolidays) {
    const officialDate = holiday.officialDates?.["1405"];
    assert.ok(officialDate, `Missing official date for ${holiday.name}`);
    assert.ok(isValidGregorianDate(officialDate), `Invalid official date for ${holiday.name}`);
  }
});

test("official 1405 dates preserve the dates published by the calendar center", () => {
  const officialDate = (name) =>
    holidays.find((holiday) => holiday.name === name)?.officialDates?.["1405"];

  assert.equal(officialDate("Tasua"), "2026-06-24");
  assert.equal(officialDate("Ashura"), "2026-06-25");
  assert.equal(
    officialDate("Eid al-Fitr"),
    "2026-03-21"
  );
  assert.equal(
    officialDate("Martyrdom of Imam Hasan Askari"),
    "2026-08-21"
  );
});

test("annual dates for later years are optional", () => {
  const lunarIranianHolidays = holidays.filter(
    (holiday) => holiday.calendar === "islamic" && holiday.scope === "iran"
  );

  assert.ok(lunarIranianHolidays.every((holiday) => !holiday.officialDates?.["1406"]));
});
