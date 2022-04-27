import api from './api';

const login = (username, password) => {
  const data = { user: username, pwd: password };
  return api.post(api.url.login, data);
};

const signup = (username, password) => {
  const data = { user: username, pwd: password };
  return api.post(api.url.signup, data);
};
const list = () => api.get(api.url.user);

const userService = {
  login,
  signup,
  list,
};

export default userService;
