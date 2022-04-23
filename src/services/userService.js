import api from './api';

const login = (username, password) => {
  const data = { user: username, pwd: password };
  return api.post(api.url.login, data);
};

const signup = (username, password) => {
  const data = { user: username, pwd: password };
  return api.post(api.url.signup, data);
};

const userService = {
  login,
  signup,
};

export default userService;
