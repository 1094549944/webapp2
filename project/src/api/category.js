import request from '../utils/request'
/**
 * 测试获取信息
 * @param {*} data 
 * @returns
 */
export function getSlider (data) {
  return request({
    url: '/api/home/slider',
    method: 'get',
    data
  })
}


export function getCategoryContent (id) {
  return request({
    url: `/api/category/content/${id}`,
    method: 'get',
    data: id
  })
}