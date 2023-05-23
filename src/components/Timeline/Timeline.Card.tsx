import classNames from 'classnames';

import { ITimelineProps } from './Timeline.types';
import { forwardRef } from 'react';

const TimelineCard = forwardRef(
  (
    { slot, cardIndex, cardDetails }: ITimelineProps,
    forwardedRef: React.ForwardedRef<HTMLDivElement>,
  ) => {
    const year = new Date(slot).getFullYear();
    const cardPosition = cardIndex % 2 ? 'bottom' : 'top';

    return (
      <>
        {cardDetails && cardDetails.position ? (
          <div
            ref={forwardedRef}
            className={classNames(
              'box',
              cardDetails.size || 'md',
              cardPosition,
            )}
            data-slot={year}
          >
            <div className='header'>
              <h5>{cardDetails.position}</h5>
              <small>{cardDetails.employer}</small>
            </div>
            <div className='description'>{cardDetails.description}</div>
            <span className='line'></span>
          </div>
        ) : null}
      </>
    );
  },
);

export default TimelineCard;
