import { useState, useRef, useMemo, useCallback, JSX } from 'react';
import { transformListByDate } from 'helpers/helpers';

import { jobExperiences } from './Timeline.constants';
import {
  IExperience,
  IExperiencesModel,
  ITimelineProps,
} from './Timeline.types';

import TimelineCard from './Timeline.Card';
import useTimeline from './useTimeline';

import './Timeline.scss';

const Timeline = ({
  startDate,
  endDate,
  interval,
  segment,
}: ITimelineProps): JSX.Element => {
  const { getMonthYears, getSegmentCount } = useTimeline();
  const [activeCard, setActiveCard] = useState(0);
  const cardRef = useRef<HTMLDivElement[]>([]);
  const jobDetails: IExperiencesModel = transformListByDate(jobExperiences);

  const cardKeys = Object.keys(jobDetails);
  const totalCards = cardKeys.length;

  const getJobDetails = useCallback(
    (slot: string) =>
      (jobDetails && jobDetails[slot as keyof IExperience]) || null,
    [jobDetails],
  );

  const scrollStatus = useMemo(() => {
    return {
      active: activeCard,
      current: cardKeys[activeCard],
      previous: cardKeys[activeCard - 1] || null,
      next: cardKeys[activeCard + 1] || null,
    };
  }, [activeCard]);

  // console.log('++ scroll status: ', scrollStatus);

  const scrollNext = () => {
    const scrollEl =
      activeCard + 1 < totalCards ? activeCard + 1 : totalCards - 1;

    cardRef.current[scrollEl].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setActiveCard(scrollEl);
  };

  const scrollPrev = () => {
    const scrollEl = activeCard > 0 ? activeCard - 1 : 0;

    cardRef.current[scrollEl].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setActiveCard(scrollEl);
  };

  return (
    <div className='timeline'>
      <div className='timeline_actions pt-4'>
        <button className='me-2' onClick={scrollPrev}>
          <i className='fa fa-arrow-circle-left'></i> Back{' '}
          {scrollStatus.previous ? `[${scrollStatus.previous}]` : ''}
        </button>

        <button onClick={scrollNext}>
          <i className='fa fa-arrow-circle-right'></i> Forward{' '}
          {scrollStatus.next ? `[${scrollStatus.next}]` : ''}
        </button>
      </div>

      <ul className='timeline_panel'>
        {getMonthYears.length &&
          getMonthYears.map((slot, index) => {
            const cardIndex = cardKeys.indexOf(slot);
            const job: IExperience = getJobDetails(slot);
            const fiveYearSegment = getSegmentCount(slot);

            return (
              <li
                className='slot'
                key={index}
                data-date={slot}
                data-job={job?.employer}
              >
                {fiveYearSegment ? (
                  <div className='segment-line'>{fiveYearSegment}</div>
                ) : null}

                {job ? (
                  <TimelineCard
                    ref={(element: HTMLDivElement) =>
                      cardRef.current.push(element)
                    }
                    cardIndex={cardIndex}
                    slot={slot}
                    cardDetails={job}
                  />
                ) : null}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Timeline;
