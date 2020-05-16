import React from 'react';
import { number, shape, string } from 'prop-types';

const TableRow = ({
  rowData: {
    car_brand: carBrand = {},
    car_model: carModel = {},
    car_number: curNumber,
    car_tenant: carTenant = {},
  } = {},
}) => (
  <tr>
    <th>{carBrand !== null ? carBrand.name : ''}</th>
    <th className="cell_mobile-hidden">{carModel !== null ? carModel.name : ''}</th>
    <th>{curNumber}</th>
    <th>{carTenant !== null ? carTenant.name : ''}</th>
  </tr>
);

TableRow.propTypes = {
  rowData: shape({
    car_brand: shape({ id: number, name: string }),
    car_model: shape({ id: number, name: string }),
    car_number: string,
    car_tenant: shape({ id: number, name: string }),
    id: number,
  }).isRequired,
};

export default TableRow;
