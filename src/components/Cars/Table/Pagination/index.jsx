// libraries
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// components
import { Button } from 'react-bootstrap';
// actions
import setPage from 'actions/pagination';
// static
import { ReactComponent as LeftIcon } from 'assets/svg/chevron-left-solid.svg';
import { ReactComponent as RightIcon } from 'assets/svg/chevron-right-solid.svg';

const Pagination = () => {
  const dispatch = useDispatch();
  const { modifiedCars: cars } = useSelector(({ modifiedCars }) => modifiedCars);
  const { page, itemsByPage } = useSelector(({ pagination }) => pagination);

  const nextPage = () => {
    dispatch(setPage(page + 1));
  };

  const prevPage = () => {
    if (page > 1) {
      dispatch(setPage(page - 1));
    }
  };

  const carsLength = cars.length;

  return (
    <div className="d-flex justify-content-end align-items-center">
      <span className="pr-2">
        {`${carsLength ? (page - 1) * itemsByPage + 1 : 0}-${page * itemsByPage
        >= carsLength ? cars.length : itemsByPage * page} of ${carsLength}`}
      </span>
      <Button disabled={page === 1} variant="light" onClick={prevPage}>
        <LeftIcon className="arrow-icon mr-1" />
      </Button>
      <Button disabled={page * itemsByPage >= carsLength} variant="light" onClick={nextPage}>
        <RightIcon className="arrow-icon ml-1" />
      </Button>
    </div>
  );
};

export default Pagination;
