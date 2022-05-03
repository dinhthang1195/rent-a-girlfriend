import api from '../api';

const list = () => api.get(api.url.fe.employee);
const get = (id) => api.get(`${api.url.fe.employee}/${id}`);

const employeeService = {
  list,
  get,
};

export default employeeService;
