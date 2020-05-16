// libraries
import React, { useCallback, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
// components
import TableRow from 'components/Cars/Table/TableRow';
import Loading from 'components/common/Loading';
import EmptyTableBody from './EmptyTableBody';
import saveModifiedCars from 'actions/modifiedCars';

const TableBody = () => {
  const dispatch = useDispatch();
  const { cars: allCars } = useSelector(({ cars }) => cars);
  const { modifiedCars: sdgsd } = useSelector(({ modifiedCars }) => modifiedCars);
  const { page, itemsByPage } = useSelector(({ pagination }) => pagination);
  const { isDownload } = useSelector(({ cars }) => cars);
  const { searchParams: { searchBy, searchValue } } = useSelector(({ cars }) => cars);
  const { filterParams } = useSelector(({ cars }) => cars);
  const { sortParams: { sortBy, sortOrder } } = useSelector(({ cars }) => cars);

  const searchByParams = useCallback((arr) => [...arr].filter((car) => car[searchBy]
    .toLowerCase()
    .indexOf(searchValue.toLowerCase()) !== -1), [searchBy, searchValue]);

  const sortByParams = useCallback((arr) => arr.sort((a, b) => {
    let valueA = a[sortBy];
    let valueB = b[sortBy];
    if (typeof a[sortBy] === 'object') {
      valueA = valueA.name.toLowerCase();
      valueB = valueB.name.toLowerCase();
    } else {
      valueA = valueA.toLowerCase();
      valueB = valueB.toLowerCase();
    }

    if (valueA > valueB) {
      return sortOrder === 'desc' ? 1 : -1;
    }
    if (valueA < valueB) {
      return sortOrder === 'desc' ? -1 : 1;
    }
    return 0;
  }), [sortBy, sortOrder]);

  const filterByParams = useCallback((arr, filterBy, filterValue) => [...arr]
    .filter((car) => {
      if (Array.isArray(filterValue)) {
        return filterValue.includes(car.id);
      }

      if (car[filterBy]) {
        return car[filterBy].name === filterValue;
      }

      return null;
    }), []);

  const getFilteredCars = useCallback((arr) => {
    let filteredCars = [...arr];
    filterParams.forEach(({ filterBy, filterValue }) => {
      filteredCars = filterByParams(filteredCars, filterBy, filterValue);
    });
    return filteredCars;
  }, [filterByParams, filterParams]);

  const getCarsOnPage = useCallback((arr) => arr
    .slice((page - 1) * itemsByPage, page * itemsByPage),
  [itemsByPage, page]);

  const getCarsByAllParams = useCallback(() => {
    let modifiedCars = [...allCars];

    if (searchValue) {
      modifiedCars = searchByParams(allCars);
    }

    if (filterParams.length) {
      modifiedCars = getFilteredCars(modifiedCars);
    }

    modifiedCars = sortByParams(modifiedCars);

    dispatch(saveModifiedCars(modifiedCars));

    return modifiedCars;
  }, [dispatch,
    allCars,
    filterParams.length,
    getFilteredCars,
    searchByParams,
    searchValue,
    sortByParams]);

  useEffect(() => {
    getCarsByAllParams();
  }, [getCarsByAllParams]);


  if (isDownload) {
    return (
      <EmptyTableBody>
        <Loading />
      </EmptyTableBody>
    );
  }

  if (!allCars.length) {
    return (
      <EmptyTableBody>
        List is empty
      </EmptyTableBody>
    );
  }

  return (
    <tbody>
      {getCarsOnPage(sdgsd).map((car) => (<TableRow key={car.id} rowData={car} />))}
    </tbody>
  );
};

export default TableBody;
