import axios from "axios";


const instance = axios.create({
    baseURL: process.env.WEB_REQUEST_API,  
    timeout: 30000, 
    headers: {
      withCredentials: true,
    },
  });

  instance.interceptors.request.use(
    function (config) {
      const accessToken = localStorage.getItem('accessToken');
  
      if (accessToken) {
        config.headers["Authorization"] = `Bearer ${accessToken}`;
      }
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  instance.interceptors.request.use(
    (response) => {
      return response;
    },
    async (error) => {
      const {
        config,
        response: { status },
      } = error;

      if (status === 401) {

      }

      if (status === 403) {
        
      }

      return Promise.reject(error);
    },
  );


