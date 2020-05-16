// libraries
import React from 'react';
// components
import Table from 'components/Cars/Table';
import CarsHere from 'components/Cars/CarsHere';
import DataContainer from 'components/Cars/DataContainer';
import AddCar from 'components/Cars/AddCar';
import Layout from 'components/common/Layout';
// services
import { getAllCars } from 'services';
// actions
import { saveAllCars } from 'actions/cars';
import Pagination from 'components/Cars/Table/Pagination';

const Cars = () => (
  <Layout>
    <h1 className="text-center">Parking</h1>
    <DataContainer downloadingFlag action={saveAllCars} apiRequest={getAllCars}>
      <AddCar />
      <CarsHere />
      <Table />
      <Pagination />
    </DataContainer>
  </Layout>
);

export default Cars;
