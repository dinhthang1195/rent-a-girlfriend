import axios from 'axios';
import store from '../store/index';

const url = {
  baseUrl: 'https://rental-gf.herokuapp.com',
  login: '/auth',
  signup: '/register',
  employee: '/employees',
  user: '/users',
};

const instance = axios.create({
  baseURL: url.baseUrl,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

instance.interceptors.request.use((request) => {
  const state = store.getState();
  if (state.auth.token) {
    request.headers.Authorization = `Bearer ${state.auth.token}`;
  }

  return request;
});

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (!error.response) {
      window.location.href = '/no-internet';
    } else {
      console.log(error.response);
      switch (error.response.status) {
        case 401:
          if (!window.location.href.endsWith('/login')) {
            window.location.href = '/login';
          }
          break;
        case 403:
          window.location.href = '/login';
          break;
        default:
          break;
      }
      return Promise.reject(error);
    }
  }
);

const api = {
  url,
  instance,
  get: instance.get,
  post: instance.post,
  put: instance.put,
  delete: instance.delete,
  patch: instance.patch,
};

export default api;
