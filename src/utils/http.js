import axios from 'axios';

import {API_TIMEOUT} from "@/utils/env.js";

// import {Message} from 'element-ui';

const http = axios.create(
    {
        timeout: API_TIMEOUT,
    }
)

http.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            // console.log(error)
        }
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

http.interceptors.request.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            // console.log(error)
        }
        // 对响应错误做点什么
        return Promise.reject(error);
    }
);

export default http
