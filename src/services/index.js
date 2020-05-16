import makeApiRequest from 'sdk/api/apiRequestManager';

const getAllCars = () => makeApiRequest('api/cars/');

const getCarsHere = () => makeApiRequest('api/stat/here/');

const getCarBrands = () => makeApiRequest('api/cars/brands/');

const getCarModels = (carId) => makeApiRequest(`api/cars/brands/${carId}/`);

const getCarTenants = () => makeApiRequest('api/tenants/');

const createNewCar = (data) => makeApiRequest('api/cars/add/', 'POST', data);

export {
  getAllCars,
  getCarsHere,
  getCarBrands,
  getCarModels,
  getCarTenants,
  createNewCar,
};
