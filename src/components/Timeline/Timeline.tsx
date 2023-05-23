import { useState, useRef, useMemo } from 'react';

import { experiences } from './Timeline.constants';
import { IExperience } from './Timeline.types';

import TimelineCard from './Timeline.Card';
import useTimeline from './useTimeline';

const Timeline = () => {
  const { getMonthYears } = useTimeline();
  const [activeCard, setActiveCard] = useState(0);
  const cardRef = useRef<HTMLDivElement[]>([]);
  const cardKeys = Object.keys(experiences);
  const totalCards = cardKeys.length;

  const scrollStatus = useMemo(() => {
    return {
      active: activeCard,
      previous: cardKeys[activeCard - 1] || null,
      next: cardKeys[activeCard + 1] || null,
    };
  }, [activeCard]);

  console.log('++ show active: ', scrollStatus);
  const scrollNext = () => {
    const scrollEl =
      activeCard + 1 < totalCards ? activeCard + 1 : totalCards - 1;

    cardRef.current[scrollEl].scrollIntoView({ behavior: 'smooth' });
    setActiveCard(scrollEl);
  };

  const scrollPrev = () => {
    const scrollEl = activeCard > 0 ? activeCard - 1 : 0;

    cardRef.current[scrollEl].scrollIntoView({ behavior: 'smooth' });
    setActiveCard(scrollEl);
  };

  return (
    <div>
      <ul className='timeline'>
        {getMonthYears.map((slot, index) => {
          const cardIndex = cardKeys.indexOf(slot);
          const job: IExperience =
            experiences[slot as keyof IExperience] || null;

          return (
            <li
              className='slot'
              key={index}
              data-date={slot}
              data-job={job?.employer}
            >
              {job ? (
                <TimelineCard
                  ref={(element: HTMLDivElement) =>
                    cardRef.current.push(element)
                  }
                  cardIndex={cardIndex}
                  slot={slot}
                  cardDetails={job}
                />
              ) : (
                <></>
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={scrollPrev} disabled={!scrollStatus.previous}>
        Back {scrollStatus.previous ? `(${scrollStatus.previous})` : ''}
      </button>
      <button onClick={scrollNext} disabled={!scrollStatus.next}>
        Forward {scrollStatus.next ? `(${scrollStatus.next})` : ''}
      </button>
    </div>
  );
};

export default Timeline;
