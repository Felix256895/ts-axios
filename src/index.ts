import { AxiosRequestConfig } from './types'
import { buildRUL } from './helpers/url'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildRUL(url, params)
}

export default axios
