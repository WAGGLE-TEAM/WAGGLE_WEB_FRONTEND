import axios from 'axios';
import { errorMessage } from '@config/status/error-message';

export default class ApiConfig {
    public static getRequestTo = () => {
        const instance = axios.create({
            baseURL: process.env.WEB_REQUEST_API,
            timeout: 30000,
            headers: {
                withCredentials: true,
            },
        });

        instance.interceptors.request.use(
            async (config) => {
                // TODO: redux 사용 변경
                const token = localStorage.getItem('refresh-token');

                if (token) {
                    config.headers.Authorization = `Bearer ${token}`;
                }

                return config;
            },
            (error) => {
                return Promise.reject(error);
            }
        );

        instance.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                const { config, response } = error;

                if (response.status === 401) {
                    await ApiConfig.requestTokenApi(response.data.message);

                    const accessToken = localStorage.getItem('access-token');
                    config.headers.Authorization = `Bearer ${accessToken}`;

                    return axios(config);
                }

                return Promise.reject(error);
            }
        );

        return instance;
    };

    private static requestTokenApi = async (message: string) => {
        const refreshTokenForRenew = localStorage.getItem('refresh-token');

        switch (message) {
            case errorMessage.ACCESS_TOKEN_INVALID: {
                const { accessToken } = (
                    await axios.post(`${process.env.WEB_REQUEST_API}/user/access-token`, {
                        Authorization: `Bearer ${refreshTokenForRenew}`,
                    })
                ).data;

                localStorage.setItem('accessToken', accessToken);
                break;
            }

            case errorMessage.REFRESH_TOKEN_INVALID: {
                const { refreshToken } = (
                    await axios.post(`${process.env.WEB_REQUEST_API}/user/refresh-token`, {
                        Authorization: `Bearer ${refreshTokenForRenew}`,
                    })
                ).data;

                localStorage.setItem('refreshToken', refreshToken);
                break;
            }

            default: {
                // TODO: 로그인 페이지로 전환
            }
        }
    };
}
