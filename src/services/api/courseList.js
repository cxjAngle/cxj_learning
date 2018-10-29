import { get } from '@/services/axiosHandler'

export function getOnlineCourseClassify(params) {
    const defaultParams = { apiName: "ELE_COURSE_CLASSIFY_LIST", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }
export function getOnlineCourseList(params) {
    const defaultParams = { apiName: "ELE_ONLINE_COURSE_LIST", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }