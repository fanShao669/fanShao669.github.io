/**
 * Created by yanji on 2018/8/16.
 */
import { get,post } from './tools';
import * as config from './config';

// 获取用户信息
export const getUserInfo = () => get({url: config.GETUSERINFO})
