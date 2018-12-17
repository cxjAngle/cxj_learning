import { get } from '@/services/axiosHandler'
// 课程分类
export function getOnlineCourseClassify(params) {
    const defaultParams = { apiName: "ELE_COURSE_CLASSIFY_LIST", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }
//   线上课程列表
export function getOnlineCourseList(params) {
    const defaultParams = { apiName: "ELE_ONLINE_COURSE_LIST", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
  }
//   课程详情
export function getOnlineCourseDetail(params) {
    const defaultParams = { apiName: "ELE_COURSE_DETAILS", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}
// 章节列表
export function getSectionList(params) {
    const defaultParams = { apiName: "ELE_COURSE_SECTIONS_LIST", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}
// 讲师详情
export function getTeacherDetails(params) {
    const defaultParams = { apiName: "ELE_TEACHER_DETAILS", apiType: "course" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
        }, error => reject(error)).catch(error => { });
    })
}