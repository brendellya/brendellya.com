import { useMemo } from 'react';
import { format as formatDate } from 'date-fns';

import { TODAY, STARTDATE } from './Timeline.constants';

const useTimeline = () => {
  const getMonthYears = useMemo(() => {
    let currentDate = STARTDATE;
    const years: string[] = [];
    do {
      const formattedDate = formatDate(currentDate, 'yyyy-MM-dd');

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

  return {
    getMonthYears,
  };
};

export default useTimeline;
