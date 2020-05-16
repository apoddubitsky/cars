// libraries
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import classNames from 'classnames';
// components
import { InputGroup, Button } from 'react-bootstrap';
import TextInput from 'components/common/TextInput';
import Select from 'components/common/Select';
// actions
import {
  setSearchParams, setFilterParams, setSortParams, removeFilterParams,
} from 'actions/cars';
import setPage from 'actions/pagination';
// static
import { ReactComponent as ArrowIcon } from 'assets/svg/arrow-up-solid.svg';

const TableHead = () => {
  const [searchValue, setSearchValue] = useState('');
  const { cars: allCars } = useSelector(({ cars }) => cars);
  const { page } = useSelector(({ pagination }) => pagination);
  const { sortParams: { sortBy, sortOrder } } = useSelector(({ cars }) => cars);
  const dispatch = useDispatch();

  const resetPageNumber = () => {
    if (page !== 1) {
      dispatch(setPage(1));
    }
  };

  const saveInputValue = (e) => {
    const inputValue = e.target.value;
    resetPageNumber();
    dispatch(setSearchParams({
      searchBy: 'car_number',
      searchValue: inputValue,
    }));
    setSearchValue(inputValue);
  };

  const getUniqueArrayValues = (arr) => Array.from(new Set(arr));

  const getOptionsForSelect = (name, cars) => {
    const options = [];
    cars.forEach((car) => {
      if (car[name]) {
        options.push(car[name].name);
      }
    });
    return getUniqueArrayValues(options);
  };

  const getSelectedValue = (e) => {
    const { options } = e.target;
    const { id } = options[options.selectedIndex];
    resetPageNumber();
    if (id === 'defaultValue') {
      dispatch(removeFilterParams(e.target.name));
    } else {
      dispatch(setFilterParams({
        filterBy: e.target.name,
        filterValue: e.target.value,
      }));
    }
  };

  const changeSortParams = (e) => {
    resetPageNumber();
    dispatch(setSortParams({
      sortBy: e.currentTarget.name,
      sortOrder: sortOrder === 'asc' ? 'desc' : 'asc',
    }));
  };

  return (
    <thead>
      <tr>
        <th>
          <Select
            name="Car Brand"
            onChange={getSelectedValue}
            options={getOptionsForSelect('car_brand', allCars) || []}
          />
        </th>
        <th className="cell cell_mobile-hidden">Car Model</th>
        <th>
          <InputGroup>
            <TextInput
              inputClass="custom-input"
              placeholder="Car Number"
              onChange={saveInputValue}
              value={searchValue}
            />
            <Button
              active={sortBy === 'car_number'}
              name="car_number"
              onClick={changeSortParams}
              variant="outline-light"
            >
              <ArrowIcon
                className={classNames('arrow-icon',
                  { 'arrow-icon_rotated': sortBy === 'car_number' && sortOrder === 'asc' })}
              />
            </Button>
          </InputGroup>
        </th>
        <th>
          <InputGroup>
            <Select
              name="Car Tenant"
              onChange={getSelectedValue}
              options={getOptionsForSelect('car_tenant', allCars) || []}
            />
            <Button
              active={sortBy === 'car_tenant'}
              name="car_tenant"
              onClick={changeSortParams}
              variant="outline-light"
            >
              <ArrowIcon
                className={classNames('arrow-icon',
                  { 'arrow-icon_rotated': sortBy === 'car_tenant' && sortOrder === 'asc' })}
              />
            </Button>
          </InputGroup>
        </th>
      </tr>
    </thead>
  );
};

export default TableHead;
