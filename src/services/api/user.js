
import { get } from '@/services/axiosHandler'

export function getMessageList(params) {
    const defaultParams = { apiName: "ELE_MY_MESSAGES_LIST", apiType: "message" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }