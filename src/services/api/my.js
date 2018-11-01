import { get } from '@/services/axiosHandler'

export function getMyCourse(params) {
    const defaultParams = { apiName: "ELE_MY_COURSE", apiType: "course", firstIndex:0, pageSize:5 };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }