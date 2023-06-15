import { format as formatDate } from 'date-fns';
import { zonedTimeToUtc, utcToZonedTime } from 'date-fns-tz';

import { IExperience, TIMEZONE } from 'components/Timeline';

export const formatLocalDate = (dateStr: string, isUTC = false) => {
  if (Number.isNaN(Date.parse(dateStr))) {
    return {};
  }
  const newDate = new Date(dateStr);
  const [year, month] = [newDate.getFullYear(), newDate.getMonth()];

  const zonedDate = isUTC
    ? utcToZonedTime(new Date(year, month + 1, 1), TIMEZONE)
    : zonedTimeToUtc(new Date(year, month + 1, 1), TIMEZONE);

  return {
    slotDay: dateStr,
    fullDate: newDate,
    fullIsoDate: zonedDate.toISOString(),
    shortIsoDate: zonedDate.toLocaleDateString(),
    formattedDate: formatDate(zonedDate, 'yyyy-MM'),
    monthYear: formatDate(zonedDate, 'yyyy-MM'),
    monthName: formatDate(zonedDate, 'MMM'),
    day: zonedDate.getDay(),
    month: zonedDate.getMonth(),
    fullYear: zonedDate.getFullYear(),
    shortYear: formatDate(zonedDate, 'yy'),
  };
};

export const transformListByDate = (data: IExperience[]) => {
  return data.reduce((memo: any, item: any) => {
    const formattedDate = formatLocalDate(item.startDate);
    if (formattedDate.monthYear) {
      memo[formattedDate.monthYear] = item;
    }
    return memo;
  }, {});
};
