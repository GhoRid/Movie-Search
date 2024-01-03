import axios from "axios";

export const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
});

// response를 받을 때 사용되는 인터셉터
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    return err;
  }
);

export const posterInstance = axios.create({
  baseURL: process.env.REACT_APP_POSTER_URL,
  timeout: 3000,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});

posterInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error?.response?.data.error.message);
  }
);
