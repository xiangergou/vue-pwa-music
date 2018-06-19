import fetch from '@/utils/fetch';

// 获取歌手列表
export function getSinger(id) {
  return fetch({
    url: '/top/list',
    method: 'GET',
    params: {
      idx: id
    }
  });
}