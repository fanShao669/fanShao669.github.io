/**
 * Created by yanji on 2018/8/14.
 * http通用工具函数
 */
import axios from 'axios';
import { Message } from 'element-ui';
/**
 * 公用get请求
 * @param url       接口地址
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
// 设置超时时间 10s

axios.defaults.timeout = 10000;
//添加请求拦截器
axios.interceptors.request.use(config => {
    //在发送请求之前做某事，比如说 设置loading动画显示
    return config
  }, error => {
    //请求错误时做些事
    return Promise.reject(error)
  })
  
  //添加响应拦截器
  axios.interceptors.response.use(response => {
    const data = response.data
      switch (data.code) {// 根据返回的code值来做不同的处理（和后端约定）
        case 200:
          // 这一步保证数据返回，如果没有return则会走接下来的代码，不是未登录就是报错
          return response
        case 400:
          // 这一步保证数据返回，如果没有return则会走接下来的代码，不是未登录就是报错
          return response
        default:
      }
      // 若不是正确的返回code，且已经登录，就抛出错误
    //   const err = new Error()
      let err = {};
      err.data = data
      err.response = response
      throw err
    }, (err) => { // 这里是返回状态码不为200时候的错误处理
      if (err && err.response) {
        switch (err.response.status) {
          case 406:
            window.location.replace ('#/login')
            err.Message = '未授权，请登录';
            break
          case 401:
            err.Message = `参数格式出错`;
            break
          case 402:
            err.Message = `请求出错`;
            break
          case 403:
            window.location.replace ('#/app/exception/403')
            err.Message = '拒绝访问';
            break
          case 404:
            err.Message = `请求地址出错`;
            break
          case 408:
            err.Message = '请求超时';
            break
          case 410:
            err.Message = '参数错误';
            break
          case 500:
            err.Message = '服务器内部错误';
            break
          case 501:
            err.Message = '服务未实现';
            break
          case 502:
            err.Message = '网关错误';
            break
          case 503:
            err.Message = '服务不可用';
            break
          case 504:
            err.Message = '网关超时';
            break
          case 505:
            err.Message = 'HTTP版本不受支持';
            break
          default:
        }
      }
      return Promise.reject(err)
})

export const get = ({url, data, msg = '接口异常', headers,time}) =>
    axios.get(url,{params:data}, headers).then(res => response(res)).catch(err => {
        errHandle(err, msg)
        return Promise.reject(err)
    });

/**
 * 公用post请求
 * @param url       接口地址
 * @param data      接口参数
 * @param msg       接口异常提示
 * @param headers   接口所需header配置
 */
export const post = ({url, data, msg = '接口异常', headers}) =>
    axios.post(url, data, headers).then(res => response(res)).catch(err => {
      errHandle(err, msg)
      return Promise.reject(err)
    });

/**
 * 公用状态码操作
 * @param res     请求结果
 */

const response = (res => {
    const result = res.data;
    return result;
})

const errHandle = (err,msg) =>{
  switch (err.data&&err.data.code) {
    case 401:
      err.Message = err.data.msg||`参数格式出错`;
      break
    case 402:
      err.Message = err.data.msg||`toast error msg`;
      break
    case 403:
      window.location.replace ('#/app/exception/403');
      err.Message = err.data.msg||'拒绝访问';
      break
    case 404:
      err.Message = err.data.msg||`请求地址出错`;
      break
    case 406:
      window.location.replace ('#/login');
      err.Message = err.data.msg||'未授权，请登录';
      break
    case 408:
      err.Message = err.data.msg||'请求超时';
      break
    case 410:
      err.Message = err.data.msg||'参数错误'
      break
    case 500:
      err.Message = err.data.msg||'服务器内部错误';
      break
    case 501:
      err.Message = err.data.msg||'服务未实现';
      break
    case 502:
      err.Message = err.data.msg||'网关错误';
      break
    case 503:
      err.Message = err.data.msg||'服务不可用'
      break
    case 504:
      err.Message = err.data.msg||'网关超时';
      break
    case 505:
      err.Message = err.data.msg||'HTTP版本不受支持';
      break
    default:
  }
  Message.error(err.Message||msg);
}