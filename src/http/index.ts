import { BASE_URL, TIME_OUT } from './request/config'
import MyRequest from './request'

export const myRequest = new MyRequest({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestSuccessFn: (config) => {
      return config
    },
    requestFailureFn: (err) => {
      return err
    },
    responseSuccessFn: (res) => {
      return res
    },
    responseFailureFn: (err) => {
      return err
    }
  }
})