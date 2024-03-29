import { useState, useRef, useMemo, useCallback, JSX } from 'react';
import { transformListByDate } from 'helpers/helpers';

import {
  experienceData,
  SCROLL_DIRECTION,
  IExperience,
  IExperiencesModel,
  ITimelineProps,
  TimelineCard,
  useTimeline,
} from './index';

import './Timeline.scss';

const Timeline = ({ startDate, endDate, interval, segment }: ITimelineProps): JSX.Element => {
  const { getMonthYears, getSegmentCount } = useTimeline();
  const [activeCard, setActiveCard] = useState(0);
  const timelineRef = useRef<HTMLUListElement>(null);
  const cardRef = useRef<HTMLDivElement[]>([]);
  const jobDetails: IExperiencesModel = transformListByDate(experienceData);

  const cardKeys = Object.keys(jobDetails);
  const totalCards = cardKeys.length;

  const getJobDetails = useCallback(
    (slot: string) => (jobDetails && jobDetails[slot as keyof IExperience]) || null,
    [jobDetails],
  );

  const scrollStatus = useMemo(() => {
    return {
      active: activeCard,
      current: cardKeys[activeCard],
      previous: cardKeys[activeCard - 1] || null,
      next: cardKeys[activeCard + 1] || null,
      scrollPos: timelineRef.current?.scrollLeft,
    };
  }, [activeCard, timelineRef, cardKeys]);

  const setScroll = (scrollIndex: number) => {
    cardRef.current[scrollIndex].scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
    setActiveCard(scrollIndex);
  };

  const handleScroll = (dir: string) => {
    let scrollPos: number;

    switch (dir) {
      case SCROLL_DIRECTION.Forward:
        scrollPos = activeCard + 1 < totalCards ? activeCard + 1 : totalCards - 1;
        break;
      case SCROLL_DIRECTION.Back:
        scrollPos = activeCard > 0 ? activeCard - 1 : 0;
        break;
      case SCROLL_DIRECTION.Last:
        scrollPos = totalCards - 1;
        break;
      default:
        scrollPos = 0;
    }

    setScroll(scrollPos);
  };

  return (
    <div className='timeline'>
      <div className='timeline_actions pt-4 pb-2 text-center'>
        <button onClick={() => handleScroll(SCROLL_DIRECTION.First)}>
          <i className='fa fa-angle-double-left'></i> Early
        </button>
        <button className='btn-md' onClick={() => handleScroll(SCROLL_DIRECTION.Back)}>
          <i className='fa fa-angle-left'></i> Back {scrollStatus.previous ? `:${scrollStatus.previous}` : ''}
        </button>
        <button className='btn-md' onClick={() => handleScroll(SCROLL_DIRECTION.Forward)}>
          Forward {scrollStatus.next ? `: ${scrollStatus.next}` : ''} <i className='fa fa-angle-right'></i>
        </button>
        <button onClick={() => handleScroll(SCROLL_DIRECTION.Last)}>
          Recent <i className='fa fa-angle-double-right'></i>
        </button>
      </div>

      <ul className='timeline_panel' ref={timelineRef}>
        {getMonthYears.length &&
          getMonthYears.map((slot, index) => {
            const cardIndex = cardKeys.indexOf(slot);
            const job: IExperience = getJobDetails(slot);
            const yearSegment = getSegmentCount(slot);

            return (
              <li className='slot' key={index} data-date={slot} data-job={job?.employer}>
                {yearSegment ? (
                  <div className='segment-line'>
                    <span>{yearSegment}</span>
                  </div>
                ) : null}

                {job ? (
                  <TimelineCard
                    ref={(element: HTMLDivElement) => cardRef.current.push(element)}
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
