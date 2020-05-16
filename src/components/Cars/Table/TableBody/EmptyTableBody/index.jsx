// libraries
import React from 'react';
import { arrayOf, node, oneOfType } from 'prop-types';

const EmptyTableBody = ({ children }) => (
  <tbody>
    <tr>
      <td colSpan="4">
        {children}
      </td>
    </tr>
  </tbody>
);

EmptyTableBody.propTypes = {
  children: oneOfType([arrayOf(node), node]).isRequired,
};

export default EmptyTableBody;
