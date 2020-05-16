// libraries
import React from 'react';
import { Spinner } from 'react-bootstrap';

const Loading = () => (
  <div className="text-center pt-5 pb-5">
    <Spinner className="text-center" animation="border" variant="info" />
  </div>
);

export default Loading;
