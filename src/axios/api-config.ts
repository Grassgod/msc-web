import axios from 'axios';

const instance = axios.create({
    timeout: 10000,
});

// Request interceptors
instance.interceptors.request.use()

/**
 * get request
 * @param {String} url [request of url]
 * @param {Object} params [params of request]
 * @param {Object} config [config of request]
 */
 export const get = (url: string, params?: Object, config = {}) => {
    return new Promise((resolve, reject) => {
      instance({
        method: 'get',
        url,
        params,
        ...config
      })
        .then(res => {
          resolve(res.data)
        })
        .catch(err => {
          reject(err.data)
        })
    })
  }

  /**
 ** post request
 * @param {String} url [request of url]
 * @param {Object} data [data of request]
 * @param {Object} config [config of request]
 */
export const post = (url: string, params: any, config = {}) => {
  return new Promise((resolve, reject) => {
    instance({
      method: 'post',
      url,
      params,
      ...config
    })
      .then(res => {
        resolve(res.data)
      })
      .catch(err => {
        reject(err.data)
      })
  })
}
