/**
 * Created by yanji on 2018/8/13.
 */
import './utils/antm-viewport.min';
import './assets/css/reset.css';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './views/Home/Home';
// import createBrowserHistory from 'history/createBrowserHistory';
import configureStore from '../src/redux/store';
// const history = createBrowserHistory();
const store = configureStore();
render(
    <Provider store={store}>
         {/* <Router history={history}>
            <Route path="/" component={Home}></Route>
        </Router> */}
        <HashRouter>
            <Route path="/" component={Home}></Route>
        </HashRouter>
    </Provider>,
    document.getElementById("app")
);