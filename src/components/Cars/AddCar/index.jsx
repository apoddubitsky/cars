// libraries
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// components
import Select from 'components/common/Select';
import { Form, Button } from 'react-bootstrap';
import TextInput from 'components/common/TextInput';
import Loading from 'components/common/Loading';
// services
import {
  getCarBrands, getCarModels, getCarTenants, createNewCar,
} from 'services';
// actions
import { addCar } from 'actions/cars';
// hooks
import useApiData from 'hooks/apiData';

const AddCar = () => {
  const dispatch = useDispatch();
  const carBrands = useApiData(getCarBrands, true);
  const [newCar, setNewCar] = useState({ });
  const {
    car_brand: { id: brandId, name: brandName } = {},
    car_model: { id: modelId, name: modelName } = {},
    car_tenant: { id: tenantId, name: tenantName } = {},
  } = newCar;
  const carModels = useApiData(getCarModels, brandId);
  const carTenants = useApiData(getCarTenants, true);
  const [carNumber, setCarNumber] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSubmitting, setSubmitting] = useState(false);

  const handleSubmit = async () => {
    setSubmitting(true);
    try {
      const newData = await createNewCar({
        car_number: carNumber,
        car_brand: brandId,
        car_model: modelId,
        car_tenant: tenantId,
      });
      setSuccessMessage('This car was successfully added');
      dispatch(addCar({
        id: newData.id,
        car_brand: { id: +brandId, name: brandName },
        car_model: { id: +modelId, name: modelName },
        car_tenant: { id: +tenantId, name: tenantName },
        car_number: carNumber,
      }));
    } catch (e) {
      const error = await e.json();
      setErrorMessage(error.car_number);
    } finally {
      setSubmitting(false);
    }
  };

  const removeMessages = () => {
    if (successMessage) {
      setSuccessMessage('');
    }
    if (errorMessage) {
      setErrorMessage('');
    }
  };

  const getSelectedItem = (e) => {
    removeMessages();
    const { options, name: selectName } = e.target || {};
    const { id, value: name } = options[options.selectedIndex] || {};
    setNewCar((prevState) => ({ ...prevState, [selectName]: { id, name } }));
  };

  const getInputValue = ({ target: { value } }) => {
    removeMessages();
    setCarNumber(value);
  };

  if (!carBrands) {
    return <Loading />;
  }

  return (
    <Form
      className="mx-auto d-flex flex-column col-sm-7 col-xl-5"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <Select
        className="mt-1 mb-1"
        disabled={!carBrands.length}
        options={carBrands}
        name="Car Brand"
        onChange={getSelectedItem}
      />
      <Select
        className="mt-1 mb-1"
        disabled={!carModels.length}
        options={carModels}
        name="Car Model"
        onChange={getSelectedItem}
      />
      <TextInput
        value={carNumber}
        inputClass="mt-1 mb-1 custom-input"
        placeholder="Car Number"
        onChange={getInputValue}
      />
      <Select
        className="mt-1 mb-2"
        disabled={!carTenants.length}
        options={carTenants}
        name="Car Tenant"
        onChange={getSelectedItem}
      />
      {successMessage && <div className="text-success">{successMessage}</div>}
      {errorMessage && <div className="text-danger">{errorMessage}</div>}
      <Button
        disabled={!(brandId && modelId && tenantId && carNumber) || isSubmitting}
        type="submit"
      >
        Add Car
      </Button>
    </Form>
  );
};

export default AddCar;
