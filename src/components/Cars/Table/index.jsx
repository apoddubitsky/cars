// libraries
import React from 'react';
// components
import TableHead from 'components/Cars/Table/TableHead';
import { Table as BootstrapTable } from 'react-bootstrap';
import TableBody from 'components/Cars/Table/TableBody';

const Table = () => (
  <BootstrapTable striped bordered hover size="sm">
    <TableHead />
    <TableBody />
  </BootstrapTable>
);

export default Table;
