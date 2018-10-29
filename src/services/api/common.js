import axios from '@/services'
import { get } from '@/services/axiosHandler'

export function queryUserByToken(params) {
    const defaultParams = { apiName: "QUERY_USER_BY_TOKEN", apiType: "global" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}

export function queryUserInfo(params) {
    const defaultParams = { apiName: "ELE_USER_INFO", apiType: "myInfo" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}
