import api from './api';

const list = () => api.get(api.url.employee);
const get = (id) => api.get(`${api.url.employee}/${id}`);
const add = (data) => api.post(api.url.employee, data);
const update = (data) => api.put(api.url.employee, data);
const remove = (id) => api.delete(api.url.employee, id);

const employeeService = {
  list,
  get,
  add,
  update,
  remove,
};



export default employeeService;
