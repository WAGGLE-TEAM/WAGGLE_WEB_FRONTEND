import axios, { AxiosInstance } from "axios";
import { errorMessage } from './../status/error-message';

class ApiConfig {
  readonly requestTo: AxiosInstance;
  private readonly requestUrl: string;

  constructor() {
    this.requestTo = this.getRequestTo();
    this.requestUrl = this.getRequestUrl();
  }

  private getRequestTo = () => {
    const instance = axios.create({
      baseURL: this.requestUrl,  
      timeout: 30000, 
      headers: {
        withCredentials: true,
      },
    });

    instance.interceptors.request.use(
      async (config) => {
        // TODO: redux 사용 변경
        const token = await this.getTokenByRequestUrl(config.url);
    
        if (token) {
          config.headers["Authorization"] = `Bearer ${token}`;
        }
        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    instance.interceptors.response.use(
      (response) => {
        return response;
      },
      async (error) => {
        const {
          config,
          response,
        } = error;

        if (response.status === 401) {
          await this.requestTokenApi(response.data.message);

          const accessToken = await localStorage.getItem('access-token');
          config.headers['Authorization'] = `Bearer ${accessToken}`;

          return axios(config);
      }
        
        return Promise.reject(error);
      },
    );

    return instance;
  }
  
  private requestTokenApi = async (message: string) => {
    const refreshTokenForRenew = localStorage.getItem('refresh-token');

    switch (message) {
        case errorMessage.ACCESS_TOKEN_INVALID:
            const { accessToken } = (await axios.post(`${this.requestUrl}/user/access-token`, {
                Authorization: `Bearer ${refreshTokenForRenew}`
            })).data;

            localStorage.setItem('accessToken', accessToken);
            break;

        case errorMessage.REFRESH_TOKEN_INVALID:
            const { refreshToken } = (await axios.post(`${this.requestUrl}/user/refresh-token`, {
                Authorization: `Bearer ${refreshTokenForRenew}`
            })).data;
            
            localStorage.setItem('refreshToken', refreshToken);
            break;

        case errorMessage.NO_SIGN_IN:
            // TODO: 로그인 페이지로 전환
            break;
    }
  }

  private getTokenByRequestUrl = async (url: string | undefined) => {
    if (url === '/user/refresh-token') {
        return localStorage.getItem('refresh-token');
    }
    
    return localStorage.getItem('access-token');
  }

  private getRequestUrl = () => {
    const baseUrl = process.env.WEB_REQUEST_API;

    if (!baseUrl) {
        throw errorMessage.NO_ENV_FILE;
    }

    return baseUrl;
}

}

export default new ApiConfig();
