import fetch from '@/utils/fetch';

// 获取推荐歌曲
export function getRank(id) {
  return fetch({
    url: '/top/list',
    method: 'GET',
    params: {
      idx: id
    }
  });
}