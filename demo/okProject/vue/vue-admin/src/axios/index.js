/**
 * Created by yanji on 2018/8/14.
 */
import { get, post } from './tools';
import * as config from './config';

// export const Login = (query) => axios.post(config.Login, query).then(function (response) {
//     return response.data;
// }).catch(function (error) {
//     console.log(error);
// });

// easy-mock数据交互

// 管理员权限获取
export const Login = (query) => post({url: config.Login, data: query});
export const Logout = () => post({url: config.Logout});
export const GetUserInfo = (query) => get({url: config.GetUserInfo,data: query})


