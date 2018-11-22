import { get } from '@/services/axiosHandler'

export function getTaskList(params) {
    const defaultParams = { apiName: "ELE_TRAIN_ACTIVITIES_LIST", apiType: "activity" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }