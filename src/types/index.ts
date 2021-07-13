export type Method =
  | 'get'
  | 'GET'
  | 'post'
  | 'PSOT'
  | 'delete'
  | 'DELETE'
  | 'head'
  | 'HEAD'
  | 'options'
  | 'OPTIONS'
  | 'put'
  | 'PUT'
  | 'patch'
  | 'PATCH'
  | 'request'
  | 'REQUEST'

export interface AxiosRequestConfig {
  url: string
  method?: Method
  data?: any
  params?: any
}
