import api from '../api';

const list = () => api.get(api.url.fe.employee);
const get = (id) => api.get(`${api.url.fe.employee}/${id}`);
const update = (data) => api.put(api.url.employee, data);

const employeeService = {
  list,
  get,
  update,
};

export default employeeService;
