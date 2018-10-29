import axios from '@/services'

export function get(params) {
    return new Promise((resolve, reject) => {
        axios({
            url: process.env.apiPaths.getMethod,
            method: "get",
            params: Object.assign({}, params)
        }).then((res) => {
            resolve(res.data);
        }).catch((err) => {
            reject(err);
        });
    })
}

export function post(params) {
    return new Promise((resolve, reject) => {
        axios({
            url: process.env.apiPaths.postMethod,
            method: "post",
            params: Object.assign({}, params)
        }).then((res) => {
            resolve(res.data);
        }).catch((error) => {
            reject(error);
        });
    })
}