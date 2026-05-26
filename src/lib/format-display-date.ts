function formatDisplayDate(
  value: string | null | undefined,
  tillNowLabel = "Till now",
): string {
  if (!value) {
    return tillNowLabel;
  }
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }
  return date.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

export default formatDisplayDate;
