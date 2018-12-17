import axios from '@/services'
import { get } from '@/services/axiosHandler'


export function getRollingPicture(params) {
  const defaultParams = { apiName: "ELE_ROLLING_PICTURE", apiType: "myInfo" };
  return new Promise((resolve, reject) => {
      get(Object.assign(defaultParams, params)).then(res => {
          res.status == 'Y' ? resolve(res.results) : reject(res)
      }, error => reject(error)).catch(error => { });
  })
}

export function getCourseClassifyList(params) {
  const defaultParams = { apiName: "ELE_COURSE_CLASSIFY_LIST", apiType: "course" };
  return new Promise((resolve, reject) => {
      get(Object.assign(defaultParams, params)).then(res => {
          res.status == 'Y' ? resolve(res.results) : reject(res)
      }, error => reject(error)).catch(error => { });
  })
}

export function getHeadline(params) {
  const defaultParams = { apiName: "ELE_LEARNING_HEADLINES", apiType: "course" };
  return new Promise((resolve, reject) => {
      get(Object.assign(defaultParams, params)).then(res => {
          res.status == 'Y' ? resolve(res.results) : reject(res)
      }, error => reject(error)).catch(error => { });
  })
}

export function getNewCourse(params) {
  const defaultParams = { apiName: "ELE_NEW_COURSE_LIST", apiType: "course", firstIndex:0, pageSize:9 };
  return new Promise((resolve, reject) => {
      get(Object.assign(defaultParams, params)).then(res => {
          res.status == 'Y' ? resolve(res.results) : reject(res)
      }, error => reject(error)).catch(error => { });
  })
}

export function getWellCourse(params) {
  const defaultParams = { apiName: "ELE_ONLINE_COURSE_LIST", apiType: "course", listOrder:'VIEWERS', orderBy:'desc',  firstIndex:0, pageSize:5 };
  return new Promise((resolve, reject) => {
      get(Object.assign(defaultParams, params)).then(res => {
          res.status == 'Y' ? resolve(res.results) : reject(res)
      }, error => reject(error)).catch(error => { });
  })
}


export function queryNewMessage(params) {
  const defaultParams = { apiName: "NEW_MESSAGE", apiType: "message" };
  return new Promise((resolve, reject) => {
      get(Object.assign(defaultParams, params)).then(res => {
          res.status == 'Y' ? resolve(res.results) : reject(res)
      }, error => reject(error)).catch(error => { });
  })
}

export function getTopGoldList(params) {
    const defaultParams = { apiName: "ELE_TOP_GOLD_LIST", apiType: "commodity" };
    return new Promise((resolve, reject) => {
        get(Object.assign(defaultParams, params)).then(res => {
            res.status == 'Y' ? resolve(res.results) : reject(res)
            console.log(res)
        }, error => reject(error)).catch(error => { });
    })
}