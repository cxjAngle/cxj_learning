import axios from 'axios'
import { Message } from 'element-ui'
import qs from 'qs'
import store from '@/store'
import { getToken } from '@/utils/auth'


let service = axios.create({
    baseURL: process.env.baseURL,
    timeout: 5000,
    //withCredentials: true, //加了这段就可以跨域了
    //headers: { 'Access-Control-Allow-Origin': '*' }, // `headers` 是即将被发送的自定义请求头
    //transformRequest: [function (data) { // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
        //return qs.stringify(data)
    //}]
});

// 添加请求拦截器
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    // config.headers['Accept'] = 'text/plain';
    // config.headers['Content-Type'] = 'application/x-www-form-urlencoded';
    /* if (store.getters.token) {
        config.headers['X-Token'] = getToken() // 让每个请求携带token-- ['X-Token']为自定义key 请根据实际情况自行修改
    } */
    const defaultParams = {
        version: process.env.version,
        platform: 'wechat'
    }
    if (store.getters.userId) { 
        defaultParams['userId'] = store.getters.userId;
    }
    if (store.getters.token) { 
        defaultParams['token'] = store.getters.token;
    }
    if (config.method === 'post') {
        config.data = qs.stringify(config.data);
    }
    if (config.method == 'post') {
        config.data = {
            ...defaultParams,
            ...config.data
        }
        
    } else if (config.method == 'get') {
        config.params = {
            ...defaultParams,
            ...config.params
        }
    }
    store.dispatch('ajaxPending', 1);
    return config;
}, function (error) {
    // 对请求错误做些什么
    store.dispatch('ajaxPending');
    return Promise.reject(error);
});

// 添加响应拦截器
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    //response.headers['access'] = '*';
    store.dispatch('ajaxPending');
    return response;
}, function (error) {
    //  对响应错误做点什么
    store.dispatch('ajaxPending');
    Message({
        message: error.message,
        type: 'error',
        duration: 5 * 1000
    })
    return Promise.reject(error);
});

export default service;








