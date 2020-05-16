// libraries
import React from 'react';
import { string } from 'prop-types';
// components
import { FormControl } from 'react-bootstrap';


const TextInput = ({ inputClass, ...rest }) => (
  <FormControl
    className={inputClass}
    {...rest}
  />
);

TextInput.propTypes = {
  inputClass: string,
};

TextInput.defaultProps = {
  inputClass: '',
};

export default TextInput;
