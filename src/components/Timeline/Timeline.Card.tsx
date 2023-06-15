import classNames from 'classnames';

import { ITimelineCardProps } from './Timeline.types';
import { forwardRef } from 'react';

const TimelineCard = forwardRef(
  ({ slot, cardIndex, cardDetails }: ITimelineCardProps, forwardedRef: React.ForwardedRef<HTMLDivElement>) => {
    const year = new Date(slot).getFullYear();
    const cardPosition = cardIndex % 2 ? 'bottom' : 'top';

    return (
      <>
        {cardDetails && cardDetails.position ? (
          <div className={classNames('timeline_card', 'text-secondary', cardPosition)}>
            <div ref={forwardedRef} className={classNames('card', cardDetails.size || 'md')} data-slot={year}>
              <div className='header'>
                <p className='font-size-lg font-weight-bold'>{cardDetails.position}</p>
                <small className='font-size-xs'>
                  {cardDetails.employer} | {cardDetails.location}
                </small>
              </div>
              <div className='description font-size-sm text-primary py-3'>{cardDetails.description}</div>
              <div className='footer text-end'>
                <small className='color-gray-500 font-size-xs'>
                  {cardDetails.startDate} - {cardDetails.endDate}
                </small>
              </div>
            </div>
            <span className='line'></span>
          </div>
        ) : null}
      </>
    );
  },
);

export default TimelineCard;
