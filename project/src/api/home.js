// getHomeRecommend
import request from '../utils/request'
export function getHomeRecommend (data) {
  return request({
    url: '/taobao',
    method: 'get',
    params: data
  })
}
