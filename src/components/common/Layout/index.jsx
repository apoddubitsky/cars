// libraries
import React from 'react';
import { oneOfType, arrayOf, node } from 'prop-types';

const Layout = ({ children }) => (
  <div className="container-fluid container-lg mt-5 mb-2">
    {children}
  </div>
);

Layout.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default Layout;
