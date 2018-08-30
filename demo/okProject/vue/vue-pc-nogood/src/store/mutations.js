import * as type from './mutation-types.js'

export default {
    //将首页发送的请求数据添加到list各项中去，进行渲染页面
    [type.GET_NEWSLIST](state, payload) {
        for (var item in payload.data) {
            state.list[payload.kind].push(payload.data[item]);
        }
        state.downLoadMore = true;
    },
}
