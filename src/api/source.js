import fetch from '@/utils/fetch';

// 搜索接口
export function searchMusic(keywords) {
  return fetch({
    url: '/search',
    method: 'GET',
    params: {
      keywords: keywords
    }
  });
}

// 获取推荐歌曲
export function getRecommendSongList(keywords) {
  return fetch({
    url: '/personalized/newsong',
    method: 'GET',
    params: {
      // keywords: keywords
    }
  });
}

// 获取推荐歌单
export function getRecommendPlaylist(keywords) {
  return fetch({
    url: '/personalized',
    method: 'GET',
    params: {
      // keywords: keywords
    }
  });
}

/* 登录获取sessionId */
export function login(mobile, password) {
  return fetch({
    url: '/user/',
    method: 'post',
    data: {
      method: 'login',
      params: {
        mobile,
        password
      }
    }
  });
}

/* sessionId获取用户信息 */
export function getInfo(sessionId) {
  return fetch({
    url: '/user/',
    method: 'post',
    data: {
      method: 'queryUserDetail',
      params: {
        sessionId
      }
    }
  });
}

/* 退出系统 */
export function logout(params = {}) {
  return fetch({
    url: '/user/',
    method: 'post',
    data: {
      method: 'logout',
      params
    }
  });
}