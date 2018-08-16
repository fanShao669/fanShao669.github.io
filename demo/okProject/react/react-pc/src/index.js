import React from 'react';
import ReactDOM from 'react-dom';
import './style/bootstrap.css';
import './style/lib/animate.css';
import './iconfont/iconfont.css';
import './iconfont/iconfont.js';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger'
import { createStore, applyMiddleware } from 'redux';
import reducer from './redux/reducer';
import { AppContainer } from 'react-hot-loader';
import Page from './Page';
import 'core-js'; // 兼容IE处理
// redux 注入操作
const middleware = [thunk, logger];
const store = createStore(reducer, applyMiddleware(...middleware));
console.log(store.getState());

const render = Component => {   // 增加react-hot-loader保持状态刷新操作，如果不需要可去掉并把下面注释的打开
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <Component store={store} />
            </Provider>
        </AppContainer>
        ,
        document.getElementById('root')
    );
};

render(Page);

// Webpack Hot Module Replacement API
if (module.hot) {
    // 隐藏You cannot change <Router routes>; it will be ignored 错误提示
    // react-hot-loader 使用在react-router 3.x上引起的提示，react-router 4.x不存在
    // 详情可参照https://github.com/gaearon/react-hot-loader/issues/298
    const orgError = console.error; // eslint-disable-line no-console
    console.error = (...args) => { // eslint-disable-line no-console
        if (args && args.length === 1 && typeof args[0] === 'string' && args[0].indexOf('You cannot change <Router routes>;') > -1) {
            // React route changed
        } else {
            // Log the error as normally
            orgError.apply(console, args);
        }
    };
    module.hot.accept('./Page', () => {
        render(Page);
    })
}
//registerServiceWorker();