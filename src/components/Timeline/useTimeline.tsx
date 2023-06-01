import { useCallback, useMemo } from 'react';
import { format as formatDate } from 'date-fns';

import {
  TODAY,
  STARTDATE,
  TIMEZONE,
  DEFAULT_SEGMENT,
} from './Timeline.constants';
import { formatLocalDate } from '../../helpers/helpers';

const useTimeline = () => {
  const getMonthYears = useMemo(() => {
    let currentDate = STARTDATE;
    const years: string[] = [];

    do {
      const formattedDate = formatDate(currentDate, 'yyyy-MM');

      if (!years.includes(formattedDate)) {
        years.push(formattedDate);
      } else {
        const [year, month, day] = [
          currentDate.getFullYear(),
          currentDate.getMonth(),
          currentDate.getDate(),
        ];

        currentDate = new Date(year, month + 1, day);
      }
    } while (currentDate < TODAY);

    return years;
  }, []);

  const getSegmentCount = useCallback(
    (slot: string, interval = DEFAULT_SEGMENT) => {
      const dates = formatLocalDate(slot, false);
      const segmentMatch =
        dates.fullYear && dates.fullYear % interval ? false : true;

      return dates.month !== undefined && dates.month < 1 && segmentMatch
        ? dates.shortYear
        : false;
    },
    [],
  );

  return {
    getMonthYears,
    getSegmentCount,
  };
};

export default useTimeline;
