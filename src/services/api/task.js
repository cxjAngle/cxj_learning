import { get } from '@/services/axiosHandler'

export function getTaskList(params) {
    const defaultParams = { apiName: "ELE_TRAIN_ACTIVITIES_LIST", apiType: "activity" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}
export function getExamList(params) {
    const defaultParams = { apiName: "ELE_EXAM_LIST", apiType: "exam" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}
export function getCourseList(params) {
    const defaultParams = { apiName: "ELE_COURSE_LIST", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}