import { AxiosRequestConfig, AxiosStatic } from './types'
import Axios from './core/Axios'
import { extend } from './helpers/util'
import defaults from './defaults'
import mergeConfig from './core/mergeConfig'
import CancelToken from './cancel/cancelToekn'
import Cancel, { isCancel } from './cancel/Cancel'

function createInstace(config: AxiosRequestConfig): AxiosStatic {
  const context = new Axios(config)
  const instance = Axios.prototype.request.bind(context)
  extend(instance, context)

  return instance as AxiosStatic
}

const axios = createInstace(defaults)

axios.create = function create(config: AxiosRequestConfig): AxiosStatic {
  return createInstace(mergeConfig(defaults, config))
}

axios.CancelToken = CancelToken
axios.Cancel = Cancel
axios.isCancel = isCancel

axios.all = function all(promises) {
  return Promise.all(promises)
}

axios.spread = function spread(callbak) {
  return function(arr) {
    return callbak.apply(null, arr)
  }
}

axios.Axios = Axios

export default axios
