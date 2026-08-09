export function localizeField(field, locale) {
  if (!field) return "";
  if (typeof field === "string") return field;
  return field[locale] || field.en || "";
}

export function formatArticleDate(isoDate, locale) {
  if (!isoDate) return "";
  const date = new Date(isoDate);
  if (Number.isNaN(date.getTime())) return isoDate;

  const intlLocale = locale === "fa" ? "fa-IR-u-ca-persian" : "en-US";
  return new Intl.DateTimeFormat(intlLocale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
