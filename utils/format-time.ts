import i18nLocales from "../i18n/locales";
import { getNowDayjs } from "./_dayjs";
import { translate } from "./i18n";

export function formatTime (stamp?: number, type: "full" | "date" | "month" = "full") {
  return computed(() => {
    const { formatFull, formatDate, formatMonth } = i18nLocales.find(locale => locale.code === useNuxtApp().$i18n.locale.value)!;
    let format = "";
    switch (type) {
      case "full":
        format = formatFull;
        break;
      case "date":
        format = formatDate;
        break;
      case "month":
        format = formatMonth;
        break;
    }
    return getNowDayjs(stamp).format(format);
  }).value;
}

export function literalTime (stamp: number) {
  const dayOld = getNowDayjs(stamp);
  const dayNew = getNowDayjs();
  const subDay = dayNew.diff(dayOld, "day");
  const subWeek = dayNew.diff(dayOld, "week");
  const subMonth = dayNew.diff(dayOld, "month");
  const subYear = dayNew.diff(dayOld, "year");
  if (dayOld.isToday()) {
    return translate("today");
  }
  if (subWeek < 1) {
    return translate("days-ago", [subDay + 1]);
  }
  if (subMonth < 1) {
    return translate("weeks-ago", [subWeek + 1]);
  }
  if (subYear < 1) {
    return translate("months-ago", [subMonth + 1]);
  }
  return translate("years-ago", [subYear + 1]);
}
