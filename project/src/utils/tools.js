/*
 * @Author: jiaxinying
 * @Date: 2021-02-02 16:21:08
 * @Last Modified by: jiaxinying
 * @Last Modified time: 2021-02-02 16:23:26
 * * 工具类
 */
/**
 * 节流
 * @param {*} func 
 * @param {*} delay 
 * @returns
 */
export const debounce = (func, delay = 200) => {
  let timer = null
  return function (...args) {
    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args)
    }, delay);
  }
}
