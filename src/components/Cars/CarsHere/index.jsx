// libraries
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import DataContainer from 'components/Cars/DataContainer';
import { Form } from 'react-bootstrap';
// services
import { getCarsHere } from 'services';
// actions
import { saveCarsHere, setFilterParams, removeFilterParams } from 'actions/cars';
import setPage from 'actions/pagination';

const CarsHere = () => {
  const { carsHere } = useSelector(({ cars }) => cars);
  const { page } = useSelector(({ pagination }) => pagination);
  const dispatch = useDispatch();

  const findCarsId = () => carsHere.map(({ car }) => car);

  const changeFilterParams = (e) => {
    if (page !== 1) {
      dispatch(setPage(1));
    }
    if (e.target.checked) {
      dispatch(setFilterParams({ filterBy: 'id', filterValue: findCarsId() }));
    } else {
      dispatch(removeFilterParams('id'));
    }
  };

  return (
    <DataContainer action={saveCarsHere} apiRequest={getCarsHere}>
      <Form.Group controlId="carsHere">
        <Form.Check onChange={changeFilterParams} type="checkbox" label="Cars here" />
      </Form.Group>
    </DataContainer>
  );
};

export default React.memo(CarsHere);
