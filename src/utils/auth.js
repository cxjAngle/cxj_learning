import Cookies from 'js-cookie'

const tokenKey = 'userInfo'

const getUserInfo = function() {
  let userInfo = JSON.parse(Cookies.get(tokenKey) || '{}');
  return userInfo;
}

export function updateUserInfo(data) {
  let userInfo = JSON.parse(Cookies.get(tokenKey) || '{}');
  Object.assign(userInfo, data);
  Cookies.set(tokenKey, userInfo);
}

export function setToken(userInfo) {
  return Cookies.set(tokenKey, {token, userId})
}

export function setUserInfo(token, userId) {
  return Cookies.set(tokenKey, userInfo || {})
}

export function removeToken() {
  return Cookies.remove(tokenKey)
}

export function getLang() {
    const userInfo = getUserInfo();
    return userInfo.lang || 'zh-CN';
}

export function getToken() {
  const userInfo = JSON.parse(Cookies.get(tokenKey) || '{}');
  return userInfo.token || '';
}

export function getUserId() {
  const userInfo = JSON.parse(Cookies.get(tokenKey) || '{}');
  return userInfo.userId || '';
}
