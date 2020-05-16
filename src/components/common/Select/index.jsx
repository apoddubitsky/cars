// libraries
import React from 'react';
import { arrayOf, any, string } from 'prop-types';
// components
import { Form } from 'react-bootstrap';

const Select = ({ options, name, ...rest }) => (
  <Form.Control as="select" name={name.toLowerCase().replace(/ /g, '_')} custom {...rest}>
    <option id="defaultValue" defaultValue>{name}</option>
    {options.map((option) => {
      if (typeof option === 'object') {
        return <option key={option.id} id={option.id}>{option.name}</option>;
      }
      return <option key={option}>{option}</option>;
    })}
  </Form.Control>
);

Select.propTypes = {
  name: string.isRequired,
  options: arrayOf(any).isRequired,
};

export default Select;
