import fetch from '@/utils/fetch';

// 获取歌手列表
export function getSingers(limit) {
  return fetch({
    url: '/top/artists',
    method: 'GET',
    params: {
      limit: limit
    }
  });
}