import { JSX } from 'react';
import classNames from 'classnames';

interface ISortButton {
  label: string;
  sort: string;
  sortOption: string;
  asc: boolean;
  onSort: (sort: string) => void;
}
const SortButton = ({ label, sort, sortOption, asc, onSort }: ISortButton): JSX.Element => {
  return (
    <button className='btn-link' onClick={(event) => onSort(sortOption)}>
      <i className={classNames(sort !== sortOption ? '' : asc ? 'fa-solid fa-arrow-up' : 'fa-solid fa-arrow-down')}></i>{' '}
      {label}
    </button>
  );
};

export default SortButton;
