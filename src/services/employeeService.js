import api from './api';

const list = () => api.get(api.url.employee);

const employeeService = {
  list,
};

export default employeeService;
